import "server-only";

import type {
  EnhancedTarget,
  TargetExplorerData,
} from "@/components/disease-target-explorer";
import diseaseTargetPathogenMap from "@/data/disease_target_pathogen_map.json";
import {
  indications as baseIndications,
  type ConvokeImmunologyRecord,
} from "@/lib/indications";

type PipelineDiseaseTargetMap = {
  disease_name: string;
  disease_id: string;
  top_targets: {
    approved_name: string;
    approved_symbol?: string;
    id: string;
    score: number;
    open_target_rank: number;
    pathogen_hits: {
      pathogen_molecule?: string;
      pathogen_source_organism?: string;
      pathogen_id?: string;
      pathogen_taxid?: string;
      source_database?: string;
      confidence?: string;
      publication_ids?: string[];
    }[];
    association_score: number;
    viral_molecule_hit_count: number;
    viral_source_taxa_count: number;
    supporting_interaction_count: number;
    viral_informed_score: number;
    viral_informed_rank: number;
    rank_gain: number;
  }[];
};

export type AtlasIndication = ConvokeImmunologyRecord & {
  openTargetsDiseaseId?: string;
  targetExplorer: TargetExplorerData;
};

type AtlasTargetSource = {
  diseaseId: string;
  mapping: "direct" | "proxy";
};

const targetSourceByIndicationId: Record<string, AtlasTargetSource> = {
  "graft-versus-host-disease": { diseaseId: "MONDO_0013730", mapping: "direct" },
  dermatomyositis: { diseaseId: "MONDO_0016367", mapping: "direct" },
  "adult-onset-still-s-disease": { diseaseId: "MONDO_0019355", mapping: "direct" },
  "scleroderma-limited": { diseaseId: "MONDO_0019340", mapping: "proxy" },
  polymyositis: { diseaseId: "MONDO_0019127", mapping: "direct" },
  "juvenile-idiopathic-arthritis": { diseaseId: "MONDO_0011429", mapping: "direct" },
  "antisynthetase-syndrome": { diseaseId: "MONDO_0019344", mapping: "direct" },
  "igg4-related-disease": { diseaseId: "MONDO_0017287", mapping: "direct" },
  "scleroderma-systemic": { diseaseId: "MONDO_0019340", mapping: "direct" },
  "iga-vasculitis": { diseaseId: "EFO_1000965", mapping: "direct" },
  "kawasaki-disease": { diseaseId: "MONDO_0012727", mapping: "direct" },
  "sapho-syndrome": { diseaseId: "MONDO_0019266", mapping: "direct" },
  "sj-gren-syndrome": { diseaseId: "MONDO_0010030", mapping: "direct" },
  "takayasu-arteritis": { diseaseId: "MONDO_0017991", mapping: "direct" },
  "hypersensitivity-vasculitis": { diseaseId: "MONDO_0018882", mapping: "proxy" },
  "mixed-connective-tissue-disease": { diseaseId: "MONDO_0005854", mapping: "direct" },
  "reactive-arthritis": { diseaseId: "MONDO_0017376", mapping: "direct" },
  "palindromic-rheumatism": { diseaseId: "MONDO_0008383", mapping: "proxy" },
  "polyarteritis-nodosa": { diseaseId: "MONDO_0019170", mapping: "direct" },
  "giant-cell-arteritis": { diseaseId: "MONDO_0008538", mapping: "direct" },
  "eosinophilic-granulomatosis-with-polyangiitis": { diseaseId: "MONDO_0015943", mapping: "direct" },
  "beh-et-s-disease": { diseaseId: "MONDO_0007191", mapping: "direct" },
  cryoglobulinemia: { diseaseId: "MONDO_0005576", mapping: "direct" },
  "multisystem-inflammatory-syndrome-in-children": { diseaseId: "MONDO_0100163", mapping: "direct" },
  "cogan-syndrome": { diseaseId: "MONDO_0018882", mapping: "proxy" },
  "jaccoud-arthropathy": { diseaseId: "MONDO_0007915", mapping: "proxy" },
  "mikulicz-disease": { diseaseId: "MONDO_0017287", mapping: "proxy" },
  "autoimmune-lymphoproliferative-syndrome": { diseaseId: "MONDO_0017979", mapping: "direct" },
  "heerfordt-syndrome": { diseaseId: "MONDO_0019338", mapping: "proxy" },
  "eosinophilia-myalgia-syndrome": { diseaseId: "MONDO_0004941", mapping: "direct" },
  "granulomatous-myositis": { diseaseId: "MONDO_0021167", mapping: "proxy" },
  "relapsing-polychondritis": { diseaseId: "MONDO_0019125", mapping: "direct" },
  "rheumatoid-arthritis": { diseaseId: "MONDO_0008383", mapping: "direct" },
  "lupus-erythematosus-systemic": { diseaseId: "MONDO_0007915", mapping: "direct" },
  "polymyalgia-rheumatica": { diseaseId: "MONDO_0019735", mapping: "direct" },
  "ankylosing-spondylitis": { diseaseId: "MONDO_0005306", mapping: "direct" },
  "psoriatic-arthritis": { diseaseId: "MONDO_0011849", mapping: "direct" },
  "felty-syndrome": { diseaseId: "MONDO_0007603", mapping: "direct" },
};

