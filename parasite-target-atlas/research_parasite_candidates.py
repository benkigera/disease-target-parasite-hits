#!/usr/bin/env python3
"""Target-first parasite molecule discovery.

Stdlib-only crawler for Open Targets GraphQL + PubMed E-utilities.

Run with --diagnose to check which endpoints are reachable before a full scan.

Usage:
    python3 research_parasite_candidates.py [--diagnose]

All configuration via environment variables — see SKILL.md for full reference.
"""

from __future__ import annotations

import json
import os
import re
import ssl
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
import zipfile
from pathlib import Path
from typing import Any


# ---------------------------------------------------------------------------
# Endpoint configuration — all overridable via environment variables
# ---------------------------------------------------------------------------
EUTILS = os.environ.get(
    "EUTILS_BASE_URL", "https://eutils.ncbi.nlm.nih.gov/entrez/eutils"
)
OPEN_TARGETS_GRAPHQL = os.environ.get(
    "OPEN_TARGETS_GRAPHQL",
    "https://api.platform.opentargets.org/api/v4/graphql",
)

TOP_TARGET_LIMIT = int(os.environ.get("TOP_TARGET_LIMIT", "100"))
PARASITE_RETMAX = int(os.environ.get("PARASITE_RETMAX", "6"))
REQUEST_DELAY_MS = int(os.environ.get("REQUEST_DELAY_MS", "350"))
OUTPUT_PATH = os.environ.get(
    "OUTPUT_PATH", "research-output/parasite-candidate-scan.json"
)
SUMMARY_PATH = os.environ.get(
    "SUMMARY_PATH", "research-output/parasite-candidate-scan-summary.tsv"
)
INDICATIONS_PATH = os.environ.get("INDICATIONS_PATH", "lib/indications.ts")
HPIDB_ENABLED = os.environ.get("HPIDB_ENABLED", "1") != "0"
HPIDB_MITAB_URL = os.environ.get(
    "HPIDB_MITAB_URL",
    "https://hpidb.igbb.msstate.edu/downloads/hpidb2.mitab.zip",
)
HPIDB_PSICQUIC_URL = os.environ.get(
    "HPIDB_PSICQUIC_URL",
    "http://www.ebi.ac.uk/Tools/webservices/psicquic/hpidb/webservices/current/search/query",
)
HPIDB_PSICQUIC_ENABLED = os.environ.get("HPIDB_PSICQUIC_ENABLED", "1") != "0"
HPIDB_CACHE_PATH = os.environ.get(
    "HPIDB_CACHE_PATH", "research-output/cache/hpidb.mitab"
)
HPIDB_REFRESH = os.environ.get("HPIDB_REFRESH") == "1"
HPIDB_MATCH_LIMIT = int(os.environ.get("HPIDB_MATCH_LIMIT", "3"))
HPIDB_ONLY = os.environ.get("HPIDB_ONLY") == "1"
HPIDB_PSICQUIC_RETMAX = int(os.environ.get("HPIDB_PSICQUIC_RETMAX", "50"))
SSL_CONTEXT = (
    ssl._create_unverified_context()
    if os.environ.get("PARASITE_SEARCH_INSECURE_SSL") == "1"
    else None
)


# ---------------------------------------------------------------------------
# Connectivity diagnostic
# ---------------------------------------------------------------------------
def diagnose_connectivity() -> bool:
    """Check all required endpoints and print a connectivity report.

    Returns True if the minimum required endpoints (Open Targets + PubMed)
    are reachable. Prints a human-readable table to stderr.
    """
    checks = [
        (
            "Open Targets GraphQL",
            OPEN_TARGETS_GRAPHQL,
            "POST",
            json.dumps({"query": "{ meta { name } }"}).encode(),
            {"content-type": "application/json"},
            True,  # required
        ),
        (
            "PubMed ESearch",
            f"{EUTILS}/esearch.fcgi?db=pubmed&term=schistosoma&retmax=1&retmode=json",
            "GET",
            None,
            {},
            True,
        ),
        (
            "HPIDB MITAB zip (HEAD)",
            HPIDB_MITAB_URL,
            "HEAD",
            None,
            {},
            False,
        ),
        (
            "HPIDB PSICQUIC",
            f"{HPIDB_PSICQUIC_URL}/FAS?format=tab25&firstResult=0&maxResults=1",
            "GET",
            None,
            {},
            False,
        ),
    ]
    print("\n=== Connectivity Diagnostic ===", file=sys.stderr)
    all_required_ok = True
    for name, url, method, data, headers, required in checks:
        label = "REQUIRED" if required else "optional"
        try:
            req = urllib.request.Request(url, data=data, headers=headers, method=method)
            with urllib.request.urlopen(req, timeout=10, context=SSL_CONTEXT) as r:
                status = r.status
            print(f"  OK  ({status}) [{label}] {name}", file=sys.stderr)
        except urllib.error.HTTPError as e:
            deny = e.headers.get("x-deny-reason", "")
            reason = f"HTTP {e.code}" + (f" [{deny}]" if deny else "")
            ok = e.code < 500  # 4xx from the real server means reachable
            if e.code == 403 and deny == "host_not_allowed":
                ok = False
            symbol = "OK " if ok else "FAIL"
            if required and not ok:
                all_required_ok = False
            print(f"  {symbol} ({reason}) [{label}] {name}", file=sys.stderr)
        except Exception as exc:
            if required:
                all_required_ok = False
            print(f"  FAIL ({exc}) [{label}] {name}", file=sys.stderr)

    if not all_required_ok:
        print(
            "\n  ✗ One or more REQUIRED endpoints are unreachable.\n"
            "    Options:\n"
            "    1. Run this script outside the Claude sandbox (local machine / cloud VM).\n"
            "    2. Set OPEN_TARGETS_GRAPHQL / EUTILS_BASE_URL to reachable mirrors.\n"
            "    3. Use Mode B (manual Claude web_search workflow) — see SKILL.md.\n"
            "    4. For HPIDB failures only: set HPIDB_ENABLED=0 HPIDB_PSICQUIC_ENABLED=0\n"
            "       to run a PubMed-only scan (Open Targets still required).",
            file=sys.stderr,
        )
    else:
        print("\n  ✓ All required endpoints reachable.\n", file=sys.stderr)
    print("", file=sys.stderr)
    return all_required_ok

