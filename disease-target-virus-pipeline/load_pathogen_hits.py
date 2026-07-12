import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent
DISEASE_TARGET_PATH = ROOT / "data/outputs/disease_target_map.json"
HPIDB_PATH = ROOT / "data/inputs/hpidb2.mitab/hpidb2.mitab_plus.txt"
OUTPUT_PATH = ROOT / "data/outputs/disease_target_pathogen_map.json"
APP_OUTPUT_PATH = ROOT.parent / "parasite-target-atlas/data/disease_target_pathogen_map.json"

disease_list = json.loads(DISEASE_TARGET_PATH.read_text())

# extract uniprot ids for each target from disease-target map

target_uniprot_ids = {
    target["uniprot_swissprot"]
    for disease in disease_list
    for target in disease["top_targets"]
    if target["uniprot_swissprot"]
}


def main():
    hits_by_target = collect_pathogen_hits_by_targets(target_uniprot_ids)
    for disease in disease_list:
        for target in disease["top_targets"]:
            target_id = target.get("uniprot_swissprot")
            pathogen_hits_per_target = hits_by_target.get(target_id, [])
            target["pathogen_hits"] = pathogen_hits_per_target

    add_viral_informed_target_rank(disease_list)

    output = json.dumps(disease_list, indent=2)
    OUTPUT_PATH.write_text(output)
    APP_OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    APP_OUTPUT_PATH.write_text(output)

    target_count = sum(len(disease["top_targets"]) for disease in disease_list)
    print(f"Loaded {len(disease_list)} diseases and {target_count} targets.")
    print(f"Updated {OUTPUT_PATH}.")
    print(f"Updated {APP_OUTPUT_PATH}.")


def collect_pathogen_hits_by_targets(target_uniprot_ids):
    hits = {}

    with HPIDB_PATH.open(encoding="utf-8", errors="replace") as rows:
        for line in rows:
            result = fetch_tier_a_viral_hit(
                line.rstrip("\r\n").split("\t"), target_uniprot_ids
            )
            if result:
                host_id, pathogen_hit = result
                hits.setdefault(host_id, []).append(pathogen_hit)

    return hits


def fetch_tier_a_viral_hit(columns, target_uniprot_ids):
    if len(columns) <= 25:
        return None

    protein_a = columns[15].split(":")[-1]
    protein_b = columns[16].split(":")[-1]

    taxid_a = columns[9].split(":")[1].split("(")[0] if ":" in columns[9] else None
    taxid_b = columns[10].split(":")[1].split("(")[0] if ":" in columns[10] else None

    kingdom_a = columns[17]
    kingdom_b = columns[18]

    if taxid_a == "9606" and taxid_b != "9606":
        host_id = protein_a
        pathogen_id = protein_b
        pathogen_taxid = taxid_b
        pathogen_name = columns[25]
        pathogen_source_organism = columns[20]
        pathogen_kingdom = kingdom_b

    elif taxid_b == "9606" and taxid_a != "9606":
        host_id = protein_b
        pathogen_id = protein_a
        pathogen_taxid = taxid_a
        pathogen_name = columns[24]
        pathogen_source_organism = columns[19]
        pathogen_kingdom = kingdom_a

    else:
        return None

    # keep only viral pathogen hits
    if pathogen_kingdom != "VIRUS":
        return None

    # make sure to only record hits related to our project / targets
    if host_id not in target_uniprot_ids:
        return None

    if not is_tier_a_evidence(columns[6], columns[11]):
        return None

    pathogen_hit = {
        "pathogen_molecule": pathogen_name,
        "pathogen_source_organism": pathogen_source_organism,
        "pathogen_id": pathogen_id,
        "pathogen_taxid": pathogen_taxid,
        "pathogen_kingdom": pathogen_kingdom,
        "detection_method": columns[6],
        "interaction_type": columns[11],
        "source_database": columns[23],
        "confidence": columns[14],
        "publication_ids": extract_publication_ids(columns[8]),
        "evidence_tier": "A",
    }

    return host_id, pathogen_hit


def extract_publication_ids(publication_column):
    return [
        entry.split(":", 1)[1]
        for entry in publication_column.split("|")
        if entry.startswith("pubmed:")
    ]


def is_tier_a_evidence(detection_method, interaction_type):
    detection_method = detection_method.lower()
    return "direct interaction" in interaction_type.lower() and any(
        term in detection_method
        for term in (
            "x-ray crystallography",
            "x ray scattering",
            "nuclear magnetic resonance",
            "surface plasmon resonance",
            "isothermal titration calorimetry",
            "light scattering",
            "hydrogen/deuterium exchange",
        )
    )


def add_viral_informed_target_rank(diseases):
    for disease in diseases:
        targets = disease["top_targets"]

        for target in targets:
            pathogen_hits = target.get("pathogen_hits", [])

            # Collect all the different pathogen species that hit this target.
            viral_source_taxa = {
                hit["pathogen_taxid"]
                for hit in pathogen_hits
                if hit.get("pathogen_taxid")
            }

            target["association_score"] = target["score"]
            target["viral_molecule_hit_count"] = len(pathogen_hits)
            target["viral_source_taxa_count"] = len(viral_source_taxa)
            target["supporting_interaction_count"] = len(pathogen_hits)

        max_viral_hits = max(
            (target["viral_molecule_hit_count"] for target in targets),
            default=0,
        )

        for target in targets:
            viral_frequency = (
                target["viral_molecule_hit_count"] / max_viral_hits
                if max_viral_hits
                else 0
            )

            # Rank only by how frequently HPIDB reports a viral interaction.
            # Open Targets order is retained only when hit counts tie.
            target["viral_informed_score"] = viral_frequency

        ranked_targets = sorted(
            targets,
            key=lambda target: target["viral_molecule_hit_count"],
            reverse=True,
        )

        for viral_rank, target in enumerate(ranked_targets, start=1):
            target["viral_informed_rank"] = viral_rank
            target["rank_gain"] = target["open_target_rank"] - viral_rank

        disease["top_targets"] = ranked_targets


if __name__ == "__main__":
    main()
