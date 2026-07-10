export function PageHeader() {
  return (
    <header className="pb-1">
      <div className="min-w-0">
        <div className="mb-6 flex items-center gap-3">
          <ParasiteTargetMark />
          <div className="min-w-0">
            <div className="text-[13px] font-semibold uppercase leading-none tracking-[0.18em] text-slate-950">
              Parasite Target Atlas
            </div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Autoimmune x parasite target intelligence
            </div>
          </div>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
          Target-first parasite immunomodulation / ranked autoimmune disease biology
        </p>
        <h1 className="mt-2 max-w-[760px] font-display text-[30px] font-semibold leading-[1.02] tracking-[-0.025em] text-slate-950 md:text-[38px]">
          Parasite-derived immunomodulator map
        </h1>
        <p className="mt-3 max-w-[760px] text-[14px] leading-6 text-slate-500">
          Rank autoimmune unmet need, pathogen-derived molecules, and target
          evidence in one working index.
        </p>
      </div>
    </header>
  );
}

function ParasiteTargetMark() {
  return (
    <div
      aria-hidden="true"
      className="grid size-11 shrink-0 place-items-center border border-slate-950 bg-white text-slate-950 shadow-[3px_3px_0_rgb(15_23_42/0.16)]"
    >
      <svg
        className="size-8"
        fill="none"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8.5 20.5C11.2 23 15.9 22.8 19 20.1C21.9 17.6 22.5 13.2 20.3 10.7C18.6 8.8 15.2 8.7 13.4 10.6C11.9 12.2 12 14.7 13.5 16.1C14.9 17.4 17.1 17.3 18.4 16"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.2"
        />
        <path
          d="M7.5 12.5L11.1 14.1M7.9 17.5L11.7 17.2M10.3 24L12.3 20.7M22.2 8.8L24.5 6.2M23.5 13.7L27.3 13.2M22.1 19.1L25.2 21.2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.35"
        />
        <circle cx="19.3" cy="10.9" r="1.2" fill="currentColor" />
        <circle cx="17.7" cy="15.7" r="1.1" fill="currentColor" />
      </svg>
    </div>
  );
}
