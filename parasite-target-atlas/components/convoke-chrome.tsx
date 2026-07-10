import { Download, ExternalLink } from "lucide-react";

export function ConvokeChrome() {
  return (
    <header className="app-chrome">
      <div className="flex h-[52px] items-center justify-between px-5">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-items-center border border-white/85">
              <span className="block size-3.5 rounded-full border-2 border-white/85" />
            </span>
            <span className="text-[15px] font-semibold uppercase tracking-[0.18em] leading-none">
              Parasite Target Atlas
            </span>
          </div>
          <span className="h-6 w-px bg-white/25" />
          <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-white/70">
            Intelligence
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-[13px] font-semibold text-white/70 md:flex">
          <a className="inline-flex items-center gap-1 hover:text-white" href="https://insights.convoke.bio/unmet-needs">
            About
            <ExternalLink className="size-3" />
          </a>
          <a
            className="inline-flex items-center gap-1 hover:text-white"
            href="https://github.com/benkigera/disease-target-parasite-hits/blob/main/README.md"
          >
            Pipeline
            <ExternalLink className="size-3" />
          </a>
          <a
            className="inline-flex items-center gap-1 rounded-[6px] border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-emerald-100 hover:border-emerald-300/50 hover:bg-emerald-400/15 hover:text-white"
            download
            href="/parasite-target-search.skill"
          >
            Curator skill
            <Download className="size-3" />
          </a>
        </nav>
      </div>
      <div className="border-t border-white/10 bg-[#272727] px-5 py-2 text-[13px] text-white/80">
        Unmet Needs Index
      </div>
    </header>
  );
}
