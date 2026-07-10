"use client";

import { ChevronDown } from "lucide-react";
import { Fragment, useState } from "react";
import { InlineIndicationDetail } from "@/components/indication-detail";
import {
  IndicationTableRow,
  indicationsGridClass,
} from "@/components/indication-table-row";
import type { ConvokeImmunologyRecord } from "@/lib/indications";
import { cn } from "@/lib/utils";

type IndicationsTableProps = {
  indications: ConvokeImmunologyRecord[];
  onOpenTargetLandscape?: (id: string) => void;
  parasiteFilter: string;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
};

type SortOption =
  | "Sort: composite score"
  | "Sort: condition"
  | "Sort: burden"
  | "Sort: efficacy gap"
  | "Sort: convenience"
  | "Sort: lowest pipeline"
  | "Sort: prevalence"
  | "Sort: safety burden";

const sortableColumns: {
  label: string;
  mobileLabel: string;
  sort: SortOption;
  align?: "left" | "center";
  hideOnMobile?: boolean;
  tooltip?: string;
}[] = [
  { label: "Condition", mobileLabel: "Condition", sort: "Sort: condition", align: "left" },
  { label: "Rank", mobileLabel: "Rank", sort: "Sort: composite score", hideOnMobile: true },
  {
    label: "Burden",
    mobileLabel: "Bur",
    sort: "Sort: burden",
    tooltip:
      "Impact of the disease on how a patient feels, functions, or survives assuming they receive no treatment. Ranges from asymptomatic with no impact (0), to a life expectancy of <1 year or total functional dependence (7). Not used to calculate the overall ranking.",
  },
  {
    label: "Efficacy",
    mobileLabel: "Eff",
    sort: "Sort: efficacy gap",
    tooltip:
      "Same survival/function rubric as burden, but assuming current standard of care (SoC) treatment; higher means more residual burden remains despite treatment.",
  },
  {
    label: "Safety",
    mobileLabel: "Saf",
    sort: "Sort: safety burden",
    tooltip:
      "Scores the toxicity, severe-event risk, monitoring, and discontinuation of the standard of care. Scoring ranges from placebo-like (0) to treatment-limiting and potentially life-threatening (7).",
  },
  {
    label: "Convenience",
    mobileLabel: "Con",
    sort: "Sort: convenience",
    tooltip:
      "Scores route, visit frequency, monitoring, and self-administration complexity, from one-time curative (0) or occasional care through to life- and freedom-dominating regimens (7).",
  },
  {
    label: "Pipeline",
    mobileLabel: "Pip",
    sort: "Sort: lowest pipeline",
    tooltip:
      "Number of active clinical-stage development programs in the indication, weighted by stage of development and continuously mapped across the dataset from no active clinical-stage programs (0) to the highest number of active programs (7).",
  },
];

export function IndicationsTableHeader({
  sort,
  onSortChange,
}: {
  sort: string;
  onSortChange: (value: string) => void;
}) {
  const [activeTooltip, setActiveTooltip] = useState<{
    text: string;
    left: number;
    top: number;
  } | null>(null);

  const showTooltip = (element: HTMLButtonElement, text?: string) => {
    if (!text) {
      setActiveTooltip(null);
      return;
    }

    const rect = element.getBoundingClientRect();
    setActiveTooltip({
      text,
      left: Math.min(window.innerWidth - 16, Math.max(16, rect.left + rect.width / 2)),
      top: rect.bottom + 8,
    });
  };

  return (
    <div
      className={cn(
        indicationsGridClass,
        "relative z-20 border-b-2 border-slate-800 bg-[var(--color-page)] py-3 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-500 sm:tracking-[0.14em]"
      )}
      onMouseLeave={() => setActiveTooltip(null)}
    >
      {sortableColumns.map((column) => (
        <button
          className={cn(
            "interactive-link flex min-w-0 items-center gap-1.5 py-1 uppercase hover:text-slate-900",
            column.align === "left" ? "justify-start text-left" : "justify-center text-center",
            column.hideOnMobile && "hidden sm:flex",
            sort === column.sort && "text-slate-700"
          )}
          key={column.label}
          onBlur={() => setActiveTooltip(null)}
          onFocus={(event) => showTooltip(event.currentTarget, column.tooltip)}
          onMouseEnter={(event) => showTooltip(event.currentTarget, column.tooltip)}
          onClick={() => onSortChange(column.sort)}
          type="button"
        >
          <span className="sm:hidden">{column.mobileLabel}</span>
          <span className="hidden truncate sm:inline">{column.label}</span>
          {sort === column.sort ? <ChevronDown className="size-3.5 shrink-0" /> : null}
        </button>
      ))}
      {activeTooltip ? (
        <div
          className="fixed z-[100] max-w-[min(32rem,calc(100vw-2rem))] border border-[#6d655f] bg-[#4d4845] px-3 py-2 text-left text-[13px] font-semibold normal-case leading-[1.28] tracking-normal text-white shadow-[2px_2px_0_rgb(0_0_0/0.28)]"
          style={{
            left: activeTooltip.left,
            top: activeTooltip.top,
            transform: "translateX(-50%)",
          }}
        >
          {activeTooltip.text}
        </div>
      ) : null}
    </div>
  );
}

export function IndicationsTable({
  indications,
  onOpenTargetLandscape,
  parasiteFilter,
  selectedId,
  onSelect,
}: IndicationsTableProps) {
  return (
    <section className="w-full max-w-full overflow-x-hidden">
      {indications.map((indication, index) => {
        return (
          <Fragment key={indication.id}>
            <IndicationTableRow
              indication={indication}
              isSelected={indication.id === selectedId}
              onSelect={onSelect}
              rank={index + 1}
            />

            {indication.id === selectedId ? (
              <div className="expanded-detail w-full min-w-0 max-w-full border-b border-slate-200">
                <InlineIndicationDetail
                  indication={indication}
                  onOpenTargetLandscape={onOpenTargetLandscape}
                  parasiteFilter={parasiteFilter}
                />
              </div>
            ) : null}
          </Fragment>
        );
      })}
    </section>
  );
}
