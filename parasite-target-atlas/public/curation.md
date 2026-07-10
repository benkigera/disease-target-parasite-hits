# Curation Rules

Use these rules after running the target-first scan.

## Accept

- A ranked Open Targets disease target is explicitly matched by symbol or approved name.
- For HPIDB-backed evidence, the ranked target is matched on the human host side of a MITAB row with `taxid:9606`.
- The non-human MITAB side is pathogen-like, for example viral, bacterial, helminth, protozoan, or tick-derived.
- The molecule is parasite-derived, tick-derived, helminth-derived, or virus-encoded.
- The paper title or abstract names a real molecule family, for example `ES-62`, `Evasin`, `HpARI`, `HpBARI`, `FhHDM-1`, `Fh12`, `omega-1`, `IPSE`, `Sj16`, `AvCystatin`, `AIP-2`, or viral decoy receptor families.
- The evidence supports one of:
  - direct binding or sequestration of the ranked target,
  - modulation of the ranked target pathway,
  - disease-relevant immune model evidence connected to the ranked target.

## Reject

- Incidental text matches such as `SEA` meaning a body of water.
- Name-adjacent false positives where a parasite molecule looks similar to a human target name but is not the same entity.
- `cystatin` vs `CYS1` / `cystin 1` unless the source explicitly shows binding, inhibition, or pathway modulation of human CYS1 by that parasite cystatin.
- Human endogenous proteins misread as parasite molecules, such as human cystatin papers with no parasite context.
- Broad target papers where parasite terms appear only in background text.
- Disease papers that do not connect the molecule to the ranked target or a nearby pathway.
- HPIDB/MITAB rows where the ranked target only appears on the pathogen side or in an unrelated alias field.
- HPIDB/MITAB rows where the non-human side is a model organism or ordinary vertebrate protein rather than a pathogen-like interactor.
- Targets outside the chosen Open Targets rank window unless the user explicitly asks for exploratory low-rank search.

## Promote

When promoting a hit into app data, store:

- disease ID and Open Targets disease ID,
- canonical Open Targets target symbol,
- target rank and score,
- parasite molecule name,
- source organism,
- binding/pathway mechanism,
- disease or model evidence,
- PMID/DOI/PDB links,
- evidence tier: `dataset-verified-interaction`, `literature-interaction-candidate`, `cooccurrence-only`, or `broad-target-hit`,
- curation status: `scan-hit`, `candidate-review`, or `verified`.

Use `verified` only after source inspection confirms the target and molecule relationship. A `dataset-verified-interaction` row is stronger than PubMed text mining, but still requires manual review before becoming an app-level verified therapeutic candidate.