PARASITE_TERMS = [
    "poxvirus",
    "herpesvirus",
    "adenovirus",
    "viral protein",
    "viral cytokine",
    "viral chemokine",
    "viral decoy receptor",
    "virus-encoded",
    "virus encoded",
    "helminth",
    "helminths",
    "nematode",
    "trematode",
    "parasite",
    "parasite-derived",
    "excretory-secretory",
    "excretory secretory",
    "ES-62",
    "Acanthocheilonema",
    "Heligmosomoides",
    "Schistosoma",
    "Fasciola",
    "Trichinella",
    "Ancylostoma",
    "Necator",
    "cystatin",
    "AvCystatin",
    "Sj16",
    "omega-1",
    "IPSE",
    "AIP-2",
    "HpARI",
    "HpBARI",
    "Evasin",
    "tick saliva",
    "tick salivary",
]

MOLECULE_HINTS = [
    "vTNFR",
    "CrmB",
    "CrmC",
    "CrmD",
    "CrmE",
    "ES-62",
    "Evasin-1",
    "Evasin-3",
    "FhHDM-1",
    "Fh12",
    "omega-1",
    "IPSE",
    "Sj16",
    "Sm16",
    "AvCystatin",
    "cystatin",
    "AIP-2",
    "HpARI",
    "HpBARI",
    "HES",
    "SEA",
    "LNFPIII",
    "SmSP2",
    "SjIAP",
    "DcR3",
    "vIL-10",
    "vIL-18BP",
    "vFLIP",
    "serpin",
]

GENERIC_MOLECULE_HINTS = {
    "cystatin",
    "HES",
    "SEA",
}

INTERACTION_TERMS = [
    "bind",
    "bound",
    "binding",
    "sequester",
    "sequestration",
    "inhibit",
    "inhibits",
    "inhibited",
    "inhibition",
    "block",
    "blocks",
    "blocked",
    "antagonist",
    "decoy",
    "receptor engagement",
    "neutralize",
    "modulate",
    "modulates",
    "modulated",
    "suppress",
    "suppresses",
    "suppressed",
]

PATHOGEN_TAXON_TERMS = [
    "virus",
    "viral",
    "viridae",
    "hcv",
    "hhv",
    "hiv",
    "hepatitis",
    "herpes",
    "influenza",
    "cytomegalovirus",
    "adenovirus",
    "poxvirus",
    "coronavirus",
    "bacteria",
    "bacterium",
    "escherichia",
    "salmonella",
    "mycoplasma",
    "chlamydia",
    "mycobacterium",
    "listeria",
    "toxoplasma",
    "plasmodium",
    "trypanosoma",
    "leishmania",
    "schistosoma",
    "fasciola",
    "trichinella",
    "nematode",
    "helminth",
    "tick",
]

TARGET_HINTS = [
    "TLR4",
    "MyD88",
    "CCL3",
    "MIP-1 alpha",
    "CXCL8",
    "IL-33",
    "ST2",
    "TSLP",
    "NLRP3",
    "IL-17A",
    "GM-CSF",
    "Treg",
    "Th17",
]

PARASITE_MOLECULE_TERMS = [
    "parasite-derived",
    "helminth-derived",
    "tick-derived",
    "virus-derived",
    "virus-encoded",
    "secreted",
    "salivary",
    "excretory-secretory",
    "immunomodulatory",
    "inhibitor",
    "antagonist",
    "binding protein",
    "decoy receptor",
    *MOLECULE_HINTS,
]


def delay() -> None:
    time.sleep(REQUEST_DELAY_MS / 1000)


