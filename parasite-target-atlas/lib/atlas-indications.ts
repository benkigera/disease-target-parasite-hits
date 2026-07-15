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
import {
  pathogenDiscoveryByDiseaseId,
  type PathogenDiscoveryProfile,
  type PathogenMoleculeLead,
} from "@/lib/pathogen-discovery";

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

const discoveryProfileAliases: Record<string, string> = {
  "beh-et-s-disease": "behcet-s-disease",
  "sj-gren-syndrome": "sjogren-syndrome",
};

const pipelineDiseasesByName = new Map(
  (diseaseTargetPathogenMap as PipelineDiseaseTargetMap[]).map((disease) => [
    disease.disease_name.toLowerCase(),
    disease,
  ])
);

export const atlasIndications: AtlasIndication[] = baseIndications.map((indication) => {
  const pipelineDisease = pipelineDiseasesByName.get(indication.name.toLowerCase());
  if (!pipelineDisease) {
    const profileId = discoveryProfileAliases[indication.id] ?? indication.id;
    const profile = pathogenDiscoveryByDiseaseId[profileId];

    return {
      ...indication,
      targetExplorer: profile
        ? createDiscoveryExplorer(profile)
        : createEmptyExplorer(),
    };
  }

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

function createDiscoveryExplorer(
  profile: PathogenDiscoveryProfile
): TargetExplorerData {
  const leadsByTarget = new Map<string | null, PathogenMoleculeLead[]>(
    profile.targetOpportunities.map((target) => [target.humanTarget, []])
  );

  for (const lead of profile.moleculeLeads) {
    const leads = leadsByTarget.get(lead.humanTarget);
    if (leads) leads.push(lead);
  }

  const maxHitCount = Math.max(
    1,
    ...profile.targetOpportunities.map((target) => target.pathogenHitCount)
  );
  const baseTargets = profile.targetOpportunities.map((target, index) => {
    const symbol = target.humanTarget ?? `TARGET-${index + 1}`;
    const leads = leadsByTarget.get(target.humanTarget) ?? [];
    const associationScore = Math.max(
      0,
      Math.min(1, (target.piPriorityScore ?? 0) / 5)
    );
    const hitDensity = target.pathogenHitCount / maxHitCount;

    return {
      targetId: symbol,
      symbol,
      approvedName: target.description ?? symbol,
      openTargetsRank: target.rank ?? index + 1,
      associationScore,
      viralInformedRank: index + 1,
      rankGain: 0,
      viralInformedScore: associationScore * 0.7 + hitDensity * 0.3,
      viralMoleculeHitCount: target.pathogenHitCount,
      viralSourceCount: new Set(
        leads.map((lead) => lead.sourceOrganism).filter(Boolean)
      ).size,
      supportingInteractionCount: leads.reduce(
        (total, lead) => total + lead.interactionCount,
        0
      ),
      viralMoleculeHits: leads.map((lead) => ({
        name: lead.moleculeUniprot,
        source: lead.sourceOrganism,
        taxid: null,
        uniprotIds: lead.moleculeUniprot,
        publicationIds: lead.evidence.join(", ") || null,
        sourceDatabase: lead.sourceType.toUpperCase(),
        confidenceScore:
          lead.bestIntactMiscore === null
            ? null
            : String(lead.bestIntactMiscore),
      })),
    } satisfies EnhancedTarget;
  });

  const viralRerankedTargets = [...baseTargets]
    .sort(
      (a, b) =>
        b.viralInformedScore - a.viralInformedScore ||
        a.openTargetsRank - b.openTargetsRank
    )
    .map((target, index) => ({
      ...target,
      viralInformedRank: index + 1,
      rankGain: target.openTargetsRank - (index + 1),
    }));
  const rerankedById = new Map(
    viralRerankedTargets.map((target) => [target.targetId, target])
  );
  const topTargets = baseTargets.map(
    (target) => rerankedById.get(target.targetId) ?? target
  );

  return {
    topTargets,
    viralRerankedTargets,
    highestViralHitTargets: [...topTargets].sort(
      (a, b) =>
        b.viralMoleculeHitCount - a.viralMoleculeHitCount ||
        a.openTargetsRank - b.openTargetsRank
    ),
    targetCount: profile.targetCount,
    targetsWithViralHits: profile.targetsWithPathogenHits,
    viralMoleculeHitCount: topTargets.reduce(
      (total, target) => total + target.viralMoleculeHitCount,
      0
    ),
    description:
      "Ranked disease targets with pathogen interaction evidence from the discovery layer.",
  };
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
