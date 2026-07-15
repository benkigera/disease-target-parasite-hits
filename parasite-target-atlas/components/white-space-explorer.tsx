"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  TargetExplorerPanel,
} from "@/components/disease-target-explorer";
import {
  compositeScore,
  IMMUNOLOGY_RECORD_COUNT,
  SOURCE_IMMUNOLOGY_RECORD_COUNT,
  SOURCE_URL,
} from "@/lib/indications";
import { ConvokeChrome } from "@/components/convoke-chrome";
import { FilterBar, type SearchSuggestion } from "@/components/filter-bar";
import {
  IndicationsTable,
  IndicationsTableHeader,
} from "@/components/indications-table";
import { InlineIndicationDetail } from "@/components/indication-detail";
import { PageHeader } from "@/components/page-header";
import { atlasIndications as indications } from "@/lib/atlas-indications";
import { parasiteCandidatesByDiseaseId } from "@/lib/parasite-candidates";
import { parasiteScanHitsByDiseaseId } from "@/lib/parasite-scan-hits";

export function WhiteSpaceExplorer({
  initialLandscapeId = null,
}: {
  initialLandscapeId?: string | null;
}) {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

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
  const landscapeIndication = initialLandscapeId
    ? indications.find((indication) => indication.id === initialLandscapeId)
    : null;

  if (landscapeIndication) {
    return (
      <main className="min-h-screen overflow-x-hidden bg-[var(--color-page)] text-[var(--color-text)]">
        <ConvokeChrome />
        <div className="mx-auto flex w-full max-w-[1920px] flex-col px-3 pb-4 pt-3 sm:px-4 lg:px-5">
          {!landscapeIndication.targetExplorer ? (
            <div className="mb-3 flex min-h-14 flex-wrap items-center justify-between gap-x-5 gap-y-2 border border-slate-300 bg-white px-3 py-2 sm:px-4">
              <div className="flex min-w-0 items-center gap-3">
                <Link
                  aria-label="Back to dataset"
                  className="grid size-8 shrink-0 place-items-center border border-slate-300 text-base text-slate-500 transition hover:border-slate-500 hover:text-slate-900"
                  href="/"
                >
                  ←
                </Link>
                <div className="min-w-0">
                  <div className="text-[8px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Disease landscape
                  </div>
                  <h1 className="mt-0.5 truncate text-[clamp(1.3rem,2.4vw,2rem)] font-semibold leading-none tracking-[-0.035em] text-[#17201d]">
                    {landscapeIndication.name}
                  </h1>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
                <span className="border border-slate-300 bg-[#f3f5f1] px-2.5 py-1.5">
                  Prevalence · {landscapeIndication.prevalence}
                </span>
              </div>
            </div>
          ) : null}

          {landscapeIndication.targetExplorer ? (
            <TargetExplorerPanel
              diseaseName={landscapeIndication.name}
              explorer={landscapeIndication.targetExplorer}
            />
          ) : (
            <div className="border border-slate-200 bg-white">
              <InlineIndicationDetail
                indication={landscapeIndication}
                parasiteFilter="All autoimmune diseases"
                showExploreLink={false}
              />
            </div>
          )}
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