def unique(values: list[str]) -> list[str]:
    seen: set[str] = set()
    out: list[str] = []
    for value in values:
        if value not in seen:
            seen.add(value)
            out.append(value)
    return out


def title_abstract_terms(values: list[str]) -> str:
    return " OR ".join(f'"{value}"[Title/Abstract]' for value in unique(values) if value)


def load_indications() -> list[dict[str, Any]]:
    source_path = Path(INDICATIONS_PATH)
    if not source_path.exists():
        raise FileNotFoundError(
            f"Indications file not found: {INDICATIONS_PATH}\n"
            "Create a JSON file and set INDICATIONS_PATH=/path/to/ind.json\n"
            "Minimal example:\n"
            '  [{"id":"my-disease","name":"My Disease",'
            '"opentargetsUrl":"https://platform.opentargets.org/disease/MONDO_XXXXXXX"}]'
        )
    source = source_path.read_text(encoding="utf-8")

    # Plain JSON: array or object with "indications" key
    if source_path.suffix == ".json":
        parsed = json.loads(source)
        if isinstance(parsed, list):
            return parsed
        if isinstance(parsed, dict):
            for key in ("indications", "data", "results"):
                if isinstance(parsed.get(key), list):
                    return parsed[key]
        raise RuntimeError(
            f"JSON file {INDICATIONS_PATH} must be an array or {{\"indications\": [...]}}"
        )

    # TypeScript — try multiple export patterns
    patterns = [
        r"export const indications[^=]*=\s*(\[[\s\S]*?\n\]);",
        r"export const indications[^=]*=\s*(\[[\s\S]*?\]);",
        r"const indications[^=]*=\s*(\[[\s\S]*?\n\]);",
    ]
    for pattern in patterns:
        match = re.search(pattern, source)
        if match:
            try:
                return json.loads(match.group(1))
            except json.JSONDecodeError:
                continue

    raise RuntimeError(
        f"Could not find indications array in {INDICATIONS_PATH}\n"
        "Set INDICATIONS_PATH to a .json file for more reliable parsing."
    )


def opentargets_disease_id(indication: dict[str, Any]) -> str | None:
    url = indication.get("opentargetsUrl")
    if not url:
        return None
    return [part for part in url.split("/") if part][-1]


def http_json(url: str) -> dict[str, Any]:
    with urllib.request.urlopen(url, timeout=60, context=SSL_CONTEXT) as response:
        return json.loads(response.read().decode("utf-8"))


def download_hpidb_mitab() -> Path | None:
    if not HPIDB_ENABLED:
        return None

    cache_path = Path(HPIDB_CACHE_PATH)
    if cache_path.exists() and not HPIDB_REFRESH:
        return cache_path

    cache_path.parent.mkdir(parents=True, exist_ok=True)
    tmp_path = cache_path.with_suffix(cache_path.suffix + ".download")
    try:
        with urllib.request.urlopen(HPIDB_MITAB_URL, timeout=180, context=SSL_CONTEXT) as response:
            tmp_path.write_bytes(response.read())
        if zipfile.is_zipfile(tmp_path):
            with zipfile.ZipFile(tmp_path) as archive:
                data_member = next(
                    (
                        name
                        for name in archive.namelist()
                        if not name.endswith("/")
                        and not Path(name).name.startswith(".")
                    ),
                    None,
                )
                if not data_member:
                    raise RuntimeError("HPIDB zip contained no data file")
                cache_path.write_bytes(archive.read(data_member))
            tmp_path.unlink(missing_ok=True)
        else:
            tmp_path.replace(cache_path)
        return cache_path
    except Exception as exc:  # noqa: BLE001 - dataset is optional
        tmp_path.unlink(missing_ok=True)
        print(f"[hpidb] unavailable: {exc}", file=sys.stderr, flush=True)
        return cache_path if cache_path.exists() else None


def clean_mitab_value(value: str) -> str:
    return "" if value == "-" else value.strip()


def split_mitab_values(value: str) -> list[str]:
    cleaned = clean_mitab_value(value)
    return [item.strip() for item in cleaned.split("|") if item.strip()]


def extract_taxid(value: str) -> str | None:
    match = re.search(r"taxid:(\d+)", value)
    return match.group(1) if match else None


def is_pathogen_like_taxon(*values: str) -> bool:
    text = " ".join(value for value in values if value).lower()
    return any(term in text for term in PATHOGEN_TAXON_TERMS)


def normalize_identifier(value: str) -> str | None:
    token = clean_mitab_value(value)
    if not token:
        return None
    token = token.split(":", 1)[1] if ":" in token else token
    token = re.sub(r"\([^)]*\)", "", token)
    token = token.strip().strip('"').strip("'")
    if not token:
        return None
    return token.lower()


def extract_identifiers(*values: str) -> set[str]:
    identifiers: set[str] = set()
    for value in values:
        for item in split_mitab_values(value):
            token = normalize_identifier(item)
            if token:
                identifiers.add(token)
    return identifiers


