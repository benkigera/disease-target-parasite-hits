"use client";

import { useMemo, useState } from "react";
import { TargetExplorerPanel } from "@/components/disease-target-explorer";
import {
  compositeScore,
  IMMUNOLOGY_RECORD_COUNT,
  SOURCE_IMMUNOLOGY_RECORD_COUNT,
  SOURCE_URL,
} from "@/lib/indications";
import { enhancedIndications as indications } from "@/lib/enhanced_indications";
import { ConvokeChrome } from "@/components/convoke-chrome";
import { FilterBar, type SearchSuggestion } from "@/components/filter-bar";
import {
  IndicationsTable,
  IndicationsTableHeader,
} from "@/components/indications-table";
import { PageHeader } from "@/components/page-header";
import { parasiteCandidatesByDiseaseId } from "@/lib/parasite-candidates";
import { parasiteScanHitsByDiseaseId } from "@/lib/parasite-scan-hits";

export function WhiteSpaceExplorer() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [landscapeId, setLandscapeId] = useState<string | null>(null);

  const searchSuggestions = useMemo<SearchSuggestion[]>(() => {
    const searchTerm = search.trim().toLowerCase();
    if (!searchTerm) return [];

    const therapeuticAreaSuggestions: SearchSuggestion[] = "immunology".includes(searchTerm)
      ? [
          {
            id: "ta-immunology",
            kind: "Therapeutic areas",
            label: "Immunology",
            meta: "Therapeutic area",
            value: "Immunology",
          },
        ]
      : [];

    const diseaseSuggestions = indications
      .filter((indication) =>
        [indication.name, indication.id]
          .join(" ")
          .toLowerCase()
          .includes(searchTerm)
      )
      .slice(0, 6)
      .map<SearchSuggestion>((indication) => ({
        id: indication.id,
        kind: "Diseases",
        label: indication.name,
        meta: indication.therapeuticArea,
        value: indication.name,
      }));

    return [...therapeuticAreaSuggestions, ...diseaseSuggestions];
  }, [search]);

  const visibleIndications = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();
    const searched = searchTerm
      ? indications.filter((indication) => {
          const parasiteCandidate = parasiteCandidatesByDiseaseId[indication.id];
          const scanHit = parasiteScanHitsByDiseaseId[indication.id];
          return [
            indication.name,
            indication.id,
            indication.therapeuticArea,
            indication.description,
            indication.keyUnmetNeeds,
            parasiteCandidate?.molecule,
            parasiteCandidate?.sourceOrganism,
            parasiteCandidate?.referenceLabel,
            scanHit?.moleculeHint,
            scanHit?.pathogenInteractor,
            scanHit?.pathogenTaxon,
            scanHit?.datasetSource,
            scanHit?.targetSymbol,
            scanHit?.title,
          ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase()
            .includes(searchTerm);
        })
      : indications;

    const sorted = [...searched].sort((a, b) => {
      return compositeScore(b) - compositeScore(a);
    });

    return sorted;
  }, [search]);
  const landscapeIndication = landscapeId
    ? indications.find((indication) => indication.id === landscapeId)
    : null;

  if (landscapeIndication?.targetExplorer) {
    return (
      <main className="min-h-screen overflow-x-hidden bg-[var(--color-page)] text-[var(--color-text)]">
        <ConvokeChrome />
        <div className="mx-auto flex w-full max-w-[1720px] flex-col px-4 pb-12 pt-5 sm:px-6 lg:px-8">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4 border-b border-[#b8b0a4] bg-[#ede8e0] px-5 py-4">
            <div className="min-w-0">
              <button
                className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#8a8178] transition hover:text-[#1a1a1a]"
                onClick={() => setLandscapeId(null)}
                type="button"
              >
                Back to dataset
              </button>
              <h1 className="mt-3 truncate font-serif text-3xl font-normal leading-none text-[#1a1a1a] sm:text-5xl">
                {landscapeIndication.name}
              </h1>
            </div>
            <div className="flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#5a5a5a]">
              <span className="border border-[#b8b0a4] bg-transparent px-3 py-1">
                {landscapeIndication.prevalence}
              </span>
              <span className="border border-[#b8b0a4] bg-transparent px-3 py-1">
                {landscapeIndication.targetExplorer.targetCount.toLocaleString()} targets
              </span>
              <span className="border border-[#b8b0a4] bg-transparent px-3 py-1">
                {landscapeIndication.targetExplorer.viralMoleculeHitCount.toLocaleString()} hits
              </span>
            </div>
          </div>

          <TargetExplorerPanel explorer={landscapeIndication.targetExplorer} />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-page)] text-[var(--color-text)]">
      <ConvokeChrome />
      <div className="mx-auto flex w-full max-w-none flex-col px-5 pb-12 pt-8">
        <PageHeader />

        <div aria-hidden="true" className="h-6" />
        <div className="sticky-index-controls -mx-5 border-b border-slate-200 px-5">
          <FilterBar
            search={search}
            searchSuggestions={searchSuggestions}
            onSearchChange={setSearch}
          />
          <div className="flex items-center justify-between gap-4 border-t border-slate-200 py-2 text-[13px] text-slate-500">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[12px] font-medium text-orange-900">
              <span className="rounded-full bg-orange-200 px-1.5 py-0.5 text-[10px] font-bold uppercase leading-none">
                TA
              </span>
              Immunology
            </span>
            <span>
              Showing {visibleIndications.length} indication
              {visibleIndications.length === 1 ? "" : "s"}
            </span>
          </div>
          <div className="overflow-x-auto">
            <IndicationsTableHeader sort="Sort: composite score" onSortChange={() => {}} />
          </div>
        </div>

        <IndicationsTable
          indications={visibleIndications}
          onOpenTargetLandscape={setLandscapeId}
          parasiteFilter="All autoimmune diseases"
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        <footer
          id="references"
          className="mt-2 flex flex-col justify-between gap-2 text-[11px] font-medium text-slate-400 md:flex-row md:items-center"
        >
          <span>
            Dataset: {IMMUNOLOGY_RECORD_COUNT} autoimmune records retained from{" "}
            {SOURCE_IMMUNOLOGY_RECORD_COUNT} Convoke Immunology records.
          </span>
          <span>
            Curation method:{" "}
            <a
              className="font-semibold text-[var(--color-candidate-strong)]"
              href="https://github.com/benkigera/disease-target-parasite-hits/blob/main/README.md"
            >
              disease-target-parasite-hits README
            </a>
          </span>
          <span>
            Source:{" "}
            <a className="font-semibold text-[var(--color-candidate-strong)]" href={SOURCE_URL}>
              Convoke Unmet Needs Index
            </a>
          </span>
        </footer>
      </div>
    </main>
  );
}
