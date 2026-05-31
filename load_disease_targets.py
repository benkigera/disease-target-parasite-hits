# load disease ids
import json
from pathlib import Path

import requests

disease_ids = json.loads(Path("data/inputs/disease_id.json").read_text())


def main():
    disease_targets_map = []
    for disease_id in disease_ids[:3]:
        single_disease_target_map = fetch_top_targets(disease_id)
        disease_targets_map.append(single_disease_target_map)
        print(json.dumps(single_disease_target_map, indent=2))

        with open("data/outputs/disease_target_map.json", "w") as file:
            json.dump(disease_targets_map, file, indent=2)


def fetch_top_targets(disease_id):
    query_string = """
    query MyQuery($disease_id: String!) {
      disease(efoId: $disease_id) {
        id
        name
        associatedTargets(page: {index: 0, size: 2}) {
          rows {
            score
            target {
              approvedName
              approvedSymbol
              id
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

    rows = api_response["data"]["disease"]["associatedTargets"]["rows"]
    all_targets = []
    for index, row in enumerate(rows, start=1):
        swissprot_id = next(
            (
                p["id"]
                for p in row["target"]["proteinIds"]
                if p["source"] == "uniprot_swissprot"
            ),
            None,
        )

        all_targets.append(
            {
                "approved_name": row["target"]["approvedName"],
                "id": row["target"]["id"],
                "score": row["score"],
                "open_target_rank": index,
                "uniprot_swissprot": swissprot_id,
            }
        )

    return {
        "disease_name": api_response["data"]["disease"]["name"],
        "disease_id": disease_id,
        "top_targets": all_targets,
    }


main()