def mitab_field(columns: list[str], index: int) -> str:
    return clean_mitab_value(columns[index]) if len(columns) > index else ""


def parse_mitab_pmid(value: str) -> str | None:
    for item in split_mitab_values(value):
        match = re.search(r"pubmed:(\d+)", item, re.IGNORECASE)
        if match:
            return match.group(1)
    return None


def parse_hpidb_mitab_row(line: str) -> dict[str, Any] | None:
    columns = line.rstrip("\n").split("\t")
    if len(columns) < 15:
        return None
    taxid_a = extract_taxid(mitab_field(columns, 9))
    taxid_b = extract_taxid(mitab_field(columns, 10))
    if taxid_a == "9606" and taxid_b != "9606":
        host_side = 0
        pathogen_side = 1
    elif taxid_b == "9606" and taxid_a != "9606":
        host_side = 1
        pathogen_side = 0
    else:
        return None

    offset = 0 if host_side == 0 else 1
    pathogen_offset = 0 if pathogen_side == 0 else 1
    host_identifiers = extract_identifiers(
        mitab_field(columns, offset),
        mitab_field(columns, 2 + offset),
        mitab_field(columns, 4 + offset),
        mitab_field(columns, 24 + offset),
    )
    if not host_identifiers:
        return None

    pathogen_name = (
        mitab_field(columns, 24 + pathogen_offset)
        or mitab_field(columns, 4 + pathogen_offset)
        or mitab_field(columns, pathogen_offset)
    )
    pathogen_taxon = mitab_field(columns, 9 + pathogen_offset)
    pathogen_taxon_name = mitab_field(columns, 19 + pathogen_offset)
    if not is_pathogen_like_taxon(pathogen_taxon, pathogen_taxon_name, pathogen_name):
        return None
    pmid = parse_mitab_pmid(mitab_field(columns, 8))
    return {
        "hostIdentifiers": sorted(host_identifiers),
        "pathogenInteractor": pathogen_name,
        "pathogenTaxon": pathogen_taxon,
        "pathogenTaxonName": pathogen_taxon_name,
        "detectionMethod": mitab_field(columns, 6),
        "interactionType": mitab_field(columns, 11),
        "sourceDatabase": mitab_field(columns, 23) or mitab_field(columns, 12),
        "sourceDatabaseId": mitab_field(columns, 13),
        "pmid": pmid,
        "url": f"https://pubmed.ncbi.nlm.nih.gov/{pmid}/" if pmid else None,
    }


def load_hpidb_index() -> tuple[dict[str, list[dict[str, Any]]], dict[str, Any]]:
    metadata: dict[str, Any] = {
        "enabled": HPIDB_ENABLED,
        "url": HPIDB_MITAB_URL,
        "cachePath": HPIDB_CACHE_PATH,
        "loadedRows": 0,
        "indexedHostIdentifiers": 0,
        "error": None,
    }
    if not HPIDB_ENABLED:
        return {}, metadata
    path = download_hpidb_mitab()
    if not path or not path.exists():
        metadata["error"] = "HPIDB MITAB file unavailable"
        return {}, metadata

    index: dict[str, list[dict[str, Any]]] = {}
    try:
        with path.open("r", encoding="utf-8", errors="replace") as handle:
            for line in handle:
                if not line.strip() or line.startswith("#"):
                    continue
                row = parse_hpidb_mitab_row(line)
                if not row:
                    continue
                metadata["loadedRows"] += 1
                for identifier in row["hostIdentifiers"]:
                    index.setdefault(identifier, []).append(row)
        metadata["indexedHostIdentifiers"] = len(index)
    except Exception as exc:  # noqa: BLE001 - keep PubMed fallback alive
        metadata["error"] = str(exc)
        return {}, metadata
    return index, metadata


def target_match_tokens(target: dict[str, Any]) -> list[tuple[str, str]]:
    tokens: list[tuple[str, str]] = []
    symbol = normalize_identifier(target.get("approvedSymbol") or "")
    name = normalize_identifier(target.get("approvedName") or "")
    if symbol:
        tokens.append(("host-symbol", symbol))
    if name:
        tokens.append(("host-name", name))
    return tokens


def hpidb_matches_for_target(
    hpidb_index: dict[str, list[dict[str, Any]]], target: dict[str, Any]
) -> list[dict[str, Any]]:
    matches: list[dict[str, Any]] = []
    seen: set[tuple[str, str, str]] = set()
    for match_basis, token in target_match_tokens(target):
        for row in hpidb_index.get(token, []):
            dedupe_key = (
                row.get("pathogenInteractor") or "",
                row.get("pmid") or "",
                row.get("interactionType") or "",
            )
            if dedupe_key in seen:
                continue
            seen.add(dedupe_key)
            matches.append(
                {
                    "target": target,
                    "matchBasis": match_basis,
                    "matchedIdentifier": token,
                    "pathogenInteractor": row.get("pathogenInteractor"),
                    "pathogenTaxon": row.get("pathogenTaxon"),
                    "pathogenTaxonName": row.get("pathogenTaxonName"),
                    "detectionMethod": row.get("detectionMethod"),
                    "interactionType": row.get("interactionType"),
                    "sourceDatabase": row.get("sourceDatabase"),
                    "sourceDatabaseId": row.get("sourceDatabaseId"),
                    "pmid": row.get("pmid"),
                    "url": row.get("url"),
                }
            )
            if len(matches) >= HPIDB_MATCH_LIMIT:
                return matches
    return matches


