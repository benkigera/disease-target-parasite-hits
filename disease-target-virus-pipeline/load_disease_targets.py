import json
from pathlib import Path

import requests

ROOT = Path(__file__).resolve().parent
INPUT_PATH = ROOT / "data/inputs/disease_id.json"
OUTPUT_PATH = ROOT / "data/outputs/disease_target_map.json"
TARGETS_PER_DISEASE = 100

disease_ids = json.loads(INPUT_PATH.read_text())

QUERY = """
query TopDiseaseTargets($disease_id: String!, $target_limit: Int!) {
  disease(efoId: $disease_id) {
    id
    name
    associatedTargets(page: {index: 0, size: $target_limit}) {
      rows {
        score
        target {
          approvedName
          approvedSymbol
          id
          proteinIds { id source }
        }
      }
    }
  }
}
"""


def main():
    disease_targets_map = []
    diseases_without_targets = []

    for disease_id in disease_ids:
        single_disease_target_map = fetch_top_targets(disease_id)
        if not single_disease_target_map:
            diseases_without_targets.append(disease_id)
            continue

        disease_targets_map.append(single_disease_target_map)

    if diseases_without_targets:
        print("Diseases without targets:")
        print(json.dumps(diseases_without_targets, indent=2))
        raise RuntimeError(
            "Open Targets did not resolve every input disease; outputs were not overwritten."
        )

    with OUTPUT_PATH.open("w") as file:
        json.dump(disease_targets_map, file, indent=2)

    print(f"Loaded {len(disease_targets_map)} of {len(disease_ids)} diseases.")


def fetch_top_targets(disease_id):
    variables = {
        "disease_id": disease_id,
        "target_limit": TARGETS_PER_DISEASE,
    }

    base_url = "https://api.platform.opentargets.org/api/v4/graphql"

    r = requests.post(
        base_url,
        json={"query": QUERY, "variables": variables},
        timeout=60,
    )
    r.raise_for_status()

    api_response = r.json()

    disease = api_response["data"]["disease"]
    if not disease:
        return None

    rows = disease["associatedTargets"]["rows"]
    if not rows:
        return None

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
                "approved_symbol": row["target"]["approvedSymbol"],
                "id": row["target"]["id"],
                "score": row["score"],
                "open_target_rank": index,
                "uniprot_swissprot": swissprot_id,
            }
        )

    return {
        "disease_name": disease["name"],
        "disease_id": disease_id,
        "top_targets": all_targets,
    }


if __name__ == "__main__":
    main()