const pipelineDiseasesById = new Map(
  (diseaseTargetPathogenMap as PipelineDiseaseTargetMap[]).map((disease) => [
    disease.disease_id,
    disease,
  ])
);

export const atlasIndications: AtlasIndication[] = baseIndications.map((indication) => {
  const targetSource = targetSourceByIndicationId[indication.id];
  const pipelineDisease = targetSource
    ? pipelineDiseasesById.get(targetSource.diseaseId)
    : undefined;
  if (!pipelineDisease || !targetSource) return { ...indication, targetExplorer: createEmptyExplorer() };

  const topTargets: EnhancedTarget[] = pipelineDisease.top_targets.map((target) => ({
    targetId: target.id,
    symbol: target.approved_symbol ?? target.id,
    approvedName: target.approved_name,
    openTargetsRank: target.open_target_rank,
    associationScore: target.association_score,
    viralInformedRank: target.viral_informed_rank,
    rankGain: target.rank_gain,
    viralInformedScore: target.viral_informed_score,
    viralMoleculeHitCount: target.viral_molecule_hit_count,
    viralSourceCount: target.viral_source_taxa_count,
    supportingInteractionCount: target.supporting_interaction_count,
    viralMoleculeHits: target.pathogen_hits.map((hit) => ({
      name: hit.pathogen_molecule ?? null,
      source: hit.pathogen_source_organism ?? null,
      taxid: hit.pathogen_taxid ?? null,
      uniprotIds: hit.pathogen_id ?? null,
      publicationIds: hit.publication_ids?.map((id) => `PMID ${id}`).join(", ") ?? null,
      sourceDatabase: hit.source_database ?? null,
      confidenceScore: hit.confidence ?? null,
    })),
  }));

  const viralRerankedTargets = [...topTargets].sort(
    (a, b) => a.viralInformedRank - b.viralInformedRank
  );
  const highestViralHitTargets = [...topTargets].sort(
    (a, b) => b.viralMoleculeHitCount - a.viralMoleculeHitCount
  );

  return {
    ...indication,
    openTargetsDiseaseId: pipelineDisease.disease_id,
    targetExplorer: {
      topTargets,
      viralRerankedTargets,
      highestViralHitTargets,
      targetCount: topTargets.length,
      targetsWithViralHits: topTargets.filter(
        (target) => target.viralMoleculeHitCount > 0
      ).length,
      viralMoleculeHitCount: topTargets.reduce(
        (total, target) => total + target.viralMoleculeHitCount,
        0
      ),
      sourceDiseaseName: pipelineDisease.disease_name,
      sourceMapping: targetSource.mapping,
      description:
        targetSource.mapping === "proxy"
          ? `Open Targets parent-disease proxy: ${pipelineDisease.disease_name}. Tier A viral direct-interaction evidence from the disease-target-virus pipeline.`
          : "Tier A viral direct-interaction evidence from the disease-target-virus pipeline.",
    },
  };
});

export function findTargetLandscape(pathSegment: string) {
  let decodedSegment = pathSegment;

  try {
    decodedSegment = decodeURIComponent(pathSegment);
  } catch {
    // Keep the original segment so malformed URLs resolve to not-found.
  }

  const normalizedSegment = decodedSegment.trim().toLocaleLowerCase();

  return atlasIndications.find(
    (indication) =>
      [indication.name, indication.id].some(
        (value) => value.toLocaleLowerCase() === normalizedSegment
      )
  );
}

function createEmptyExplorer(): TargetExplorerData {
  return {
    topTargets: [],
    viralRerankedTargets: [],
    highestViralHitTargets: [],
    targetCount: 0,
    targetsWithViralHits: 0,
    viralMoleculeHitCount: 0,
    description: "No ranked targets are available in the current discovery layer.",
  };
}