def hpidb_psicquic_query_terms(target: dict[str, Any]) -> list[str]:
    terms = []
    for value in [target.get("approvedSymbol"), target.get("approvedName")]:
        if value and value not in terms:
            terms.append(value)
    return terms


def query_hpidb_psicquic_for_target(target: dict[str, Any]) -> list[dict[str, Any]]:
    if not HPIDB_PSICQUIC_ENABLED:
        return []

    matches: list[dict[str, Any]] = []
    seen: set[tuple[str, str, str]] = set()
    for term in hpidb_psicquic_query_terms(target):
        encoded_query = urllib.parse.quote(term)
        params = urllib.parse.urlencode(
            {
                "format": "tab25",
                "firstResult": "0",
                "maxResults": str(HPIDB_PSICQUIC_RETMAX),
            }
        )
        url = f"{HPIDB_PSICQUIC_URL}/{encoded_query}?{params}"
        try:
            with urllib.request.urlopen(url, timeout=60, context=SSL_CONTEXT) as response:
                body = response.read().decode("utf-8", errors="replace")
        except Exception as exc:  # noqa: BLE001 - target-level fallback
            print(
                f"  HPIDB PSICQUIC unavailable for {target.get('approvedSymbol')}: {exc}",
                file=sys.stderr,
                flush=True,
            )
            continue

        index: dict[str, list[dict[str, Any]]] = {}
        for line in body.splitlines():
            if not line.strip() or line.startswith("#"):
                continue
            row = parse_hpidb_mitab_row(line)
            if not row:
                continue
            for identifier in row["hostIdentifiers"]:
                index.setdefault(identifier, []).append(row)
        for match in hpidb_matches_for_target(index, target):
            dedupe_key = (
                match.get("pathogenInteractor") or "",
                match.get("pmid") or "",
                match.get("interactionType") or "",
            )
            if dedupe_key in seen:
                continue
            seen.add(dedupe_key)
            match["sourceDatabase"] = match.get("sourceDatabase") or "HPIDB PSICQUIC"
            matches.append(match)
            if len(matches) >= HPIDB_MATCH_LIMIT:
                return matches
        delay()
    return matches


