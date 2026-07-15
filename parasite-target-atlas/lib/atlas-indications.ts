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
  targetExplorer?: TargetExplorerData;
};

const pipelineDiseasesByName = new Map(
  (diseaseTargetPathogenMap as PipelineDiseaseTargetMap[]).map((disease) => [
    disease.disease_name.toLowerCase(),
    disease,
  ])
);

export const atlasIndications: AtlasIndication[] = baseIndications.map((indication) => {
  const pipelineDisease = pipelineDiseasesByName.get(indication.name.toLowerCase());
  if (!pipelineDisease) return indication;

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
      description:
        "Tier A viral direct-interaction evidence from the disease-target-virus pipeline.",
    },
  };
});

export function diseasePath(id: string) {
  return `/${id}`;
}

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
