import { cn } from "@/lib/utils";

type ScoreBarProps = {
  label: string;
  abbreviation: string;
  value: number;
  color?: "score" | "candidate" | "selected" | "warning";
  className?: string;
};

export function ScoreBar({
  label,
  abbreviation,
  value,
  color = "score",
  className,
}: ScoreBarProps) {
  const colorVar = `var(--color-${color})`;

  return (
    <div className={cn("grid grid-cols-[150px_1fr_58px] items-center gap-4", className)}>
      <div className="text-[13px] font-medium text-[var(--color-text)]">
        {label} <span className="text-[var(--color-text-muted)]">({abbreviation})</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-[var(--color-surface-muted)]">
        <div
          className="h-full rounded-full"
          style={{ width: `${(value / 7) * 100}%`, background: colorVar }}
        />
      </div>
      <div className="numeric text-right text-[13px] font-semibold text-[var(--color-text)]">
        {value} <span className="font-normal text-[var(--color-text-muted)]">/7</span>
      </div>
    </div>
  );
}
