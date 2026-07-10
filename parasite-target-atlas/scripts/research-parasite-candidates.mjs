import { mkdir, writeFile } from "node:fs/promises";
import { readFile } from "node:fs/promises";
import { dirname } from "node:path";

const EUTILS = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils";
const OPEN_TARGETS_GRAPHQL = "https://api.platform.opentargets.org/api/v4/graphql";
const TOP_TARGET_LIMIT = Number(process.env.TOP_TARGET_LIMIT ?? "100");
const PARASITE_RETMAX = Number(process.env.PARASITE_RETMAX ?? "6");
const REQUEST_DELAY_MS = Number(process.env.REQUEST_DELAY_MS ?? "350");
const OUTPUT_PATH =
  process.env.OUTPUT_PATH ?? "research-output/parasite-candidate-scan.json";
const INDICATIONS_PATH = process.env.INDICATIONS_PATH ?? "lib/indications.ts";

const parasiteTerms = [
  "poxvirus",
  "herpesvirus",
  "adenovirus",
  "viral protein",
  "viral cytokine",
  "viral chemokine",
  "viral decoy receptor",
  "virus-encoded",
  "virus encoded",
  "helminth",
  "helminths",
  "nematode",
  "trematode",
  "parasite",
  "parasite-derived",
  "excretory-secretory",
  "excretory secretory",
  "ES-62",
  "Acanthocheilonema",
  "Heligmosomoides",
  "Schistosoma",
  "Fasciola",
  "Trichinella",
  "Ancylostoma",
  "Necator",
  "cystatin",
  "AvCystatin",
  "Sj16",
  "omega-1",
  "IPSE",
  "AIP-2",
  "HpARI",
  "HpBARI",
  "Evasin",
  "tick saliva",
  "tick salivary",
];

const moleculeHints = [
  "vTNFR",
  "CrmB",
  "CrmC",
  "CrmD",
  "CrmE",
  "ES-62",
  "Evasin-1",
  "Evasin-3",
  "FhHDM-1",
  "Fh12",
  "omega-1",
  "IPSE",
  "Sj16",
  "Sm16",
  "AvCystatin",
  "cystatin",
  "AIP-2",
  "HpARI",
  "HpBARI",
  "HES",
  "SEA",
  "LNFPIII",
];

const targetHints = [
  "TLR4",
  "MyD88",
  "CCL3",
  "MIP-1 alpha",
  "CXCL8",
  "IL-33",
  "ST2",
  "TSLP",
  "NLRP3",
  "IL-17A",
  "GM-CSF",
  "Treg",
  "Th17",
];

const parasiteMoleculeTerms = [
  "parasite-derived",
  "helminth-derived",
  "tick-derived",
  "virus-derived",
  "virus-encoded",
  "secreted",
  "salivary",
  "excretory-secretory",
  "immunomodulatory",
  "inhibitor",
  "antagonist",
  "binding protein",
  "decoy receptor",
  ...moleculeHints,
];

