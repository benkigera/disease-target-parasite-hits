import {
  Activity,
  BadgeCheck,
  Bug,
  Circle,
  Dna,
  ExternalLink,
  FlaskConical,
  Microscope,
  Network,
  Pill,
  ShieldAlert,
  Syringe,
  Target,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import type { TargetExplorerData } from "@/components/disease-target-explorer";
import { diseasePath } from "@/lib/disease-routes";
import type { ConvokeImmunologyRecord } from "@/lib/indications";
import { getParasiteCandidate } from "@/lib/parasite-candidates";
import { parasiteScanHitsByDiseaseId } from "@/lib/parasite-scan-hits";
import {
  getPathogenDiscoveryProfile,
  type PathogenDiscoveryProfile,
  type PathogenMoleculeLead,
  type TargetOpportunity,
} from "@/lib/pathogen-discovery";

type IndicationDetailProps = {
  indication: ConvokeImmunologyRecord & {
    targetExplorer?: TargetExplorerData;
  };
  showExploreLink?: boolean;
};

export function InlineIndicationDetail({
  indication,
  showExploreLink = true,
}: IndicationDetailProps) {
  const unmetNeeds = parseUnmetNeeds(indication.keyUnmetNeeds).slice(0, 3);
  const guidelineDrugs = Object.entries(indication.guidelineDrugs ?? {}).slice(0, 8);
  const keyCompanies = Object.entries(indication.keyCompanies ?? {}).slice(0, 8);
  const externalLinks = [
    ["Wikipedia", indication.wikipediaUrl],
    ["MedlinePlus", indication.medlineUrl],
    ["Open Targets", indication.opentargetsUrl],
    ["OMIM", indication.omimUrl],
    ["NORD", indication.nordUrl],
    ["ClinicalTrials.gov", indication.clinicalTrialsUrl],
    ["Patient advocacy group", indication.leadingPagWebsiteUs],
  ].filter((entry): entry is [string, string] => Boolean(entry[1]));

  return (
    <div className="expanded-detail-grid">
      <div className="expanded-detail-radar">
        <div className="expanded-detail-radar-title" title={indication.name}>
          {indication.name}
        </div>
        <DiseaseRadar indication={indication} />

      </div>

      <div className="expanded-detail-info">
        <section className="expanded-detail-description-section">
          <h4>Description</h4>
          <p className="expanded-detail-description">
            {indication.description}
          </p>
          <div className="expanded-detail-meta">
            <span className="expanded-detail-therapeutic-area-badge">
              <span className="selected-filter-badge-kind selected-filter-badge-kind-therapeuticArea">TA</span>
              <span>{indication.therapeuticArea}</span>
            </span>
            <span className="prevalence-badge">
              {indication.prevalence}
            </span>
          </div>
        </section>

        {guidelineDrugs.length > 0 ? (
          <section className="expanded-detail-guidelines">
            <h4>Guideline Drugs</h4>
            <div className="guideline-drugs">
              {guidelineDrugs.map(([drug, meta]) => (
                <DrugItem
                  key={drug}
                  company={meta.company}
                  modality={meta.modality}
                  name={drug}
                />
              ))}
            </div>
          </section>
        ) : null}

        {unmetNeeds.length > 0 ? (
          <section className="expanded-detail-needs">
            <h4>Top Unmet Needs</h4>
            <ul className="unmet-needs-list">
              {unmetNeeds.map((need) => (
                <li key={need}>{need}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {keyCompanies.length > 0 ? (
          <section className="expanded-detail-companies">
            <h4>Selected Companies with Development Programs</h4>
            <div className="company-badges">
              {keyCompanies.map(([company, meta]) => (
                <PillLink
                  key={company}
                  href={meta.url}
                  title={(meta.drugs ?? []).join(", ")}
                >
                  {company}
                </PillLink>
              ))}
            </div>
          </section>
        ) : null}

        {externalLinks.length > 0 ? (
          <section className="expanded-detail-external-links">
            <h4>External links</h4>
            <div className="company-badges">
              {externalLinks.map(([label, href]) => (
                <PillLink key={href} href={href}>
                  {label}
                </PillLink>
              ))}
            </div>
          </section>
        ) : null}

        {showExploreLink ? (
          <section className="expanded-detail-pathogen">
            <h4>Target landscape</h4>
            <div className="company-badges">
              <Link
                className="company-badge group"
                href={diseasePath(indication.id)}
              >
                <VirusExploreIcon />
                <span>Click to explore parasite molecules</span>
                <span className="company-link-icon" aria-hidden="true">↗</span>
              </Link>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}

function DiseaseRadar({ indication }: { indication: ConvokeImmunologyRecord }) {
  const axes = [
    {
      label: "Burden\n(untreated)",
      value: indication.scores.burdenUntreated,
      x: 110,
      y: 18,
    },
    {
      label: "Efficacy",
      value: indication.scores.burdenTreated,
      x: 188,
      y: 76,
    },
    {
      label: "Safety",
      value: indication.scores.safetyTolerability,
      x: 158,
      y: 170,
    },
    {
      label: "Convenience",
      value: indication.scores.convenienceAdministration,
      x: 62,
      y: 170,
    },
    {
      label: "Pipeline\nactivity",
      value: indication.pipelineActivity,
      x: 32,
      y: 76,
    },
  ];
  const center = { x: 110, y: 104 };
  const maxRadius = 78;
  const outer = axes.map((axis) => `${axis.x},${axis.y}`).join(" ");
  const scorePoints = axes
    .map((axis) => {
      const ratio = Math.max(0, Math.min(1, axis.value / 7));
      const x = center.x + (axis.x - center.x) * ratio;
      const y = center.y + (axis.y - center.y) * ratio;
      return `${x},${y}`;
    })
    .join(" ");
  const averagePoints = axes
    .map((axis) => {
      const x = center.x + (axis.x - center.x) * 0.58;
      const y = center.y + (axis.y - center.y) * 0.58;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div>
      <svg
        aria-label={`${indication.name} unmet need radar`}
        className="tufte-radar"
        height="300"
        role="img"
        viewBox="-8 0 236 228"
        width="300"
      >
        <polygon
          fill="#fcfcfc"
          points={outer}
          stroke="#e2e8f0"
          strokeWidth="0.8"
        />
        {[0.33, 0.66].map((ratio) => (
          <polygon
            key={ratio}
            fill="none"
            points={axes
              .map((axis) => {
                const x = center.x + (axis.x - center.x) * ratio;
                const y = center.y + (axis.y - center.y) * ratio;
                return `${x},${y}`;
              })
              .join(" ")}
            stroke="#f1f5f9"
            strokeWidth="0.8"
          />
        ))}
        {axes.map((axis) => (
          <line
            key={axis.label}
            stroke="#f1f5f9"
            strokeWidth="0.8"
            x1={center.x}
            x2={axis.x}
            y1={center.y}
            y2={axis.y}
          />
        ))}
        <polygon
          fill="none"
          points={averagePoints}
          stroke="#cbd5e1"
          strokeDasharray="4,3"
          strokeWidth="1.2"
        />
        <polygon
          fill="rgba(26, 26, 26, 0.85)"
          points={scorePoints}
          stroke="#1a1a1a"
          strokeWidth="1.5"
        />
        {axes.map((axis) => {
          const [first, second] = axis.label.split("\n");
          const anchor =
            axis.x < 70 ? "start" : axis.x > 150 ? "end" : "middle";
          const labelX =
            axis.x < 70 ? axis.x - 20 : axis.x > 150 ? axis.x + 20 : axis.x;
          const labelY = axis.y < 40 ? axis.y - 8 : axis.y > 160 ? axis.y + 22 : axis.y + 2;

          return (
            <text
              key={axis.label}
              className="tufte-radar-label"
              textAnchor={anchor}
              x={labelX}
              y={labelY}
            >
              <tspan x={labelX}>{first}</tspan>
              {second ? <tspan dy="12" x={labelX}>{second}</tspan> : null}
            </text>
          );
        })}
      </svg>
      <div className="mt-6 flex items-center justify-center gap-3 text-center text-[10.5px] font-medium tracking-wide text-slate-400">
        <svg height="2" width="16">
          <line stroke="#cbd5e1" strokeDasharray="4,2" strokeWidth="1.5" x1="0" x2="16" y1="1" y2="1" />
        </svg>
        Average score (all indications)
      </div>
    </div>
  );
}

function VirusExploreIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5 shrink-0 text-emerald-600 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g className="origin-center animate-[virus-wiggle_1.8s_ease-in-out_infinite]">
        <circle cx="12" cy="12" fill="currentColor" opacity="0.16" r="5.2" />
        <circle cx="12" cy="12" r="4.4" stroke="currentColor" strokeWidth="1.5" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <g key={angle} transform={`rotate(${angle} 12 12)`}>
            <path d="M12 4.2V2.7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
            <circle cx="12" cy="2.2" fill="currentColor" r="0.9" />
          </g>
        ))}
        <circle cx="10.2" cy="10.6" fill="currentColor" r="0.7" />
        <circle cx="13.9" cy="11.1" fill="currentColor" r="0.7" />
        <path d="M9.8 14.2c1.4 1 3.1 1 4.5 0" stroke="currentColor" strokeLinecap="round" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

function PathogenDiscoveryPanel({
  diseaseName,
  parasiteCandidate,
  parasiteScanHit,
  profile,
  showScanHit,
}: {
  diseaseName: string;
  parasiteCandidate: ReturnType<typeof getParasiteCandidate>;
  parasiteScanHit:
    | (typeof parasiteScanHitsByDiseaseId)[keyof typeof parasiteScanHitsByDiseaseId]
    | undefined;
  profile: PathogenDiscoveryProfile | undefined;
  showScanHit: boolean;
}) {
  if (!profile) {
    return parasiteScanHit ? (
      <ParasiteScanDetail parasiteScanHit={parasiteScanHit} />
    ) : (
      <p className="mt-2 text-sm font-medium text-emerald-700">
        No dataset-backed pathogen molecule search space has been generated for this disease yet.
      </p>
    );
  }

  const routes = buildOpportunityRoutes(profile).slice(0, 5);
  const hasRoutes = routes.length > 0;

  return (
    <div className="pathogen-insight">
      <div className="pathogen-insight-header">
        <div>
          <div className="pathogen-insight-title">Pathogen-Target Map (Insight Layer)</div>
          <p className="pathogen-insight-subtitle">
            Pathogen molecules that can interact with human targets relevant to {diseaseName} biology.
          </p>
        </div>
        <div className="pathogen-evidence-legend">
          <span>Evidence strength</span>
          <LegendDot tone="high">High</LegendDot>
          <LegendDot tone="medium">Medium</LegendDot>
          <LegendDot tone="low">Low</LegendDot>
          <button
            className="text-slate-500 hover:text-slate-800"
            type="button"
          >
            How this is determined →
          </button>
        </div>
      </div>

      {hasRoutes ? (
        <OpportunityRouteTable diseaseName={diseaseName} routes={routes} />
      ) : (
        <CoverageStatusTable profile={profile} />
      )}

      <div className="pathogen-foot">
        <div>
          <p>
            <span className="font-semibold text-slate-800">Why this matters:</span>{" "}
            {hasRoutes
              ? `These rows show where infection-host interaction data touches disease-prioritized ${diseaseName} targets, creating a shortlist for mechanism review.`
              : `No current route survived the disease-target and interaction join for ${diseaseName}; the useful signal here is coverage, not a candidate claim.`}
          </p>
        </div>
        <div className="pathogen-caution">
          Dataset-backed interaction only. Promote a row after mechanism, pathway,
          model evidence, and analogue strategy are curated.
          {showScanHit && parasiteScanHit ? (
            <div className="mt-2">
              <CompactScanHit parasiteScanHit={parasiteScanHit} />
            </div>
          ) : parasiteCandidate ? (
            <div className="mt-2 font-semibold text-emerald-800">
              Curated analogue context exists for {parasiteCandidate.molecule}.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

type OpportunityRoute = {
  lead: PathogenMoleculeLead;
  target?: TargetOpportunity;
  confidence: number;
};

function buildOpportunityRoutes(profile: PathogenDiscoveryProfile): OpportunityRoute[] {
  return profile.moleculeLeads.map((lead) => {
    const target = profile.targetOpportunities.find(
      (item) => item.humanTarget === lead.humanTarget
    );
    const rankScore = lead.targetRank ? Math.max(8, 42 - lead.targetRank * 2) : 12;
    const interactionScore = Math.min(18, (lead.interactionCount ?? 0) * 6);
    const intactScore = Math.round((lead.bestIntactMiscore ?? 0) * 36);
    const tractabilityScore = target?.druggability.druggable_category_score
      ? target.druggability.druggable_category_score * 4
      : 6;
    const confidence = Math.min(
      92,
      Math.max(18, rankScore + interactionScore + intactScore + tractabilityScore)
    );

    return { confidence, lead, target };
  });
}

function OpportunityKpis({
  bestRoute,
  fdaHits,
  leadCount,
  sourceCounts,
  targetCount,
  totalTargets,
}: {
  bestRoute: string;
  fdaHits: number;
  leadCount: number;
  sourceCounts: Record<string, number>;
  targetCount: number;
  totalTargets: number;
}) {
  const sourceMix = [
    ["Virus", sourceCounts.virus ?? 0, "bg-sky-500"],
    ["Helminth", sourceCounts.helminth ?? 0, "bg-amber-500"],
    ["Tick", sourceCounts.tick ?? 0, "bg-rose-500"],
  ] as const;
  const sourceTotal = sourceMix.reduce((sum, [, value]) => sum + value, 0);

  return (
    <div className="mt-4 grid gap-2 md:grid-cols-5">
      <DossierKpi
        label="Best route"
        value={bestRoute}
        meta={bestRoute === "None" ? "no intersecting lead" : "dataset-backed"}
        tone={bestRoute === "None" ? "slate" : "green"}
      />
      <DossierKpi label="Targets with signal" value={targetCount} meta={`${totalTargets} searched`} tone="slate" />
      <DossierKpi label="Molecule leads" value={leadCount} meta="needs curation" tone="amber" />
      <DossierKpi label="FDA-backed hits" value={fdaHits} meta="translational anchor" tone="green" />
      <div className="rounded-[8px] border border-slate-200 bg-white px-3 py-2">
        <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
          Source class mix
        </div>
        <div className="mt-2 flex h-2 overflow-hidden rounded-full bg-slate-100">
          {sourceMix.map(([label, value, color]) => (
            <div
              key={label}
              className={color}
              style={{
                width:
                  sourceTotal > 0
                    ? `${Math.max(value > 0 ? 2 : 0, (value / sourceTotal) * 100)}%`
                    : "0%",
              }}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[10px] font-medium text-slate-500">
          {sourceMix.map(([label, value]) => (
            <span key={label}>{label} {value}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function DossierKpi({
  label,
  meta,
  tone,
  value,
}: {
  label: string;
  meta: string;
  tone: "green" | "amber" | "slate";
  value: ReactNode;
}) {
  const toneClass = {
    green: "border-emerald-200 bg-emerald-50 text-emerald-800",
    amber: "border-amber-200 bg-amber-50 text-amber-900",
    slate: "border-slate-200 bg-white text-slate-900",
  }[tone];

  return (
    <div className={`rounded-[8px] border px-3 py-2 ${toneClass}`}>
      <div className="text-[10px] font-bold uppercase tracking-[0.1em] opacity-70">
        {label}
      </div>
      <div className="numeric mt-1 text-xl font-bold">{value}</div>
      <div className="mt-0.5 text-[11px] font-medium opacity-70">{meta}</div>
    </div>
  );
}

function OpportunityRouteTable({
  diseaseName,
  routes,
}: {
  diseaseName: string;
  routes: OpportunityRoute[];
}) {
  return (
    <div className="pathogen-table">
      <div>
        <div className="pathogen-table-head">
          <div>Pathogen (type)</div>
          <div>Molecule / Antigen</div>
          <div>Human Target</div>
          <div>Relevance to {diseaseName}</div>
          <div>Impact Signal</div>
          <div>Evidence</div>
        </div>
        {routes.map(({ confidence, lead, target }) => {
          const relevance = buildRouteRelevance(diseaseName, lead, target);

          return (
            <div
              key={`${lead.humanTarget}-${lead.moleculeUniprot}-insight-table`}
              className="pathogen-table-row"
            >
              <div>
                <div className="pathogen-primary" title={lead.sourceOrganism ?? undefined}>
                  {lead.sourceOrganism ?? "Unknown source"}
                </div>
                <div className="mt-1">
                  <SourceTypeBadge sourceType={lead.sourceType} />
                </div>
              </div>
              <div>
                <span className="pathogen-primary" title={lead.moleculeUniprot ?? undefined}>
                  {lead.moleculeUniprot ?? "Unmapped molecule"}
                </span>
                <span className="pathogen-secondary numeric block">
                  {lead.interactionCount} interaction{lead.interactionCount === 1 ? "" : "s"}
                </span>
              </div>
              <div>
                <div className="pathogen-primary">{lead.humanTarget ?? "n/a"}</div>
                <div className="mt-1.5">
                  <DataTag tone={lead.approvedTarget ? "strong" : "neutral"}>
                    RANK <span className="tabular-nums">{lead.targetRank ?? "n/a"}</span>
                  </DataTag>
                </div>
              </div>
              <div className="text-slate-600">
                {relevance}
              </div>
              <div>
                <ImpactBars value={confidence} />
              </div>
              <div>
                <EvidenceDots value={lead.bestIntactMiscore} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CoverageStatusTable({ profile }: { profile: PathogenDiscoveryProfile }) {
  const rows = [
    ["Disease requested", profile.disease, "available"],
    ["Pi target mapping", profile.piTraitName ?? "No direct/proxy Pi trait", profile.piCovered ? "covered" : "not covered"],
    ["Targets searched", String(profile.targetCount), profile.targetCount > 0 ? "ready" : "blocked"],
    ["Targets with pathogen hits", String(profile.targetsWithPathogenHits), profile.targetsWithPathogenHits > 0 ? "ready" : "none"],
    ["Molecule leads", String(profile.needsCurationCount), profile.needsCurationCount > 0 ? "curate" : "none"],
    ["Source class mix", sourceMixLabel(profile.sourceTypeCounts), "data state"],
  ] as const;

  return (
    <div className="py-5">
      <h4>Coverage Status</h4>
      <p className="pathogen-insight-subtitle">
        This disease does not have an intersecting target-molecule route in the current dataset. Keep the state explicit instead of inventing a visual story.
      </p>
      <div className="mt-3">
        <div className="grid grid-cols-[0.75fr_1.15fr_0.55fr] border-b border-slate-200 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
          <div>Check</div>
          <div>Value</div>
          <div>Status</div>
        </div>
        {rows.map(([check, value, status]) => (
          <div
            key={check}
            className="grid grid-cols-[0.75fr_1.15fr_0.55fr] border-b border-slate-100 py-3 text-sm last:border-b-0"
          >
            <div className="font-semibold text-slate-700">{check}</div>
            <div className="text-slate-600">{value}</div>
            <div>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-500">
                {status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RouteFlow({
  disease,
  routes,
}: {
  disease: string;
  routes: OpportunityRoute[];
}) {
  const topRoutes = routes.slice(0, 4);

  return (
    <div className="relative overflow-hidden px-4 py-5">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <SectionTitle>Ranked Route Flow</SectionTitle>
          <p className="mt-1 text-sm text-slate-600">
            Disease biology → prioritized target → nonhuman molecule → curation action.
          </p>
        </div>
        <DiscoveryBadge tone="amber">next action: mechanism review</DiscoveryBadge>
      </div>

      <div className="relative grid gap-4 lg:grid-cols-[0.95fr_1fr_1fr_0.95fr]">
        <RouteColumn title="Disease biology">
          <RoutePillar
            eyebrow="selected indication"
            title={disease}
            body="Requested disease mapped to ranked autoimmune target biology."
            tone="disease"
          />
        </RouteColumn>

        <RouteColumn title="Human targets">
          {topRoutes.map(({ lead, target }) => (
          <RoutePillar
            key={`${lead.humanTarget}-${lead.moleculeUniprot}-target`}
            eyebrow={`rank ${lead.targetRank ?? "n/a"} · Pi ${formatScore(lead.targetScore)}`}
            title={lead.humanTarget ?? "Unknown target"}
            body={`${target?.description ?? "Ranked autoimmune target"} · route via ${lead.moleculeUniprot ?? "unmapped molecule"}`}
            tone="target"
          />
          ))}
        </RouteColumn>

        <RouteColumn title="Nonhuman molecules">
          {topRoutes.map(({ lead }) => (
            <RoutePillar
              key={`${lead.humanTarget}-${lead.moleculeUniprot}-lead`}
              eyebrow={`${lead.sourceType} · IntAct ${formatScore(lead.bestIntactMiscore)}`}
              title={lead.moleculeUniprot ?? "Unmapped molecule"}
              body={lead.sourceOrganism ?? "Unknown source organism"}
              tone="lead"
            />
          ))}
        </RouteColumn>

        <RouteColumn title="Decision state">
          {topRoutes.map(({ confidence, lead }) => (
            <RoutePillar
              key={`${lead.humanTarget}-${lead.moleculeUniprot}-state`}
              eyebrow={`route score ${confidence}`}
              title="Needs curation"
              body="Mechanism unknown; review function, pathway, model evidence, and analogue path."
              tone="action"
            />
          ))}
        </RouteColumn>

        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          {[20, 42, 64, 86].map((y, index) => (
            <g key={y} opacity={0.32 + index * 0.08}>
              <path
                d={`M24 ${y} C32 ${y - 8} 38 ${y - 8} 46 ${y}`}
                fill="none"
                stroke="#10b981"
                strokeLinecap="round"
                strokeWidth={2.2 - index * 0.25}
              />
              <path
                d={`M52 ${y} C60 ${y + 8} 66 ${y + 8} 74 ${y}`}
                fill="none"
                stroke="#38bdf8"
                strokeLinecap="round"
                strokeWidth={2.2 - index * 0.25}
              />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

function RouteColumn({ children, title }: { children: ReactNode; title: string }) {
  return (
    <div className="relative z-10">
      <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
        {title}
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function RoutePillar({
  body,
  eyebrow,
  title,
  tone,
}: {
  body: string;
  eyebrow: string;
  title: string;
  tone: "disease" | "target" | "lead" | "action";
}) {
  const toneClass = {
    disease: "border-slate-300 bg-slate-50",
    target: "border-emerald-200 bg-emerald-50/70",
    lead: "border-sky-200 bg-sky-50/80",
    action: "border-amber-200 bg-amber-50/85",
  }[tone];

  return (
    <div className={`min-h-[92px] rounded-[8px] border p-3 shadow-[0_1px_0_rgb(15_23_42/0.03)] ${toneClass}`}>
      <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400">
        {eyebrow}
      </div>
      <div className="mt-1 truncate text-base font-semibold text-slate-950" title={title}>
        {title}
      </div>
      <div className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-600" title={body}>
        {body}
      </div>
    </div>
  );
}

function EvidenceMatrix({ routes }: { routes: OpportunityRoute[] }) {
  return (
    <div className="border-t border-slate-200 px-4 py-5">
      <SectionTitle>Route Evidence Matrix</SectionTitle>
      <div className="mt-3 overflow-hidden rounded-[8px] border border-slate-200 bg-white">
        <div className="grid grid-cols-[1.05fr_repeat(5,0.72fr)] gap-0 border-b border-slate-200 bg-slate-50 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
          <div>Route</div>
          <div>Target priority</div>
          <div>Clinical anchor</div>
          <div>Tractability</div>
          <div>Interaction</div>
          <div>Readiness</div>
        </div>
        {routes.slice(0, 5).map(({ confidence, lead, target }) => (
          <div
            key={`${lead.humanTarget}-${lead.moleculeUniprot}-matrix`}
            className="grid grid-cols-[1.05fr_repeat(5,0.72fr)] gap-0 border-b border-slate-100 px-3 py-3 text-xs last:border-b-0"
          >
            <div className="min-w-0 pr-3">
              <div className="truncate font-semibold text-slate-950">
                {lead.moleculeUniprot} → {lead.humanTarget}
              </div>
              <div className="mt-0.5 truncate text-slate-500">
                {lead.sourceOrganism}
              </div>
            </div>
            <MatrixScore value={lead.targetRank ? Math.max(18, 100 - lead.targetRank * 5) : 35} label={`rank ${lead.targetRank ?? "n/a"}`} />
            <MatrixScore value={lead.approvedTarget ? 80 : 15} label={lead.approvedTarget ? "FDA-backed" : "none"} />
            <MatrixScore
              value={target?.druggability.druggable_category_score ? target.druggability.druggable_category_score * 18 : 25}
              label={target ? druggabilityLabel(target.druggability) : "unknown"}
            />
            <MatrixScore value={Math.round((lead.bestIntactMiscore ?? 0) * 100)} label={`IntAct ${formatScore(lead.bestIntactMiscore)}`} />
            <MatrixScore value={confidence} label="curate next" />
          </div>
        ))}
      </div>
    </div>
  );
}

function MatrixScore({ label, value }: { label: string; value: number }) {
  const capped = Math.max(0, Math.min(100, value));
  const color =
    capped >= 70 ? "bg-emerald-500" : capped >= 40 ? "bg-sky-500" : "bg-amber-500";

  return (
    <div className="pr-3">
      <div className="flex items-center justify-between gap-2">
        <span className="numeric font-bold text-slate-900">{Math.round(capped)}</span>
        <span className="truncate text-[10px] text-slate-500">{label}</span>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${capped}%` }} />
      </div>
    </div>
  );
}

function LegendDot({
  children,
  tone,
}: {
  children: ReactNode;
  tone: "high" | "medium" | "low";
}) {
  const color = {
    high: "bg-slate-700",
    medium: "bg-slate-400",
    low: "bg-slate-300",
  }[tone];

  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`size-2 rounded-full ${color}`} />
      {children}
    </span>
  );
}

function ImpactBars({ value }: { value: number }) {
  const active = Math.max(1, Math.min(8, Math.round(value / 12)));

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 8 }).map((_, index) => (
        <span
          key={index}
          className={`h-3 w-1 rounded-full ${index < active ? "bg-slate-700" : "bg-slate-200"}`}
        />
      ))}
    </div>
  );
}

function EvidenceDots({ value }: { value?: number | null }) {
  const score = value ?? 0;
  const active = Math.max(1, Math.min(5, Math.ceil(score * 5)));
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`size-1.5 rounded-full ${index < active ? "bg-slate-500" : "bg-slate-200"}`}
        />
      ))}
    </div>
  );
}

function confidenceLabel(value: number) {
  if (value >= 70) return "high-priority";
  if (value >= 45) return "review";
  return "early";
}

function buildRouteRelevance(
  diseaseName: string,
  lead: PathogenMoleculeLead,
  target?: TargetOpportunity
) {
  const rank = lead.targetRank ? `rank ${lead.targetRank}` : "ranked";
  const targetGene = lead.humanTarget ?? "human target";
  const sourceType = lead.sourceType === "unknown" ? "nonhuman" : lead.sourceType;
  const anchor = lead.approvedTarget || target?.fdaApprovedDrugs.length
    ? "with an approved-target anchor"
    : target?.clinicalPhaseCode && target.clinicalPhaseCode !== "N"
      ? "with clinical-stage target context"
      : "mechanism uncurated";

  return `${targetGene}: ${rank} ${diseaseName} target; dataset-backed ${sourceType} interaction, ${anchor}.`;
}

function sourceMixLabel(value: Record<string, number>) {
  return `virus ${value.virus ?? 0}; helminth ${value.helminth ?? 0}; tick ${value.tick ?? 0}`;
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function DiscoveryMetric({
  compact = false,
  icon: Icon,
  label,
  tone,
  value,
}: {
  compact?: boolean;
  icon: typeof Target;
  label: string;
  tone: "slate" | "emerald" | "sky" | "amber" | "rose" | "orange";
  value: number;
}) {
  const toneClass = {
    slate: "border-slate-200 bg-white text-slate-700",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-800",
    sky: "border-sky-200 bg-sky-50 text-sky-800",
    amber: "border-amber-200 bg-amber-50 text-amber-800",
    rose: "border-rose-200 bg-rose-50 text-rose-800",
    orange: "border-orange-200 bg-orange-50 text-orange-800",
  }[tone];

  return (
    <div className={`rounded-[8px] border px-3 ${compact ? "py-2" : "py-3"} ${toneClass}`}>
      <div className="flex items-center justify-between gap-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.08em] opacity-70">
          {label}
        </span>
        <Icon className="size-4 shrink-0 opacity-70" />
      </div>
      <div className={`numeric font-bold ${compact ? "mt-1 text-xl" : "mt-2 text-2xl"}`}>
        {value}
      </div>
    </div>
  );
}

function MapHeaderStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="min-w-16 rounded-[6px] border border-slate-200 bg-white px-2 py-1.5">
      <div className="numeric text-base font-bold text-slate-950">{value}</div>
      <div className="text-[9px] font-bold uppercase tracking-[0.08em] text-slate-400">
        {label}
      </div>
    </div>
  );
}

function DiscoveryMindMap({
  disease,
  lead,
  leads,
  sourceCounts,
  sourceTotal,
  targets,
}: {
  disease: string;
  lead?: PathogenMoleculeLead;
  leads: PathogenMoleculeLead[];
  sourceCounts: Record<string, number>;
  sourceTotal: number;
  targets: TargetOpportunity[];
}) {
  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_48%,rgba(16,185,129,0.10),transparent_30%),linear-gradient(180deg,#ffffff,#f8fafc)] p-5">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden h-full w-full text-emerald-200 lg:block"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <path d="M36 50 C43 42 47 41 50 44" fill="none" stroke="currentColor" strokeWidth="0.55" />
        <path d="M36 50 C43 50 47 50 50 50" fill="none" stroke="currentColor" strokeWidth="0.55" />
        <path d="M36 50 C43 58 47 59 50 56" fill="none" stroke="currentColor" strokeWidth="0.55" />
        <path d="M50 50 C57 39 64 33 70 28" fill="none" stroke="currentColor" strokeWidth="0.55" />
        <path d="M50 50 C59 50 65 50 72 50" fill="none" stroke="currentColor" strokeWidth="0.55" />
        <path d="M50 50 C57 61 64 67 70 72" fill="none" stroke="currentColor" strokeWidth="0.55" />
      </svg>

      <div className="grid gap-5 lg:grid-cols-[minmax(190px,0.85fr)_minmax(190px,0.75fr)_minmax(250px,1fr)] lg:items-center">
        <div className="space-y-4">
          <MapLane title="Ranked human targets" subtitle="Open Targets / Pi runway">
            {targets.map((target) => (
              <MapNode
                key={`${target.humanTarget}-${target.rank}`}
                eyebrow={`Rank ${target.rank ?? "n/a"} · score ${formatScore(target.piPriorityScore)}`}
                meta={`${target.pathogenHitCount} pathogen hit${target.pathogenHitCount === 1 ? "" : "s"}`}
                title={target.humanTarget ?? "Unknown target"}
                tone={target.pathogenHitCount > 0 ? "target" : "quiet"}
              />
            ))}
          </MapLane>

          <MapLane title="Source organism lanes" subtitle="No taxids shown">
            <SourceLane label="Virus" tone="virus" value={sourceCounts.virus ?? 0} total={sourceTotal} />
            <SourceLane label="Helminth" tone="helminth" value={sourceCounts.helminth ?? 0} total={sourceTotal} />
            <SourceLane label="Tick" tone="tick" value={sourceCounts.tick ?? 0} total={sourceTotal} />
          </MapLane>
        </div>

        <div className="flex justify-center">
          <div className="relative flex size-48 items-center justify-center rounded-full border border-emerald-200 bg-white shadow-[0_18px_60px_rgb(15_23_42/0.08)]">
            <div className="absolute inset-4 rounded-full border border-dashed border-emerald-200" />
            <div className="relative max-w-36 text-center">
              <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700">
                selected disease
              </div>
              <div className="mt-2 text-lg font-bold leading-tight text-slate-950">
                {disease}
              </div>
              <div className="mt-2 text-xs leading-relaxed text-slate-500">
                target-first pathogen discovery map
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <MapLane title="Best molecule leads" subtitle="Dataset-backed, not validated">
            {leads.map((item) => (
              <MapNode
                key={`${item.moleculeUniprot}-${item.humanTarget}-${item.sourceOrganism}`}
                eyebrow={`${item.sourceType} · Tier 1`}
                meta={`${item.sourceOrganism ?? "Unknown source"} → ${item.humanTarget ?? "unknown target"}`}
                title={item.moleculeUniprot ?? "Unmapped molecule"}
                tone="lead"
              />
            ))}
          </MapLane>

          <MapLane title="Curation gates" subtitle="What must become true">
            {[
              "Disease relevance beyond rank",
              "Functional interaction",
              "Immune modulation mechanism",
              "Safer analogue path",
            ].map((item) => (
              <MapNode key={item} eyebrow="needs curation" meta="manual review" title={item} tone="question" />
            ))}
          </MapLane>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
        <DiscoveryBadge tone="amber">Tier 0 raw interaction</DiscoveryBadge>
        <DiscoveryBadge tone="green">Tier 1 disease-relevant target</DiscoveryBadge>
        {lead ? (
          <span className="text-xs font-medium text-slate-500">
            Best current route: {lead.moleculeUniprot} → {lead.humanTarget}
          </span>
        ) : null}
      </div>
    </div>
  );
}

function MapLane({
  children,
  subtitle,
  title,
}: {
  children: ReactNode;
  subtitle: string;
  title: string;
}) {
  return (
    <div>
      <div className="mb-2">
        <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
          {title}
        </div>
        <div className="text-xs text-slate-500">{subtitle}</div>
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function MapNode({
  eyebrow,
  meta,
  title,
  tone,
}: {
  eyebrow: string;
  meta: string;
  title: string;
  tone: "target" | "lead" | "question" | "quiet";
}) {
  const toneClass = {
    target: "border-slate-200 bg-white text-slate-950",
    lead: "border-sky-200 bg-sky-50/70 text-slate-950",
    question: "border-amber-200 bg-amber-50/80 text-slate-950",
    quiet: "border-slate-200 bg-slate-50 text-slate-700",
  }[tone];

  return (
    <div className={`rounded-[8px] border px-3 py-2 shadow-[0_1px_0_rgb(15_23_42/0.03)] ${toneClass}`}>
      <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400">
        {eyebrow}
      </div>
      <div className="mt-1 truncate font-semibold" title={title}>
        {title}
      </div>
      <div className="mt-1 truncate text-xs text-slate-500" title={meta}>
        {meta}
      </div>
    </div>
  );
}

function SourceLane({
  label,
  tone,
  total,
  value,
}: {
  label: string;
  tone: "virus" | "helminth" | "tick";
  total: number;
  value: number;
}) {
  const color = {
    virus: "bg-sky-500",
    helminth: "bg-amber-500",
    tick: "bg-rose-500",
  }[tone];
  const width =
    total > 0 ? Math.max(value > 0 ? 4 : 0, Math.round((value / total) * 100)) : 0;

  return (
    <div className="rounded-[8px] border border-slate-200 bg-white px-3 py-2">
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-slate-700">{label}</span>
        <span className="numeric font-bold text-slate-950">{value}</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

function LeadInspector({
  lead,
  target,
}: {
  lead: PathogenMoleculeLead;
  target?: TargetOpportunity;
}) {
  return (
    <div className="rounded-[8px] border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgb(15_23_42/0.04)]">
      <SectionTitle>Best Lead Inspector</SectionTitle>
      <div className="mt-3 flex flex-wrap gap-2">
        <SourceTypeBadge sourceType={lead.sourceType} />
        <DiscoveryBadge tone="amber">needs curation</DiscoveryBadge>
      </div>
      <div className="mt-4">
        <div className="text-2xl font-bold text-slate-950">
          {lead.moleculeUniprot ?? "Unmapped molecule"}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {lead.sourceOrganism ?? "Unknown organism"} mapped to{" "}
          <span className="font-semibold text-slate-950">{lead.humanTarget}</span>.
        </p>
      </div>
      <div className="mt-4 grid gap-2">
        <MiniStat label="Human target" value={lead.humanTarget ?? "n/a"} />
        <MiniStat label="Target rank" value={lead.targetRank ?? "n/a"} />
        <MiniStat label="IntAct score" value={formatScore(lead.bestIntactMiscore)} />
        <MiniStat
          label="Druggability"
          value={target ? druggabilityLabel(target.druggability) : "unknown"}
        />
      </div>
      <p className="mt-4 border-t border-slate-200 pt-3 text-xs leading-relaxed text-amber-800">
        Dataset-backed interaction only. Promote this only after mechanism,
        pathway, model evidence, and analogue strategy are curated.
      </p>
    </div>
  );
}

function SourceLandscape({
  helminth,
  tick,
  total,
  virus,
}: {
  helminth: number;
  tick: number;
  total: number;
  virus: number;
}) {
  const items = [
    ["Virus", virus, "bg-sky-500"],
    ["Helminth", helminth, "bg-amber-500"],
    ["Tick", tick, "bg-rose-500"],
  ] as const;

  return (
    <div>
      <SectionTitle>Source Landscape</SectionTitle>
      <div className="mt-3 space-y-3">
        {items.map(([label, value, color]) => {
          const width =
            total > 0 ? Math.max(value > 0 ? 2 : 0, Math.round((value / total) * 100)) : 0;
          return (
            <div key={label}>
              <div className="mb-1 flex items-center justify-between text-xs">
                <span className="font-medium text-slate-600">{label}</span>
                <span className="numeric font-bold text-slate-900">{value}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
                <div className={`h-full rounded-full ${color}`} style={{ width: `${width}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LeadSpotlight({
  lead,
  target,
}: {
  lead: PathogenMoleculeLead;
  target?: TargetOpportunity;
}) {
  return (
    <div className="rounded-[8px] border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgb(15_23_42/0.04)]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <SourceTypeBadge sourceType={lead.sourceType} />
          <DiscoveryBadge tone="amber">needs curation</DiscoveryBadge>
          <DiscoveryBadge tone="slate">mechanism unknown</DiscoveryBadge>
        </div>
        <div className="numeric text-right text-sm font-bold text-slate-900">
          {formatScore(lead.bestIntactMiscore)}
          <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-400">
            IntAct score
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center">
        <StoryNode eyebrow="Source molecule" title={lead.moleculeUniprot ?? "Unmapped molecule"}>
          {lead.sourceOrganism ?? "Unknown source organism"}
        </StoryNode>
        <div className="hidden h-px w-14 bg-emerald-300 md:block" />
        <StoryNode eyebrow="Human target" title={lead.humanTarget ?? "Unknown target"}>
          Rank {lead.targetRank ?? "n/a"} · Pi score {formatScore(lead.targetScore)}
        </StoryNode>
      </div>

      <div className="mt-4 grid gap-2 text-xs sm:grid-cols-4">
        <MiniStat label="Evidence tier" value="Tier 1" />
        <MiniStat label="Interactions" value={lead.interactionCount} />
        <MiniStat label="Clinical phase" value={phaseLabel(lead.clinicalPhaseCode)} />
        <MiniStat
          label="Druggability"
          value={target ? druggabilityLabel(target.druggability) : "unknown"}
        />
      </div>
    </div>
  );
}

function StoryNode({
  children,
  eyebrow,
  title,
}: {
  children: ReactNode;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="min-w-0 rounded-[8px] border border-slate-200 bg-slate-50/80 p-3">
      <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
        {eyebrow}
      </div>
      <div className="mt-1 truncate text-base font-semibold text-slate-950" title={title}>
        {title}
      </div>
      <div className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-600">
        {children}
      </div>
    </div>
  );
}

function EvidenceLadder() {
  const tiers = [
    ["Tier 0", "raw database interaction"],
    ["Tier 1", "interaction + disease-relevant human target"],
    ["Tier 2", "known immune pathway relevance"],
    ["Tier 3", "organism/molecule has immunomodulatory literature"],
    ["Tier 4", "animal model evidence"],
    ["Tier 5", "translational/drug-like candidate"],
  ] as const;

  return (
    <div>
      <SectionTitle>Evidence Ladder</SectionTitle>
      <div className="mt-3 space-y-2">
        {tiers.map(([tier, label], index) => (
          <div
            key={tier}
            className={
              index <= 1
                ? "flex items-center gap-3 rounded-[8px] border border-emerald-200 bg-emerald-50 px-3 py-2"
                : "flex items-center gap-3 rounded-[8px] border border-slate-200 bg-white/70 px-3 py-2"
            }
          >
            <div className="numeric w-12 shrink-0 text-xs font-bold text-slate-900">{tier}</div>
            <div className="text-xs leading-snug text-slate-600">{label}</div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs font-medium text-amber-800">
        Current IntAct-derived hits mostly sit at Tier 0-1 until mechanism, pathway, and model evidence are curated.
      </p>
    </div>
  );
}

function TargetOpportunityLayer({
  targets,
}: {
  targets: TargetOpportunity[];
}) {
  return (
    <div>
      <SectionTitle>Target Runway</SectionTitle>
      <div className="mt-3 space-y-2">
        {targets.slice(0, 6).map((target) => (
          <div
            key={`${target.humanTarget}-${target.rank}`}
            className="rounded-[8px] border border-slate-200 bg-white/75 p-3 shadow-[0_1px_0_rgb(15_23_42/0.03)]"
          >
            <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_110px]">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-slate-950">
                    {target.humanTarget}
                  </span>
                  <DiscoveryBadge tone="slate">rank {target.rank ?? "n/a"}</DiscoveryBadge>
                  {target.approvedInPi || target.fdaApprovedDrugs.length > 0 ? (
                    <DiscoveryBadge tone="green">FDA-backed</DiscoveryBadge>
                  ) : null}
                </div>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500">
                  {target.description ?? "No target description in source dataset."}
                </p>
              </div>
              <div className="numeric text-right text-sm font-bold text-slate-900">
                {formatScore(target.piPriorityScore)}
                <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-400">
                  Pi score
                </div>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
              <MiniStat label="Pathogen hits" value={target.pathogenHitCount} />
              <MiniStat label="Clinical phase" value={phaseLabel(target.clinicalPhaseCode)} />
              <MiniStat
                label="Druggability"
                value={druggabilityLabel(target.druggability)}
              />
            </div>
            {target.fdaApprovedDrugs.length > 0 ? (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {target.fdaApprovedDrugs.slice(0, 3).map((drug) => (
                  <span
                    key={drug}
                    className="rounded-[6px] border border-emerald-200 bg-emerald-50 px-2 py-1 text-[11px] font-medium text-emerald-800"
                  >
                    {drug}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function PathogenMoleculeLayer({
  leads,
}: {
  leads: PathogenMoleculeLead[];
}) {
  return (
    <div>
      <SectionTitle>Lead Board</SectionTitle>
      <div className="mt-3 overflow-hidden rounded-[8px] border border-slate-200 bg-white/80">
        {leads.slice(0, 7).map((lead) => (
          <div
            key={`${lead.humanTarget}-${lead.sourceOrganism}-${lead.moleculeUniprot}`}
            className="grid gap-3 border-b border-slate-100 p-3 last:border-b-0 md:grid-cols-[minmax(0,1fr)_86px]"
          >
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <SourceTypeBadge sourceType={lead.sourceType} />
                <span className="font-semibold text-slate-950">
                  {lead.moleculeUniprot ?? "Unmapped molecule"}
                </span>
                <span className="text-xs text-slate-400">→</span>
                <span className="font-semibold text-slate-700">
                  {lead.humanTarget ?? "unknown target"}
                </span>
              </div>
              <p className="mt-1 truncate text-xs text-slate-500">
                {lead.sourceOrganism ?? "Unknown source organism"}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <DiscoveryBadge tone="amber">needs curation</DiscoveryBadge>
                <DiscoveryBadge tone="slate">Tier 1</DiscoveryBadge>
              </div>
            </div>
            <div className="numeric text-right text-sm font-bold text-slate-900">
              {formatScore(lead.bestIntactMiscore)}
              <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-400">
                IntAct
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DiscoveryHypothesisSplit({
  parasiteCandidate,
  parasiteScanHit,
}: {
  parasiteCandidate: ReturnType<typeof getParasiteCandidate>;
  parasiteScanHit:
    | (typeof parasiteScanHitsByDiseaseId)[keyof typeof parasiteScanHitsByDiseaseId]
    | undefined;
}) {
  return (
    <div className="grid gap-3">
      <div className="rounded-[8px] border border-slate-200 bg-white/75 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
          <Network className="size-4 text-slate-500" />
          Discovery Data
        </div>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Interaction evidence means a nonhuman molecule and a disease-prioritized
          human target co-appear in a curated interaction dataset. It should be
          treated as a dataset-backed lead, not a validated therapy.
        </p>
        {parasiteScanHit ? <CompactScanHit parasiteScanHit={parasiteScanHit} /> : null}
      </div>

      <div className="rounded-[8px] border border-emerald-200 bg-emerald-50/45 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
          <Microscope className="size-4 text-emerald-700" />
          Curated Hypothesis
        </div>
        {parasiteCandidate ? (
          <div className="mt-3 space-y-3">
            <TierBadge tier={parasiteCandidate.evidenceTier}>
              {parasiteCandidate.tierLabel}
            </TierBadge>
            <p className="text-sm leading-relaxed text-slate-700">
              <span className="font-semibold text-slate-950">
                {parasiteCandidate.molecule}
              </span>{" "}
              from <span className="italic">{parasiteCandidate.sourceOrganism}</span>{" "}
              already has a curated rationale for {parasiteCandidate.targetName}.
            </p>
            <ParasiteDetailRow label="Primary literature">
              <div className="flex flex-wrap gap-2">
                {parasiteCandidate.literature.map((item) => (
                  <PillLink key={item.url} href={item.url} title={item.kind}>
                    {item.label}
                  </PillLink>
                ))}
              </div>
            </ParasiteDetailRow>
          </div>
        ) : (
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {[
              "Is the human target disease-relevant beyond rank alone?",
              "Is the interaction functional, or only physical proximity?",
              "Does the molecule mimic, block, or tune immune signaling?",
              "Could a safer analogue be designed from the nonhuman molecule?",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function CompactScanHit({
  parasiteScanHit,
}: {
  parasiteScanHit: NonNullable<
    (typeof parasiteScanHitsByDiseaseId)[keyof typeof parasiteScanHitsByDiseaseId]
  >;
}) {
  return (
    <div className="mt-3 border-t border-slate-200 pt-3 text-xs text-slate-600">
      <div className="font-semibold text-slate-900">
        {parasiteScanHit.pathogenInteractor ?? parasiteScanHit.moleculeHint}
      </div>
      <div className="mt-1">
        {parasiteScanHit.pathogenTaxon} → {parasiteScanHit.targetSymbol}
        {parasiteScanHit.targetRank ? `, rank ${parasiteScanHit.targetRank}` : ""}
      </div>
      {parasiteScanHit.url ? (
        <div className="mt-2">
          <PillLink href={parasiteScanHit.url}>PMID {parasiteScanHit.pmid}</PillLink>
        </div>
      ) : null}
    </div>
  );
}

function DiscoveryBadge({
  children,
  tone,
}: {
  children: ReactNode;
  tone: "green" | "amber" | "blue" | "slate";
}) {
  const className = {
    green: "border-emerald-200 bg-emerald-50 text-emerald-800",
    amber: "border-amber-200 bg-amber-50 text-amber-800",
    blue: "border-sky-200 bg-sky-50 text-sky-800",
    slate: "border-slate-200 bg-slate-50 text-slate-600",
  }[tone];

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.08em] ${className}`}
    >
      {children}
    </span>
  );
}

function SourceTypeBadge({ sourceType }: { sourceType: string }) {
  return (
    <DataTag tone="neutral">
      {sourceType}
    </DataTag>
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
      ? "border-slate-400 bg-slate-100 text-slate-800"
      : "border-slate-300 bg-transparent text-slate-600";

  return (
    <span
      className={`inline-flex items-center rounded-[4px] border px-1.5 py-[2px] text-[10px] font-bold uppercase leading-none tracking-[0.12em] ${className}`}
    >
      {children}
    </span>
  );
}

function MiniStat({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="rounded-[6px] border border-slate-200 bg-slate-50/70 px-2.5 py-2">
      <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
        {label}
      </div>
      <div className="mt-1 truncate font-semibold text-slate-800" title={String(value)}>
        {value}
      </div>
    </div>
  );
}

function ParasiteScanDetail({
  parasiteScanHit,
}: {
  parasiteScanHit: NonNullable<
    (typeof parasiteScanHitsByDiseaseId)[keyof typeof parasiteScanHitsByDiseaseId]
  >;
}) {
  const scanLabel =
    parasiteScanHit.pathogenInteractor ?? parasiteScanHit.moleculeHint;
  const isDatasetVerified =
    parasiteScanHit.status === "dataset-verified-interaction" ||
    parasiteScanHit.evidenceTier === "dataset-verified-interaction";

  return (
    <div className="mt-3">
      <div className="space-y-3">
        <ParasiteDetailRow label={isDatasetVerified ? "Pathogen interactor" : "Candidate"}>
          <span className="font-semibold text-slate-900">
            {scanLabel}
          </span>
          <span className="text-slate-500">
            {" "}
            {isDatasetVerified ? "HPIDB interaction" : "target-first scan hit"}
          </span>
        </ParasiteDetailRow>

        {parasiteScanHit.pathogenTaxon ? (
          <ParasiteDetailRow label="Source organism">
            {parasiteScanHit.pathogenTaxon}
          </ParasiteDetailRow>
        ) : null}

        <ParasiteDetailRow label="Target">
          <span className="font-semibold text-slate-900">
            {parasiteScanHit.targetSymbol}
          </span>
          {parasiteScanHit.targetRank ? (
            <span className="text-slate-500">
              {" "}
              / Open Targets rank {parasiteScanHit.targetRank}
            </span>
          ) : null}
        </ParasiteDetailRow>

        {parasiteScanHit.interactionType ? (
          <ParasiteDetailRow label="Interaction">
            {parasiteScanHit.interactionType}
          </ParasiteDetailRow>
        ) : null}

        {parasiteScanHit.interactionMethod ? (
          <ParasiteDetailRow label="Method">
            {parasiteScanHit.interactionMethod}
          </ParasiteDetailRow>
        ) : null}

        <ParasiteDetailRow label="Evidence">
          {parasiteScanHit.title ??
            parasiteScanHit.datasetSource ??
            parasiteScanHit.status}
        </ParasiteDetailRow>

        {parasiteScanHit.url ? (
          <ParasiteDetailRow label="Primary literature">
            <PillLink href={parasiteScanHit.url}>
              PMID {parasiteScanHit.pmid}
            </PillLink>
          </ParasiteDetailRow>
        ) : null}
      </div>
      <p className="mt-4 text-xs font-medium text-amber-800">
        {isDatasetVerified
          ? "Dataset-backed HPIDB interaction; still requires manual review before treating as a therapeutic candidate."
          : "Discovery scan result; requires manual curation before treating as verified."}
      </p>
    </div>
  );
}

function SectionTitle({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "candidate" | "pathogen";
}) {
  return (
    <h3
      className={`text-[10.5px] font-bold uppercase tracking-[0.22em] antialiased [text-wrap:balance] ${
        tone === "candidate"
          ? "text-emerald-700"
          : tone === "pathogen"
            ? "text-slate-400"
            : "text-slate-400/90"
      }`}
    >
      {children}
    </h3>
  );
}

function InlineMeta({ children }: { children: ReactNode }) {
  return (
    <span className="tabular-nums text-[13px] font-medium text-slate-500">{children}</span>
  );
}

function ParasiteDetailRow({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <div className="grid gap-1 text-sm md:grid-cols-[146px_minmax(0,1fr)] md:gap-5">
      <div className="font-semibold text-slate-500">{label}</div>
      <div className="min-w-0 leading-relaxed text-slate-700">{children}</div>
    </div>
  );
}

function TierBadge({
  children,
  tier,
}: {
  children: ReactNode;
  tier: "A" | "B";
}) {
  return (
    <span
      className={
        tier === "A"
          ? "inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-emerald-700"
          : "inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-amber-800"
      }
    >
      Tier {tier}: {children}
    </span>
  );
}

function DrugItem({
  name,
  modality,
  company,
}: {
  name: string;
  modality?: string;
  company?: string;
}) {
  return (
    <span
      className="guideline-drug-badge"
      title={[modalityLabel(modality), company].filter(Boolean).join(" / ")}
    >
      <span className="modality-icon-fallback">
        <Circle className="size-3" />
      </span>
      <span>{name}</span>
    </span>
  );
}

function PillLink({
  children,
  href,
  title,
}: {
  children: ReactNode;
  href?: string;
  title?: string;
}) {
  if (!href) {
    return (
      <span
        className="company-badge"
        title={title}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      className="company-badge"
      href={href}
      rel="noreferrer"
      target="_blank"
      title={title}
    >
      {children}
      <span className="company-link-icon">↗</span>
    </a>
  );
}

function modalityIcon(modality?: string) {
  if (modality === "SM") return Pill;
  if (modality === "AB") return Syringe;
  if (modality === "GT") return Dna;
  if (modality === "OTH") return FlaskConical;
  return Circle;
}

function modalityLabel(modality?: string) {
  if (modality === "SM") return "Small molecule / oral or conventional drug";
  if (modality === "AB") return "Antibody or biologic";
  if (modality === "GT") return "Gene or cell therapy";
  if (modality === "OTH") return "Other modality";
  return "Modality not specified";
}

function formatScore(value?: number | null) {
  if (value === undefined || value === null) return "n/a";
  return value >= 10 ? value.toFixed(0) : value.toFixed(2);
}

function phaseLabel(value?: string | null) {
  if (!value || value === "N") return "none";
  if (value === "A") return "approved";
  return value;
}

function druggabilityLabel(value: Record<string, number>) {
  const category = value.druggable_category_score;
  const pockets = value.pdb_druggable_pocket_count;
  if (category && pockets) return `${category}/5, ${pockets} pockets`;
  if (category) return `${category}/5`;
  if (pockets) return `${pockets} pockets`;
  return "unknown";
}

function parseUnmetNeeds(value?: string) {
  return (value ?? "")
    .split("\n")
    .map((line) => line.replace(/^[-*\u2022]\s*/, "").trim())
    .filter(Boolean);
}
