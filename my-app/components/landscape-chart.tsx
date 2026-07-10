"use client";

import type { ConvokeImmunologyRecord } from "@/lib/indications";
import { getParasiteCandidate } from "@/lib/parasite-candidates";
import { cn } from "@/lib/utils";

type LandscapeChartProps = {
  indications: ConvokeImmunologyRecord[];
  selectedId: string;
  onSelect: (id: string) => void;
};

const gridLines = [0, 1, 2, 3, 4, 5, 6, 7];

const prevalenceSize = {
  "Ultra-Orphan": 16,
  Rare: 18,
  Uncommon: 24,
  Common: 32,
  Widespread: 40,
};

export function LandscapeChart({
  indications,
  selectedId,
  onSelect,
}: LandscapeChartProps) {
  return (
    <section className="surface-card rounded-lg p-5">
      <div className="mb-5">
        <h2 className="font-display text-xl text-[var(--color-text)]">Indications landscape</h2>
        <p className="mt-1 text-xs text-[var(--color-text-muted)]">
          X axis = efficacy gap. Y axis = unmet pipeline space (7 - PIP).
        </p>
      </div>

      <div className="chart-grid">
        <div className="chart-y-label">Pipeline space</div>
        <div className="relative h-[360px] min-w-0 pl-11 pr-7 pt-3">
          <div className="absolute inset-x-11 bottom-9 top-3 border-b border-l border-[var(--color-border)]">
            {gridLines.map((line) => (
              <div key={`h-${line}`} className="absolute inset-x-0 border-t border-dashed border-[var(--color-border-soft)]" style={{ bottom: `${(line / 7) * 100}%` }} />
            ))}
            {gridLines.map((line) => (
              <div key={`v-${line}`} className="absolute inset-y-0 border-l border-dashed border-[var(--color-border-soft)]" style={{ left: `${(line / 7) * 100}%` }} />
            ))}

            {indications.map((indication) => {
              const selected = indication.id === selectedId;
              const size = prevalenceSize[indication.prevalence];
              const hasCandidate = Boolean(getParasiteCandidate(indication.id));

              return (
                <button
                  key={indication.id}
                  type="button"
                  onClick={() => onSelect(indication.id)}
                  className={cn(
                    "group absolute -translate-x-1/2 translate-y-1/2 rounded-full outline-none transition-transform duration-200 ease-out active:scale-[0.96]",
                    selected
                      ? "z-20 ring-2 ring-[var(--color-selected)] ring-offset-4 ring-offset-[var(--color-surface)]"
                      : "z-10 hover:scale-110 focus-visible:ring-2 focus-visible:ring-[var(--color-score)] focus-visible:ring-offset-2"
                  )}
                  style={{
                    left: `${(indication.scores.burdenTreated / 7) * 100}%`,
                    bottom: `${(indication.pipelineActivity / 7) * 100}%`,
                    width: size,
                    height: size,
                  }}
                  aria-label={`Select ${indication.name}`}
                >
                  <span
                    className={cn(
                      "block size-full rounded-full border shadow-sm",
                      hasCandidate ? "bubble-candidate" : "bubble-empty",
                      selected && "bubble-selected"
                    )}
                  />
                  <span className="popover-surface pointer-events-none absolute left-1/2 top-0 hidden -translate-x-1/2 -translate-y-[calc(100%+10px)] whitespace-nowrap rounded-md border border-[var(--color-border-soft)] px-2 py-1 text-[11px] font-medium text-[var(--color-text)] shadow-lg group-hover:block">
                    {indication.name}
                  </span>
                </button>
              );
            })}
          </div>

          {gridLines.map((line) => (
            <span
              key={`yl-${line}`}
              className="absolute -translate-y-1/2 text-[12px] text-[var(--color-text-muted)]"
              style={{ bottom: `calc(36px + ${(line / 7) * 82}%)`, left: 0 }}
            >
              {line}
            </span>
          ))}
          {gridLines.map((line) => (
            <span
              key={`xl-${line}`}
              className="absolute -translate-x-1/2 text-[12px] text-[var(--color-text-muted)]"
              style={{ left: `calc(44px + ${(line / 7) * 84}%)`, bottom: 0 }}
            >
              {line}
            </span>
          ))}
          <span className="absolute bottom-0 left-0 text-[12px] text-[var(--color-text-muted)]">Low</span>
          <span className="absolute bottom-0 right-0 text-[12px] text-[var(--color-text-muted)]">High</span>
        </div>
        <div />
        <div className="mt-2 text-center text-base font-semibold text-[var(--color-text)]">
          Efficacy gap <span className="text-[var(--color-text-muted)]">(burden treated)</span>
        </div>
      </div>

      <p className="mt-5 text-center text-[13px] text-[var(--color-text-muted)]">
        Top-right quadrant = highest unmet need + lowest competitive pipeline.
      </p>
    </section>
  );
}
