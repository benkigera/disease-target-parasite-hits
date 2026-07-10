# load diseases ids

import json
from pathlib import Path

import requests

disease_ids = json.loads(Path("data/inputs/disease_id.json").read_text())


def main():
    diseases_target_map = []
    diseases_without_targets = []

    for disease_id in disease_ids:
        disease_target_map = fetch_top_targets_for_disease(disease_id)
        if not disease_target_map:
            diseases_without_targets.append(disease_id)
            continue

        diseases_target_map.append(disease_target_map)

    with open("data/outputs/disease_target_map.json", "w") as file:
        json.dump(diseases_target_map, file, indent=2)

    print("Diseases without targets:")
    print(json.dumps(diseases_without_targets, indent=2))


def fetch_top_targets_for_disease(disease_id):
    query_string = """
    query MyQuery($disease_id: String!) {
      disease(efoId: $disease_id) {
        id
        name
        associatedTargets(page: {index: 0, size: 10}) {
          rows {
            score
            target {
              approvedName
              approvedSymbol
              proteinIds {
                id
                source
              }
            }
          }
        }
      }
    }
    """

    variables = {"disease_id": disease_id}

    base_url = "https://api.platform.opentargets.org/api/v4/graphql"

    r = requests.post(base_url, json={"query": query_string, "variables": variables})

    api_response = json.loads(r.text)

    disease = api_response["data"]["disease"]
    if not disease:
        return None

    rows = disease["associatedTargets"]["rows"]
    if not rows:
        return None

    top_targets = []

    for index, row in enumerate(rows, start=1):
        protein_ids = row["target"]["proteinIds"]

        uniprot_swissprot_id = next(
            (
                protein_id["id"]
                for protein_id in protein_ids
                if protein_id["source"] == "uniprot_swissprot"
            ),
            None,
        )
        top_targets.append(
            {
                "target_name": row["target"]["approvedName"],
                "target_id": row["target"]["approvedSymbol"],
                "rank": index,
                "association_score": row["score"],
                "uniprot_swissprot_id": uniprot_swissprot_id,
            }
        )

    disease_target_map = {
        "disease_name": disease["name"],
        "disease_id": disease["id"],
        "top_targets": top_targets,
    }

    return disease_target_map


main()
# use those ids to look up top targets on open targets
#
# then save disease -> target map
