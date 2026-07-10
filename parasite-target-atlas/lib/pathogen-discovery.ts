export type SourceType = "virus" | "helminth" | "tick" | "unknown";

export type TargetOpportunity = {
  humanTarget: string | null;
  rank: number | null;
  piPriorityScore: number | null;
  approvedInPi: boolean;
  clinicalPhaseCode: string | null;
  fdaApprovedDrugs: string[];
  clinicalPhaseDrugs: string[];
  druggability: Record<string, number>;
  description: string | null;
  pathogenHitCount: number;
  sourceTypes: string[];
};

export type PathogenMoleculeLead = {
  humanTarget: string | null;
  targetRank: number | null;
  targetScore: number | null;
  approvedTarget: boolean;
  approvedDrugs: string[];
  clinicalPhaseCode: string | null;
  sourceOrganism: string | null;
  sourceType: SourceType;
  moleculeUniprot: string | null;
  interactionCount: number;
  bestIntactMiscore: number | null;
  evidence: string[];
};

export type PathogenDiscoveryProfile = {
  disease: string;
  piCovered: boolean;
  piTrait: string | null;
  piTraitName: string | null;
  mappingNote: string | null;
  targetCount: number;
  fdaBackedTargetCount: number;
  targetsWithPathogenHits: number;
  fdaBackedTargetsWithPathogenHits: number;
  sourceTypeCounts: Record<SourceType, number>;
  needsCurationCount: number;
  targetOpportunities: TargetOpportunity[];
  fdaBackedTargets: TargetOpportunity[];
  moleculeLeads: PathogenMoleculeLead[];
};

