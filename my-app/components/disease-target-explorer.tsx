"use client";

import { useMemo, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ViralMoleculeHit = {
  name: string | null;
  source: string | null;
  taxid: string | null;
  uniprotIds: string | null;
  publicationIds: string | null;
  sourceDatabase: string | null;
  confidenceScore: string | null;
};

export type EnhancedTarget = {
  targetId: string;
  symbol: string;
  approvedName: string;
  openTargetsRank: number;
  associationScore: number;
  viralInformedRank: number;
  rankGain: number;
  viralInformedScore: number;
  viralMoleculeHitCount: number;
  viralSourceCount: number;
  supportingInteractionCount: number;
  viralMoleculeHits: ViralMoleculeHit[];
};

type TargetExplorerMode = "ranked" | "viral" | "reranked";

export type TargetExplorerData = {
  topTargets: EnhancedTarget[];
  viralRerankedTargets?: EnhancedTarget[];
  highestViralHitTargets?: EnhancedTarget[];
  targetCount: number;
  targetsWithViralHits: number;
  viralMoleculeHitCount: number;
  description?: string;
};

type TargetExplorerPanelProps = {
  explorer: TargetExplorerData;
};

export function TargetExplorerPanel({
  explorer,
}: TargetExplorerPanelProps) {
  const [mode, setMode] = useState<TargetExplorerMode>("ranked");
  const rankedTargets: EnhancedTarget[] = explorer.topTargets ?? [];
  const viralTargets =
    explorer.highestViralHitTargets?.length
      ? explorer.highestViralHitTargets
      : rankedTargets.filter((target) => target.viralMoleculeHitCount > 0);
  const rerankedTargets =
    explorer.viralRerankedTargets?.length
      ? explorer.viralRerankedTargets
      : rankedTargets
          .slice()
          .sort((a, b) => a.viralInformedRank - b.viralInformedRank);
  const visibleTargets: EnhancedTarget[] =
    mode === "viral" ? viralTargets : mode === "reranked" ? rerankedTargets : rankedTargets;
  const [selectedTargetId, setSelectedTargetId] = useState(
    visibleTargets[0]?.targetId ?? rankedTargets[0]?.targetId ?? ""
  );
  const selectedTarget =
    visibleTargets.find((target) => target.targetId === selectedTargetId) ??
    rankedTargets.find((target) => target.targetId === selectedTargetId) ??
    visibleTargets[0] ??
    rankedTargets[0];
  const topJumpers = useMemo(
    () =>
      rerankedTargets
        .filter((target) => target.rankGain > 0)
        .slice()
        .sort((a, b) => b.rankGain - a.rankGain)
        .slice(0, 5),
    [rerankedTargets]
  );

  return (
    <div className="relative mt-8 overflow-hidden border-[1.5px] border-[#3A2516] bg-[#F1E6CB] text-[#3A2516] shadow-[6px_6px_0_rgba(58,37,22,0.18)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 z-0 flex w-[54%] rotate-[-18deg] flex-col gap-1 opacity-90"
      >
        <span className="h-3 bg-[#E54489]" />
        <span className="h-3 bg-[#F09131]" />
        <span className="h-3 bg-[#F0BC2A]" />
        <span className="h-3 bg-[#3D9F47]" />
        <span className="h-3 bg-[#3F8BC4]" />
      </div>

      <div className="relative z-10 border-b-[1.5px] border-[#3A2516] px-5 py-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="min-w-0">
            <div className="text-[10px] font-black uppercase tracking-[0.22em]">
              Target Index
            </div>
            <div className="mt-1 flex flex-wrap gap-2">
              <SpecBox label="Open targets" active={mode === "ranked"} />
              <SpecBox label="Viral hits" active={mode === "viral"} />
              <SpecBox label="Rerank" active={mode === "reranked"} />
            </div>
          </div>
          <div className="flex gap-5">
            <ExplorerStat label="Targets" value={explorer.targetCount} />
            <ExplorerStat label="Informed" value={explorer.targetsWithViralHits} />
            <ExplorerStat label="Hits" value={explorer.viralMoleculeHitCount} />
          </div>
        </div>
      </div>

      <div className="relative z-10 overflow-hidden">
        <div
          className="grid grid-cols-3 overflow-hidden border-b-[1.5px] border-[#3A2516] bg-[#E5D6B0]/70 lg:flex lg:overflow-x-auto"
          role="tablist"
        >
          <ExplorerModeButton active={mode === "ranked"} onClick={() => setMode("ranked")}>
            <span className="lg:hidden">Open Targets</span>
            <span className="hidden lg:inline">Open Targets Rank</span>
          </ExplorerModeButton>
          <ExplorerModeButton active={mode === "viral"} onClick={() => setMode("viral")}>
            <span className="lg:hidden">Viral Density</span>
            <span className="hidden lg:inline">Viral Hit Density</span>
          </ExplorerModeButton>
          <ExplorerModeButton active={mode === "reranked"} onClick={() => setMode("reranked")}>
            <span className="lg:hidden">Informed</span>
            <span className="hidden lg:inline">Viral-Informed Priority</span>
          </ExplorerModeButton>
        </div>

        <div className="grid min-h-[560px] lg:grid-cols-[320px_1fr]">
          <div
            className="border-b-[1.5px] border-[#3A2516] bg-[#F1E6CB]/95 lg:max-h-[560px] lg:overflow-y-auto lg:border-b-0 lg:border-r-[1.5px]"
            aria-label="Target list"
          >
            <div className="sticky top-0 z-10 grid grid-cols-[40px_1fr_80px] border-b-[1.5px] border-[#3A2516] bg-[#E5D6B0] px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em]">
              <div>Rk</div>
              <div>Symbol</div>
              <div className="text-right">Hits</div>
            </div>
            {visibleTargets.slice(0, 100).map((target) => {
              const isSelected = selectedTarget?.targetId === target.targetId;

              return (
                <div key={`${mode}-${target.targetId}`}>
                  <button
                    aria-expanded={isSelected}
                    className={cn(
                      "grid w-full grid-cols-[40px_1fr_80px] items-center border-b border-[#3A2516]/20 px-4 py-3 text-left transition hover:bg-[#E5D6B0]/70",
                      isSelected && "bg-[#3A2516] text-[#F1E6CB] hover:bg-[#3A2516]"
                    )}
                    onClick={() => setSelectedTargetId(target.targetId)}
                    type="button"
                  >
                    <span className="numeric text-[11px] font-bold opacity-70">
                      {targetListRankLabel(target, mode)}
                    </span>
                    <span className="truncate text-[18px] font-black uppercase leading-none tracking-[-0.01em] [font-family:'Big_Shoulders_Display',Impact,sans-serif]">
                      {target.symbol}
                    </span>
                    <div className="flex justify-end">
                      <HitCountBadge count={target.viralMoleculeHitCount} />
                    </div>
                  </button>
                  {isSelected ? (
                    <div className="border-b-[1.5px] border-[#3A2516] bg-[#F1E6CB] p-4 lg:hidden">
                      <TargetHitDetail target={target} />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="hidden max-h-[560px] min-w-0 overflow-y-auto bg-[#F1E6CB]/90 p-8 lg:block">
            {selectedTarget ? (
              <TargetHitDetail target={selectedTarget} />
            ) : (
              <div className="flex h-full flex-col items-center justify-center border-[1.5px] border-dashed border-[#3A2516] p-12 text-center">
                <p className="text-sm font-bold">Select a target to view interaction evidence</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {topJumpers.length > 0 ? (
        <div className="relative z-10 border-t-[1.5px] border-[#3A2516] bg-[#E5D6B0]/70 px-5 py-4">
          <SectionTitle tone="default">Significant Priority Jumps</SectionTitle>
          <div className="mt-3 flex flex-wrap gap-2">
            {topJumpers.map((target) => (
              <button
                key={`jumper-${target.targetId}`}
                className="group flex items-center gap-2 border-[1.5px] border-[#3A2516] bg-[#F1E6CB] px-3 py-1.5 text-[11px] font-black uppercase transition hover:bg-[#F0BC2A]/50"
                onClick={() => {
                  setMode("reranked");
                  setSelectedTargetId(target.targetId);
                }}
                type="button"
              >
                <span>{target.symbol}</span>
                <span className="numeric bg-[#3D9F47] px-1 text-[#F1E6CB]">+{target.rankGain}</span>
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ExplorerModeButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      aria-pressed={active}
      className={cn(
        "min-w-0 border-b-[4px] px-1.5 py-2 text-center text-[9px] font-black uppercase tracking-[0.06em] transition lg:shrink-0 lg:px-4 lg:py-3 lg:text-[10px] lg:tracking-[0.14em]",
        active
          ? "border-[#E5392A] text-[#3A2516]"
          : "border-transparent text-[#3A2516]/55 hover:text-[#3A2516]"
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

function ExplorerStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-right">
      <div className="text-[9px] font-black uppercase tracking-[0.14em] opacity-70">
        {label}
      </div>
      <div className="numeric mt-1 text-2xl font-black leading-none tabular-nums [font-family:'JetBrains_Mono',ui-monospace,monospace]">
        {value.toLocaleString()}
      </div>
    </div>
  );
}

function SpecBox({ active, label }: { active: boolean; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.12em]">
      <span
        className={cn(
          "grid size-3 place-items-center border-[1.5px] border-[#3A2516]",
          active && "bg-[#3A2516] text-[#F1E6CB]"
        )}
      >
        {active ? "×" : null}
      </span>
      {label}
    </span>
  );
}

function HitCountBadge({ count }: { count: number }) {
  if (count === 0) return <span className="text-[11px] font-black opacity-35">-</span>;

  return (
    <span className="border border-current px-2 py-0.5 text-[10px] font-black">
      {count}
    </span>
  );
}

function targetListRankLabel(target: EnhancedTarget, mode: TargetExplorerMode) {
  if (mode === "viral") return target.viralMoleculeHitCount;
  if (mode === "reranked") return target.viralInformedRank;
  return target.openTargetsRank;
}

function TargetHitDetail({ target }: { target: EnhancedTarget }) {
  const moleculeHits = target.viralMoleculeHits;

  return (
    <div className="min-w-0">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b-[1.5px] border-[#3A2516] pb-5 sm:gap-6 sm:pb-6">
        <div className="min-w-0">
          <div className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-3">
            <h4 className="truncate text-4xl font-black uppercase leading-[0.85] tracking-[-0.02em] [font-family:'Big_Shoulders_Display',Impact,sans-serif] sm:text-6xl">
              {target.symbol}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              <DataTag tone="strong">OT RANK {target.openTargetsRank}</DataTag>
              {target.rankGain > 0 && (
                <span className="border-[1.5px] border-[#3A2516] bg-[#3D9F47] px-2 py-0.5 text-[10px] font-black uppercase text-[#F1E6CB]">
                  +{target.rankGain} PRIORITY JUMP
                </span>
              )}
            </div>
          </div>
          <p className="mt-2 max-w-2xl text-sm font-semibold leading-5 opacity-75">
            {target.approvedName}
          </p>
        </div>
        <div className="flex gap-5 sm:gap-8">
          <DetailScore label="Association" value={target.associationScore * 7} tone="amber" />
          <DetailScore label="Informed Rank" value={`#${target.viralInformedRank}`} />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <TargetMetric color="red" label="Pathogen Molecules" value={target.viralMoleculeHitCount} />
        <TargetMetric color="orange" label="Source Organisms" value={target.viralSourceCount} />
        <TargetMetric color="green" label="Interaction Records" value={target.supportingInteractionCount} />
        <TargetMetric color="blue" label="Viral Priority Score" value={target.viralInformedScore.toFixed(3)} />
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <SectionTitle tone="default">Interaction Evidence Matrix</SectionTitle>
          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.1em] opacity-70">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-slate-500" /> High Score
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-slate-200" /> Low Score
            </span>
          </div>
        </div>

        {moleculeHits.length > 0 ? (
          <div className="border-[1.5px] border-[#3A2516]">
            <div className="hidden grid-cols-[1.5fr_1fr_1fr] border-b-[1.5px] border-[#3A2516] bg-[#E5D6B0] px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] sm:grid">
              <div>Molecule / Organism</div>
              <div>Confidence Signal</div>
              <div className="text-right">Evidence</div>
            </div>
            {moleculeHits.map((hit, index) => (
              <div
                key={`${target.targetId}-${hit.name}-${hit.source}-${index}`}
                className="grid grid-cols-1 gap-3 border-b border-[#3A2516]/20 px-3 py-3 last:border-b-0 hover:bg-[#E5D6B0]/45 sm:grid-cols-[1.5fr_1fr_1fr] sm:items-center"
              >
                <div>
                  <div className="text-sm font-black">{hit.name ?? "Unnamed Molecule"}</div>
                  <div className="mt-1 text-[10px] font-semibold opacity-65">{hit.source ?? `taxid:${hit.taxid}`}</div>
                </div>
                <div>
                  <ImpactBars value={confidencePercent(hit.confidenceScore)} />
                </div>
                <div className="text-left sm:text-right">
                  <EvidenceChips values={[hit.sourceDatabase, hit.publicationIds]} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="border-[1.5px] border-dashed border-[#3A2516] p-8 text-center">
            <p className="text-sm font-semibold italic opacity-70">
              No specific viral molecule interactions found in current discovery layer.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function TargetMetric({
  color,
  label,
  value,
}: {
  color: "blue" | "green" | "orange" | "red";
  label: string;
  value: ReactNode;
}) {
  const stripClass = {
    blue: "bg-[#3F8BC4]",
    green: "bg-[#3D9F47]",
    orange: "bg-[#F09131]",
    red: "bg-[#E5392A]",
  }[color];

  return (
    <div className="overflow-hidden border-[1.5px] border-[#3A2516]">
      <div className={cn("h-3", stripClass)} />
      <div className="p-3">
      <div className="mb-2 text-[9px] font-black uppercase tracking-[0.14em] opacity-65">
        {label}
      </div>
      <div className="numeric text-2xl font-black [font-family:'JetBrains_Mono',ui-monospace,monospace]">
        {value}
      </div>
      </div>
    </div>
  );
}

function DetailScore({ label, value, tone = "slate" }: { label: string; value: ReactNode; tone?: DotScoreTone }) {
  const isNumericValue = typeof value === "number";

  return (
    <div className="text-right">
      <div className="mb-2 text-[10px] font-black uppercase tracking-[0.14em] opacity-65">
        {label}
      </div>
      {isNumericValue ? (
        <DotScore value={Math.round(value)} tone={tone} />
      ) : (
        <div className="numeric text-xl font-black [font-family:'JetBrains_Mono',ui-monospace,monospace]">{value}</div>
      )}
    </div>
  );
}

type DotScoreTone = "amber" | "green" | "pink" | "red" | "slate";

function DotScore({
  value,
  tone,
}: {
  value: number;
  tone: DotScoreTone;
}) {
  const activeClass = {
    amber: "bg-[#F0BC2A]",
    green: "bg-[#3D9F47]",
    pink: "bg-[#E54489]",
    red: "bg-[#E5392A]",
    slate: "bg-[#3A2516]",
  }[tone];

  return (
    <div className="flex items-center justify-end gap-2">
      <div className="flex gap-0.5">
        {Array.from({ length: 7 }).map((_, index) => (
          <span
            key={index}
            className={cn(
              "size-2 rounded-full border border-[#3A2516]/20",
              index < value ? activeClass : "bg-[#3A2516]/10"
            )}
          />
        ))}
      </div>
      <span className="numeric ml-1 text-sm font-black">{value}</span>
    </div>
  );
}

function ImpactBars({ value }: { value: number }) {
  const active = Math.max(1, Math.min(8, Math.round(value / 12)));

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 8 }).map((_, index) => (
        <span
          key={index}
          className={cn(
            "h-3 w-1.5 transition-colors",
            index < active ? "bg-[#3A2516]" : "bg-[#3A2516]/15"
          )}
        />
      ))}
    </div>
  );
}

function confidencePercent(value?: string | null) {
  const numericValue = value?.match(/-?\d+(\.\d+)?/)?.[0];

  if (!numericValue) return 0;

  return Number(numericValue) * 100;
}

function SectionTitle({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "pathogen";
}) {
  return (
    <h3
      className={cn(
        "text-[10.5px] font-black uppercase tracking-[0.22em] antialiased",
        tone === "pathogen" ? "opacity-70" : "opacity-75"
      )}
    >
      {children}
    </h3>
  );
}

function DataTag({
  children,
  tone,
}: {
  children: ReactNode;
  tone: "neutral" | "strong";
}) {
  const className =
    tone === "strong"
      ? "border-[#3A2516] bg-[#E5D6B0]"
      : "border-[#3A2516]/60 bg-transparent";

  return (
    <span
      className={cn(
        "inline-flex items-center border-[1.5px] px-1.5 py-[2px] text-[10px] font-black uppercase leading-none tracking-[0.12em]",
        className
      )}
    >
      {children}
    </span>
  );
}

function EvidenceChips({ values }: { values: Array<string | null> }) {
  const chips = values.flatMap((value) => shortEvidenceList(value));

  if (chips.length === 0) {
    return <span className="text-[10px] font-semibold italic opacity-60">no citation</span>;
  }

  return (
    <span className="inline-flex flex-wrap justify-start gap-1 sm:justify-end">
      {chips.map((chip) => (
        <span
          key={chip}
          className="border border-[#3A2516]/35 px-2 py-0.5 text-[9px] font-bold opacity-75"
        >
          {chip}
        </span>
      ))}
    </span>
  );
}

function shortEvidenceList(value?: string | null) {
  if (!value) return [];
  return value
    .split("|")
    .map((part) => part.replace("psi-mi:", "").replace("pubmed:", "PMID "))
    .slice(0, 2);
}
