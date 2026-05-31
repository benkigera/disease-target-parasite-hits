# load diseases

import json
from pathlib import Path

disease_list = json.loads(Path("data/outputs/disease_target_map.json").read_text())

# extract uniprot ids for each target from disease-target map

target_uniprot_ids = [
    target["uniprot_swissprot"]
    for disease in disease_list
    for target in disease["top_targets"]
]


def main():
    # print(json.dumps(target_uniprot_ids, indent=2))

    hits_by_target = collect_pathogen_hits_by_targets(target_uniprot_ids)
    # print(json.dumps(hits_by_target, indent=2))

    # add pathogen hits back into each target
    #
    for disease in disease_list:
        for target in disease["top_targets"]:
            target_id = target.get("uniprot_swissprot")
            pathogen_hits_per_target = hits_by_target.get(target_id, [])
            target["pathogen_hits"] = pathogen_hits_per_target

    add_viral_informed_target_rank(disease_list)

    Path("data/outputs/disease_target_pathogen_map.json").write_text(
        json.dumps(disease_list, indent=2)
    )
    print(json.dumps(disease_list, indent=2))


def collect_pathogen_hits_by_targets(target_uniprot_ids):
    hits = {}
    # break into lines (one interaction row ...)
    #
    for line in (
        Path("data/inputs/hpidb2.mitab/hpidb2.mitab_plus.txt")
        .read_text(encoding="utf-8", errors="replace")
        .splitlines()
    ):
        columns = line.split("\t")

        results = fetch_hits_for_a_single_target(columns, target_uniprot_ids)

        if results:
            host_id, pathon_hits = results
            hits.setdefault(host_id, []).append(pathon_hits)

    return hits


def fetch_hits_for_a_single_target(columns, target_uniprot_ids):

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
        pathogen_kingdom = kingdom_b

    elif taxid_b == "9606" and taxid_a != "9606":
        host_id = protein_b
        pathogen_id = protein_a
        pathogen_taxid = taxid_a
        pathogen_name = columns[24]
        pathogen_kingdom = kingdom_a

    else:
        return ""

    # keep only viral pathogen hits
    if pathogen_kingdom != "VIRUS":
        return ""

    # make sure to only record hits related to our project / targets
    if host_id not in target_uniprot_ids:
        return ""

    pathogen_hit = {
        "pathogen_molecule": pathogen_name,
        "pathogen_id": pathogen_id,
        "pathogen_taxid": pathogen_taxid,
        "pathogen_kingdom": pathogen_kingdom,
    }

    return host_id, pathogen_hit


def add_viral_informed_target_rank(diseases):
    for disease in diseases:
        targets = disease["top_targets"]

        for target in targets:
            pathogen_hits = target.get("pathogen_hits", [])

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
            viral_hit_bonus = (
                target["viral_molecule_hit_count"] / max_viral_hits
                if max_viral_hits
                else 0
            )

            target["viral_informed_score"] = target["association_score"] + (
                0.2 * viral_hit_bonus
            )

        ranked_targets = sorted(
            targets,
            key=lambda target: target["viral_informed_score"],
            reverse=True,
        )

        for viral_rank, target in enumerate(ranked_targets, start=1):
            target["viral_informed_rank"] = viral_rank
            target["rank_gain"] = target["open_target_rank"] - viral_rank


main()