export const pathogenDiscoveryByDiseaseId: Record<string, PathogenDiscoveryProfile> = {
  "polyarteritis-nodosa": {
    "disease": "Polyarteritis nodosa",
    "piCovered": true,
    "piTrait": "AAV",
    "piTraitName": "ANCA-Associated Vasculitis",
    "mappingNote": "proxy: ANCA-associated vasculitis",
    "targetCount": 99,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 51,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 293,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 293,
    "targetOpportunities": [
      {
        "humanTarget": "CD74",
        "rank": 1,
        "piPriorityScore": 5.0,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 15,
          "pdb_druggable_pocket_count": 1
        },
        "description": "CD74 molecule",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DRA",
        "rank": 2,
        "piPriorityScore": 4.91399095372244,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 100,
          "pdb_druggable_pocket_count": 21
        },
        "description": "major histocompatibility complex, class II, DR alpha",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DRB1",
        "rank": 3,
        "piPriorityScore": 4.90524517296757,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 88,
          "pdb_druggable_pocket_count": 18
        },
        "description": "major histocompatibility complex, class II, DR beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DQA1",
        "rank": 4,
        "piPriorityScore": 4.54103054543056,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ alpha 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DPB1",
        "rank": 5,
        "piPriorityScore": 4.45146323829567,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 7,
          "pdb_druggable_pocket_count": 2
        },
        "description": "major histocompatibility complex, class II, DP beta 1",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DMA",
        "rank": 6,
        "piPriorityScore": 4.29352093221776,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 5,
          "pdb_druggable_pocket_count": 1
        },
        "description": "major histocompatibility complex, class II, DM alpha",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DQB1",
        "rank": 7,
        "piPriorityScore": 4.27942484500621,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ beta 1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "AP4B1",
        "rank": 8,
        "piPriorityScore": 4.17514322110908,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 1,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 4 subunit beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "AP1M2",
        "rank": 9,
        "piPriorityScore": 4.14938303243698,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 1,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 1 subunit mu 2",
        "pathogenHitCount": 4,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "AP1S2",
        "rank": 10,
        "piPriorityScore": 4.12257983094881,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 1 subunit sigma 2",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "AP1M1",
        "rank": 11,
        "piPriorityScore": 4.10636161622112,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 1,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 1 subunit mu 1",
        "pathogenHitCount": 3,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "BCL2",
        "rank": 12,
        "piPriorityScore": 4.10306267231158,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 6,
          "druggable_domain_score": 0,
          "pdb_count": 20,
          "pdb_druggable_pocket_count": 12
        },
        "description": "BCL2, apoptosis regulator",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "SEC24A",
        "rank": 13,
        "piPriorityScore": 4.03940168347407,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 15,
          "pdb_druggable_pocket_count": 13
        },
        "description": "SEC24 homolog A, COPII coat complex component",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "MS4A1",
        "rank": 14,
        "piPriorityScore": 4.01677264608822,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 3,
          "pdb_druggable_pocket_count": 0
        },
        "description": "membrane spanning 4-domains A1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      }
    ],
    "fdaBackedTargets": [],
    "moleculeLeads": [
      {
        "humanTarget": "CD74",
        "targetRank": 1,
        "targetScore": 5.0,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Epstein-Barr virus (strain B95-8)",
        "sourceType": "virus",
        "moleculeUniprot": "Q3KSU8",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 17446270",
          "imex:IM-20435",
          "mint:MINT-6769080"
        ]
      },
      {
        "humanTarget": "CD74",
        "targetRank": 1,
        "targetScore": 5.0,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Puerto Rico/8/1934 H1N1)",
        "sourceType": "virus",
        "moleculeUniprot": "P03431",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 21994455",
          "imex:IM-26754"
        ]
      },
      {
        "humanTarget": "HLA-DRA",
        "targetRank": 2,
        "targetScore": 4.91399095372244,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Aichi/2/1968 H3N2)",
        "sourceType": "virus",
        "moleculeUniprot": "P03437",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 11877480"
        ]
      },
      {
        "humanTarget": "HLA-DPB1",
        "targetRank": 5,
        "targetScore": 4.45146323829567,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "HLA-DPB1",
        "targetRank": 5,
        "targetScore": 4.45146323829567,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P69479",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID unassigned2293",
          "imex:IM-27782"
        ]
      },
      {
        "humanTarget": "HLA-DQB1",
        "targetRank": 7,
        "targetScore": 4.27942484500621,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 16",
        "sourceType": "virus",
        "moleculeUniprot": "P03129",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 18",
        "sourceType": "virus",
        "moleculeUniprot": "P06788",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 1a",
        "sourceType": "virus",
        "moleculeUniprot": "P06465",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 32",
        "sourceType": "virus",
        "moleculeUniprot": "P36827",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M1",
        "targetRank": 11,
        "targetScore": 4.10636161622112,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human immunodeficiency virus type 1 group M subtype B (isolate HXB2) (HIV-1)",
        "sourceType": "virus",
        "moleculeUniprot": "P04578",
        "interactionCount": 2,
        "bestIntactMiscore": 0.46,
        "evidence": [
          "imex:IM-17346",
          "PMID 22190034"
        ]
      },
      {
        "humanTarget": "AP1M1",
        "targetRank": 11,
        "targetScore": 4.10636161622112,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Varicella-zoster virus (strain Oka vaccine) (HHV-3)",
        "sourceType": "virus",
        "moleculeUniprot": "Q9J3M8",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-30341",
          "PMID 40739040"
        ]
      }
    ]
  },
  "multisystem-inflammatory-syndrome-in-children": {
    "disease": "Multisystem inflammatory syndrome in children",
    "piCovered": false,
    "piTrait": null,
    "piTraitName": null,
    "mappingNote": "no Pi trait mapping in current curated map",
    "targetCount": 0,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 0,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 0,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 0,
    "targetOpportunities": [],
    "fdaBackedTargets": [],
    "moleculeLeads": []
  },
  "giant-cell-arteritis": {
    "disease": "Giant cell arteritis",
    "piCovered": true,
    "piTrait": "AAV",
    "piTraitName": "ANCA-Associated Vasculitis",
    "mappingNote": "proxy: ANCA-associated vasculitis",
    "targetCount": 99,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 51,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 293,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 293,
    "targetOpportunities": [
      {
        "humanTarget": "CD74",
        "rank": 1,
        "piPriorityScore": 5.0,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 15,
          "pdb_druggable_pocket_count": 1
        },
        "description": "CD74 molecule",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DRA",
        "rank": 2,
        "piPriorityScore": 4.91399095372244,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 100,
          "pdb_druggable_pocket_count": 21
        },
        "description": "major histocompatibility complex, class II, DR alpha",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DRB1",
        "rank": 3,
        "piPriorityScore": 4.90524517296757,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 88,
          "pdb_druggable_pocket_count": 18
        },
        "description": "major histocompatibility complex, class II, DR beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DQA1",
        "rank": 4,
        "piPriorityScore": 4.54103054543056,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ alpha 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DPB1",
        "rank": 5,
        "piPriorityScore": 4.45146323829567,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 7,
          "pdb_druggable_pocket_count": 2
        },
        "description": "major histocompatibility complex, class II, DP beta 1",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DMA",
        "rank": 6,
        "piPriorityScore": 4.29352093221776,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 5,
          "pdb_druggable_pocket_count": 1
        },
        "description": "major histocompatibility complex, class II, DM alpha",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DQB1",
        "rank": 7,
        "piPriorityScore": 4.27942484500621,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ beta 1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "AP4B1",
        "rank": 8,
        "piPriorityScore": 4.17514322110908,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 1,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 4 subunit beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "AP1M2",
        "rank": 9,
        "piPriorityScore": 4.14938303243698,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 1,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 1 subunit mu 2",
        "pathogenHitCount": 4,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "AP1S2",
        "rank": 10,
        "piPriorityScore": 4.12257983094881,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 1 subunit sigma 2",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "AP1M1",
        "rank": 11,
        "piPriorityScore": 4.10636161622112,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 1,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 1 subunit mu 1",
        "pathogenHitCount": 3,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "BCL2",
        "rank": 12,
        "piPriorityScore": 4.10306267231158,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 6,
          "druggable_domain_score": 0,
          "pdb_count": 20,
          "pdb_druggable_pocket_count": 12
        },
        "description": "BCL2, apoptosis regulator",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "SEC24A",
        "rank": 13,
        "piPriorityScore": 4.03940168347407,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 15,
          "pdb_druggable_pocket_count": 13
        },
        "description": "SEC24 homolog A, COPII coat complex component",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "MS4A1",
        "rank": 14,
        "piPriorityScore": 4.01677264608822,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 3,
          "pdb_druggable_pocket_count": 0
        },
        "description": "membrane spanning 4-domains A1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      }
    ],
    "fdaBackedTargets": [],
    "moleculeLeads": [
      {
        "humanTarget": "CD74",
        "targetRank": 1,
        "targetScore": 5.0,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Epstein-Barr virus (strain B95-8)",
        "sourceType": "virus",
        "moleculeUniprot": "Q3KSU8",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 17446270",
          "imex:IM-20435",
          "mint:MINT-6769080"
        ]
      },
      {
        "humanTarget": "CD74",
        "targetRank": 1,
        "targetScore": 5.0,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Puerto Rico/8/1934 H1N1)",
        "sourceType": "virus",
        "moleculeUniprot": "P03431",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 21994455",
          "imex:IM-26754"
        ]
      },
      {
        "humanTarget": "HLA-DRA",
        "targetRank": 2,
        "targetScore": 4.91399095372244,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Aichi/2/1968 H3N2)",
        "sourceType": "virus",
        "moleculeUniprot": "P03437",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 11877480"
        ]
      },
      {
        "humanTarget": "HLA-DPB1",
        "targetRank": 5,
        "targetScore": 4.45146323829567,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "HLA-DPB1",
        "targetRank": 5,
        "targetScore": 4.45146323829567,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P69479",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID unassigned2293",
          "imex:IM-27782"
        ]
      },
      {
        "humanTarget": "HLA-DQB1",
        "targetRank": 7,
        "targetScore": 4.27942484500621,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 16",
        "sourceType": "virus",
        "moleculeUniprot": "P03129",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 18",
        "sourceType": "virus",
        "moleculeUniprot": "P06788",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 1a",
        "sourceType": "virus",
        "moleculeUniprot": "P06465",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 32",
        "sourceType": "virus",
        "moleculeUniprot": "P36827",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M1",
        "targetRank": 11,
        "targetScore": 4.10636161622112,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human immunodeficiency virus type 1 group M subtype B (isolate HXB2) (HIV-1)",
        "sourceType": "virus",
        "moleculeUniprot": "P04578",
        "interactionCount": 2,
        "bestIntactMiscore": 0.46,
        "evidence": [
          "imex:IM-17346",
          "PMID 22190034"
        ]
      },
      {
        "humanTarget": "AP1M1",
        "targetRank": 11,
        "targetScore": 4.10636161622112,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Varicella-zoster virus (strain Oka vaccine) (HHV-3)",
        "sourceType": "virus",
        "moleculeUniprot": "Q9J3M8",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-30341",
          "PMID 40739040"
        ]
      }
    ]
  },
  "graft-versus-host-disease": {
    "disease": "Graft-versus-host disease",
    "piCovered": false,
    "piTrait": null,
    "piTraitName": null,
    "mappingNote": "no Pi trait mapping in current curated map",
    "targetCount": 0,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 0,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 0,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 0,
    "targetOpportunities": [],
    "fdaBackedTargets": [],
    "moleculeLeads": []
  },
  "felty-syndrome": {
    "disease": "Felty syndrome",
    "piCovered": false,
    "piTrait": null,
    "piTraitName": null,
    "mappingNote": "no Pi trait mapping in current curated map",
    "targetCount": 0,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 0,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 0,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 0,
    "targetOpportunities": [],
    "fdaBackedTargets": [],
    "moleculeLeads": []
  },
  "eosinophilic-granulomatosis-with-polyangiitis": {
    "disease": "Eosinophilic granulomatosis with polyangiitis",
    "piCovered": true,
    "piTrait": "AAV",
    "piTraitName": "ANCA-Associated Vasculitis",
    "mappingNote": "proxy: ANCA-associated vasculitis",
    "targetCount": 99,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 51,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 293,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 293,
    "targetOpportunities": [
      {
        "humanTarget": "CD74",
        "rank": 1,
        "piPriorityScore": 5.0,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 15,
          "pdb_druggable_pocket_count": 1
        },
        "description": "CD74 molecule",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DRA",
        "rank": 2,
        "piPriorityScore": 4.91399095372244,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 100,
          "pdb_druggable_pocket_count": 21
        },
        "description": "major histocompatibility complex, class II, DR alpha",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DRB1",
        "rank": 3,
        "piPriorityScore": 4.90524517296757,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 88,
          "pdb_druggable_pocket_count": 18
        },
        "description": "major histocompatibility complex, class II, DR beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DQA1",
        "rank": 4,
        "piPriorityScore": 4.54103054543056,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ alpha 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DPB1",
        "rank": 5,
        "piPriorityScore": 4.45146323829567,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 7,
          "pdb_druggable_pocket_count": 2
        },
        "description": "major histocompatibility complex, class II, DP beta 1",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DMA",
        "rank": 6,
        "piPriorityScore": 4.29352093221776,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 5,
          "pdb_druggable_pocket_count": 1
        },
        "description": "major histocompatibility complex, class II, DM alpha",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DQB1",
        "rank": 7,
        "piPriorityScore": 4.27942484500621,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ beta 1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "AP4B1",
        "rank": 8,
        "piPriorityScore": 4.17514322110908,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 1,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 4 subunit beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "AP1M2",
        "rank": 9,
        "piPriorityScore": 4.14938303243698,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 1,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 1 subunit mu 2",
        "pathogenHitCount": 4,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "AP1S2",
        "rank": 10,
        "piPriorityScore": 4.12257983094881,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 1 subunit sigma 2",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "AP1M1",
        "rank": 11,
        "piPriorityScore": 4.10636161622112,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 1,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 1 subunit mu 1",
        "pathogenHitCount": 3,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "BCL2",
        "rank": 12,
        "piPriorityScore": 4.10306267231158,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 6,
          "druggable_domain_score": 0,
          "pdb_count": 20,
          "pdb_druggable_pocket_count": 12
        },
        "description": "BCL2, apoptosis regulator",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "SEC24A",
        "rank": 13,
        "piPriorityScore": 4.03940168347407,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 15,
          "pdb_druggable_pocket_count": 13
        },
        "description": "SEC24 homolog A, COPII coat complex component",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "MS4A1",
        "rank": 14,
        "piPriorityScore": 4.01677264608822,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 3,
          "pdb_druggable_pocket_count": 0
        },
        "description": "membrane spanning 4-domains A1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      }
    ],
    "fdaBackedTargets": [],
    "moleculeLeads": [
      {
        "humanTarget": "CD74",
        "targetRank": 1,
        "targetScore": 5.0,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Epstein-Barr virus (strain B95-8)",
        "sourceType": "virus",
        "moleculeUniprot": "Q3KSU8",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 17446270",
          "imex:IM-20435",
          "mint:MINT-6769080"
        ]
      },
      {
        "humanTarget": "CD74",
        "targetRank": 1,
        "targetScore": 5.0,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Puerto Rico/8/1934 H1N1)",
        "sourceType": "virus",
        "moleculeUniprot": "P03431",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 21994455",
          "imex:IM-26754"
        ]
      },
      {
        "humanTarget": "HLA-DRA",
        "targetRank": 2,
        "targetScore": 4.91399095372244,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Aichi/2/1968 H3N2)",
        "sourceType": "virus",
        "moleculeUniprot": "P03437",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 11877480"
        ]
      },
      {
        "humanTarget": "HLA-DPB1",
        "targetRank": 5,
        "targetScore": 4.45146323829567,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "HLA-DPB1",
        "targetRank": 5,
        "targetScore": 4.45146323829567,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P69479",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID unassigned2293",
          "imex:IM-27782"
        ]
      },
      {
        "humanTarget": "HLA-DQB1",
        "targetRank": 7,
        "targetScore": 4.27942484500621,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 16",
        "sourceType": "virus",
        "moleculeUniprot": "P03129",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 18",
        "sourceType": "virus",
        "moleculeUniprot": "P06788",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 1a",
        "sourceType": "virus",
        "moleculeUniprot": "P06465",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 32",
        "sourceType": "virus",
        "moleculeUniprot": "P36827",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M1",
        "targetRank": 11,
        "targetScore": 4.10636161622112,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human immunodeficiency virus type 1 group M subtype B (isolate HXB2) (HIV-1)",
        "sourceType": "virus",
        "moleculeUniprot": "P04578",
        "interactionCount": 2,
        "bestIntactMiscore": 0.46,
        "evidence": [
          "imex:IM-17346",
          "PMID 22190034"
        ]
      },
      {
        "humanTarget": "AP1M1",
        "targetRank": 11,
        "targetScore": 4.10636161622112,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Varicella-zoster virus (strain Oka vaccine) (HHV-3)",
        "sourceType": "virus",
        "moleculeUniprot": "Q9J3M8",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-30341",
          "PMID 40739040"
        ]
      }
    ]
  },
  "scleroderma-systemic": {
    "disease": "Scleroderma | systemic",
    "piCovered": true,
    "piTrait": "SSC",
    "piTraitName": "Systemic Scleroderma",
    "mappingNote": "direct: systemic scleroderma",
    "targetCount": 100,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 48,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 273,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 273,
    "targetOpportunities": [
      {
        "humanTarget": "HLA-DQA1",
        "rank": 1,
        "piPriorityScore": 5.0,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ alpha 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "CD74",
        "rank": 2,
        "piPriorityScore": 4.76275349065405,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 15,
          "pdb_druggable_pocket_count": 1
        },
        "description": "CD74 molecule",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DRB1",
        "rank": 3,
        "piPriorityScore": 4.70014076972485,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 88,
          "pdb_druggable_pocket_count": 18
        },
        "description": "major histocompatibility complex, class II, DR beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DRA",
        "rank": 4,
        "piPriorityScore": 4.66110509521219,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 100,
          "pdb_druggable_pocket_count": 21
        },
        "description": "major histocompatibility complex, class II, DR alpha",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DPB1",
        "rank": 5,
        "piPriorityScore": 4.62422612139765,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 7,
          "pdb_druggable_pocket_count": 2
        },
        "description": "major histocompatibility complex, class II, DP beta 1",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DQB1",
        "rank": 6,
        "piPriorityScore": 4.48483470565589,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ beta 1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "STAT4",
        "rank": 7,
        "piPriorityScore": 4.14259083110516,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "signal transducer and activator of transcription 4",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "ITGAX",
        "rank": 8,
        "piPriorityScore": 4.05094076291121,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 1,
          "pdb_count": 8,
          "pdb_druggable_pocket_count": 5
        },
        "description": "integrin subunit alpha X",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "BLK",
        "rank": 9,
        "piPriorityScore": 3.97140087886645,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 1,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "BLK proto-oncogene, Src family tyrosine kinase",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "IRF8",
        "rank": 10,
        "piPriorityScore": 3.94645897208089,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "interferon regulatory factor 8",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "BCKDHA",
        "rank": 11,
        "piPriorityScore": 3.78908171415542,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 24,
          "pdb_druggable_pocket_count": 23
        },
        "description": "branched chain keto acid dehydrogenase E1, alpha polypeptide",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "BCL2",
        "rank": 12,
        "piPriorityScore": 3.77881356544673,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 6,
          "druggable_domain_score": 0,
          "pdb_count": 20,
          "pdb_druggable_pocket_count": 12
        },
        "description": "BCL2, apoptosis regulator",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "PDHB",
        "rank": 13,
        "piPriorityScore": 3.74966345878153,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 7,
          "pdb_druggable_pocket_count": 1
        },
        "description": "pyruvate dehydrogenase E1 beta subunit",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "MS4A1",
        "rank": 14,
        "piPriorityScore": 3.7308928355444,
        "approvedInPi": false,
        "clinicalPhaseCode": "P2",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [
          "RITUXIMAB"
        ],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 3,
          "pdb_druggable_pocket_count": 0
        },
        "description": "membrane spanning 4-domains A1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      }
    ],
    "fdaBackedTargets": [],
    "moleculeLeads": [
      {
        "humanTarget": "CD74",
        "targetRank": 2,
        "targetScore": 4.76275349065405,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Epstein-Barr virus (strain B95-8)",
        "sourceType": "virus",
        "moleculeUniprot": "Q3KSU8",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 17446270",
          "imex:IM-20435",
          "mint:MINT-6769080"
        ]
      },
      {
        "humanTarget": "CD74",
        "targetRank": 2,
        "targetScore": 4.76275349065405,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Puerto Rico/8/1934 H1N1)",
        "sourceType": "virus",
        "moleculeUniprot": "P03431",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 21994455",
          "imex:IM-26754"
        ]
      },
      {
        "humanTarget": "HLA-DRA",
        "targetRank": 4,
        "targetScore": 4.66110509521219,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Aichi/2/1968 H3N2)",
        "sourceType": "virus",
        "moleculeUniprot": "P03437",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 11877480"
        ]
      },
      {
        "humanTarget": "HLA-DPB1",
        "targetRank": 5,
        "targetScore": 4.62422612139765,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "HLA-DPB1",
        "targetRank": 5,
        "targetScore": 4.62422612139765,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P69479",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID unassigned2293",
          "imex:IM-27782"
        ]
      },
      {
        "humanTarget": "HLA-DQB1",
        "targetRank": 6,
        "targetScore": 4.48483470565589,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "STAT4",
        "targetRank": 7,
        "targetScore": 4.14259083110516,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Nipah virus",
        "sourceType": "virus",
        "moleculeUniprot": "P0C1C7",
        "interactionCount": 2,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 28904190",
          "imex:IM-28169"
        ]
      },
      {
        "humanTarget": "STAT4",
        "targetRank": 7,
        "targetScore": 4.14259083110516,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Nipah virus",
        "sourceType": "virus",
        "moleculeUniprot": "Q997F2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 28904190",
          "imex:IM-28169"
        ]
      },
      {
        "humanTarget": "BLK",
        "targetRank": 9,
        "targetScore": 3.97140087886645,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "BCL2",
        "targetRank": 12,
        "targetScore": 3.77881356544673,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human SARS coronavirus",
        "sourceType": "virus",
        "moleculeUniprot": "P59635",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "imex:IM-27845",
          "PMID 17428862"
        ]
      },
      {
        "humanTarget": "PDHB",
        "targetRank": 13,
        "targetScore": 3.74966345878153,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "PDHB",
        "targetRank": 13,
        "targetScore": 3.74966345878153,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P69479",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID unassigned2293",
          "imex:IM-27782"
        ]
      }
    ]
  },
  "sapho-syndrome": {
    "disease": "SAPHO syndrome",
    "piCovered": false,
    "piTrait": null,
    "piTraitName": null,
    "mappingNote": "no Pi trait mapping in current curated map",
    "targetCount": 0,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 0,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 0,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 0,
    "targetOpportunities": [],
    "fdaBackedTargets": [],
    "moleculeLeads": []
  },
  "antisynthetase-syndrome": {
    "disease": "Antisynthetase syndrome",
    "piCovered": true,
    "piTrait": "IIM",
    "piTraitName": "Idiopathic Inflammatory Myopathies",
    "mappingNote": "proxy: idiopathic inflammatory myopathies",
    "targetCount": 100,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 52,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 310,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 310,
    "targetOpportunities": [
      {
        "humanTarget": "HLA-DQB1",
        "rank": 1,
        "piPriorityScore": 5.0,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ beta 1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DQA1",
        "rank": 2,
        "piPriorityScore": 4.94292532457433,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ alpha 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DRB1",
        "rank": 3,
        "piPriorityScore": 4.82658946960494,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 88,
          "pdb_druggable_pocket_count": 18
        },
        "description": "major histocompatibility complex, class II, DR beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DRA",
        "rank": 4,
        "piPriorityScore": 4.61628373636698,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 100,
          "pdb_druggable_pocket_count": 21
        },
        "description": "major histocompatibility complex, class II, DR alpha",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "CD74",
        "rank": 5,
        "piPriorityScore": 4.37560250033339,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 15,
          "pdb_druggable_pocket_count": 1
        },
        "description": "CD74 molecule",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "DDX39B",
        "rank": 6,
        "piPriorityScore": 4.32398170466219,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 1,
          "pdb_count": 5,
          "pdb_druggable_pocket_count": 1
        },
        "description": "DExD-box helicase 39B",
        "pathogenHitCount": 6,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-E",
        "rank": 7,
        "piPriorityScore": 4.25239654447613,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 11,
          "pdb_druggable_pocket_count": 2
        },
        "description": "major histocompatibility complex, class I, E",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "CIITA",
        "rank": 8,
        "piPriorityScore": 4.06933399398822,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 1,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "class II major histocompatibility complex transactivator",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "CD4",
        "rank": 9,
        "piPriorityScore": 3.9917241768994,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 4,
          "druggable_domain_score": 0,
          "pdb_count": 55,
          "pdb_druggable_pocket_count": 28
        },
        "description": "CD4 molecule",
        "pathogenHitCount": 9,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "CD8A",
        "rank": 10,
        "piPriorityScore": 3.89157194099536,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 5,
          "pdb_druggable_pocket_count": 1
        },
        "description": "CD8a molecule",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "B2M",
        "rank": 11,
        "piPriorityScore": 3.86438918735474,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 704,
          "pdb_druggable_pocket_count": 240
        },
        "description": "beta-2-microglobulin",
        "pathogenHitCount": 10,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "TNFRSF25",
        "rank": 12,
        "piPriorityScore": 3.86010545242834,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "TNF receptor superfamily member 25",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-C",
        "rank": 13,
        "piPriorityScore": 3.79444623424938,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 10,
          "pdb_druggable_pocket_count": 1
        },
        "description": "major histocompatibility complex, class I, C",
        "pathogenHitCount": 5,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "BRD2",
        "rank": 14,
        "piPriorityScore": 3.78736389792639,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 1,
          "pdb_count": 60,
          "pdb_druggable_pocket_count": 51
        },
        "description": "bromodomain containing 2",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      }
    ],
    "fdaBackedTargets": [],
    "moleculeLeads": [
      {
        "humanTarget": "HLA-DQB1",
        "targetRank": 1,
        "targetScore": 5.0,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "HLA-DRA",
        "targetRank": 4,
        "targetScore": 4.61628373636698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Aichi/2/1968 H3N2)",
        "sourceType": "virus",
        "moleculeUniprot": "P03437",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 11877480"
        ]
      },
      {
        "humanTarget": "CD74",
        "targetRank": 5,
        "targetScore": 4.37560250033339,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Epstein-Barr virus (strain B95-8)",
        "sourceType": "virus",
        "moleculeUniprot": "Q3KSU8",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 17446270",
          "imex:IM-20435",
          "mint:MINT-6769080"
        ]
      },
      {
        "humanTarget": "CD74",
        "targetRank": 5,
        "targetScore": 4.37560250033339,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Puerto Rico/8/1934 H1N1)",
        "sourceType": "virus",
        "moleculeUniprot": "P03431",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 21994455",
          "imex:IM-26754"
        ]
      },
      {
        "humanTarget": "DDX39B",
        "targetRank": 6,
        "targetScore": 4.32398170466219,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human herpesvirus 8",
        "sourceType": "virus",
        "moleculeUniprot": "Q2HR75",
        "interactionCount": 2,
        "bestIntactMiscore": 0.5,
        "evidence": [
          "PMID 21814512",
          "imex:IM-27426"
        ]
      },
      {
        "humanTarget": "DDX39B",
        "targetRank": 6,
        "targetScore": 4.32398170466219,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Bunyavirus La Crosse (isolate Human/United States/L78/1978)",
        "sourceType": "virus",
        "moleculeUniprot": "Q8JPQ9",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 22810585",
          "imex:IM-17331"
        ]
      },
      {
        "humanTarget": "DDX39B",
        "targetRank": 6,
        "targetScore": 4.32398170466219,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human SARS coronavirus",
        "sourceType": "virus",
        "moleculeUniprot": "P59633",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 33845483",
          "imex:IM-28109"
        ]
      },
      {
        "humanTarget": "DDX39B",
        "targetRank": 6,
        "targetScore": 4.32398170466219,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "DDX39B",
        "targetRank": 6,
        "targetScore": 4.32398170466219,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P69479",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID unassigned2293",
          "imex:IM-27782"
        ]
      },
      {
        "humanTarget": "DDX39B",
        "targetRank": 6,
        "targetScore": 4.32398170466219,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "influenza a virus (a/viet nam/1203/2004(h5n1))",
        "sourceType": "virus",
        "moleculeUniprot": "Q5EP34",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 21715506",
          "imex:IM-28250"
        ]
      },
      {
        "humanTarget": "HLA-E",
        "targetRank": 7,
        "targetScore": 4.25239654447613,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human coronavirus NL63",
        "sourceType": "virus",
        "moleculeUniprot": "H9EJ66",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 33845483",
          "imex:IM-28109"
        ]
      },
      {
        "humanTarget": "HLA-E",
        "targetRank": 7,
        "targetScore": 4.25239654447613,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "SARS-CoV-2",
        "sourceType": "virus",
        "moleculeUniprot": "P0DTC3",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 33845483",
          "imex:IM-28109"
        ]
      }
    ]
  },
  "eosinophilia-myalgia-syndrome": {
    "disease": "Eosinophilia-myalgia syndrome",
    "piCovered": false,
    "piTrait": null,
    "piTraitName": null,
    "mappingNote": "no Pi trait mapping in current curated map",
    "targetCount": 0,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 0,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 0,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 0,
    "targetOpportunities": [],
    "fdaBackedTargets": [],
    "moleculeLeads": []
  },
  "takayasu-arteritis": {
    "disease": "Takayasu arteritis",
    "piCovered": true,
    "piTrait": "AAV",
    "piTraitName": "ANCA-Associated Vasculitis",
    "mappingNote": "proxy: ANCA-associated vasculitis",
    "targetCount": 99,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 51,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 293,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 293,
    "targetOpportunities": [
      {
        "humanTarget": "CD74",
        "rank": 1,
        "piPriorityScore": 5.0,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 15,
          "pdb_druggable_pocket_count": 1
        },
        "description": "CD74 molecule",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DRA",
        "rank": 2,
        "piPriorityScore": 4.91399095372244,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 100,
          "pdb_druggable_pocket_count": 21
        },
        "description": "major histocompatibility complex, class II, DR alpha",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DRB1",
        "rank": 3,
        "piPriorityScore": 4.90524517296757,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 88,
          "pdb_druggable_pocket_count": 18
        },
        "description": "major histocompatibility complex, class II, DR beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DQA1",
        "rank": 4,
        "piPriorityScore": 4.54103054543056,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ alpha 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DPB1",
        "rank": 5,
        "piPriorityScore": 4.45146323829567,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 7,
          "pdb_druggable_pocket_count": 2
        },
        "description": "major histocompatibility complex, class II, DP beta 1",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DMA",
        "rank": 6,
        "piPriorityScore": 4.29352093221776,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 5,
          "pdb_druggable_pocket_count": 1
        },
        "description": "major histocompatibility complex, class II, DM alpha",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DQB1",
        "rank": 7,
        "piPriorityScore": 4.27942484500621,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ beta 1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "AP4B1",
        "rank": 8,
        "piPriorityScore": 4.17514322110908,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 1,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 4 subunit beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "AP1M2",
        "rank": 9,
        "piPriorityScore": 4.14938303243698,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 1,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 1 subunit mu 2",
        "pathogenHitCount": 4,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "AP1S2",
        "rank": 10,
        "piPriorityScore": 4.12257983094881,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 1 subunit sigma 2",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "AP1M1",
        "rank": 11,
        "piPriorityScore": 4.10636161622112,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 1,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 1 subunit mu 1",
        "pathogenHitCount": 3,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "BCL2",
        "rank": 12,
        "piPriorityScore": 4.10306267231158,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 6,
          "druggable_domain_score": 0,
          "pdb_count": 20,
          "pdb_druggable_pocket_count": 12
        },
        "description": "BCL2, apoptosis regulator",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "SEC24A",
        "rank": 13,
        "piPriorityScore": 4.03940168347407,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 15,
          "pdb_druggable_pocket_count": 13
        },
        "description": "SEC24 homolog A, COPII coat complex component",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "MS4A1",
        "rank": 14,
        "piPriorityScore": 4.01677264608822,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 3,
          "pdb_druggable_pocket_count": 0
        },
        "description": "membrane spanning 4-domains A1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      }
    ],
    "fdaBackedTargets": [],
    "moleculeLeads": [
      {
        "humanTarget": "CD74",
        "targetRank": 1,
        "targetScore": 5.0,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Epstein-Barr virus (strain B95-8)",
        "sourceType": "virus",
        "moleculeUniprot": "Q3KSU8",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 17446270",
          "imex:IM-20435",
          "mint:MINT-6769080"
        ]
      },
      {
        "humanTarget": "CD74",
        "targetRank": 1,
        "targetScore": 5.0,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Puerto Rico/8/1934 H1N1)",
        "sourceType": "virus",
        "moleculeUniprot": "P03431",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 21994455",
          "imex:IM-26754"
        ]
      },
      {
        "humanTarget": "HLA-DRA",
        "targetRank": 2,
        "targetScore": 4.91399095372244,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Aichi/2/1968 H3N2)",
        "sourceType": "virus",
        "moleculeUniprot": "P03437",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 11877480"
        ]
      },
      {
        "humanTarget": "HLA-DPB1",
        "targetRank": 5,
        "targetScore": 4.45146323829567,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "HLA-DPB1",
        "targetRank": 5,
        "targetScore": 4.45146323829567,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P69479",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID unassigned2293",
          "imex:IM-27782"
        ]
      },
      {
        "humanTarget": "HLA-DQB1",
        "targetRank": 7,
        "targetScore": 4.27942484500621,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 16",
        "sourceType": "virus",
        "moleculeUniprot": "P03129",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 18",
        "sourceType": "virus",
        "moleculeUniprot": "P06788",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 1a",
        "sourceType": "virus",
        "moleculeUniprot": "P06465",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 32",
        "sourceType": "virus",
        "moleculeUniprot": "P36827",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M1",
        "targetRank": 11,
        "targetScore": 4.10636161622112,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human immunodeficiency virus type 1 group M subtype B (isolate HXB2) (HIV-1)",
        "sourceType": "virus",
        "moleculeUniprot": "P04578",
        "interactionCount": 2,
        "bestIntactMiscore": 0.46,
        "evidence": [
          "imex:IM-17346",
          "PMID 22190034"
        ]
      },
      {
        "humanTarget": "AP1M1",
        "targetRank": 11,
        "targetScore": 4.10636161622112,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Varicella-zoster virus (strain Oka vaccine) (HHV-3)",
        "sourceType": "virus",
        "moleculeUniprot": "Q9J3M8",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-30341",
          "PMID 40739040"
        ]
      }
    ]
  },
  "dermatomyositis": {
    "disease": "Dermatomyositis",
    "piCovered": true,
    "piTrait": "IIM",
    "piTraitName": "Idiopathic Inflammatory Myopathies",
    "mappingNote": "proxy: idiopathic inflammatory myopathies",
    "targetCount": 100,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 52,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 310,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 310,
    "targetOpportunities": [
      {
        "humanTarget": "HLA-DQB1",
        "rank": 1,
        "piPriorityScore": 5.0,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ beta 1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DQA1",
        "rank": 2,
        "piPriorityScore": 4.94292532457433,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ alpha 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DRB1",
        "rank": 3,
        "piPriorityScore": 4.82658946960494,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 88,
          "pdb_druggable_pocket_count": 18
        },
        "description": "major histocompatibility complex, class II, DR beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DRA",
        "rank": 4,
        "piPriorityScore": 4.61628373636698,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 100,
          "pdb_druggable_pocket_count": 21
        },
        "description": "major histocompatibility complex, class II, DR alpha",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "CD74",
        "rank": 5,
        "piPriorityScore": 4.37560250033339,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 15,
          "pdb_druggable_pocket_count": 1
        },
        "description": "CD74 molecule",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "DDX39B",
        "rank": 6,
        "piPriorityScore": 4.32398170466219,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 1,
          "pdb_count": 5,
          "pdb_druggable_pocket_count": 1
        },
        "description": "DExD-box helicase 39B",
        "pathogenHitCount": 6,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-E",
        "rank": 7,
        "piPriorityScore": 4.25239654447613,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 11,
          "pdb_druggable_pocket_count": 2
        },
        "description": "major histocompatibility complex, class I, E",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "CIITA",
        "rank": 8,
        "piPriorityScore": 4.06933399398822,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 1,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "class II major histocompatibility complex transactivator",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "CD4",
        "rank": 9,
        "piPriorityScore": 3.9917241768994,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 4,
          "druggable_domain_score": 0,
          "pdb_count": 55,
          "pdb_druggable_pocket_count": 28
        },
        "description": "CD4 molecule",
        "pathogenHitCount": 9,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "CD8A",
        "rank": 10,
        "piPriorityScore": 3.89157194099536,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 5,
          "pdb_druggable_pocket_count": 1
        },
        "description": "CD8a molecule",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "B2M",
        "rank": 11,
        "piPriorityScore": 3.86438918735474,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 704,
          "pdb_druggable_pocket_count": 240
        },
        "description": "beta-2-microglobulin",
        "pathogenHitCount": 10,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "TNFRSF25",
        "rank": 12,
        "piPriorityScore": 3.86010545242834,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "TNF receptor superfamily member 25",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-C",
        "rank": 13,
        "piPriorityScore": 3.79444623424938,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 10,
          "pdb_druggable_pocket_count": 1
        },
        "description": "major histocompatibility complex, class I, C",
        "pathogenHitCount": 5,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "BRD2",
        "rank": 14,
        "piPriorityScore": 3.78736389792639,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 1,
          "pdb_count": 60,
          "pdb_druggable_pocket_count": 51
        },
        "description": "bromodomain containing 2",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      }
    ],
    "fdaBackedTargets": [],
    "moleculeLeads": [
      {
        "humanTarget": "HLA-DQB1",
        "targetRank": 1,
        "targetScore": 5.0,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "HLA-DRA",
        "targetRank": 4,
        "targetScore": 4.61628373636698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Aichi/2/1968 H3N2)",
        "sourceType": "virus",
        "moleculeUniprot": "P03437",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 11877480"
        ]
      },
      {
        "humanTarget": "CD74",
        "targetRank": 5,
        "targetScore": 4.37560250033339,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Epstein-Barr virus (strain B95-8)",
        "sourceType": "virus",
        "moleculeUniprot": "Q3KSU8",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 17446270",
          "imex:IM-20435",
          "mint:MINT-6769080"
        ]
      },
      {
        "humanTarget": "CD74",
        "targetRank": 5,
        "targetScore": 4.37560250033339,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Puerto Rico/8/1934 H1N1)",
        "sourceType": "virus",
        "moleculeUniprot": "P03431",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 21994455",
          "imex:IM-26754"
        ]
      },
      {
        "humanTarget": "DDX39B",
        "targetRank": 6,
        "targetScore": 4.32398170466219,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human herpesvirus 8",
        "sourceType": "virus",
        "moleculeUniprot": "Q2HR75",
        "interactionCount": 2,
        "bestIntactMiscore": 0.5,
        "evidence": [
          "PMID 21814512",
          "imex:IM-27426"
        ]
      },
      {
        "humanTarget": "DDX39B",
        "targetRank": 6,
        "targetScore": 4.32398170466219,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Bunyavirus La Crosse (isolate Human/United States/L78/1978)",
        "sourceType": "virus",
        "moleculeUniprot": "Q8JPQ9",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 22810585",
          "imex:IM-17331"
        ]
      },
      {
        "humanTarget": "DDX39B",
        "targetRank": 6,
        "targetScore": 4.32398170466219,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human SARS coronavirus",
        "sourceType": "virus",
        "moleculeUniprot": "P59633",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 33845483",
          "imex:IM-28109"
        ]
      },
      {
        "humanTarget": "DDX39B",
        "targetRank": 6,
        "targetScore": 4.32398170466219,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "DDX39B",
        "targetRank": 6,
        "targetScore": 4.32398170466219,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P69479",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID unassigned2293",
          "imex:IM-27782"
        ]
      },
      {
        "humanTarget": "DDX39B",
        "targetRank": 6,
        "targetScore": 4.32398170466219,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "influenza a virus (a/viet nam/1203/2004(h5n1))",
        "sourceType": "virus",
        "moleculeUniprot": "Q5EP34",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 21715506",
          "imex:IM-28250"
        ]
      },
      {
        "humanTarget": "HLA-E",
        "targetRank": 7,
        "targetScore": 4.25239654447613,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human coronavirus NL63",
        "sourceType": "virus",
        "moleculeUniprot": "H9EJ66",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 33845483",
          "imex:IM-28109"
        ]
      },
      {
        "humanTarget": "HLA-E",
        "targetRank": 7,
        "targetScore": 4.25239654447613,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "SARS-CoV-2",
        "sourceType": "virus",
        "moleculeUniprot": "P0DTC3",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 33845483",
          "imex:IM-28109"
        ]
      }
    ]
  },
  "polymyositis": {
    "disease": "Polymyositis",
    "piCovered": true,
    "piTrait": "IIM",
    "piTraitName": "Idiopathic Inflammatory Myopathies",
    "mappingNote": "proxy: idiopathic inflammatory myopathies",
    "targetCount": 100,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 52,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 310,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 310,
    "targetOpportunities": [
      {
        "humanTarget": "HLA-DQB1",
        "rank": 1,
        "piPriorityScore": 5.0,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ beta 1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DQA1",
        "rank": 2,
        "piPriorityScore": 4.94292532457433,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ alpha 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DRB1",
        "rank": 3,
        "piPriorityScore": 4.82658946960494,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 88,
          "pdb_druggable_pocket_count": 18
        },
        "description": "major histocompatibility complex, class II, DR beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DRA",
        "rank": 4,
        "piPriorityScore": 4.61628373636698,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 100,
          "pdb_druggable_pocket_count": 21
        },
        "description": "major histocompatibility complex, class II, DR alpha",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "CD74",
        "rank": 5,
        "piPriorityScore": 4.37560250033339,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 15,
          "pdb_druggable_pocket_count": 1
        },
        "description": "CD74 molecule",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "DDX39B",
        "rank": 6,
        "piPriorityScore": 4.32398170466219,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 1,
          "pdb_count": 5,
          "pdb_druggable_pocket_count": 1
        },
        "description": "DExD-box helicase 39B",
        "pathogenHitCount": 6,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-E",
        "rank": 7,
        "piPriorityScore": 4.25239654447613,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 11,
          "pdb_druggable_pocket_count": 2
        },
        "description": "major histocompatibility complex, class I, E",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "CIITA",
        "rank": 8,
        "piPriorityScore": 4.06933399398822,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 1,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "class II major histocompatibility complex transactivator",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "CD4",
        "rank": 9,
        "piPriorityScore": 3.9917241768994,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 4,
          "druggable_domain_score": 0,
          "pdb_count": 55,
          "pdb_druggable_pocket_count": 28
        },
        "description": "CD4 molecule",
        "pathogenHitCount": 9,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "CD8A",
        "rank": 10,
        "piPriorityScore": 3.89157194099536,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 5,
          "pdb_druggable_pocket_count": 1
        },
        "description": "CD8a molecule",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "B2M",
        "rank": 11,
        "piPriorityScore": 3.86438918735474,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 704,
          "pdb_druggable_pocket_count": 240
        },
        "description": "beta-2-microglobulin",
        "pathogenHitCount": 10,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "TNFRSF25",
        "rank": 12,
        "piPriorityScore": 3.86010545242834,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "TNF receptor superfamily member 25",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-C",
        "rank": 13,
        "piPriorityScore": 3.79444623424938,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 10,
          "pdb_druggable_pocket_count": 1
        },
        "description": "major histocompatibility complex, class I, C",
        "pathogenHitCount": 5,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "BRD2",
        "rank": 14,
        "piPriorityScore": 3.78736389792639,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 1,
          "pdb_count": 60,
          "pdb_druggable_pocket_count": 51
        },
        "description": "bromodomain containing 2",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      }
    ],
    "fdaBackedTargets": [],
    "moleculeLeads": [
      {
        "humanTarget": "HLA-DQB1",
        "targetRank": 1,
        "targetScore": 5.0,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "HLA-DRA",
        "targetRank": 4,
        "targetScore": 4.61628373636698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Aichi/2/1968 H3N2)",
        "sourceType": "virus",
        "moleculeUniprot": "P03437",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 11877480"
        ]
      },
      {
        "humanTarget": "CD74",
        "targetRank": 5,
        "targetScore": 4.37560250033339,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Epstein-Barr virus (strain B95-8)",
        "sourceType": "virus",
        "moleculeUniprot": "Q3KSU8",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 17446270",
          "imex:IM-20435",
          "mint:MINT-6769080"
        ]
      },
      {
        "humanTarget": "CD74",
        "targetRank": 5,
        "targetScore": 4.37560250033339,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Puerto Rico/8/1934 H1N1)",
        "sourceType": "virus",
        "moleculeUniprot": "P03431",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 21994455",
          "imex:IM-26754"
        ]
      },
      {
        "humanTarget": "DDX39B",
        "targetRank": 6,
        "targetScore": 4.32398170466219,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human herpesvirus 8",
        "sourceType": "virus",
        "moleculeUniprot": "Q2HR75",
        "interactionCount": 2,
        "bestIntactMiscore": 0.5,
        "evidence": [
          "PMID 21814512",
          "imex:IM-27426"
        ]
      },
      {
        "humanTarget": "DDX39B",
        "targetRank": 6,
        "targetScore": 4.32398170466219,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Bunyavirus La Crosse (isolate Human/United States/L78/1978)",
        "sourceType": "virus",
        "moleculeUniprot": "Q8JPQ9",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 22810585",
          "imex:IM-17331"
        ]
      },
      {
        "humanTarget": "DDX39B",
        "targetRank": 6,
        "targetScore": 4.32398170466219,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human SARS coronavirus",
        "sourceType": "virus",
        "moleculeUniprot": "P59633",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 33845483",
          "imex:IM-28109"
        ]
      },
      {
        "humanTarget": "DDX39B",
        "targetRank": 6,
        "targetScore": 4.32398170466219,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "DDX39B",
        "targetRank": 6,
        "targetScore": 4.32398170466219,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P69479",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID unassigned2293",
          "imex:IM-27782"
        ]
      },
      {
        "humanTarget": "DDX39B",
        "targetRank": 6,
        "targetScore": 4.32398170466219,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "influenza a virus (a/viet nam/1203/2004(h5n1))",
        "sourceType": "virus",
        "moleculeUniprot": "Q5EP34",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 21715506",
          "imex:IM-28250"
        ]
      },
      {
        "humanTarget": "HLA-E",
        "targetRank": 7,
        "targetScore": 4.25239654447613,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human coronavirus NL63",
        "sourceType": "virus",
        "moleculeUniprot": "H9EJ66",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 33845483",
          "imex:IM-28109"
        ]
      },
      {
        "humanTarget": "HLA-E",
        "targetRank": 7,
        "targetScore": 4.25239654447613,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "SARS-CoV-2",
        "sourceType": "virus",
        "moleculeUniprot": "P0DTC3",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 33845483",
          "imex:IM-28109"
        ]
      }
    ]
  },
  "ankylosing-spondylitis": {
    "disease": "Ankylosing spondylitis",
    "piCovered": true,
    "piTrait": "AS",
    "piTraitName": "Ankylosing Spondylitis",
    "mappingNote": "direct",
    "targetCount": 100,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 50,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 305,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 305,
    "targetOpportunities": [
      {
        "humanTarget": "LCE3D",
        "rank": 1,
        "piPriorityScore": 5.0,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "late cornified envelope 3D",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "ETS2",
        "rank": 2,
        "piPriorityScore": 4.94084435795702,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 2,
          "pdb_druggable_pocket_count": 2
        },
        "description": "ETS proto-oncogene 2, transcription factor",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "IRF1",
        "rank": 3,
        "piPriorityScore": 4.88520594047903,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "interferon regulatory factor 1",
        "pathogenHitCount": 5,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "ICAM1",
        "rank": 4,
        "piPriorityScore": 4.82011710708151,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 4,
          "druggable_domain_score": 0,
          "pdb_count": 12,
          "pdb_druggable_pocket_count": 6
        },
        "description": "intercellular adhesion molecule 1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "CREM",
        "rank": 5,
        "piPriorityScore": 4.81286687915463,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "cAMP responsive element modulator",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "PTGER4",
        "rank": 6,
        "piPriorityScore": 4.75616298357496,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "prostaglandin E receptor 4",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "PPP1R1B",
        "rank": 7,
        "piPriorityScore": 4.72922392250549,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "protein phosphatase 1 regulatory inhibitor subunit 1B",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "NFKB1",
        "rank": 8,
        "piPriorityScore": 4.72752486096507,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 8,
          "pdb_druggable_pocket_count": 2
        },
        "description": "nuclear factor kappa B subunit 1",
        "pathogenHitCount": 3,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "UBA52",
        "rank": 9,
        "piPriorityScore": 4.71997378232245,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 4,
          "druggable_domain_score": 0,
          "pdb_count": 49,
          "pdb_druggable_pocket_count": 19
        },
        "description": "ubiquitin A-52 residue ribosomal protein fusion product 1",
        "pathogenHitCount": 3,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "CUL2",
        "rank": 10,
        "piPriorityScore": 4.67297999405603,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 1,
          "pdb_count": 2,
          "pdb_druggable_pocket_count": 2
        },
        "description": "cullin 2",
        "pathogenHitCount": 3,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "LNPEP",
        "rank": 11,
        "piPriorityScore": 4.64301414673988,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 6,
          "pdb_druggable_pocket_count": 3
        },
        "description": "leucyl and cystinyl aminopeptidase",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HIST1H4I",
        "rank": 12,
        "piPriorityScore": 4.61964365795515,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "histone cluster 1 H4 family member i",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "TNFRSF1A",
        "rank": 13,
        "piPriorityScore": 4.61800414410458,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 5,
          "pdb_druggable_pocket_count": 2
        },
        "description": "TNF receptor superfamily member 1A",
        "pathogenHitCount": 7,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "IFNAR2",
        "rank": 14,
        "piPriorityScore": 4.61794840372778,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 9,
          "pdb_druggable_pocket_count": 5
        },
        "description": "interferon alpha and beta receptor subunit 2",
        "pathogenHitCount": 0,
        "sourceTypes": []
      }
    ],
    "fdaBackedTargets": [],
    "moleculeLeads": [
      {
        "humanTarget": "IRF1",
        "targetRank": 3,
        "targetScore": 4.88520594047903,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 16",
        "sourceType": "virus",
        "moleculeUniprot": "P03129",
        "interactionCount": 4,
        "bestIntactMiscore": 0.53,
        "evidence": [
          "PMID 10702232",
          "mint:MINT-5212286"
        ]
      },
      {
        "humanTarget": "IRF1",
        "targetRank": 3,
        "targetScore": 4.88520594047903,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus 5",
        "sourceType": "virus",
        "moleculeUniprot": "P06932",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "IRF1",
        "targetRank": 3,
        "targetScore": 4.88520594047903,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 11",
        "sourceType": "virus",
        "moleculeUniprot": "P04020",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 10702232",
          "mint:MINT-5212286"
        ]
      },
      {
        "humanTarget": "IRF1",
        "targetRank": 3,
        "targetScore": 4.88520594047903,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 1a",
        "sourceType": "virus",
        "moleculeUniprot": "P06465",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "IRF1",
        "targetRank": 3,
        "targetScore": 4.88520594047903,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 9",
        "sourceType": "virus",
        "moleculeUniprot": "P36817",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "ICAM1",
        "targetRank": 4,
        "targetScore": 4.82011710708151,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Epstein-Barr virus (strain B95-8) (HHV-4)",
        "sourceType": "virus",
        "moleculeUniprot": "P0CK56",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 22810586",
          "imex:IM-25307"
        ]
      },
      {
        "humanTarget": "NFKB1",
        "targetRank": 8,
        "targetScore": 4.72752486096507,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human herpesvirus 1 (strain 17) (HHV-1)",
        "sourceType": "virus",
        "moleculeUniprot": "P10226",
        "interactionCount": 4,
        "bestIntactMiscore": 0.52,
        "evidence": [
          "PMID 23636254",
          "imex:IM-20936"
        ]
      },
      {
        "humanTarget": "NFKB1",
        "targetRank": 8,
        "targetScore": 4.72752486096507,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human adenovirus C serotype 5 (HAdV-5)",
        "sourceType": "virus",
        "moleculeUniprot": "Q6VGT6",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 16423054",
          "imex:IM-24789"
        ]
      },
      {
        "humanTarget": "NFKB1",
        "targetRank": 8,
        "targetScore": 4.72752486096507,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Epstein-Barr virus (strain B95-8) (HHV-4)",
        "sourceType": "virus",
        "moleculeUniprot": "P03193",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 17446270",
          "imex:IM-20435",
          "mint:MINT-6769080"
        ]
      },
      {
        "humanTarget": "UBA52",
        "targetRank": 9,
        "targetScore": 4.71997378232245,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 2,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "UBA52",
        "targetRank": 9,
        "targetScore": 4.71997378232245,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P69479",
        "interactionCount": 2,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID unassigned2293",
          "imex:IM-27782"
        ]
      },
      {
        "humanTarget": "UBA52",
        "targetRank": 9,
        "targetScore": 4.71997378232245,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "SARS-CoV-2",
        "sourceType": "virus",
        "moleculeUniprot": "P0DTC9",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 34901782",
          "imex:IM-29413"
        ]
      }
    ]
  },
  "polymyalgia-rheumatica": {
    "disease": "Polymyalgia rheumatica",
    "piCovered": false,
    "piTrait": null,
    "piTraitName": null,
    "mappingNote": "no Pi trait mapping in current curated map",
    "targetCount": 0,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 0,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 0,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 0,
    "targetOpportunities": [],
    "fdaBackedTargets": [],
    "moleculeLeads": []
  },
  "reactive-arthritis": {
    "disease": "Reactive arthritis",
    "piCovered": false,
    "piTrait": null,
    "piTraitName": null,
    "mappingNote": "no Pi trait mapping in current curated map",
    "targetCount": 0,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 0,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 0,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 0,
    "targetOpportunities": [],
    "fdaBackedTargets": [],
    "moleculeLeads": []
  },
  "rheumatoid-arthritis": {
    "disease": "Rheumatoid arthritis",
    "piCovered": true,
    "piTrait": "RA",
    "piTraitName": "Rheumatoid Arthritis",
    "mappingNote": "direct",
    "targetCount": 100,
    "fdaBackedTargetCount": 8,
    "targetsWithPathogenHits": 56,
    "fdaBackedTargetsWithPathogenHits": 4,
    "sourceTypeCounts": {
      "virus": 291,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 291,
    "targetOpportunities": [
      {
        "humanTarget": "HLA-DQA1",
        "rank": 1,
        "piPriorityScore": 5.0,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ alpha 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DQB1",
        "rank": 2,
        "piPriorityScore": 4.99281031486308,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ beta 1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DRA",
        "rank": 3,
        "piPriorityScore": 4.95059089534311,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 100,
          "pdb_druggable_pocket_count": 21
        },
        "description": "major histocompatibility complex, class II, DR alpha",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DRB1",
        "rank": 4,
        "piPriorityScore": 4.94563043238865,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 88,
          "pdb_druggable_pocket_count": 18
        },
        "description": "major histocompatibility complex, class II, DR beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "ICAM1",
        "rank": 5,
        "piPriorityScore": 4.36168319983103,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 4,
          "druggable_domain_score": 0,
          "pdb_count": 12,
          "pdb_druggable_pocket_count": 6
        },
        "description": "intercellular adhesion molecule 1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "TRAF1",
        "rank": 6,
        "piPriorityScore": 4.34386107011649,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 3,
          "pdb_druggable_pocket_count": 0
        },
        "description": "TNF receptor associated factor 1",
        "pathogenHitCount": 10,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "CD74",
        "rank": 7,
        "piPriorityScore": 4.23950032923086,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 15,
          "pdb_druggable_pocket_count": 1
        },
        "description": "CD74 molecule",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "STAT4",
        "rank": 8,
        "piPriorityScore": 4.19077548316635,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "signal transducer and activator of transcription 4",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "PTPN2",
        "rank": 9,
        "piPriorityScore": 4.09069089404693,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 4,
          "druggable_domain_score": 0,
          "pdb_count": 1,
          "pdb_druggable_pocket_count": 0
        },
        "description": "protein tyrosine phosphatase, non-receptor type 2",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "CD40",
        "rank": 10,
        "piPriorityScore": 4.01802913901556,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 9,
          "pdb_druggable_pocket_count": 2
        },
        "description": "CD40 molecule",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "CD8A",
        "rank": 11,
        "piPriorityScore": 4.01726176445797,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 5,
          "pdb_druggable_pocket_count": 1
        },
        "description": "CD8a molecule",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "PTPN22",
        "rank": 12,
        "piPriorityScore": 4.00108745420514,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 4,
          "druggable_domain_score": 0,
          "pdb_count": 8,
          "pdb_druggable_pocket_count": 1
        },
        "description": "protein tyrosine phosphatase, non-receptor type 22",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "BLK",
        "rank": 13,
        "piPriorityScore": 3.97400057182738,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 1,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "BLK proto-oncogene, Src family tyrosine kinase",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "IRF8",
        "rank": 14,
        "piPriorityScore": 3.92863251866798,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "interferon regulatory factor 8",
        "pathogenHitCount": 0,
        "sourceTypes": []
      }
    ],
    "fdaBackedTargets": [
      {
        "humanTarget": "TYK2",
        "rank": 23,
        "piPriorityScore": 3.62127836627927,
        "approvedInPi": true,
        "clinicalPhaseCode": "P4",
        "fdaApprovedDrugs": [
          "TOFACITINIB CITRATE"
        ],
        "clinicalPhaseDrugs": [
          "PEFICITINIB"
        ],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 1,
          "pdb_count": 21,
          "pdb_druggable_pocket_count": 10
        },
        "description": "tyrosine kinase 2",
        "pathogenHitCount": 8,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "MS4A1",
        "rank": 30,
        "piPriorityScore": 3.51313303359218,
        "approvedInPi": true,
        "clinicalPhaseCode": "P4",
        "fdaApprovedDrugs": [
          "RITUXIMAB"
        ],
        "clinicalPhaseDrugs": [
          "OFATUMUMAB",
          "VELTUZUMAB",
          "OCRELIZUMAB"
        ],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 3,
          "pdb_druggable_pocket_count": 0
        },
        "description": "membrane spanning 4-domains A1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "JAK3",
        "rank": 52,
        "piPriorityScore": 3.33098086496378,
        "approvedInPi": true,
        "clinicalPhaseCode": "P4",
        "fdaApprovedDrugs": [
          "TOFACITINIB CITRATE"
        ],
        "clinicalPhaseDrugs": [
          "PEFICITINIB",
          "DECERNOTINIB"
        ],
        "druggability": {
          "druggable_category_score": 4,
          "druggable_domain_score": 1,
          "pdb_count": 28,
          "pdb_druggable_pocket_count": 24
        },
        "description": "Janus kinase 3",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "JAK1",
        "rank": 56,
        "piPriorityScore": 3.31181568225955,
        "approvedInPi": true,
        "clinicalPhaseCode": "P4",
        "fdaApprovedDrugs": [
          "TOFACITINIB CITRATE"
        ],
        "clinicalPhaseDrugs": [
          "BARICITINIB",
          "FILGOTINIB",
          "PEFICITINIB",
          "INCB-047986"
        ],
        "druggability": {
          "druggable_category_score": 4,
          "druggable_domain_score": 1,
          "pdb_count": 26,
          "pdb_druggable_pocket_count": 4
        },
        "description": "Janus kinase 1",
        "pathogenHitCount": 20,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "JAK2",
        "rank": 61,
        "piPriorityScore": 3.27152257587865,
        "approvedInPi": true,
        "clinicalPhaseCode": "P4",
        "fdaApprovedDrugs": [
          "TOFACITINIB CITRATE"
        ],
        "clinicalPhaseDrugs": [
          "BARICITINIB",
          "PEFICITINIB",
          "AC-430"
        ],
        "druggability": {
          "druggable_category_score": 8,
          "druggable_domain_score": 1,
          "pdb_count": 73,
          "pdb_druggable_pocket_count": 23
        },
        "description": "Janus kinase 2",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "TNF",
        "rank": 82,
        "piPriorityScore": 3.14471150863334,
        "approvedInPi": true,
        "clinicalPhaseCode": "P4",
        "fdaApprovedDrugs": [
          "ADALIMUMAB",
          "CERTOLIZUMAB PEGOL",
          "ETANERCEPT",
          "GOLIMUMAB"
        ],
        "clinicalPhaseDrugs": [
          "OZORALIZUMAB",
          "PLACULUMAB"
        ],
        "druggability": {
          "druggable_category_score": 8,
          "druggable_domain_score": 0,
          "pdb_count": 23,
          "pdb_druggable_pocket_count": 8
        },
        "description": "tumor necrosis factor",
        "pathogenHitCount": 5,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "CD86",
        "rank": 83,
        "piPriorityScore": 3.14368393880795,
        "approvedInPi": true,
        "clinicalPhaseCode": "P4",
        "fdaApprovedDrugs": [
          "ABATACEPT"
        ],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 2,
          "pdb_druggable_pocket_count": 0
        },
        "description": "CD86 molecule",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "CD80",
        "rank": 97,
        "piPriorityScore": 3.09050928715405,
        "approvedInPi": true,
        "clinicalPhaseCode": "P4",
        "fdaApprovedDrugs": [
          "ABATACEPT"
        ],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 4,
          "druggable_domain_score": 0,
          "pdb_count": 2,
          "pdb_druggable_pocket_count": 0
        },
        "description": "CD80 molecule",
        "pathogenHitCount": 0,
        "sourceTypes": []
      }
    ],
    "moleculeLeads": [
      {
        "humanTarget": "TYK2",
        "targetRank": 23,
        "targetScore": 3.62127836627927,
        "approvedTarget": true,
        "approvedDrugs": [
          "TOFACITINIB CITRATE"
        ],
        "clinicalPhaseCode": "P4",
        "sourceOrganism": "Human papillomavirus type 18",
        "sourceType": "virus",
        "moleculeUniprot": "P06463",
        "interactionCount": 4,
        "bestIntactMiscore": 0.52,
        "evidence": [
          "PMID 10523853",
          "mint:MINT-5211902"
        ]
      },
      {
        "humanTarget": "TYK2",
        "targetRank": 23,
        "targetScore": 3.62127836627927,
        "approvedTarget": true,
        "approvedDrugs": [
          "TOFACITINIB CITRATE"
        ],
        "clinicalPhaseCode": "P4",
        "sourceOrganism": "Human papillomavirus type 11",
        "sourceType": "virus",
        "moleculeUniprot": "P04019",
        "interactionCount": 3,
        "bestIntactMiscore": 0.52,
        "evidence": [
          "PMID 10523853",
          "mint:MINT-5211902"
        ]
      },
      {
        "humanTarget": "TYK2",
        "targetRank": 23,
        "targetScore": 3.62127836627927,
        "approvedTarget": true,
        "approvedDrugs": [
          "TOFACITINIB CITRATE"
        ],
        "clinicalPhaseCode": "P4",
        "sourceOrganism": "Measles virus (strain Dublin) (MeV)",
        "sourceType": "virus",
        "moleculeUniprot": "B8PZP6",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 23431397"
        ]
      },
      {
        "humanTarget": "TYK2",
        "targetRank": 23,
        "targetScore": 3.62127836627927,
        "approvedTarget": true,
        "approvedDrugs": [
          "TOFACITINIB CITRATE"
        ],
        "clinicalPhaseCode": "P4",
        "sourceOrganism": "Morbillivirus canis",
        "sourceType": "virus",
        "moleculeUniprot": "Q6TV27",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 23431397"
        ]
      },
      {
        "humanTarget": "TYK2",
        "targetRank": 23,
        "targetScore": 3.62127836627927,
        "approvedTarget": true,
        "approvedDrugs": [
          "TOFACITINIB CITRATE"
        ],
        "clinicalPhaseCode": "P4",
        "sourceOrganism": "Peste-des-petits-ruminants virus",
        "sourceType": "virus",
        "moleculeUniprot": "Q5ZER6",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 23431397"
        ]
      },
      {
        "humanTarget": "TYK2",
        "targetRank": 23,
        "targetScore": 3.62127836627927,
        "approvedTarget": true,
        "approvedDrugs": [
          "TOFACITINIB CITRATE"
        ],
        "clinicalPhaseCode": "P4",
        "sourceOrganism": "Rinderpest virus (strain RBOK)",
        "sourceType": "virus",
        "moleculeUniprot": "Q03340",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 23431397"
        ]
      },
      {
        "humanTarget": "TYK2",
        "targetRank": 23,
        "targetScore": 3.62127836627927,
        "approvedTarget": true,
        "approvedDrugs": [
          "TOFACITINIB CITRATE"
        ],
        "clinicalPhaseCode": "P4",
        "sourceOrganism": "tick-borne encephalitis virus",
        "sourceType": "virus",
        "moleculeUniprot": "Q88489",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22014111",
          "imex:IM-24738"
        ]
      },
      {
        "humanTarget": "TYK2",
        "targetRank": 23,
        "targetScore": 3.62127836627927,
        "approvedTarget": true,
        "approvedDrugs": [
          "TOFACITINIB CITRATE"
        ],
        "clinicalPhaseCode": "P4",
        "sourceOrganism": "Varicella-zoster virus (strain Oka vaccine) (HHV-3)",
        "sourceType": "virus",
        "moleculeUniprot": "Q77NP3",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-30341",
          "PMID 40739040"
        ]
      },
      {
        "humanTarget": "JAK1",
        "targetRank": 56,
        "targetScore": 3.31181568225955,
        "approvedTarget": true,
        "approvedDrugs": [
          "TOFACITINIB CITRATE"
        ],
        "clinicalPhaseCode": "P4",
        "sourceOrganism": "Measles virus (strain Dublin) (MeV)",
        "sourceType": "virus",
        "moleculeUniprot": "B8PZP6",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 23431397"
        ]
      },
      {
        "humanTarget": "JAK1",
        "targetRank": 56,
        "targetScore": 3.31181568225955,
        "approvedTarget": true,
        "approvedDrugs": [
          "TOFACITINIB CITRATE"
        ],
        "clinicalPhaseCode": "P4",
        "sourceOrganism": "Morbillivirus canis",
        "sourceType": "virus",
        "moleculeUniprot": "Q6TV27",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 23431397"
        ]
      },
      {
        "humanTarget": "JAK1",
        "targetRank": 56,
        "targetScore": 3.31181568225955,
        "approvedTarget": true,
        "approvedDrugs": [
          "TOFACITINIB CITRATE"
        ],
        "clinicalPhaseCode": "P4",
        "sourceOrganism": "Peste-des-petits-ruminants virus",
        "sourceType": "virus",
        "moleculeUniprot": "Q5ZER6",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 23431397"
        ]
      },
      {
        "humanTarget": "JAK1",
        "targetRank": 56,
        "targetScore": 3.31181568225955,
        "approvedTarget": true,
        "approvedDrugs": [
          "TOFACITINIB CITRATE"
        ],
        "clinicalPhaseCode": "P4",
        "sourceOrganism": "Rinderpest virus (strain RBOK)",
        "sourceType": "virus",
        "moleculeUniprot": "Q03340",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 23431397"
        ]
      }
    ]
  },
  "lupus-erythematosus-systemic": {
    "disease": "Lupus erythematosus | systemic",
    "piCovered": true,
    "piTrait": "SLE",
    "piTraitName": "Systemic Lupus Erythematosus",
    "mappingNote": "direct",
    "targetCount": 100,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 56,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 365,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 365,
    "targetOpportunities": [
      {
        "humanTarget": "IKZF1",
        "rank": 1,
        "piPriorityScore": 5.0,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "IKAROS family zinc finger 1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "ICAM1",
        "rank": 2,
        "piPriorityScore": 4.98964135885963,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 4,
          "druggable_domain_score": 0,
          "pdb_count": 12,
          "pdb_druggable_pocket_count": 6
        },
        "description": "intercellular adhesion molecule 1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "BLK",
        "rank": 3,
        "piPriorityScore": 4.96259469204085,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 1,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "BLK proto-oncogene, Src family tyrosine kinase",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DQA1",
        "rank": 4,
        "piPriorityScore": 4.88861854675072,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ alpha 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DQB1",
        "rank": 5,
        "piPriorityScore": 4.88677471284751,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ beta 1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DRB1",
        "rank": 6,
        "piPriorityScore": 4.88225991511168,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 88,
          "pdb_druggable_pocket_count": 18
        },
        "description": "major histocompatibility complex, class II, DR beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DRA",
        "rank": 7,
        "piPriorityScore": 4.70369847425961,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 100,
          "pdb_druggable_pocket_count": 21
        },
        "description": "major histocompatibility complex, class II, DR alpha",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "PHRF1",
        "rank": 8,
        "piPriorityScore": 4.6685508516837,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "PHD and ring finger domains 1",
        "pathogenHitCount": 6,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "IRF7",
        "rank": 9,
        "piPriorityScore": 4.59550019455029,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 1,
          "pdb_druggable_pocket_count": 1
        },
        "description": "interferon regulatory factor 7",
        "pathogenHitCount": 5,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "FAM167A",
        "rank": 10,
        "piPriorityScore": 4.55746924381875,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "family with sequence similarity 167 member A",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "CD44",
        "rank": 11,
        "piPriorityScore": 4.43402713124698,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 5,
          "pdb_druggable_pocket_count": 0
        },
        "description": "CD44 molecule (Indian blood group)",
        "pathogenHitCount": 18,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "UBA52",
        "rank": 12,
        "piPriorityScore": 4.31680730849707,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 4,
          "druggable_domain_score": 0,
          "pdb_count": 49,
          "pdb_druggable_pocket_count": 19
        },
        "description": "ubiquitin A-52 residue ribosomal protein fusion product 1",
        "pathogenHitCount": 3,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "NFKBIL1",
        "rank": 13,
        "piPriorityScore": 4.30926718887412,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "NFKB inhibitor like 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "STAT4",
        "rank": 14,
        "piPriorityScore": 4.25656457575327,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "signal transducer and activator of transcription 4",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      }
    ],
    "fdaBackedTargets": [],
    "moleculeLeads": [
      {
        "humanTarget": "IKZF1",
        "targetRank": 1,
        "targetScore": 5.0,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "ICAM1",
        "targetRank": 2,
        "targetScore": 4.98964135885963,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Epstein-Barr virus (strain B95-8) (HHV-4)",
        "sourceType": "virus",
        "moleculeUniprot": "P0CK56",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 22810586",
          "imex:IM-25307"
        ]
      },
      {
        "humanTarget": "BLK",
        "targetRank": 3,
        "targetScore": 4.96259469204085,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "HLA-DQB1",
        "targetRank": 5,
        "targetScore": 4.88677471284751,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "HLA-DRA",
        "targetRank": 7,
        "targetScore": 4.70369847425961,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Aichi/2/1968 H3N2)",
        "sourceType": "virus",
        "moleculeUniprot": "P03437",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 11877480"
        ]
      },
      {
        "humanTarget": "PHRF1",
        "targetRank": 8,
        "targetScore": 4.6685508516837,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human SARS coronavirus",
        "sourceType": "virus",
        "moleculeUniprot": "P59595",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 34232536",
          "imex:IM-29365"
        ]
      },
      {
        "humanTarget": "PHRF1",
        "targetRank": 8,
        "targetScore": 4.6685508516837,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human coronavirus 229E",
        "sourceType": "virus",
        "moleculeUniprot": "P15130",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 34232536",
          "imex:IM-29365"
        ]
      },
      {
        "humanTarget": "PHRF1",
        "targetRank": 8,
        "targetScore": 4.6685508516837,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human coronavirus HKU1 (isolate N5)",
        "sourceType": "virus",
        "moleculeUniprot": "Q0ZME3",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 34232536",
          "imex:IM-29365"
        ]
      },
      {
        "humanTarget": "PHRF1",
        "targetRank": 8,
        "targetScore": 4.6685508516837,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human coronavirus OC43",
        "sourceType": "virus",
        "moleculeUniprot": "P33469",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 34232536",
          "imex:IM-29365"
        ]
      },
      {
        "humanTarget": "PHRF1",
        "targetRank": 8,
        "targetScore": 4.6685508516837,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Middle East respiratory syndrome-related coronavirus (isolate United Kingdom/H123990006/2012) (Betacoronavirus England 1)",
        "sourceType": "virus",
        "moleculeUniprot": "K9N4V7",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 34232536",
          "imex:IM-29365"
        ]
      },
      {
        "humanTarget": "PHRF1",
        "targetRank": 8,
        "targetScore": 4.6685508516837,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "SARS-CoV-2",
        "sourceType": "virus",
        "moleculeUniprot": "P0DTC9",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 34232536",
          "imex:IM-29365"
        ]
      },
      {
        "humanTarget": "IRF7",
        "targetRank": 9,
        "targetScore": 4.59550019455029,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Bovine herpesvirus 1.1 (strain Cooper)",
        "sourceType": "virus",
        "moleculeUniprot": "P29128",
        "interactionCount": 5,
        "bestIntactMiscore": 0.56,
        "evidence": [
          "PMID 19176627",
          "imex:IM-25915"
        ]
      }
    ]
  },
  "relapsing-polychondritis": {
    "disease": "Relapsing polychondritis",
    "piCovered": false,
    "piTrait": null,
    "piTraitName": null,
    "mappingNote": "no Pi trait mapping in current curated map",
    "targetCount": 0,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 0,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 0,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 0,
    "targetOpportunities": [],
    "fdaBackedTargets": [],
    "moleculeLeads": []
  },
  "palindromic-rheumatism": {
    "disease": "Palindromic rheumatism",
    "piCovered": false,
    "piTrait": null,
    "piTraitName": null,
    "mappingNote": "no Pi trait mapping in current curated map",
    "targetCount": 0,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 0,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 0,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 0,
    "targetOpportunities": [],
    "fdaBackedTargets": [],
    "moleculeLeads": []
  },
  "psoriatic-arthritis": {
    "disease": "Psoriatic arthritis",
    "piCovered": true,
    "piTrait": "PSO",
    "piTraitName": "Psoriasis",
    "mappingNote": "proxy: psoriasis",
    "targetCount": 100,
    "fdaBackedTargetCount": 2,
    "targetsWithPathogenHits": 52,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 291,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 291,
    "targetOpportunities": [
      {
        "humanTarget": "ERAP2",
        "rank": 1,
        "piPriorityScore": 5.0,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 8,
          "pdb_druggable_pocket_count": 2
        },
        "description": "endoplasmic reticulum aminopeptidase 2",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "ICAM1",
        "rank": 2,
        "piPriorityScore": 4.36454243745791,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 4,
          "druggable_domain_score": 0,
          "pdb_count": 12,
          "pdb_druggable_pocket_count": 6
        },
        "description": "intercellular adhesion molecule 1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "IRF1",
        "rank": 3,
        "piPriorityScore": 4.30458995042383,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "interferon regulatory factor 1",
        "pathogenHitCount": 5,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-C",
        "rank": 4,
        "piPriorityScore": 4.22125570961194,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 10,
          "pdb_druggable_pocket_count": 1
        },
        "description": "major histocompatibility complex, class I, C",
        "pathogenHitCount": 5,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "CNPY2",
        "rank": 5,
        "piPriorityScore": 4.08953092920218,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "canopy FGF signaling regulator 2",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-A",
        "rank": 6,
        "piPriorityScore": 4.05867445390615,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 314,
          "pdb_druggable_pocket_count": 112
        },
        "description": "major histocompatibility complex, class I, A",
        "pathogenHitCount": 21,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-B",
        "rank": 7,
        "piPriorityScore": 4.04463657282565,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 193,
          "pdb_druggable_pocket_count": 46
        },
        "description": "major histocompatibility complex, class I, B",
        "pathogenHitCount": 14,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DRB1",
        "rank": 8,
        "piPriorityScore": 3.94110524990263,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 88,
          "pdb_druggable_pocket_count": 18
        },
        "description": "major histocompatibility complex, class II, DR beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "LCE3D",
        "rank": 9,
        "piPriorityScore": 3.94020704388078,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "late cornified envelope 3D",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "LNPEP",
        "rank": 10,
        "piPriorityScore": 3.89684694721229,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 6,
          "pdb_druggable_pocket_count": 3
        },
        "description": "leucyl and cystinyl aminopeptidase",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "GTF2A1",
        "rank": 11,
        "piPriorityScore": 3.83342346213925,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 11,
          "pdb_druggable_pocket_count": 3
        },
        "description": "general transcription factor IIA subunit 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HIST1H4I",
        "rank": 12,
        "piPriorityScore": 3.8163044528313,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "histone cluster 1 H4 family member i",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "CALR",
        "rank": 13,
        "piPriorityScore": 3.81060658146009,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 7,
          "pdb_druggable_pocket_count": 1
        },
        "description": "calreticulin",
        "pathogenHitCount": 9,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "UBA52",
        "rank": 14,
        "piPriorityScore": 3.80888762021293,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 4,
          "druggable_domain_score": 0,
          "pdb_count": 49,
          "pdb_druggable_pocket_count": 19
        },
        "description": "ubiquitin A-52 residue ribosomal protein fusion product 1",
        "pathogenHitCount": 3,
        "sourceTypes": [
          "virus"
        ]
      }
    ],
    "fdaBackedTargets": [
      {
        "humanTarget": "IL23A",
        "rank": 50,
        "piPriorityScore": 3.29071280844269,
        "approvedInPi": true,
        "clinicalPhaseCode": "P4",
        "fdaApprovedDrugs": [
          "USTEKINUMAB"
        ],
        "clinicalPhaseDrugs": [
          "BRIAKINUMAB"
        ],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 10,
          "pdb_druggable_pocket_count": 5
        },
        "description": "interleukin 23 subunit alpha",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "IL12B",
        "rank": 70,
        "piPriorityScore": 3.16626813306357,
        "approvedInPi": true,
        "clinicalPhaseCode": "P4",
        "fdaApprovedDrugs": [
          "USTEKINUMAB",
          "USTEKINUMAB"
        ],
        "clinicalPhaseDrugs": [
          "BRIAKINUMAB",
          "BRIAKINUMAB",
          "BRIAKINUMAB"
        ],
        "druggability": {
          "druggable_category_score": 4,
          "druggable_domain_score": 0,
          "pdb_count": 13,
          "pdb_druggable_pocket_count": 7
        },
        "description": "interleukin 12B",
        "pathogenHitCount": 0,
        "sourceTypes": []
      }
    ],
    "moleculeLeads": [
      {
        "humanTarget": "ERAP2",
        "targetRank": 1,
        "targetScore": 5.0,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human immunodeficiency virus type 1 group M subtype B (isolate BH8)",
        "sourceType": "virus",
        "moleculeUniprot": "P04582",
        "interactionCount": 1,
        "bestIntactMiscore": 0.44,
        "evidence": [
          "imex:IM-29943",
          "PMID 15908954"
        ]
      },
      {
        "humanTarget": "ICAM1",
        "targetRank": 2,
        "targetScore": 4.36454243745791,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Epstein-Barr virus (strain B95-8) (HHV-4)",
        "sourceType": "virus",
        "moleculeUniprot": "P0CK56",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 22810586",
          "imex:IM-25307"
        ]
      },
      {
        "humanTarget": "IRF1",
        "targetRank": 3,
        "targetScore": 4.30458995042383,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 16",
        "sourceType": "virus",
        "moleculeUniprot": "P03129",
        "interactionCount": 4,
        "bestIntactMiscore": 0.53,
        "evidence": [
          "PMID 10702232",
          "mint:MINT-5212286"
        ]
      },
      {
        "humanTarget": "IRF1",
        "targetRank": 3,
        "targetScore": 4.30458995042383,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus 5",
        "sourceType": "virus",
        "moleculeUniprot": "P06932",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "IRF1",
        "targetRank": 3,
        "targetScore": 4.30458995042383,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 11",
        "sourceType": "virus",
        "moleculeUniprot": "P04020",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 10702232",
          "mint:MINT-5212286"
        ]
      },
      {
        "humanTarget": "IRF1",
        "targetRank": 3,
        "targetScore": 4.30458995042383,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 1a",
        "sourceType": "virus",
        "moleculeUniprot": "P06465",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "IRF1",
        "targetRank": 3,
        "targetScore": 4.30458995042383,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 9",
        "sourceType": "virus",
        "moleculeUniprot": "P36817",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "HLA-C",
        "targetRank": 4,
        "targetScore": 4.22125570961194,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human coronavirus NL63",
        "sourceType": "virus",
        "moleculeUniprot": "H9EJ66",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 33845483",
          "imex:IM-28109"
        ]
      },
      {
        "humanTarget": "HLA-C",
        "targetRank": 4,
        "targetScore": 4.22125570961194,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human immunodeficiency virus type 1 group M subtype B (isolate HXB2) (HIV-1)",
        "sourceType": "virus",
        "moleculeUniprot": "P04578",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-17346",
          "PMID 22190034"
        ]
      },
      {
        "humanTarget": "HLA-C",
        "targetRank": 4,
        "targetScore": 4.22125570961194,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Nipah virus",
        "sourceType": "virus",
        "moleculeUniprot": "Q9IH63",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 28904190",
          "imex:IM-28169"
        ]
      },
      {
        "humanTarget": "HLA-C",
        "targetRank": 4,
        "targetScore": 4.22125570961194,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "HLA-C",
        "targetRank": 4,
        "targetScore": 4.22125570961194,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "SARS-CoV-2",
        "sourceType": "virus",
        "moleculeUniprot": "P0DTC3",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 33845483",
          "imex:IM-28109"
        ]
      }
    ]
  },
  "behcet-s-disease": {
    "disease": "Beh\u00e7et's Disease",
    "piCovered": true,
    "piTrait": "BD",
    "piTraitName": "Behcet's Disease",
    "mappingNote": "direct",
    "targetCount": 100,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 38,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 191,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 191,
    "targetOpportunities": [
      {
        "humanTarget": "CCR1",
        "rank": 1,
        "piPriorityScore": 5.0,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "C-C motif chemokine receptor 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "LNPEP",
        "rank": 2,
        "piPriorityScore": 4.68810217423326,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 6,
          "pdb_druggable_pocket_count": 3
        },
        "description": "leucyl and cystinyl aminopeptidase",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-E",
        "rank": 3,
        "piPriorityScore": 4.62087579589856,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 11,
          "pdb_druggable_pocket_count": 2
        },
        "description": "major histocompatibility complex, class I, E",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "CCR5",
        "rank": 4,
        "piPriorityScore": 4.59674591762865,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 7,
          "pdb_druggable_pocket_count": 2
        },
        "description": "C-C motif chemokine receptor 5 (gene/pseudogene)",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "IL10",
        "rank": 5,
        "piPriorityScore": 4.5739512226025,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 7,
          "pdb_druggable_pocket_count": 5
        },
        "description": "interleukin 10",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "B2M",
        "rank": 6,
        "piPriorityScore": 4.55383222686195,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 704,
          "pdb_druggable_pocket_count": 240
        },
        "description": "beta-2-microglobulin",
        "pathogenHitCount": 10,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-B",
        "rank": 7,
        "piPriorityScore": 4.53876318194723,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 193,
          "pdb_druggable_pocket_count": 46
        },
        "description": "major histocompatibility complex, class I, B",
        "pathogenHitCount": 14,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-C",
        "rank": 8,
        "piPriorityScore": 4.53180059973536,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 10,
          "pdb_druggable_pocket_count": 1
        },
        "description": "major histocompatibility complex, class I, C",
        "pathogenHitCount": 5,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "IL12RB2",
        "rank": 9,
        "piPriorityScore": 4.50971413976049,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "interleukin 12 receptor subunit beta 2",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "IFNAR2",
        "rank": 10,
        "piPriorityScore": 4.49230961455241,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 9,
          "pdb_druggable_pocket_count": 5
        },
        "description": "interferon alpha and beta receptor subunit 2",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "STAT1",
        "rank": 11,
        "piPriorityScore": 4.44131190063781,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 4,
          "pdb_druggable_pocket_count": 3
        },
        "description": "signal transducer and activator of transcription 1",
        "pathogenHitCount": 16,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "ERAP2",
        "rank": 12,
        "piPriorityScore": 4.40975273971167,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 8,
          "pdb_druggable_pocket_count": 2
        },
        "description": "endoplasmic reticulum aminopeptidase 2",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "IL23R",
        "rank": 13,
        "piPriorityScore": 4.3919436342855,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 1,
          "pdb_druggable_pocket_count": 0
        },
        "description": "interleukin 23 receptor",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "KLRC1",
        "rank": 14,
        "piPriorityScore": 4.37776418951911,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 5,
          "pdb_druggable_pocket_count": 0
        },
        "description": "killer cell lectin like receptor C1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      }
    ],
    "fdaBackedTargets": [],
    "moleculeLeads": [
      {
        "humanTarget": "HLA-E",
        "targetRank": 3,
        "targetScore": 4.62087579589856,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human coronavirus NL63",
        "sourceType": "virus",
        "moleculeUniprot": "H9EJ66",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 33845483",
          "imex:IM-28109"
        ]
      },
      {
        "humanTarget": "HLA-E",
        "targetRank": 3,
        "targetScore": 4.62087579589856,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "SARS-CoV-2",
        "sourceType": "virus",
        "moleculeUniprot": "P0DTC3",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 33845483",
          "imex:IM-28109"
        ]
      },
      {
        "humanTarget": "CCR5",
        "targetRank": 4,
        "targetScore": 4.59674591762865,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Hepatitis B virus (HBV)",
        "sourceType": "virus",
        "moleculeUniprot": "Q2I360",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 16534844",
          "imex:IM-19619"
        ]
      },
      {
        "humanTarget": "CCR5",
        "targetRank": 4,
        "targetScore": 4.59674591762865,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human immunodeficiency virus 1",
        "sourceType": "virus",
        "moleculeUniprot": "Q70145",
        "interactionCount": 1,
        "bestIntactMiscore": 0.32,
        "evidence": [
          "PMID 30542158",
          "imex:IM-27593"
        ]
      },
      {
        "humanTarget": "B2M",
        "targetRank": 6,
        "targetScore": 4.55383222686195,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human SARS coronavirus",
        "sourceType": "virus",
        "moleculeUniprot": "P59595",
        "interactionCount": 2,
        "bestIntactMiscore": 0.52,
        "evidence": [
          "imex:IM-27826",
          "PMID 20844028"
        ]
      },
      {
        "humanTarget": "B2M",
        "targetRank": 6,
        "targetScore": 4.55383222686195,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human SARS coronavirus",
        "sourceType": "virus",
        "moleculeUniprot": "P59596",
        "interactionCount": 2,
        "bestIntactMiscore": 0.52,
        "evidence": [
          "imex:IM-27833",
          "PMID 20831383"
        ]
      },
      {
        "humanTarget": "B2M",
        "targetRank": 6,
        "targetScore": 4.55383222686195,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human herpesvirus 1 (strain 17) (HHV-1)",
        "sourceType": "virus",
        "moleculeUniprot": "P03170",
        "interactionCount": 2,
        "bestIntactMiscore": 0.52,
        "evidence": [
          "PMID 29107940",
          "imex:IM-28208"
        ]
      },
      {
        "humanTarget": "B2M",
        "targetRank": 6,
        "targetScore": 4.55383222686195,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human SARS coronavirus",
        "sourceType": "virus",
        "moleculeUniprot": "P59637",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "imex:IM-27833",
          "PMID 20831383"
        ]
      },
      {
        "humanTarget": "B2M",
        "targetRank": 6,
        "targetScore": 4.55383222686195,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human immunodeficiency virus type 1 group M subtype B (isolate ARV2/SF2)",
        "sourceType": "virus",
        "moleculeUniprot": "P03407",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "imex:IM-27826",
          "PMID 20844028"
        ]
      },
      {
        "humanTarget": "B2M",
        "targetRank": 6,
        "targetScore": 4.55383222686195,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Northern Territory/60/1968 H3N2)",
        "sourceType": "virus",
        "moleculeUniprot": "Q76R37",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "imex:IM-27833",
          "PMID 20831383"
        ]
      },
      {
        "humanTarget": "B2M",
        "targetRank": 6,
        "targetScore": 4.55383222686195,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "SARS coronavirus TJF",
        "sourceType": "virus",
        "moleculeUniprot": "Q692E0",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "imex:IM-27833",
          "PMID 20831383"
        ]
      },
      {
        "humanTarget": "B2M",
        "targetRank": 6,
        "targetScore": 4.55383222686195,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus 5",
        "sourceType": "virus",
        "moleculeUniprot": "P06930",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      }
    ]
  },
  "scleroderma-limited": {
    "disease": "Scleroderma | limited",
    "piCovered": true,
    "piTrait": "SSC",
    "piTraitName": "Systemic Scleroderma",
    "mappingNote": "proxy: systemic scleroderma",
    "targetCount": 100,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 48,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 273,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 273,
    "targetOpportunities": [
      {
        "humanTarget": "HLA-DQA1",
        "rank": 1,
        "piPriorityScore": 5.0,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ alpha 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "CD74",
        "rank": 2,
        "piPriorityScore": 4.76275349065405,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 15,
          "pdb_druggable_pocket_count": 1
        },
        "description": "CD74 molecule",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DRB1",
        "rank": 3,
        "piPriorityScore": 4.70014076972485,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 88,
          "pdb_druggable_pocket_count": 18
        },
        "description": "major histocompatibility complex, class II, DR beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DRA",
        "rank": 4,
        "piPriorityScore": 4.66110509521219,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 100,
          "pdb_druggable_pocket_count": 21
        },
        "description": "major histocompatibility complex, class II, DR alpha",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DPB1",
        "rank": 5,
        "piPriorityScore": 4.62422612139765,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 7,
          "pdb_druggable_pocket_count": 2
        },
        "description": "major histocompatibility complex, class II, DP beta 1",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DQB1",
        "rank": 6,
        "piPriorityScore": 4.48483470565589,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ beta 1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "STAT4",
        "rank": 7,
        "piPriorityScore": 4.14259083110516,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "signal transducer and activator of transcription 4",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "ITGAX",
        "rank": 8,
        "piPriorityScore": 4.05094076291121,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 1,
          "pdb_count": 8,
          "pdb_druggable_pocket_count": 5
        },
        "description": "integrin subunit alpha X",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "BLK",
        "rank": 9,
        "piPriorityScore": 3.97140087886645,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 1,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "BLK proto-oncogene, Src family tyrosine kinase",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "IRF8",
        "rank": 10,
        "piPriorityScore": 3.94645897208089,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "interferon regulatory factor 8",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "BCKDHA",
        "rank": 11,
        "piPriorityScore": 3.78908171415542,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 24,
          "pdb_druggable_pocket_count": 23
        },
        "description": "branched chain keto acid dehydrogenase E1, alpha polypeptide",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "BCL2",
        "rank": 12,
        "piPriorityScore": 3.77881356544673,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 6,
          "druggable_domain_score": 0,
          "pdb_count": 20,
          "pdb_druggable_pocket_count": 12
        },
        "description": "BCL2, apoptosis regulator",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "PDHB",
        "rank": 13,
        "piPriorityScore": 3.74966345878153,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 7,
          "pdb_druggable_pocket_count": 1
        },
        "description": "pyruvate dehydrogenase E1 beta subunit",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "MS4A1",
        "rank": 14,
        "piPriorityScore": 3.7308928355444,
        "approvedInPi": false,
        "clinicalPhaseCode": "P2",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [
          "RITUXIMAB"
        ],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 3,
          "pdb_druggable_pocket_count": 0
        },
        "description": "membrane spanning 4-domains A1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      }
    ],
    "fdaBackedTargets": [],
    "moleculeLeads": [
      {
        "humanTarget": "CD74",
        "targetRank": 2,
        "targetScore": 4.76275349065405,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Epstein-Barr virus (strain B95-8)",
        "sourceType": "virus",
        "moleculeUniprot": "Q3KSU8",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 17446270",
          "imex:IM-20435",
          "mint:MINT-6769080"
        ]
      },
      {
        "humanTarget": "CD74",
        "targetRank": 2,
        "targetScore": 4.76275349065405,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Puerto Rico/8/1934 H1N1)",
        "sourceType": "virus",
        "moleculeUniprot": "P03431",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 21994455",
          "imex:IM-26754"
        ]
      },
      {
        "humanTarget": "HLA-DRA",
        "targetRank": 4,
        "targetScore": 4.66110509521219,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Aichi/2/1968 H3N2)",
        "sourceType": "virus",
        "moleculeUniprot": "P03437",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 11877480"
        ]
      },
      {
        "humanTarget": "HLA-DPB1",
        "targetRank": 5,
        "targetScore": 4.62422612139765,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "HLA-DPB1",
        "targetRank": 5,
        "targetScore": 4.62422612139765,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P69479",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID unassigned2293",
          "imex:IM-27782"
        ]
      },
      {
        "humanTarget": "HLA-DQB1",
        "targetRank": 6,
        "targetScore": 4.48483470565589,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "STAT4",
        "targetRank": 7,
        "targetScore": 4.14259083110516,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Nipah virus",
        "sourceType": "virus",
        "moleculeUniprot": "P0C1C7",
        "interactionCount": 2,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 28904190",
          "imex:IM-28169"
        ]
      },
      {
        "humanTarget": "STAT4",
        "targetRank": 7,
        "targetScore": 4.14259083110516,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Nipah virus",
        "sourceType": "virus",
        "moleculeUniprot": "Q997F2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 28904190",
          "imex:IM-28169"
        ]
      },
      {
        "humanTarget": "BLK",
        "targetRank": 9,
        "targetScore": 3.97140087886645,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "BCL2",
        "targetRank": 12,
        "targetScore": 3.77881356544673,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human SARS coronavirus",
        "sourceType": "virus",
        "moleculeUniprot": "P59635",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "imex:IM-27845",
          "PMID 17428862"
        ]
      },
      {
        "humanTarget": "PDHB",
        "targetRank": 13,
        "targetScore": 3.74966345878153,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "PDHB",
        "targetRank": 13,
        "targetScore": 3.74966345878153,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P69479",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID unassigned2293",
          "imex:IM-27782"
        ]
      }
    ]
  },
  "sjogren-syndrome": {
    "disease": "Sj\u00f6gren syndrome",
    "piCovered": true,
    "piTrait": "SJO",
    "piTraitName": "Sjogren's Syndrome",
    "mappingNote": "direct",
    "targetCount": 100,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 49,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 246,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 246,
    "targetOpportunities": [
      {
        "humanTarget": "HLA-DRB1",
        "rank": 1,
        "piPriorityScore": 5.0,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 88,
          "pdb_druggable_pocket_count": 18
        },
        "description": "major histocompatibility complex, class II, DR beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DQA1",
        "rank": 2,
        "piPriorityScore": 4.90424327356784,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ alpha 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DRA",
        "rank": 3,
        "piPriorityScore": 4.78038415596502,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 100,
          "pdb_druggable_pocket_count": 21
        },
        "description": "major histocompatibility complex, class II, DR alpha",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "IRF5",
        "rank": 4,
        "piPriorityScore": 4.76341833850073,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 1,
          "pdb_druggable_pocket_count": 0
        },
        "description": "interferon regulatory factor 5",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DQB1",
        "rank": 5,
        "piPriorityScore": 4.75250428196381,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ beta 1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "CD74",
        "rank": 6,
        "piPriorityScore": 4.31198892669957,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 15,
          "pdb_druggable_pocket_count": 1
        },
        "description": "CD74 molecule",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "STAT4",
        "rank": 7,
        "piPriorityScore": 4.23953806308109,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "signal transducer and activator of transcription 4",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "BLK",
        "rank": 8,
        "piPriorityScore": 4.20167566846884,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 1,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "BLK proto-oncogene, Src family tyrosine kinase",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "CIITA",
        "rank": 9,
        "piPriorityScore": 4.09083455820761,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 1,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "class II major histocompatibility complex transactivator",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DMA",
        "rank": 10,
        "piPriorityScore": 3.94269569657833,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 5,
          "pdb_druggable_pocket_count": 1
        },
        "description": "major histocompatibility complex, class II, DM alpha",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "IFI30",
        "rank": 11,
        "piPriorityScore": 3.91956403951089,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "IFI30, lysosomal thiol reductase",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "MT2A",
        "rank": 12,
        "piPriorityScore": 3.90946332078292,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 2,
          "pdb_druggable_pocket_count": 0
        },
        "description": "metallothionein 2A",
        "pathogenHitCount": 11,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "GBP1",
        "rank": 13,
        "piPriorityScore": 3.88706440553595,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 1,
          "pdb_count": 6,
          "pdb_druggable_pocket_count": 1
        },
        "description": "guanylate binding protein 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "IRF9",
        "rank": 14,
        "piPriorityScore": 3.80432690983244,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "interferon regulatory factor 9",
        "pathogenHitCount": 0,
        "sourceTypes": []
      }
    ],
    "fdaBackedTargets": [],
    "moleculeLeads": [
      {
        "humanTarget": "HLA-DRA",
        "targetRank": 3,
        "targetScore": 4.78038415596502,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Aichi/2/1968 H3N2)",
        "sourceType": "virus",
        "moleculeUniprot": "P03437",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 11877480"
        ]
      },
      {
        "humanTarget": "HLA-DQB1",
        "targetRank": 5,
        "targetScore": 4.75250428196381,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "CD74",
        "targetRank": 6,
        "targetScore": 4.31198892669957,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Epstein-Barr virus (strain B95-8)",
        "sourceType": "virus",
        "moleculeUniprot": "Q3KSU8",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 17446270",
          "imex:IM-20435",
          "mint:MINT-6769080"
        ]
      },
      {
        "humanTarget": "CD74",
        "targetRank": 6,
        "targetScore": 4.31198892669957,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Puerto Rico/8/1934 H1N1)",
        "sourceType": "virus",
        "moleculeUniprot": "P03431",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 21994455",
          "imex:IM-26754"
        ]
      },
      {
        "humanTarget": "STAT4",
        "targetRank": 7,
        "targetScore": 4.23953806308109,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Nipah virus",
        "sourceType": "virus",
        "moleculeUniprot": "P0C1C7",
        "interactionCount": 2,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 28904190",
          "imex:IM-28169"
        ]
      },
      {
        "humanTarget": "STAT4",
        "targetRank": 7,
        "targetScore": 4.23953806308109,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Nipah virus",
        "sourceType": "virus",
        "moleculeUniprot": "Q997F2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 28904190",
          "imex:IM-28169"
        ]
      },
      {
        "humanTarget": "BLK",
        "targetRank": 8,
        "targetScore": 4.20167566846884,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "MT2A",
        "targetRank": 12,
        "targetScore": 3.90946332078292,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "influenza a virus (a/wsn/1933(h1n1))",
        "sourceType": "virus",
        "moleculeUniprot": "Q67020",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 21994455",
          "imex:IM-26754"
        ]
      },
      {
        "humanTarget": "MT2A",
        "targetRank": 12,
        "targetScore": 3.90946332078292,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 18",
        "sourceType": "virus",
        "moleculeUniprot": "P06788",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "MT2A",
        "targetRank": 12,
        "targetScore": 3.90946332078292,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 39",
        "sourceType": "virus",
        "moleculeUniprot": "P24830",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22761572",
          "imex:IM-25807"
        ]
      },
      {
        "humanTarget": "MT2A",
        "targetRank": 12,
        "targetScore": 3.90946332078292,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 39",
        "sourceType": "virus",
        "moleculeUniprot": "P24837",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "MT2A",
        "targetRank": 12,
        "targetScore": 3.90946332078292,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 6a",
        "sourceType": "virus",
        "moleculeUniprot": "Q84292",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      }
    ]
  },
  "igg4-related-disease": {
    "disease": "IgG4-related disease",
    "piCovered": false,
    "piTrait": null,
    "piTraitName": null,
    "mappingNote": "no Pi trait mapping in current curated map",
    "targetCount": 0,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 0,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 0,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 0,
    "targetOpportunities": [],
    "fdaBackedTargets": [],
    "moleculeLeads": []
  },
  "mixed-connective-tissue-disease": {
    "disease": "Mixed connective tissue disease",
    "piCovered": false,
    "piTrait": null,
    "piTraitName": null,
    "mappingNote": "no Pi trait mapping in current curated map",
    "targetCount": 0,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 0,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 0,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 0,
    "targetOpportunities": [],
    "fdaBackedTargets": [],
    "moleculeLeads": []
  },
  "adult-onset-still-s-disease": {
    "disease": "Adult-onset Still's disease",
    "piCovered": false,
    "piTrait": null,
    "piTraitName": null,
    "mappingNote": "no Pi trait mapping in current curated map",
    "targetCount": 0,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 0,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 0,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 0,
    "targetOpportunities": [],
    "fdaBackedTargets": [],
    "moleculeLeads": []
  },
  "cryoglobulinemia": {
    "disease": "Cryoglobulinemia",
    "piCovered": false,
    "piTrait": null,
    "piTraitName": null,
    "mappingNote": "no Pi trait mapping in current curated map",
    "targetCount": 0,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 0,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 0,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 0,
    "targetOpportunities": [],
    "fdaBackedTargets": [],
    "moleculeLeads": []
  },
  "juvenile-idiopathic-arthritis": {
    "disease": "Juvenile idiopathic arthritis",
    "piCovered": true,
    "piTrait": "JIA",
    "piTraitName": "Juvenile Idiopathic Arthritis",
    "mappingNote": "direct",
    "targetCount": 100,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 64,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 376,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 376,
    "targetOpportunities": [
      {
        "humanTarget": "HLA-DRA",
        "rank": 1,
        "piPriorityScore": 5.0,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 100,
          "pdb_druggable_pocket_count": 21
        },
        "description": "major histocompatibility complex, class II, DR alpha",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DQB1",
        "rank": 2,
        "piPriorityScore": 4.85953565597998,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ beta 1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DQA1",
        "rank": 3,
        "piPriorityScore": 4.79845740983588,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ alpha 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DRB1",
        "rank": 4,
        "piPriorityScore": 4.72687654339293,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 88,
          "pdb_druggable_pocket_count": 18
        },
        "description": "major histocompatibility complex, class II, DR beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "ICAM1",
        "rank": 5,
        "piPriorityScore": 4.41900527162434,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 4,
          "druggable_domain_score": 0,
          "pdb_count": 12,
          "pdb_druggable_pocket_count": 6
        },
        "description": "intercellular adhesion molecule 1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "CD74",
        "rank": 6,
        "piPriorityScore": 4.28191338238091,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 15,
          "pdb_druggable_pocket_count": 1
        },
        "description": "CD74 molecule",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "UBA52",
        "rank": 7,
        "piPriorityScore": 4.17706688268192,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 4,
          "druggable_domain_score": 0,
          "pdb_count": 49,
          "pdb_druggable_pocket_count": 19
        },
        "description": "ubiquitin A-52 residue ribosomal protein fusion product 1",
        "pathogenHitCount": 3,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "DCLRE1B",
        "rank": 8,
        "piPriorityScore": 4.09628456716587,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 2,
          "pdb_druggable_pocket_count": 0
        },
        "description": "DNA cross-link repair 1B",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "RHOA",
        "rank": 9,
        "piPriorityScore": 4.07402915092963,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 1,
          "pdb_count": 41,
          "pdb_druggable_pocket_count": 15
        },
        "description": "ras homolog family member A",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "AP4B1",
        "rank": 10,
        "piPriorityScore": 4.05974949735378,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 1,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 4 subunit beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "SMAD3",
        "rank": 11,
        "piPriorityScore": 4.0029167571481,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 6,
          "druggable_domain_score": 0,
          "pdb_count": 10,
          "pdb_druggable_pocket_count": 2
        },
        "description": "SMAD family member 3",
        "pathogenHitCount": 6,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "INS",
        "rank": 12,
        "piPriorityScore": 3.81000828098269,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 266,
          "pdb_druggable_pocket_count": 135
        },
        "description": "insulin",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "IRF1",
        "rank": 13,
        "piPriorityScore": 3.740124721009,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "interferon regulatory factor 1",
        "pathogenHitCount": 5,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "MS4A1",
        "rank": 14,
        "piPriorityScore": 3.73780759007977,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 3,
          "pdb_druggable_pocket_count": 0
        },
        "description": "membrane spanning 4-domains A1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      }
    ],
    "fdaBackedTargets": [],
    "moleculeLeads": [
      {
        "humanTarget": "HLA-DRA",
        "targetRank": 1,
        "targetScore": 5.0,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Aichi/2/1968 H3N2)",
        "sourceType": "virus",
        "moleculeUniprot": "P03437",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 11877480"
        ]
      },
      {
        "humanTarget": "HLA-DQB1",
        "targetRank": 2,
        "targetScore": 4.85953565597998,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "ICAM1",
        "targetRank": 5,
        "targetScore": 4.41900527162434,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Epstein-Barr virus (strain B95-8) (HHV-4)",
        "sourceType": "virus",
        "moleculeUniprot": "P0CK56",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 22810586",
          "imex:IM-25307"
        ]
      },
      {
        "humanTarget": "CD74",
        "targetRank": 6,
        "targetScore": 4.28191338238091,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Epstein-Barr virus (strain B95-8)",
        "sourceType": "virus",
        "moleculeUniprot": "Q3KSU8",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 17446270",
          "imex:IM-20435",
          "mint:MINT-6769080"
        ]
      },
      {
        "humanTarget": "CD74",
        "targetRank": 6,
        "targetScore": 4.28191338238091,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Puerto Rico/8/1934 H1N1)",
        "sourceType": "virus",
        "moleculeUniprot": "P03431",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 21994455",
          "imex:IM-26754"
        ]
      },
      {
        "humanTarget": "UBA52",
        "targetRank": 7,
        "targetScore": 4.17706688268192,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 2,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "UBA52",
        "targetRank": 7,
        "targetScore": 4.17706688268192,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P69479",
        "interactionCount": 2,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID unassigned2293",
          "imex:IM-27782"
        ]
      },
      {
        "humanTarget": "UBA52",
        "targetRank": 7,
        "targetScore": 4.17706688268192,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "SARS-CoV-2",
        "sourceType": "virus",
        "moleculeUniprot": "P0DTC9",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 34901782",
          "imex:IM-29413"
        ]
      },
      {
        "humanTarget": "RHOA",
        "targetRank": 9,
        "targetScore": 4.07402915092963,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P69479",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID unassigned2293",
          "imex:IM-27782"
        ]
      },
      {
        "humanTarget": "SMAD3",
        "targetRank": 11,
        "targetScore": 4.0029167571481,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 8",
        "sourceType": "virus",
        "moleculeUniprot": "P06428",
        "interactionCount": 2,
        "bestIntactMiscore": 0.55,
        "evidence": [
          "PMID 22810586",
          "imex:IM-25307; pubmed:22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "SMAD3",
        "targetRank": 11,
        "targetScore": 4.0029167571481,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus 5",
        "sourceType": "virus",
        "moleculeUniprot": "P06930",
        "interactionCount": 2,
        "bestIntactMiscore": 0.49,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "SMAD3",
        "targetRank": 11,
        "targetScore": 4.0029167571481,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 9",
        "sourceType": "virus",
        "moleculeUniprot": "P36801",
        "interactionCount": 2,
        "bestIntactMiscore": 0.49,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      }
    ]
  },
  "heerfordt-syndrome": {
    "disease": "Heerfordt syndrome",
    "piCovered": true,
    "piTrait": "SAR",
    "piTraitName": "Sarcoidosis",
    "mappingNote": "proxy: sarcoidosis",
    "targetCount": 100,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 54,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 344,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 344,
    "targetOpportunities": [
      {
        "humanTarget": "HLA-E",
        "rank": 1,
        "piPriorityScore": 5.0,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 11,
          "pdb_druggable_pocket_count": 2
        },
        "description": "major histocompatibility complex, class I, E",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DQA1",
        "rank": 2,
        "piPriorityScore": 4.61607862691244,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ alpha 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DRA",
        "rank": 3,
        "piPriorityScore": 4.42941088747079,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 100,
          "pdb_druggable_pocket_count": 21
        },
        "description": "major histocompatibility complex, class II, DR alpha",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DQB1",
        "rank": 4,
        "piPriorityScore": 4.39529552893684,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ beta 1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DRB1",
        "rank": 5,
        "piPriorityScore": 4.31160783967645,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 88,
          "pdb_druggable_pocket_count": 18
        },
        "description": "major histocompatibility complex, class II, DR beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "CD74",
        "rank": 6,
        "piPriorityScore": 4.0678443785648,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 15,
          "pdb_druggable_pocket_count": 1
        },
        "description": "CD74 molecule",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "NFKBIL1",
        "rank": 7,
        "piPriorityScore": 3.74237240283907,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "NFKB inhibitor like 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "B2M",
        "rank": 8,
        "piPriorityScore": 3.72359879241017,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 704,
          "pdb_druggable_pocket_count": 240
        },
        "description": "beta-2-microglobulin",
        "pathogenHitCount": 10,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DPB1",
        "rank": 9,
        "piPriorityScore": 3.70032059140247,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 7,
          "pdb_druggable_pocket_count": 2
        },
        "description": "major histocompatibility complex, class II, DP beta 1",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "DDX39B",
        "rank": 10,
        "piPriorityScore": 3.66418613587691,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 1,
          "pdb_count": 5,
          "pdb_druggable_pocket_count": 1
        },
        "description": "DExD-box helicase 39B",
        "pathogenHitCount": 6,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "KLRD1",
        "rank": 11,
        "piPriorityScore": 3.63727409753328,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 4,
          "pdb_druggable_pocket_count": 1
        },
        "description": "killer cell lectin like receptor D1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "KLRC1",
        "rank": 12,
        "piPriorityScore": 3.62580900437442,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 5,
          "pdb_druggable_pocket_count": 0
        },
        "description": "killer cell lectin like receptor C1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "KLRC2",
        "rank": 13,
        "piPriorityScore": 3.61688592708033,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 1,
          "pdb_druggable_pocket_count": 0
        },
        "description": "killer cell lectin like receptor C2",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "CD8A",
        "rank": 14,
        "piPriorityScore": 3.61581802363828,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 5,
          "pdb_druggable_pocket_count": 1
        },
        "description": "CD8a molecule",
        "pathogenHitCount": 0,
        "sourceTypes": []
      }
    ],
    "fdaBackedTargets": [],
    "moleculeLeads": [
      {
        "humanTarget": "HLA-E",
        "targetRank": 1,
        "targetScore": 5.0,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human coronavirus NL63",
        "sourceType": "virus",
        "moleculeUniprot": "H9EJ66",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 33845483",
          "imex:IM-28109"
        ]
      },
      {
        "humanTarget": "HLA-E",
        "targetRank": 1,
        "targetScore": 5.0,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "SARS-CoV-2",
        "sourceType": "virus",
        "moleculeUniprot": "P0DTC3",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 33845483",
          "imex:IM-28109"
        ]
      },
      {
        "humanTarget": "HLA-DRA",
        "targetRank": 3,
        "targetScore": 4.42941088747079,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Aichi/2/1968 H3N2)",
        "sourceType": "virus",
        "moleculeUniprot": "P03437",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 11877480"
        ]
      },
      {
        "humanTarget": "HLA-DQB1",
        "targetRank": 4,
        "targetScore": 4.39529552893684,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "CD74",
        "targetRank": 6,
        "targetScore": 4.0678443785648,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Epstein-Barr virus (strain B95-8)",
        "sourceType": "virus",
        "moleculeUniprot": "Q3KSU8",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 17446270",
          "imex:IM-20435",
          "mint:MINT-6769080"
        ]
      },
      {
        "humanTarget": "CD74",
        "targetRank": 6,
        "targetScore": 4.0678443785648,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Puerto Rico/8/1934 H1N1)",
        "sourceType": "virus",
        "moleculeUniprot": "P03431",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 21994455",
          "imex:IM-26754"
        ]
      },
      {
        "humanTarget": "B2M",
        "targetRank": 8,
        "targetScore": 3.72359879241017,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human SARS coronavirus",
        "sourceType": "virus",
        "moleculeUniprot": "P59595",
        "interactionCount": 2,
        "bestIntactMiscore": 0.52,
        "evidence": [
          "imex:IM-27826",
          "PMID 20844028"
        ]
      },
      {
        "humanTarget": "B2M",
        "targetRank": 8,
        "targetScore": 3.72359879241017,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human SARS coronavirus",
        "sourceType": "virus",
        "moleculeUniprot": "P59596",
        "interactionCount": 2,
        "bestIntactMiscore": 0.52,
        "evidence": [
          "imex:IM-27833",
          "PMID 20831383"
        ]
      },
      {
        "humanTarget": "B2M",
        "targetRank": 8,
        "targetScore": 3.72359879241017,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human herpesvirus 1 (strain 17) (HHV-1)",
        "sourceType": "virus",
        "moleculeUniprot": "P03170",
        "interactionCount": 2,
        "bestIntactMiscore": 0.52,
        "evidence": [
          "PMID 29107940",
          "imex:IM-28208"
        ]
      },
      {
        "humanTarget": "B2M",
        "targetRank": 8,
        "targetScore": 3.72359879241017,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human SARS coronavirus",
        "sourceType": "virus",
        "moleculeUniprot": "P59637",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "imex:IM-27833",
          "PMID 20831383"
        ]
      },
      {
        "humanTarget": "B2M",
        "targetRank": 8,
        "targetScore": 3.72359879241017,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human immunodeficiency virus type 1 group M subtype B (isolate ARV2/SF2)",
        "sourceType": "virus",
        "moleculeUniprot": "P03407",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "imex:IM-27826",
          "PMID 20844028"
        ]
      },
      {
        "humanTarget": "B2M",
        "targetRank": 8,
        "targetScore": 3.72359879241017,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Northern Territory/60/1968 H3N2)",
        "sourceType": "virus",
        "moleculeUniprot": "Q76R37",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "imex:IM-27833",
          "PMID 20831383"
        ]
      }
    ]
  },
  "mikulicz-disease": {
    "disease": "Mikulicz disease",
    "piCovered": false,
    "piTrait": null,
    "piTraitName": null,
    "mappingNote": "no Pi trait mapping in current curated map",
    "targetCount": 0,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 0,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 0,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 0,
    "targetOpportunities": [],
    "fdaBackedTargets": [],
    "moleculeLeads": []
  },
  "kawasaki-disease": {
    "disease": "Kawasaki disease",
    "piCovered": true,
    "piTrait": "KD",
    "piTraitName": "Kawasaki Disease",
    "mappingNote": "direct",
    "targetCount": 100,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 42,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 191,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 191,
    "targetOpportunities": [
      {
        "humanTarget": "BLK",
        "rank": 1,
        "piPriorityScore": 5.0,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 1,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "BLK proto-oncogene, Src family tyrosine kinase",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "CD40",
        "rank": 2,
        "piPriorityScore": 4.41924282366586,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 9,
          "pdb_druggable_pocket_count": 2
        },
        "description": "CD40 molecule",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "FCGR2B",
        "rank": 3,
        "piPriorityScore": 4.35886743275487,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 2,
          "pdb_druggable_pocket_count": 0
        },
        "description": "Fc fragment of IgG receptor IIb",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DRB1",
        "rank": 4,
        "piPriorityScore": 4.24319805167687,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 88,
          "pdb_druggable_pocket_count": 18
        },
        "description": "major histocompatibility complex, class II, DR beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "FAM167A",
        "rank": 5,
        "piPriorityScore": 4.23003648066461,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "family with sequence similarity 167 member A",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DRA",
        "rank": 6,
        "piPriorityScore": 4.12530649575517,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 100,
          "pdb_druggable_pocket_count": 21
        },
        "description": "major histocompatibility complex, class II, DR alpha",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "FCGR2A",
        "rank": 7,
        "piPriorityScore": 4.08911308715007,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 6,
          "pdb_druggable_pocket_count": 3
        },
        "description": "Fc fragment of IgG receptor IIa",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "CD79A",
        "rank": 8,
        "piPriorityScore": 3.95481862003568,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 4,
          "druggable_domain_score": 0,
          "pdb_count": 1,
          "pdb_druggable_pocket_count": 0
        },
        "description": "CD79a molecule",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "MS4A1",
        "rank": 9,
        "piPriorityScore": 3.90717997660235,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 3,
          "pdb_druggable_pocket_count": 0
        },
        "description": "membrane spanning 4-domains A1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "BANK1",
        "rank": 10,
        "piPriorityScore": 3.82604051615132,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "B cell scaffold protein with ankyrin repeats 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "PHRF1",
        "rank": 11,
        "piPriorityScore": 3.81474069615562,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "PHD and ring finger domains 1",
        "pathogenHitCount": 6,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "SYK",
        "rank": 12,
        "piPriorityScore": 3.79187863437525,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 1,
          "pdb_count": 68,
          "pdb_druggable_pocket_count": 49
        },
        "description": "spleen associated tyrosine kinase",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "DOK1",
        "rank": 13,
        "piPriorityScore": 3.78670196431097,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 1,
          "pdb_druggable_pocket_count": 1
        },
        "description": "docking protein 1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "LYN",
        "rank": 14,
        "piPriorityScore": 3.73990043813925,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 7,
          "druggable_domain_score": 1,
          "pdb_count": 4,
          "pdb_druggable_pocket_count": 2
        },
        "description": "LYN proto-oncogene, Src family tyrosine kinase",
        "pathogenHitCount": 11,
        "sourceTypes": [
          "virus"
        ]
      }
    ],
    "fdaBackedTargets": [],
    "moleculeLeads": [
      {
        "humanTarget": "BLK",
        "targetRank": 1,
        "targetScore": 5.0,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "HLA-DRA",
        "targetRank": 6,
        "targetScore": 4.12530649575517,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Aichi/2/1968 H3N2)",
        "sourceType": "virus",
        "moleculeUniprot": "P03437",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 11877480"
        ]
      },
      {
        "humanTarget": "PHRF1",
        "targetRank": 11,
        "targetScore": 3.81474069615562,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human SARS coronavirus",
        "sourceType": "virus",
        "moleculeUniprot": "P59595",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 34232536",
          "imex:IM-29365"
        ]
      },
      {
        "humanTarget": "PHRF1",
        "targetRank": 11,
        "targetScore": 3.81474069615562,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human coronavirus 229E",
        "sourceType": "virus",
        "moleculeUniprot": "P15130",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 34232536",
          "imex:IM-29365"
        ]
      },
      {
        "humanTarget": "PHRF1",
        "targetRank": 11,
        "targetScore": 3.81474069615562,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human coronavirus HKU1 (isolate N5)",
        "sourceType": "virus",
        "moleculeUniprot": "Q0ZME3",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 34232536",
          "imex:IM-29365"
        ]
      },
      {
        "humanTarget": "PHRF1",
        "targetRank": 11,
        "targetScore": 3.81474069615562,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human coronavirus OC43",
        "sourceType": "virus",
        "moleculeUniprot": "P33469",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 34232536",
          "imex:IM-29365"
        ]
      },
      {
        "humanTarget": "PHRF1",
        "targetRank": 11,
        "targetScore": 3.81474069615562,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Middle East respiratory syndrome-related coronavirus (isolate United Kingdom/H123990006/2012) (Betacoronavirus England 1)",
        "sourceType": "virus",
        "moleculeUniprot": "K9N4V7",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 34232536",
          "imex:IM-29365"
        ]
      },
      {
        "humanTarget": "PHRF1",
        "targetRank": 11,
        "targetScore": 3.81474069615562,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "SARS-CoV-2",
        "sourceType": "virus",
        "moleculeUniprot": "P0DTC9",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID 34232536",
          "imex:IM-29365"
        ]
      },
      {
        "humanTarget": "DOK1",
        "targetRank": 13,
        "targetScore": 3.78670196431097,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human immunodeficiency virus 1",
        "sourceType": "virus",
        "moleculeUniprot": "Q9Q2G4",
        "interactionCount": 2,
        "bestIntactMiscore": 0.5,
        "evidence": [
          "imex:IM-17346",
          "PMID 22190034"
        ]
      },
      {
        "humanTarget": "LYN",
        "targetRank": 14,
        "targetScore": 3.73990043813925,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Hepatitis C virus genotype 1a (isolate H77)",
        "sourceType": "virus",
        "moleculeUniprot": "P27958",
        "interactionCount": 4,
        "bestIntactMiscore": 0.7,
        "evidence": [
          "PMID 14993658",
          "mint:MINT-5216943; pubmed:15784897",
          "mint:MINT-5217613"
        ]
      },
      {
        "humanTarget": "LYN",
        "targetRank": 14,
        "targetScore": 3.73990043813925,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Hepatitis C virus genotype 1b (isolate Con1) (HCV)",
        "sourceType": "virus",
        "moleculeUniprot": "Q9WMX2",
        "interactionCount": 3,
        "bestIntactMiscore": 0.67,
        "evidence": [
          "PMID 14993658",
          "mint:MINT-5216943; pubmed:15784897",
          "mint:MINT-5217613"
        ]
      },
      {
        "humanTarget": "LYN",
        "targetRank": 14,
        "targetScore": 3.73990043813925,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Hepatitis C virus genotype 1b (strain HC-J4) (HCV)",
        "sourceType": "virus",
        "moleculeUniprot": "O92972",
        "interactionCount": 2,
        "bestIntactMiscore": 0.59,
        "evidence": [
          "PMID 14993658",
          "mint:MINT-5216943; pubmed:15784897",
          "mint:MINT-5217613"
        ]
      }
    ]
  },
  "hypersensitivity-vasculitis": {
    "disease": "Hypersensitivity vasculitis",
    "piCovered": true,
    "piTrait": "AAV",
    "piTraitName": "ANCA-Associated Vasculitis",
    "mappingNote": "proxy: ANCA-associated vasculitis",
    "targetCount": 99,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 51,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 293,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 293,
    "targetOpportunities": [
      {
        "humanTarget": "CD74",
        "rank": 1,
        "piPriorityScore": 5.0,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 15,
          "pdb_druggable_pocket_count": 1
        },
        "description": "CD74 molecule",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DRA",
        "rank": 2,
        "piPriorityScore": 4.91399095372244,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 100,
          "pdb_druggable_pocket_count": 21
        },
        "description": "major histocompatibility complex, class II, DR alpha",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DRB1",
        "rank": 3,
        "piPriorityScore": 4.90524517296757,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 88,
          "pdb_druggable_pocket_count": 18
        },
        "description": "major histocompatibility complex, class II, DR beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DQA1",
        "rank": 4,
        "piPriorityScore": 4.54103054543056,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ alpha 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DPB1",
        "rank": 5,
        "piPriorityScore": 4.45146323829567,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 7,
          "pdb_druggable_pocket_count": 2
        },
        "description": "major histocompatibility complex, class II, DP beta 1",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DMA",
        "rank": 6,
        "piPriorityScore": 4.29352093221776,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 5,
          "pdb_druggable_pocket_count": 1
        },
        "description": "major histocompatibility complex, class II, DM alpha",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DQB1",
        "rank": 7,
        "piPriorityScore": 4.27942484500621,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ beta 1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "AP4B1",
        "rank": 8,
        "piPriorityScore": 4.17514322110908,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 1,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 4 subunit beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "AP1M2",
        "rank": 9,
        "piPriorityScore": 4.14938303243698,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 1,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 1 subunit mu 2",
        "pathogenHitCount": 4,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "AP1S2",
        "rank": 10,
        "piPriorityScore": 4.12257983094881,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 1 subunit sigma 2",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "AP1M1",
        "rank": 11,
        "piPriorityScore": 4.10636161622112,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 1,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 1 subunit mu 1",
        "pathogenHitCount": 3,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "BCL2",
        "rank": 12,
        "piPriorityScore": 4.10306267231158,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 6,
          "druggable_domain_score": 0,
          "pdb_count": 20,
          "pdb_druggable_pocket_count": 12
        },
        "description": "BCL2, apoptosis regulator",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "SEC24A",
        "rank": 13,
        "piPriorityScore": 4.03940168347407,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 15,
          "pdb_druggable_pocket_count": 13
        },
        "description": "SEC24 homolog A, COPII coat complex component",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "MS4A1",
        "rank": 14,
        "piPriorityScore": 4.01677264608822,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 3,
          "pdb_druggable_pocket_count": 0
        },
        "description": "membrane spanning 4-domains A1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      }
    ],
    "fdaBackedTargets": [],
    "moleculeLeads": [
      {
        "humanTarget": "CD74",
        "targetRank": 1,
        "targetScore": 5.0,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Epstein-Barr virus (strain B95-8)",
        "sourceType": "virus",
        "moleculeUniprot": "Q3KSU8",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 17446270",
          "imex:IM-20435",
          "mint:MINT-6769080"
        ]
      },
      {
        "humanTarget": "CD74",
        "targetRank": 1,
        "targetScore": 5.0,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Puerto Rico/8/1934 H1N1)",
        "sourceType": "virus",
        "moleculeUniprot": "P03431",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 21994455",
          "imex:IM-26754"
        ]
      },
      {
        "humanTarget": "HLA-DRA",
        "targetRank": 2,
        "targetScore": 4.91399095372244,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Aichi/2/1968 H3N2)",
        "sourceType": "virus",
        "moleculeUniprot": "P03437",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 11877480"
        ]
      },
      {
        "humanTarget": "HLA-DPB1",
        "targetRank": 5,
        "targetScore": 4.45146323829567,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "HLA-DPB1",
        "targetRank": 5,
        "targetScore": 4.45146323829567,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P69479",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID unassigned2293",
          "imex:IM-27782"
        ]
      },
      {
        "humanTarget": "HLA-DQB1",
        "targetRank": 7,
        "targetScore": 4.27942484500621,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 16",
        "sourceType": "virus",
        "moleculeUniprot": "P03129",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 18",
        "sourceType": "virus",
        "moleculeUniprot": "P06788",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 1a",
        "sourceType": "virus",
        "moleculeUniprot": "P06465",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 32",
        "sourceType": "virus",
        "moleculeUniprot": "P36827",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M1",
        "targetRank": 11,
        "targetScore": 4.10636161622112,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human immunodeficiency virus type 1 group M subtype B (isolate HXB2) (HIV-1)",
        "sourceType": "virus",
        "moleculeUniprot": "P04578",
        "interactionCount": 2,
        "bestIntactMiscore": 0.46,
        "evidence": [
          "imex:IM-17346",
          "PMID 22190034"
        ]
      },
      {
        "humanTarget": "AP1M1",
        "targetRank": 11,
        "targetScore": 4.10636161622112,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Varicella-zoster virus (strain Oka vaccine) (HHV-3)",
        "sourceType": "virus",
        "moleculeUniprot": "Q9J3M8",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-30341",
          "PMID 40739040"
        ]
      }
    ]
  },
  "iga-vasculitis": {
    "disease": "IgA vasculitis",
    "piCovered": true,
    "piTrait": "AAV",
    "piTraitName": "ANCA-Associated Vasculitis",
    "mappingNote": "proxy: ANCA-associated vasculitis",
    "targetCount": 99,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 51,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 293,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 293,
    "targetOpportunities": [
      {
        "humanTarget": "CD74",
        "rank": 1,
        "piPriorityScore": 5.0,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 5,
          "druggable_domain_score": 0,
          "pdb_count": 15,
          "pdb_druggable_pocket_count": 1
        },
        "description": "CD74 molecule",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DRA",
        "rank": 2,
        "piPriorityScore": 4.91399095372244,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 100,
          "pdb_druggable_pocket_count": 21
        },
        "description": "major histocompatibility complex, class II, DR alpha",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DRB1",
        "rank": 3,
        "piPriorityScore": 4.90524517296757,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 88,
          "pdb_druggable_pocket_count": 18
        },
        "description": "major histocompatibility complex, class II, DR beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DQA1",
        "rank": 4,
        "piPriorityScore": 4.54103054543056,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ alpha 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DPB1",
        "rank": 5,
        "piPriorityScore": 4.45146323829567,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 2,
          "druggable_domain_score": 0,
          "pdb_count": 7,
          "pdb_druggable_pocket_count": 2
        },
        "description": "major histocompatibility complex, class II, DP beta 1",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "HLA-DMA",
        "rank": 6,
        "piPriorityScore": 4.29352093221776,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 5,
          "pdb_druggable_pocket_count": 1
        },
        "description": "major histocompatibility complex, class II, DM alpha",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "HLA-DQB1",
        "rank": 7,
        "piPriorityScore": 4.27942484500621,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 22,
          "pdb_druggable_pocket_count": 8
        },
        "description": "major histocompatibility complex, class II, DQ beta 1",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "AP4B1",
        "rank": 8,
        "piPriorityScore": 4.17514322110908,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 1,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 4 subunit beta 1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "AP1M2",
        "rank": 9,
        "piPriorityScore": 4.14938303243698,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 1,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 1 subunit mu 2",
        "pathogenHitCount": 4,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "AP1S2",
        "rank": 10,
        "piPriorityScore": 4.12257983094881,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 1,
          "druggable_domain_score": 0,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 1 subunit sigma 2",
        "pathogenHitCount": 0,
        "sourceTypes": []
      },
      {
        "humanTarget": "AP1M1",
        "rank": 11,
        "piPriorityScore": 4.10636161622112,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 1,
          "pdb_count": 0,
          "pdb_druggable_pocket_count": 0
        },
        "description": "adaptor related protein complex 1 subunit mu 1",
        "pathogenHitCount": 3,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "BCL2",
        "rank": 12,
        "piPriorityScore": 4.10306267231158,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 6,
          "druggable_domain_score": 0,
          "pdb_count": 20,
          "pdb_druggable_pocket_count": 12
        },
        "description": "BCL2, apoptosis regulator",
        "pathogenHitCount": 1,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "SEC24A",
        "rank": 13,
        "piPriorityScore": 4.03940168347407,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 0,
          "druggable_domain_score": 0,
          "pdb_count": 15,
          "pdb_druggable_pocket_count": 13
        },
        "description": "SEC24 homolog A, COPII coat complex component",
        "pathogenHitCount": 2,
        "sourceTypes": [
          "virus"
        ]
      },
      {
        "humanTarget": "MS4A1",
        "rank": 14,
        "piPriorityScore": 4.01677264608822,
        "approvedInPi": false,
        "clinicalPhaseCode": "N",
        "fdaApprovedDrugs": [],
        "clinicalPhaseDrugs": [],
        "druggability": {
          "druggable_category_score": 3,
          "druggable_domain_score": 0,
          "pdb_count": 3,
          "pdb_druggable_pocket_count": 0
        },
        "description": "membrane spanning 4-domains A1",
        "pathogenHitCount": 0,
        "sourceTypes": []
      }
    ],
    "fdaBackedTargets": [],
    "moleculeLeads": [
      {
        "humanTarget": "CD74",
        "targetRank": 1,
        "targetScore": 5.0,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Epstein-Barr virus (strain B95-8)",
        "sourceType": "virus",
        "moleculeUniprot": "Q3KSU8",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 17446270",
          "imex:IM-20435",
          "mint:MINT-6769080"
        ]
      },
      {
        "humanTarget": "CD74",
        "targetRank": 1,
        "targetScore": 5.0,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Puerto Rico/8/1934 H1N1)",
        "sourceType": "virus",
        "moleculeUniprot": "P03431",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 21994455",
          "imex:IM-26754"
        ]
      },
      {
        "humanTarget": "HLA-DRA",
        "targetRank": 2,
        "targetScore": 4.91399095372244,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Influenza A virus (strain A/Aichi/2/1968 H3N2)",
        "sourceType": "virus",
        "moleculeUniprot": "P03437",
        "interactionCount": 1,
        "bestIntactMiscore": 0.4,
        "evidence": [
          "PMID 11877480"
        ]
      },
      {
        "humanTarget": "HLA-DPB1",
        "targetRank": 5,
        "targetScore": 4.45146323829567,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "HLA-DPB1",
        "targetRank": 5,
        "targetScore": 4.45146323829567,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P69479",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "PMID unassigned2293",
          "imex:IM-27782"
        ]
      },
      {
        "humanTarget": "HLA-DQB1",
        "targetRank": 7,
        "targetScore": 4.27942484500621,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Rabies virus (strain ERA)",
        "sourceType": "virus",
        "moleculeUniprot": "P0DOF2",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-27674",
          "PMID 33208464"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 16",
        "sourceType": "virus",
        "moleculeUniprot": "P03129",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 18",
        "sourceType": "virus",
        "moleculeUniprot": "P06788",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 1a",
        "sourceType": "virus",
        "moleculeUniprot": "P06465",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M2",
        "targetRank": 9,
        "targetScore": 4.14938303243698,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human papillomavirus type 32",
        "sourceType": "virus",
        "moleculeUniprot": "P36827",
        "interactionCount": 1,
        "bestIntactMiscore": 0.37,
        "evidence": [
          "PMID 22898364",
          "imex:IM-28562"
        ]
      },
      {
        "humanTarget": "AP1M1",
        "targetRank": 11,
        "targetScore": 4.10636161622112,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Human immunodeficiency virus type 1 group M subtype B (isolate HXB2) (HIV-1)",
        "sourceType": "virus",
        "moleculeUniprot": "P04578",
        "interactionCount": 2,
        "bestIntactMiscore": 0.46,
        "evidence": [
          "imex:IM-17346",
          "PMID 22190034"
        ]
      },
      {
        "humanTarget": "AP1M1",
        "targetRank": 11,
        "targetScore": 4.10636161622112,
        "approvedTarget": false,
        "approvedDrugs": [],
        "clinicalPhaseCode": "N",
        "sourceOrganism": "Varicella-zoster virus (strain Oka vaccine) (HHV-3)",
        "sourceType": "virus",
        "moleculeUniprot": "Q9J3M8",
        "interactionCount": 1,
        "bestIntactMiscore": 0.35,
        "evidence": [
          "imex:IM-30341",
          "PMID 40739040"
        ]
      }
    ]
  },
  "autoimmune-lymphoproliferative-syndrome": {
    "disease": "Autoimmune lymphoproliferative syndrome",
    "piCovered": false,
    "piTrait": null,
    "piTraitName": null,
    "mappingNote": "no Pi trait mapping in current curated map",
    "targetCount": 0,
    "fdaBackedTargetCount": 0,
    "targetsWithPathogenHits": 0,
    "fdaBackedTargetsWithPathogenHits": 0,
    "sourceTypeCounts": {
      "virus": 0,
      "helminth": 0,
      "tick": 0,
      "unknown": 0
    },
    "needsCurationCount": 0,
    "targetOpportunities": [],
    "fdaBackedTargets": [],
    "moleculeLeads": []
  }
};

export function getPathogenDiscoveryProfile(diseaseId: string) {
  return pathogenDiscoveryByDiseaseId[diseaseId];
}
