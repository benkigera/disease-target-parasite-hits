# load diseases from disease target map
#
import json
from pathlib import Path

diseases = json.loads(Path("data/outputs/disease_target_map.json").read_text())

uniprot_swissprot_id = [
    target["uniprot_swissprot_id"]
    for disease in diseases
    for target in disease["top_targets"]
]


def main():
    interactions = parse_hpidb(uniprot_swissprot_id)
    print(json.dumps(interactions, indent=2))


def parse_hpidb(uniprot_swissprot_id):
    hits = {}
    for line in (
        Path("data/inputs/hpidb2.mitab/hpidb2.mitab_plus.txt")
        .read_text(encoding="utf-8", errors="replace")
        .splitlines()
    ):
        columns = line.split("\t")

        results = get_interaction_of_interest(columns, uniprot_swissprot_id)

        if results:
            host_id, pathogen_hit = results
            hits.setdefault(host_id, []).append(pathogen_hit)
    return hits


def get_interaction_of_interest(columns, uniprot_swissprot_id):
    protein_a = columns[15].split(":")[-1]
    protein_b = columns[16].split(":")[-1]

    taxid_a = columns[9].split(":")[-1].split("(")[0]
    taxid_b = columns[10].split(":")[-1].split("(")[0]

    kingdom_a = columns[17]
    kingdom_b = columns[18]

    # if protein a is human , and protein b is pathogen -> interested
    #

    if taxid_a == "9606" and taxid_b != "9606":
        host_id = protein_a
        pathogen_id = protein_b
        pathogen_taxid = taxid_b
        pathogen_name = columns[25]
        pathogen_kingdom = kingdom_b

    # if protein b is humam and protein a is non-human -> human -> pathogen interaction -> interested
    elif taxid_b == "9606" and taxid_a != "9606":
        host_id = protein_b
        pathogen_id = protein_a
        pathogen_taxid = taxid_a
        pathogen_name = columns[24]
        pathogen_kingdom = kingdom_a

    else:
        return ""  # human-human or pathogen-pathogen — skip

    if host_id not in uniprot_swissprot_id:
        return ""  # skip interactions without our targets ...

    pathogen_hits = {
        "pathogen_molecule": pathogen_name,
        "pathogen_id": pathogen_id,
        "pathogen_taxid": pathogen_taxid,
        "pathogen_kingdom": pathogen_kingdom,
    }

    return host_id, pathogen_hits


main()
