"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";

type FilterBarProps = {
  search: string;
  searchSuggestions: SearchSuggestion[];
  onSearchChange: (value: string) => void;
};

export type SearchSuggestion = {
  id: string;
  kind: "Therapeutic areas" | "Diseases";
  label: string;
  meta: string;
  value: string;
};

export function FilterBar({
  search,
  searchSuggestions,
  onSearchChange,
}: FilterBarProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const therapeuticAreaSuggestions = searchSuggestions.filter(
    (suggestion) => suggestion.kind === "Therapeutic areas"
  );
  const diseaseSuggestions = searchSuggestions.filter(
    (suggestion) => suggestion.kind === "Diseases"
  );
  const showSuggestions = searchOpen && search.trim().length > 0;

  return (
    <div className="grid min-w-0 gap-3 bg-[var(--color-page)] py-3">
      <form
        className="grid min-w-0 gap-2 sm:grid-cols-[minmax(0,1fr)_72px] sm:gap-3"
        onSubmit={(event) => event.preventDefault()}
      >
        <div
          className="relative min-w-0"
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setSearchOpen(false);
            }
          }}
          onFocus={() => setSearchOpen(true)}
        >
          <label className="flex min-h-10 min-w-0 items-center rounded-[6px] border border-slate-400 bg-white px-4 py-2 text-sm text-slate-700 shadow-[0_1px_0_rgb(15_23_42/0.03)] transition-colors hover:border-slate-500 focus-within:border-slate-500 focus-within:ring-0">
            <span className="sr-only">Search indications</span>
            <input
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search for diseases or therapeutic areas..."
              className="min-w-0 flex-1 border-0 bg-transparent p-0 text-[17px] leading-6 text-slate-900 outline-none placeholder:text-slate-400 focus:outline-none focus:ring-0"
            />
            {search ? (
              <button
                aria-label="Clear search"
                className="interactive-link ml-3 inline-flex size-7 shrink-0 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                onClick={() => {
                  onSearchChange("");
                  setSearchOpen(false);
                }}
                type="button"
              >
                <X className="size-4" />
              </button>
            ) : null}
          </label>

          {showSuggestions ? (
            <div className="absolute left-0 top-[calc(100%+8px)] z-50 max-h-[360px] w-full overflow-y-auto rounded-[8px] border border-slate-200 bg-white shadow-[0_20px_45px_rgb(15_23_42/0.12)]">
              {therapeuticAreaSuggestions.length > 0 ? (
                <SuggestionGroup
                  onPick={(value) => {
                    onSearchChange(value);
                    setSearchOpen(false);
                  }}
                  suggestions={therapeuticAreaSuggestions}
                />
              ) : null}
              {diseaseSuggestions.length > 0 ? (
                <SuggestionGroup
                  onPick={(value) => {
                    onSearchChange(value);
                    setSearchOpen(false);
                  }}
                  suggestions={diseaseSuggestions}
                />
              ) : null}
              {searchSuggestions.length === 0 ? (
                <div className="px-5 py-4 text-sm text-slate-500">
                  No exact matches in the current dataset.
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        <button
          className="search-action-button interactive-link inline-flex h-[38px] min-w-[70px] items-center justify-center rounded-[4px] border border-[#e5e5e5] bg-white px-3 py-2 text-[14px] font-medium leading-none text-[#1a1a1a] shadow-[0_1px_0_rgb(15_23_42/0.025)] transition-[background-color,border-color,box-shadow,scale] duration-150 ease-out hover:border-[#d8d8d8] hover:bg-[#fbfbfa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 active:scale-[0.96]"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

function SuggestionGroup({
  onPick,
  suggestions,
}: {
  onPick: (value: string) => void;
  suggestions: SearchSuggestion[];
}) {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <div className="px-5 pt-4 text-[13px] font-bold uppercase tracking-[0.12em] text-slate-500">
        {suggestions[0]?.kind}
      </div>
      <div className="py-2">
        {suggestions.map((suggestion) => (
          <button
            className="grid w-full grid-cols-[minmax(0,1fr)_180px] items-center gap-4 px-5 py-3 text-left hover:bg-slate-50"
            key={suggestion.id}
            onMouseDown={(event) => {
              event.preventDefault();
              onPick(suggestion.value);
            }}
            type="button"
          >
            <span className="truncate font-serif text-[20px] leading-7 text-slate-900">
              {suggestion.label}
            </span>
            <span className="truncate text-right font-serif text-[16px] font-semibold text-stone-500">
              {suggestion.meta}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
