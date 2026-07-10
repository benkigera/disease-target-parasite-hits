export function StatusLegend() {
  return (
    <div className="flex flex-wrap items-center gap-6 text-[13px] text-[var(--color-text-muted)]">
      <div className="flex items-center gap-2">
        <span className="size-2.5 rounded-full bg-[var(--color-candidate)]" />
        Curated candidate
      </div>
      <div className="flex items-center gap-2">
        <span className="size-2.5 rounded-full bg-[var(--color-empty)]" />
        Target-first scan hit
      </div>
    </div>
  );
}
