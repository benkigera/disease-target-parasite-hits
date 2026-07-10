export type ParasiteCandidate = {
  diseaseId: string;
  evidenceTier: "A" | "B";
  tierLabel: string;
  molecule: string;
  sourceOrganism: string;
  targetName: string;
  targetClass: string;
  targetRelevanceToDisease: string;
  targetRank: "High" | "Medium" | "Exploratory";
  rankReason: string;
  bindingMode: string;
  affinityValue: string;
  affinityAssay: string;
  affinityReferenceUrl?: string;
  affinityReferenceLabel?: string;
  structureStatus: string;
  pdbIds: string[];
  structureReferenceUrl?: string;
  mechanism: string;
  diseaseEvidence: string;
  referenceUrl: string;
  referenceLabel: string;
  literature: {
    label: string;
    url: string;
    kind: "Disease evidence" | "Binding / target" | "Structure";
  }[];
};

export const parasiteCandidatesByDiseaseId: Record<string, ParasiteCandidate> = {
  "lupus-erythematosus-systemic": {
    diseaseId: "lupus-erythematosus-systemic",
    evidenceTier: "A",
    tierLabel: "Direct disease evidence",
    molecule: "ES-62",
    sourceOrganism: "Acanthocheilonema viteae",
    targetName: "MyD88-dependent TLR/immune-complex effector axis",
    targetClass: "Innate immune signaling adaptor pathway",
    targetRelevanceToDisease:
      "SLE immune-complex and nucleic-acid sensing cascades converge on MyD88-dependent inflammatory effector mechanisms that drive autoantibody and renal pathology.",
    targetRank: "High",
    rankReason:
      "The disease paper explicitly tested ES-62 against MyD88-dependent effector mechanisms in MRL/lpr lupus mice.",
    bindingMode:
      "Pathway modulation; ES-62 downregulates aberrant MyD88-dependent signaling rather than a reported direct ligand-target binding event.",
    affinityValue: "Not reported",
    affinityAssay: "Not reported",
    structureStatus: "No experimental ES-62 host-target complex structure found.",
    pdbIds: [],
    mechanism:
      "Desensitises TLR4 signalling through MyD88 degradation, blunting inflammatory cytokine cascades relevant to SLE.",
    diseaseEvidence:
      "Reported suppression of antinuclear antibody production and proteinuria in the MRL/lpr lupus mouse model.",
    referenceUrl: "https://pubmed.ncbi.nlm.nih.gov/25546822/",
    referenceLabel: "Rodgers et al., Arthritis Rheumatol 2015",
    literature: [
      {
        label: "Rodgers et al., Arthritis Rheumatol 2015",
        url: "https://pubmed.ncbi.nlm.nih.gov/25546822/",
        kind: "Disease evidence",
      },
    ],
  },
  "rheumatoid-arthritis": {
    diseaseId: "rheumatoid-arthritis",
    evidenceTier: "A",
    tierLabel: "Direct disease evidence",
    molecule: "ES-62",
    sourceOrganism: "Acanthocheilonema viteae",
    targetName: "TLR4-MyD88 inflammatory tone / gut-microbiota bone-marrow axis",
    targetClass: "Innate immune signaling and systemic inflammatory axis",
    targetRelevanceToDisease:
      "Collagen-induced arthritis depends on sustained innate/adaptive inflammatory activation; ES-62 normalised gut barrier and microbiota-linked bone-marrow inflammatory tone in the arthritis model.",
    targetRank: "High",
    rankReason:
      "ES-62 protected against joint disease in collagen-induced arthritis, a standard rheumatoid arthritis model.",
    bindingMode:
      "Pathway modulation; no disease-paper affinity measurement for a direct ES-62 host receptor interaction.",
    affinityValue: "Not reported",
    affinityAssay: "Not reported",
    structureStatus: "No experimental ES-62 host-target complex structure found.",
    pdbIds: [],
    mechanism:
      "Phosphorylcholine-containing helminth glycoprotein that downregulates aberrant TLR-MyD88 signalling and restores immunoregulatory tone.",
    diseaseEvidence:
      "Subcutaneous ES-62 protected against joint disease in collagen-induced arthritis, a mouse model of rheumatoid arthritis.",
    referenceUrl: "https://pubmed.ncbi.nlm.nih.gov/30952846/",
    referenceLabel: "Doonan et al., Nat Commun 2019",
    literature: [
      {
        label: "Doonan et al., Nat Commun 2019",
        url: "https://pubmed.ncbi.nlm.nih.gov/30952846/",
        kind: "Disease evidence",
      },
    ],
  },
  "graft-versus-host-disease": {
    diseaseId: "graft-versus-host-disease",
    evidenceTier: "A",
    tierLabel: "Direct disease evidence",
    molecule: "Evasin-1",
    sourceOrganism: "Rhipicephalus sanguineus tick",
    targetName: "CCL3",
    targetClass: "CC chemokine",
    targetRelevanceToDisease:
      "CCL3 recruits and activates inflammatory leukocytes in GVHD target tissues; Evasin-1 sequestration reduces donor T-cell and myeloid infiltration signals.",
    targetRank: "High",
    rankReason:
      "The molecule has direct GVHD-model efficacy, direct CCL3 binding data, and an experimental Evasin-1:CCL3 structure.",
    bindingMode:
      "Direct chemokine sequestration; Evasin-1 forms a 1:1 complex with CCL3 and blocks chemokine-receptor engagement.",
    affinityValue: "Kd 0.16 nM for CCL3/MIP-1 alpha",
    affinityAssay: "Reported chemokine-binding affinity in the Evasin structural study.",
    affinityReferenceUrl: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0008514",
    affinityReferenceLabel: "Dias et al., PLoS One 2009",
    structureStatus: "Experimental complex available: Evasin-1 bound to human CCL3.",
    pdbIds: ["3FPU"],
    structureReferenceUrl: "https://www.rcsb.org/structure/3FPU",
    mechanism:
      "CCL3/MIP-1 alpha-binding tick salivary protein that reduces leukocyte adhesion and CD4+/CD8+ T-cell infiltration into target organs.",
    diseaseEvidence:
      "Evasin-1 reduced mortality, clinical severity, intestinal injury, liver inflammation, IFN-gamma and CCL5 in a mouse GVHD model without blocking graft-versus-leukemia.",
    referenceUrl: "https://pubmed.ncbi.nlm.nih.gov/20100934/",
    referenceLabel: "Castor et al., J Immunol 2010",
    literature: [
      {
        label: "Castor et al., J Immunol 2010",
        url: "https://pubmed.ncbi.nlm.nih.gov/20100934/",
        kind: "Disease evidence",
      },
      {
        label: "Dias et al., PLoS One 2009",
        url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0008514",
        kind: "Binding / target",
      },
      {
        label: "PDB 3FPU",
        url: "https://www.rcsb.org/structure/3FPU",
        kind: "Structure",
      },
    ],
  },
  "ankylosing-spondylitis": {
    diseaseId: "ankylosing-spondylitis",
    evidenceTier: "A",
    tierLabel: "Direct disease evidence",
    molecule: "CS-ESP / Cs-GT / Cs-Severin",
    sourceOrganism: "Clonorchis sinensis",
    targetName: "IL-17A / GM-CSF inflammatory T-cell axis",
    targetClass: "Cytokine-producing CD4+ T-cell response",
    targetRelevanceToDisease:
      "IL-17A biology is central to axial spondyloarthritis treatment, and GM-CSF-producing inflammatory T cells are implicated in entheseal and joint inflammation.",
    targetRank: "Medium",
    rankReason:
      "The parasite products improved arthritis/enthesitis in SKG mice and reduced IL-17A/GM-CSF-producing cells, but no direct cytokine-binding affinity was reported.",
    bindingMode:
      "Cellular cytokine suppression; direct molecular binding target was not reported.",
    affinityValue: "Not reported",
    affinityAssay: "Not reported",
    structureStatus: "No experimental host-target complex structure found for Cs-GT or Cs-Severin.",
    pdbIds: [],
    mechanism:
      "Helminth excretory/secretory proteins and identified peptides that suppress IL-17A and GM-CSF inflammatory cytokine responses.",
    diseaseEvidence:
      "CS-ESP suppressed clinical score, arthritis and enthesitis in SKG mice; Cs-GT and Cs-Severin reduced IL-17A and GM-CSF producing cells in PBMC experiments.",
    referenceUrl: "https://pubmed.ncbi.nlm.nih.gov/40038824/",
    referenceLabel: "Kim et al., Parasit Vectors 2025",
    literature: [
      {
        label: "Kim et al., Parasit Vectors 2025",
        url: "https://pubmed.ncbi.nlm.nih.gov/40038824/",
        kind: "Disease evidence",
      },
    ],
  },
};

export function getParasiteCandidate(diseaseId: string) {
  const candidate = parasiteCandidatesByDiseaseId[diseaseId];
  if (!candidate) return undefined;
  return candidate.evidenceTier === "A" || candidate.evidenceTier === "B"
    ? candidate
    : undefined;
}
