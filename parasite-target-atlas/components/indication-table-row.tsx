"use client";

import type { ConvokeImmunologyRecord } from "@/lib/indications";
import { getParasiteCandidate } from "@/lib/parasite-candidates";
import { parasiteScanHitsByDiseaseId } from "@/lib/parasite-scan-hits";
import { cn } from "@/lib/utils";

export const indicationsGridClass =
  "grid w-full min-w-0 grid-cols-[minmax(0,1fr)_repeat(5,32px)] items-center gap-x-1 px-0 sm:grid-cols-[minmax(190px,1.25fr)_56px_repeat(5,minmax(58px,0.58fr))] sm:gap-x-2 sm:px-3 lg:grid-cols-[minmax(280px,1.35fr)_56px_repeat(5,minmax(76px,0.62fr))] lg:gap-x-4 lg:px-5";

type IndicationTableRowProps = {
  indication: ConvokeImmunologyRecord;
  isSelected: boolean;
  onSelect: (id: string | null) => void;
  rank: number;
};

export function IndicationTableRow({
  indication,
  isSelected,
  onSelect,
  rank,
}: IndicationTableRowProps) {
  const parasiteCandidate = getParasiteCandidate(indication.id);
  const scanHit = parasiteScanHitsByDiseaseId[indication.id];
  const titleParts = [
    indication.name,
    parasiteCandidate
      ? parasiteCandidate.molecule
      : scanHit?.moleculeHint
        ? `${scanHit.moleculeHint} -> ${scanHit.targetSymbol}`
        : null,
  ].filter(Boolean);
  const toggleSelection = () => onSelect(isSelected ? null : indication.id);

  return (
    <div
      aria-expanded={isSelected}
      className={cn(
        indicationsGridClass,
        "row-hover-candidate cursor-pointer border-b border-slate-200 py-1.5 text-sm",
        isSelected && "row-selected"
      )}
      onClick={toggleSelection}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleSelection();
        }
      }}
      role="button"
      tabIndex={0}
      title={titleParts.join(" | ")}
    >
      <div className="disease-name-cell grid min-w-0 max-w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 overflow-hidden">
        <span className="disease-name-main min-w-0 truncate text-[13px] font-medium leading-5 text-slate-900 sm:text-[12px]">
          {indication.name}
        </span>
        <span className="hidden justify-self-end rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase leading-4 tracking-[0.14em] text-slate-500 sm:inline-flex">
          {indication.prevalence}
        </span>
      </div>
      <div className="numeric hidden text-center text-[18px] font-semibold leading-none text-slate-700 sm:block sm:text-[15px]">
        {rank}
      </div>
      <DotScore value={indication.scores.burdenUntreated} tone="pink" />
      <DotScore value={indication.scores.burdenTreated} tone="green" />
      <DotScore value={indication.scores.safetyTolerability} tone="amber" />
      <DotScore value={indication.scores.convenienceAdministration} tone="amber" />
      <DotScore value={indication.pipelineActivity} tone="red" />
    </div>
  );
}

function DotScore({
  value,
  tone,
}: {
  value: number;
  tone: "amber" | "green" | "pink" | "red";
}) {
  const activeClass = {
    amber: "bg-amber-300",
    green: "bg-emerald-500",
    pink: "bg-rose-300",
    red: "bg-red-600",
  }[tone];

  return (
    <div className="flex min-w-0 items-center justify-center gap-1 sm:gap-1.5">
      <span
        className={cn(
          "numeric flex size-[18px] items-center justify-center rounded-full text-[10px] font-bold leading-none shadow-[inset_0_0_0_1px_rgb(0_0_0/0.08)] sm:hidden",
          mobileScoreClass(value)
        )}
      >
        {value}
      </span>
      <div className="hidden min-w-0 items-center justify-center gap-px sm:flex sm:gap-0.5">
        {Array.from({ length: 7 }).map((_, index) => (
          <span
            className={cn(
              "block size-1.5 rounded-full sm:size-2",
              index < value ? activeClass : "bg-slate-200"
            )}
            key={index}
          />
        ))}
      </div>
      <span className="numeric hidden min-w-2 text-[11px] font-medium leading-none text-slate-500 sm:inline sm:min-w-3 sm:text-[12px]">
        {value}
      </span>
    </div>
  );
}

function mobileScoreClass(value: number) {
  if (value <= 1) return "bg-emerald-500 text-white";
  if (value === 2) return "bg-lime-300 text-slate-900";
  if (value === 3) return "bg-lime-200 text-slate-900";
  if (value === 4) return "bg-amber-200 text-slate-900";
  if (value === 5) return "bg-orange-300 text-white";
  if (value === 6) return "bg-orange-600 text-white";
  return "bg-red-600 text-white";
}