def graphql(query: str, variables: dict[str, Any]) -> dict[str, Any]:
    body = json.dumps({"query": query, "variables": variables}).encode("utf-8")
    request = urllib.request.Request(
        OPEN_TARGETS_GRAPHQL,
        data=body,
        headers={"content-type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(request, timeout=90, context=SSL_CONTEXT) as response:
        payload = json.loads(response.read().decode("utf-8"))
    if payload.get("errors"):
        raise RuntimeError(json.dumps(payload["errors"], indent=2))
    return payload["data"]


def fetch_open_targets(disease_id: str, size: int) -> list[dict[str, Any]]:
    query = """
    query DiseaseTargets($efoId: String!, $size: Int!) {
      disease(efoId: $efoId) {
        associatedTargets(page: { index: 0, size: $size }) {
          rows {
            score
            target {
              id
              approvedSymbol
              approvedName
              biotype
            }
          }
        }
      }
    }
    """
    data = graphql(query, {"efoId": disease_id, "size": size})
    disease = data.get("disease")
    if not disease:
        return []
    rows = disease.get("associatedTargets", {}).get("rows", [])
    targets: list[dict[str, Any]] = []
    for index, row in enumerate(rows, start=1):
        target = row["target"]
        targets.append(
            {
                "rank": index,
                "score": row.get("score"),
                "id": target.get("id"),
                "approvedSymbol": target.get("approvedSymbol"),
                "approvedName": target.get("approvedName"),
                "biotype": target.get("biotype"),
            }
        )
    return targets


def build_target_parasite_query(target: dict[str, Any]) -> str:
    target_terms = title_abstract_terms(
        [
            value
            for value in (target.get("approvedSymbol"), target.get("approvedName"))
            if isinstance(value, str) and value
        ]
    )
    parasite_terms = title_abstract_terms(PARASITE_TERMS)
    molecule_terms = title_abstract_terms(PARASITE_MOLECULE_TERMS)
    return f"({target_terms}) AND ({parasite_terms}) AND ({molecule_terms})"


def search_pubmed(query: str) -> dict[str, Any]:
    params = {
        "db": "pubmed",
        "term": query,
        "retmode": "json",
        "retmax": str(PARASITE_RETMAX),
        "sort": "relevance",
    }
    url = f"{EUTILS}/esearch.fcgi?{urllib.parse.urlencode(params)}"
    data = http_json(url)
    result = data.get("esearchresult", {})
    return {
        "count": int(result.get("count", 0)),
        "ids": result.get("idlist", []),
    }


def summarize_pubmed(ids: list[str]) -> dict[str, Any]:
    if not ids:
        return {}
    params = {
        "db": "pubmed",
        "id": ",".join(ids),
        "retmode": "json",
    }
    url = f"{EUTILS}/esummary.fcgi?{urllib.parse.urlencode(params)}"
    return http_json(url).get("result", {})


def text_content(element: ET.Element | None) -> str:
    if element is None:
        return ""
    return " ".join("".join(element.itertext()).split())


def fetch_pubmed_articles(ids: list[str]) -> dict[str, dict[str, str]]:
    if not ids:
        return {}
    params = {
        "db": "pubmed",
        "id": ",".join(ids),
        "retmode": "xml",
    }
    url = f"{EUTILS}/efetch.fcgi?{urllib.parse.urlencode(params)}"
    with urllib.request.urlopen(url, timeout=60, context=SSL_CONTEXT) as response:
        root = ET.fromstring(response.read())

    articles: dict[str, dict[str, str]] = {}
    for pubmed_article in root.findall(".//PubmedArticle"):
        pmid = text_content(pubmed_article.find(".//MedlineCitation/PMID"))
        if not pmid:
            continue
        title = text_content(pubmed_article.find(".//ArticleTitle"))
        abstract = " ".join(
            text_content(abstract_node)
            for abstract_node in pubmed_article.findall(".//Abstract/AbstractText")
        ).strip()
        journal = text_content(pubmed_article.find(".//Journal/Title")) or text_content(
            pubmed_article.find(".//ISOAbbreviation")
        )
        year = text_content(pubmed_article.find(".//PubDate/Year"))
        if not year:
            medline_date = text_content(pubmed_article.find(".//PubDate/MedlineDate"))
            year = medline_date[:4]
        articles[pmid] = {
            "pmid": pmid,
            "title": title,
            "abstract": abstract,
            "journal": journal,
            "year": year,
        }
    return articles


def extract_hint(text: str, hints: list[str]) -> str | None:
    for hint in hints:
        if re.search(rf"\b{re.escape(hint)}\b", text, re.IGNORECASE):
            return hint
    return None


def mentions_target(text: str, target: dict[str, Any]) -> bool:
    symbol = target.get("approvedSymbol")
    name = target.get("approvedName")
    if symbol and re.search(rf"\b{re.escape(symbol)}\b", text, re.IGNORECASE):
        return True
    if name and re.search(rf"\b{re.escape(name)}\b", text, re.IGNORECASE):
        return True
    return False


def has_interaction_signal(text: str) -> bool:
    return any(
        re.search(rf"\b{re.escape(term)}\b", text, re.IGNORECASE)
        for term in INTERACTION_TERMS
    )


def classify_article(article: dict[str, Any], target: dict[str, Any]) -> dict[str, Any]:
    searchable = " ".join(
        [
            article.get("title", ""),
            article.get("abstract", ""),
            article.get("journal", ""),
        ]
    )
    molecule_hint = extract_hint(searchable, MOLECULE_HINTS)
    target_evidence = mentions_target(searchable, target)
    interaction_evidence = has_interaction_signal(searchable)
    generic_molecule = bool(
        molecule_hint and molecule_hint.lower() in {item.lower() for item in GENERIC_MOLECULE_HINTS}
    )
    verified_interaction_candidate = bool(
        molecule_hint
        and target_evidence
        and interaction_evidence
        and not (generic_molecule and not target_evidence)
    )
    article.update(
        {
            "moleculeHint": molecule_hint,
            "targetHint": target.get("approvedSymbol") if target_evidence else None,
            "targetEvidence": target_evidence,
            "interactionEvidence": interaction_evidence,
            "curationStatus": (
                "interaction-candidate"
                if verified_interaction_candidate
                else "cooccurrence-only"
                if molecule_hint
                else "broad-target-hit"
            ),
            "curationNote": (
                "Molecule, ranked target, and interaction language all appear in PubMed title/abstract."
                if verified_interaction_candidate
                else "Molecule name appears, but PubMed title/abstract does not prove interaction with the ranked target."
                if molecule_hint
                else "No named parasite molecule was detected in PubMed title/abstract."
            ),
        }
    )
    return article


def is_interaction_candidate(article: dict[str, Any]) -> bool:
    return article.get("curationStatus") == "interaction-candidate"


def scan() -> dict[str, Any]:
    indications = load_indications()
    hpidb_index, hpidb_metadata = load_hpidb_index()
    if hpidb_metadata.get("loadedRows"):
        print(
            f"[hpidb] indexed {hpidb_metadata['loadedRows']} human host-pathogen rows",
            file=sys.stderr,
            flush=True,
        )
    results: list[dict[str, Any]] = []

    for indication_index, indication in enumerate(indications, start=1):
        disease_id = opentargets_disease_id(indication)
        print(
            f"[{indication_index}/{len(indications)}] {indication['name']} ({disease_id or 'no Open Targets id'})",
            file=sys.stderr,
            flush=True,
        )

        ranked_targets = (
            fetch_open_targets(disease_id, TOP_TARGET_LIMIT) if disease_id else []
        )
        target_searches: list[dict[str, Any]] = []
        target_errors: list[dict[str, Any]] = []
        dataset_evidence: list[dict[str, Any]] = []

        for target in ranked_targets:
            target_matches = hpidb_matches_for_target(hpidb_index, target)
            if not target_matches and not hpidb_index:
                target_matches = query_hpidb_psicquic_for_target(target)
            if target_matches:
                print(
                    f"  HPIDB rank {target['rank']}: {target['approvedSymbol']} ({len(target_matches)})",
                    file=sys.stderr,
                    flush=True,
                )
                dataset_evidence.extend(target_matches)

        if not HPIDB_ONLY:
            for target in ranked_targets:
                query = build_target_parasite_query(target)
                try:
                    search = search_pubmed(query)
                    fetched_articles = fetch_pubmed_articles(search["ids"])
                    summaries = summarize_pubmed(
                        [
                            pmid
                            for pmid in search["ids"]
                            if pmid not in fetched_articles
                        ]
                    )
                    articles = []
                    for pmid in search["ids"]:
                        if pmid in fetched_articles:
                            article = fetched_articles[pmid]
                        else:
                            summary = summaries.get(pmid, {})
                            article = {
                                "pmid": pmid,
                                "title": summary.get("title", ""),
                                "abstract": "",
                                "journal": summary.get("source", ""),
                                "year": str(summary.get("pubdate", ""))[:4],
                            }
                        article["url"] = f"https://pubmed.ncbi.nlm.nih.gov/{pmid}/"
                        articles.append(classify_article(article, target))
                    if search["count"] > 0:
                        print(
                            f"  hit rank {target['rank']}: {target['approvedSymbol']} ({search['count']})",
                            file=sys.stderr,
                            flush=True,
                        )
                        target_searches.append(
                            {
                                "target": target,
                                "query": query,
                                "hitCount": search["count"],
                                "articles": articles,
                            }
                        )
                except Exception as exc:  # noqa: BLE001 - keep scan moving
                    target_errors.append(
                        {"target": target, "query": query, "error": str(exc)}
                    )
                delay()

        dataset_hit = dataset_evidence[0] if dataset_evidence else None
        interaction_hit = next(
            (
                search
                for search in target_searches
                if any(is_interaction_candidate(article) for article in search["articles"])
            ),
            None,
        )
        molecule_hit = next(
            (
                search
                for search in target_searches
                if any(article.get("moleculeHint") for article in search["articles"])
            ),
            None,
        )
        best_target_hit = (
            {"target": dataset_hit["target"], "articles": []}
            if dataset_hit
            else interaction_hit or molecule_hit or (
                target_searches[0] if target_searches else None
            )
        )
        best_article = None
        if best_target_hit and best_target_hit["articles"]:
            best_article = next(
                (
                    article
                    for article in best_target_hit["articles"]
                    if is_interaction_candidate(article)
                ),
                next(
                    (
                        article
                        for article in best_target_hit["articles"]
                        if article.get("moleculeHint")
                    ),
                    best_target_hit["articles"][0] if best_target_hit["articles"] else None,
                ),
            )

        if dataset_hit:
            status = "dataset-verified-interaction"
        elif interaction_hit:
            status = "literature-interaction-candidate"
        elif molecule_hit:
            status = "cooccurrence-only"
        elif best_target_hit:
            status = "broad-target-hit"
        elif ranked_targets:
            status = "no-parasite-hit-in-top-ranked-targets"
        else:
            status = "no-open-targets-ranked-targets"

        results.append(
            {
                "id": indication["id"],
                "name": indication["name"],
                "openTargetsDiseaseId": disease_id,
                "openTargetsTargetLimit": TOP_TARGET_LIMIT,
                "reviewStatus": status,
                "proposedCandidateFields": {
                    "molecule": dataset_hit.get("pathogenInteractor")
                    if dataset_hit
                    else best_article.get("moleculeHint")
                    if best_article
                    else None,
                    "sourceOrganism": dataset_hit.get("pathogenTaxonName")
                    if dataset_hit
                    else None,
                    "targetName": best_target_hit["target"]["approvedSymbol"]
                    if best_target_hit
                    else None,
                    "targetRank": best_target_hit["target"]["rank"]
                    if best_target_hit
                    else None,
                    "targetScore": best_target_hit["target"]["score"]
                    if best_target_hit
                    else None,
                    "bindingMode": dataset_hit.get("interactionType")
                    if dataset_hit
                    else None,
                    "affinityValue": "Not reported",
                    "affinityAssay": "Not reported",
                    "structureStatus": "Not reviewed",
                    "pdbIds": [],
                },
                "rankedTargets": ranked_targets[:10],
                "datasetEvidence": dataset_evidence,
                "targetSearches": target_searches,
                "targetErrors": target_errors,
            }
        )
        delay()

    return {
        "generatedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "totalIndications": len(indications),
        "openTargetsTargetLimit": TOP_TARGET_LIMIT,
        "parasiteRetmax": PARASITE_RETMAX,
        "requestDelayMs": REQUEST_DELAY_MS,
        "hpidbOnly": HPIDB_ONLY,
        "hpidb": hpidb_metadata,
        "results": results,
    }


def write_outputs(payload: dict[str, Any]) -> None:
    output_path = Path(OUTPUT_PATH)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(payload, indent=2) + "\n")

    summary_path = Path(SUMMARY_PATH)
    summary_path.parent.mkdir(parents=True, exist_ok=True)
    lines = [
        "\t".join(
            [
                "disease_id",
                "disease",
                "status",
                "evidence_tier",
                "target_rank",
                "target_symbol",
                "target_score",
                "dataset_source",
                "interaction_method",
                "interaction_type",
                "pathogen_taxon",
                "pathogen_interactor",
                "molecule_hint",
                "pmid",
                "title",
                "curation_status",
                "target_evidence",
                "interaction_evidence",
                "hit_target_count",
                "error_count",
            ]
        )
    ]
    for result in payload["results"]:
        dataset_hits = result.get("datasetEvidence") or []
        dataset_hit = dataset_hits[0] if dataset_hits else None
        hit = None
        article = None
        if not dataset_hit:
            hit = next(
            (
                search
                for search in result["targetSearches"]
                if any(is_interaction_candidate(article) for article in search["articles"])
            ),
            None,
            )
            if not hit:
                hit = next(
                    (
                        search
                        for search in result["targetSearches"]
                        if any(article.get("moleculeHint") for article in search["articles"])
                    ),
                    None,
                )
            if hit:
                article = next(
                (
                    item
                    for item in hit["articles"]
                    if is_interaction_candidate(item)
                ),
                None,
            )
                if not article:
                    article = next(
                        (
                            item
                            for item in hit["articles"]
                            if item.get("moleculeHint")
                        ),
                        None,
                    )
        selected_target = dataset_hit.get("target") if dataset_hit else hit["target"] if hit else None
        row = [
            result["id"],
            result["name"],
            result["reviewStatus"],
            "dataset" if dataset_hit else "literature" if article else "",
            selected_target["rank"] if selected_target else "",
            selected_target["approvedSymbol"] if selected_target else "",
            selected_target["score"] if selected_target else "",
            dataset_hit.get("sourceDatabase") if dataset_hit else "",
            dataset_hit.get("detectionMethod") if dataset_hit else "",
            dataset_hit.get("interactionType") if dataset_hit else "",
            dataset_hit.get("pathogenTaxonName") or dataset_hit.get("pathogenTaxon") if dataset_hit else "",
            dataset_hit.get("pathogenInteractor") if dataset_hit else "",
            article.get("moleculeHint") if article else "",
            dataset_hit.get("pmid") if dataset_hit else article.get("pmid") if article else "",
            article.get("title") if article else "",
            "dataset-verified" if dataset_hit else article.get("curationStatus") if article else "",
            True if dataset_hit else article.get("targetEvidence") if article else "",
            True if dataset_hit else article.get("interactionEvidence") if article else "",
            len(result["targetSearches"]),
            len(result["targetErrors"]),
        ]
        lines.append("\t".join(str(value).replace("\t", " ").replace("\n", " ") for value in row))
    summary_path.write_text("\n".join(lines) + "\n")

    status_counts: dict[str, int] = {}
    for result in payload["results"]:
        status = result["reviewStatus"]
        status_counts[status] = status_counts.get(status, 0) + 1
    print(
        json.dumps(
            {
                "generatedAt": payload["generatedAt"],
                "totalIndications": payload["totalIndications"],
                "outputPath": str(output_path),
                "summaryPath": str(summary_path),
                "statuses": dict(sorted(status_counts.items())),
            },
            indent=2,
        )
    )


def main() -> None:
    args = sys.argv[1:]

    # --diagnose: check connectivity only, do not run scan
    if "--diagnose" in args:
        ok = diagnose_connectivity()
        sys.exit(0 if ok else 1)

    # --check / --preflight: diagnose then proceed if all required endpoints OK
    if "--check" in args or "--preflight" in args:
        ok = diagnose_connectivity()
        if not ok:
            print(
                "Pre-flight check failed. Fix connectivity before running the scan.\n"
                "See SKILL.md for workarounds. Exiting.",
                file=sys.stderr,
            )
            sys.exit(1)

    write_outputs(scan())


if __name__ == "__main__":
    main()