function normalizeDiseaseName(name) {
  return name
    .replace(/\s*\|\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function pubmedTermForDisease(name) {
  const clean = normalizeDiseaseName(name);
  const variants = new Set([clean]);

  if (clean.startsWith("Allergy ")) {
    variants.add(clean.replace(/^Allergy /, "") + " allergy");
    variants.add("food allergy");
  }

  if (clean.includes("Scleroderma")) variants.add("systemic sclerosis");
  if (clean.includes("Sjögren")) variants.add("Sjogren syndrome");
  if (clean.includes("Behçet")) variants.add("Behcet disease");
  if (clean.includes("Graft-versus-host")) variants.add("graft versus host disease");

  return [...variants]
    .map((variant) => `"${variant}"[Title/Abstract]`)
    .join(" OR ");
}

function buildQuery(name) {
  const disease = pubmedTermForDisease(name);
  const parasite = parasiteTerms
    .map((term) => `"${term}"[Title/Abstract]`)
    .join(" OR ");

  return `(${disease}) AND (${parasite})`;
}

function delay(ms = REQUEST_DELAY_MS) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loadIndications() {
  const source = await readFile(INDICATIONS_PATH, "utf8");
  if (INDICATIONS_PATH.endsWith(".json")) {
    const parsed = JSON.parse(source);
    return Array.isArray(parsed) ? parsed : parsed.indications;
  }

  const match = source.match(
    /export const indications: ConvokeImmunologyRecord\[\] = (\[[\s\S]*?\n\]);/
  );

  if (!match) {
    throw new Error(`Could not find indications array in ${INDICATIONS_PATH}`);
  }

  return JSON.parse(match[1]);
}

function opentargetsDiseaseId(indication) {
  return indication.opentargetsUrl?.split("/").filter(Boolean).at(-1) ?? null;
}

function buildTargetParasiteQuery(target) {
  const targetTerms = [
    target.approvedSymbol,
    target.approvedName,
  ]
    .filter(Boolean)
    .slice(0, 6)
    .map((term) => `"${term}"[Title/Abstract]`)
    .join(" OR ");

  const parasite = [...new Set(parasiteTerms)]
    .map((term) => `"${term}"[Title/Abstract]`)
    .join(" OR ");

  const molecule = [...new Set(parasiteMoleculeTerms)]
    .map((term) => `"${term}"[Title/Abstract]`)
    .join(" OR ");

  return `(${targetTerms}) AND (${parasite}) AND (${molecule})`;
}

function extractMolecule(text) {
  const found = moleculeHints.find((hint) =>
    new RegExp(`\\b${hint.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(text)
  );

  return found ?? null;
}

function extractTarget(text) {
  const found = targetHints.find((hint) =>
    new RegExp(`\\b${hint.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(text)
  );

  return found ?? null;
}

function hasMoleculeSignal(article) {
  return Boolean(article.moleculeHint);
}

async function getJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${url}`);
  }
  return response.json();
}

async function postGraphql(query, variables) {
  const response = await fetch(OPEN_TARGETS_GRAPHQL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${OPEN_TARGETS_GRAPHQL}`
    );
  }

  const data = await response.json();
  if (data.errors?.length) {
    throw new Error(JSON.stringify(data.errors, null, 2));
  }

  return data.data;
}

async function fetchOpenTargets(diseaseId, size = TOP_TARGET_LIMIT) {
  const query = `
    query DiseaseTargets($efoId: String!, $size: Int!) {
      disease(efoId: $efoId) {
        id
        name
        associatedTargets(page: { index: 0, size: $size }) {
          count
          rows {
            score
            target {
              id
              approvedSymbol
              approvedName
              biotype
            }
          }
        }
      }
    }
  `;

  const data = await postGraphql(query, { efoId: diseaseId, size });
  const rows = data.disease?.associatedTargets?.rows ?? [];

  return rows.map((row, index) => ({
    rank: index + 1,
    score: row.score,
    id: row.target.id,
    approvedSymbol: row.target.approvedSymbol,
    approvedName: row.target.approvedName,
    biotype: row.target.biotype,
  }));
}

async function searchPubMed(query) {
  const url = new URL(`${EUTILS}/esearch.fcgi`);
  url.searchParams.set("db", "pubmed");
  url.searchParams.set("term", query);
  url.searchParams.set("retmode", "json");
  url.searchParams.set("retmax", String(PARASITE_RETMAX));
  url.searchParams.set("sort", "relevance");

  const data = await getJson(url);
  return {
    count: Number(data.esearchresult?.count ?? 0),
    ids: data.esearchresult?.idlist ?? [],
  };
}

async function summarizePubMed(ids) {
  if (ids.length === 0) return {};

  const url = new URL(`${EUTILS}/esummary.fcgi`);
  url.searchParams.set("db", "pubmed");
  url.searchParams.set("id", ids.join(","));
  url.searchParams.set("retmode", "json");

  const data = await getJson(url);
  return data.result ?? {};
}

async function main() {
  const indications = await loadIndications();
  const results = [];

  for (const [indicationIndex, indication] of indications.entries()) {
    const openTargetsDiseaseId = opentargetsDiseaseId(indication);
    console.error(
      `[${indicationIndex + 1}/${indications.length}] ${indication.name} (${openTargetsDiseaseId ?? "no Open Targets id"})`
    );

    const rankedTargets = openTargetsDiseaseId
      ? await fetchOpenTargets(openTargetsDiseaseId, TOP_TARGET_LIMIT)
      : [];

    const targetSearches = [];
    const targetErrors = [];

    for (const target of rankedTargets) {
      const query = buildTargetParasiteQuery(target);
      try {
        const { count, ids } = await searchPubMed(query);
        const summaries = await summarizePubMed(ids);
        const articles = ids.map((id) => {
          const article = summaries[id];
          const title = article?.title ?? "";
          const journal = article?.source ?? "";
          const year = article?.pubdate?.slice(0, 4) ?? "";
          const searchableText = `${title} ${journal}`;
          return {
            pmid: id,
            title,
            journal,
            year,
            url: `https://pubmed.ncbi.nlm.nih.gov/${id}/`,
            moleculeHint: extractMolecule(searchableText),
            targetHint: extractTarget(searchableText) ?? target.approvedSymbol,
          };
        });

        if (count > 0) {
          console.error(
            `  hit rank ${target.rank}: ${target.approvedSymbol} (${count})`
          );
          targetSearches.push({
            target,
            query,
            hitCount: count,
            articles,
          });
        }
      } catch (error) {
        targetErrors.push({
          target,
          query,
          error: error instanceof Error ? error.message : String(error),
        });
      }

      await delay();
    }

    const candidateTargetHit =
      targetSearches.find((search) => search.articles.some(hasMoleculeSignal)) ??
      null;
    const bestTargetHit = candidateTargetHit ?? targetSearches[0] ?? null;
    const bestArticle =
      bestTargetHit?.articles.find(hasMoleculeSignal) ??
      bestTargetHit?.articles[0] ??
      null;

    results.push({
      id: indication.id,
      name: indication.name,
      openTargetsDiseaseId,
      openTargetsTargetLimit: TOP_TARGET_LIMIT,
      reviewStatus: candidateTargetHit
        ? "review-ranked-target-molecule-hit"
        : bestTargetHit
          ? "review-ranked-target-broad-hit"
        : rankedTargets.length > 0
          ? "no-parasite-hit-in-top-ranked-targets"
          : "no-open-targets-ranked-targets",
      proposedCandidateFields: {
        molecule: bestArticle?.moleculeHint ?? null,
        sourceOrganism: null,
        targetName: bestTargetHit?.target.approvedSymbol ?? null,
        targetRank: bestTargetHit?.target.rank ?? null,
        targetScore: bestTargetHit?.target.score ?? null,
        bindingMode: null,
        affinityValue: "Not reported",
        affinityAssay: "Not reported",
        structureStatus: "Not reviewed",
        pdbIds: [],
      },
      rankedTargets: rankedTargets.slice(0, 10),
      targetSearches,
      targetErrors,
    });

    await delay();
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    totalIndications: indications.length,
    openTargetsTargetLimit: TOP_TARGET_LIMIT,
    parasiteRetmax: PARASITE_RETMAX,
    requestDelayMs: REQUEST_DELAY_MS,
    results,
  };

  await mkdir(dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, `${JSON.stringify(payload, null, 2)}\n`);
  console.error(`Wrote ${OUTPUT_PATH}`);
  console.log(
    JSON.stringify(
      {
        generatedAt: payload.generatedAt,
        totalIndications: payload.totalIndications,
        outputPath: OUTPUT_PATH,
        statuses: Object.fromEntries(
          Object.entries(
            results.reduce((counts, result) => {
              counts[result.reviewStatus] = (counts[result.reviewStatus] ?? 0) + 1;
              return counts;
            }, {})
          ).sort()
        ),
      },
      null,
      2
    )
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
