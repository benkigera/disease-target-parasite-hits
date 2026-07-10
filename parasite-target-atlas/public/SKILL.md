---
name: parasite-target-search
description: Target-first parasite, tick, helminth, and viral immunomodulator discovery. Use when asked to search ranked disease targets for parasite-derived molecules, reproduce a DittoBio-style parasite molecule map, audit candidate target quality against Open Targets, or run/curate scripts like research_parasite_candidates.py.
---

# Parasite Target Search

## Core Principle

Use a **target-first** search. Do not start from `disease + parasite` and backfill a target. The
ranked Open Targets target is the anchor; the parasite molecule is the hit.

---

## Two Modes of Operation

### Mode A — Automated Script (`research_parasite_candidates.py`)

Use when running a batch scan over many indications in a repo or local environment with real
network access to Open Targets and PubMed. See the script section below.

### Mode B — Manual / Claude-Assisted Search

Use when:
- The script cannot run (network sandbox, egress proxy, no indications file)
- The user asks a single targeted question ("what molecule targets FAS in Mikulicz disease?")
- You are operating in the Claude.ai chat interface or any environment where only
  `api.anthropic.com`, `pypi.org`, `npmjs.org`, and a small allowlist are reachable

**In Mode B, Claude does every step manually using `web_search`, `web_fetch`, and its own
reasoning. This is the correct approach in the Claude chat interface.**

---

## Manual Workflow (Mode B)

Work through these steps in order for every question of the form
"what parasite molecule targets X in disease Y" or "find a candidate for rank-N target in Y".

### Step 1 — Resolve the disease ID

```
web_search: "<disease name> Open Targets platform EFO MONDO ORPHA disease ID"
```

Record the EFO/MONDO/ORPHA code (e.g. `MONDO_0019934`).

### Step 2 — Get ranked targets

**Try GraphQL directly (often blocked in sandboxes):**
```
POST https://api.platform.opentargets.org/api/v4/graphql
body: { "query": "{ disease(efoId:\"<ID>\") { name associatedTargets(page:{index:0,size:10}) { rows { score target { id approvedSymbol approvedName } } } } }" }
```

**If blocked (403 / host_not_allowed), fall back to web search:**
```
web_search: "<disease name> Open Targets associated targets ranked top 2024 2025"
web_search: "<disease name> pathogenesis molecular targets cytokines receptors signalling"
```

Build a proxy ranked list from the best available literature. Record symbol, name, and rank.

### Step 3 — Identify the anchor target

The rank-1 target (or any user-specified target) is the anchor for all subsequent searches.
If the user names the target explicitly (e.g. "FAS / rank 1"), use it directly.

### Step 4 — HPIDB / database interaction check

Search for experimentally confirmed host-pathogen PPIs involving the target:

```
web_search: "HPIDB <target symbol> human pathogen protein interaction"
web_search: "IntAct BioGRID <target symbol> parasite helminth tick virus host interaction"
web_search: "<target symbol> host pathogen protein-protein interaction experimental"
```

If a MITAB or database row is found naming a specific parasite interactor with a PMID, record
it as `dataset-verified-interaction` (pending MITAB row confirmation).

### Step 5 — PubMed / literature search

Run at minimum these six queries per anchor target:

```
web_search: "<symbol> <full name> parasite molecule inhibit bind modulate helminth tick virus"
web_search: "<symbol> schistosoma fasciola trichinella ancylostoma excretory secretory ES product"
web_search: "<symbol> tick saliva evasin cystatin HpARI HpBARI omega-1 IPSE Sj16 FhHDM-1"
web_search: "<symbol> viral decoy receptor poxvirus herpesvirus vTNFR CrmB CrmC CrmD CrmE"
web_search: "<symbol> <disease name> parasite immunomodulatory candidate therapeutic"
web_search: "<symbol> FasL apoptosis parasite B-cell CTL immunomodulation"  # adapt last term to target biology
```

For each promising hit, fetch the abstract:
```
web_fetch: https://pubmed.ncbi.nlm.nih.gov/<pmid>/
```

Classify every hit using the curation rules in `references/curation.md`.

### Step 6 — Mechanistic cross-check

For each candidate molecule verify the mechanistic chain:

1. Does the parasite molecule directly bind or sequester the anchor target?
2. Or does it modulate the target's pathway (upstream / downstream)?
3. Is the evidence in a disease-relevant immune context — same cytokine environment,
   same cell type, or same tissue as the indication?

```
web_search: "<molecule> <target symbol> mechanism pathway <disease context>"
web_search: "<molecule> immunomodulatory mechanism human immune target binding"
```

### Step 7 — Assemble output

Always produce all three of these outputs:

#### A. Ranked target table

| Rank | Symbol | Approved Name | Score | Source |
|---|---|---|---|---|
| 1 | FAS | Fas cell surface death receptor | 0.91 | Open Targets |

#### B. Candidate molecule summary table

| Molecule | Source Organism | Mechanism on Target | Evidence Tier | PMID / Source |
|---|---|---|---|---|
| SEA | *Schistosoma mansoni* | Induces FasL on B-1a → CD4+ T-cell apoptosis via Fas/FasL; IL-4/IL-10-dependent | literature-interaction-candidate | PMID:XXXXXXX |
| SjIAP | *Schistosoma japonicum* | Inhibits caspase upstream of FAS/caspase-8 DISC | cooccurrence-only | PMID:XXXXXXX |

**Evidence tiers (use exactly these strings):**
- `dataset-verified-interaction` — HPIDB MITAB row, host side = taxid:9606, confirmed
- `literature-interaction-candidate` — molecule + target + interaction language in PubMed title/abstract
- `cooccurrence-only` — molecule text found, no direct target interaction demonstrated
- `broad-target-hit` — target literature found, no named parasite molecule detected

**Curation status:**
- `scan-hit` — raw output, not yet manually reviewed
- `candidate-review` — mechanistic plausibility confirmed, worth curating
- `verified` — source inspected, target-molecule relationship confirmed

#### C. Curation note

State explicitly:
- What is experimentally confirmed vs inferred
- Whether the evidence is from the disease model or a related model
- What would be needed to upgrade the tier

---

## Automated Script (`research_parasite_candidates.py`)

### What it does

Stdlib-only Python 3. No pip installs needed. Calls:
1. Open Targets GraphQL → ranked disease targets
2. HPIDB MITAB bulk download or PSICQUIC → dataset-backed host-pathogen PPIs
3. PubMed E-utilities (esearch + efetch) → molecule/target literature mining

### Why it fails in Claude's bash sandbox (and most CI sandboxes)

The Claude computer-use sandbox runs an egress proxy that allows only a specific domain
allowlist. All of the script's external endpoints are blocked:

| Endpoint | Status in Claude sandbox |
|---|---|
| `api.platform.opentargets.org` | ❌ `host_not_allowed` (403) |
| `eutils.ncbi.nlm.nih.gov` | ❌ `host_not_allowed` (403) |
| `hpidb.igbb.msstate.edu` | ❌ `host_not_allowed` (403) |
| `www.ebi.ac.uk` (PSICQUIC) | ❌ `host_not_allowed` (403) |
| `pypi.org` | ✅ allowed (pip installs work) |
| `api.anthropic.com` | ✅ allowed (Anthropic API works) |

**Diagnosis:** Check `x-deny-reason` in the 403 response header. If it reads `host_not_allowed`,
the endpoint is egress-blocked. Use Mode B (manual workflow) instead.

### Failure modes and fixes

#### Failure 1 — Open Targets / PubMed / HPIDB → HTTP 403 `host_not_allowed`

**Cause:** Egress proxy in Claude sandbox or restricted CI network.

**Fix A (preferred):** Run the script on your local machine or an unrestricted cloud VM:
```bash
python3 scripts/research_parasite_candidates.py
```

**Fix B:** Use a self-hosted Open Targets instance or API mirror and override:
```bash
OPEN_TARGETS_GRAPHQL=https://your-mirror/api/v4/graphql python3 scripts/research_parasite_candidates.py
```

**Fix C (Claude sandbox):** Switch to Mode B — manual web_search + web_fetch workflow.

#### Failure 2 — HPIDB MITAB download times out or is too large

**Cause:** The bulk MITAB zip (~500 MB) is slow to download and blocked in sandboxes.

**Fix A:** Download once manually and cache it:
```bash
wget https://hpidb.igbb.msstate.edu/downloads/hpidb2.mitab.zip -O /data/hpidb.mitab.zip
# unzip and then:
HPIDB_CACHE_PATH=/data/hpidb.mitab HPIDB_REFRESH=0 python3 scripts/research_parasite_candidates.py
```

**Fix B:** Disable HPIDB, use PubMed only:
```bash
HPIDB_ENABLED=0 HPIDB_PSICQUIC_ENABLED=0 python3 scripts/research_parasite_candidates.py
```

**Fix C:** Use PSICQUIC only (no bulk download), if EBI is reachable:
```bash
HPIDB_ENABLED=0 HPIDB_PSICQUIC_ENABLED=1 python3 scripts/research_parasite_candidates.py
```

#### Failure 3 — SSL certificate errors

**Cause:** Outdated CA bundle on host.

**Fix (last resort):**
```bash
PARASITE_SEARCH_INSECURE_SSL=1 python3 scripts/research_parasite_candidates.py
```
Fix the CA bundle properly when possible (`pip install --upgrade certifi`).

#### Failure 4 — `INDICATIONS_PATH` not found or indications array not parsed

**Cause:** Script defaults to `lib/indications.ts`. Outside a repo, this file does not exist.
The TypeScript regex match also fails for plain JSON arrays.

**Fix:** Create a minimal JSON indications file:
```bash
cat > /tmp/ind.json <<'JSON'
[
  {
    "id": "mikulicz",
    "name": "Mikulicz disease",
    "opentargetsUrl": "https://platform.opentargets.org/disease/MONDO_0019934"
  }
]
JSON
INDICATIONS_PATH=/tmp/ind.json python3 scripts/research_parasite_candidates.py
```

### Minimum working local run (outside sandbox, PubMed only)

```bash
# 1. Create indications file
cat > /tmp/ind.json <<'JSON'
[{"id":"mikulicz","name":"Mikulicz disease","opentargetsUrl":"https://platform.opentargets.org/disease/MONDO_0019934"}]
JSON

# 2. PubMed-only scan (no HPIDB download required)
env \
  INDICATIONS_PATH=/tmp/ind.json \
  TOP_TARGET_LIMIT=5 \
  PARASITE_RETMAX=6 \
  REQUEST_DELAY_MS=350 \
  HPIDB_ENABLED=0 \
  HPIDB_PSICQUIC_ENABLED=0 \
  OUTPUT_PATH=research-output/mikulicz-scan.json \
  SUMMARY_PATH=research-output/mikulicz-scan-summary.tsv \
  python3 scripts/research_parasite_candidates.py

# 3. Full scan with pre-downloaded HPIDB cache
env \
  INDICATIONS_PATH=/tmp/ind.json \
  HPIDB_CACHE_PATH=/data/hpidb.mitab \
  HPIDB_REFRESH=0 \
  TOP_TARGET_LIMIT=100 \
  PARASITE_RETMAX=6 \
  REQUEST_DELAY_MS=350 \
  OUTPUT_PATH=research-output/mikulicz-scan.json \
  SUMMARY_PATH=research-output/mikulicz-scan-summary.tsv \
  python3 scripts/research_parasite_candidates.py
```

### Environment variables reference

| Variable | Default | Description |
|---|---|---|
| `INDICATIONS_PATH` | `lib/indications.ts` | Path to indications `.ts` or `.json` |
| `TOP_TARGET_LIMIT` | `100` | Open Targets ranked targets to pull per disease |
| `PARASITE_RETMAX` | `6` | PubMed results per target query |
| `REQUEST_DELAY_MS` | `350` | Delay between API calls (ms) |
| `OUTPUT_PATH` | `research-output/parasite-candidate-scan.json` | Full JSON output |
| `SUMMARY_PATH` | `research-output/parasite-candidate-scan-summary.tsv` | TSV summary |
| `HPIDB_ENABLED` | `1` | Set `0` to skip all HPIDB checks |
| `HPIDB_MITAB_URL` | HPIDB bulk zip URL | Override for mirror |
| `HPIDB_CACHE_PATH` | `research-output/cache/hpidb.mitab` | Local MITAB cache path |
| `HPIDB_REFRESH` | `0` | Set `1` to force re-download |
| `HPIDB_MATCH_LIMIT` | `3` | Max HPIDB rows stored per target |
| `HPIDB_ONLY` | `0` | Set `1` to skip PubMed, HPIDB only |
| `HPIDB_PSICQUIC_ENABLED` | `1` | Fallback per-target PSICQUIC query |
| `HPIDB_PSICQUIC_RETMAX` | `50` | Max PSICQUIC rows per target |
| `PARASITE_SEARCH_INSECURE_SSL` | `0` | Set `1` to skip SSL verification |
| `OPEN_TARGETS_GRAPHQL` | `https://api.platform.opentargets.org/api/v4/graphql` | Override for self-hosted |

---

## Parasite molecule vocabulary

Known high-value families (extend `MOLECULE_HINTS` in the script as new ones are found):

| Family | Organism | Primary target class |
|---|---|---|
| ES-62 | *Acanthocheilonema viteae* | TLR4, PKCα |
| Evasin-1/3/4 | Tick (*Rhipicephalus*) | Chemokines (CCL3, CXCL8) |
| HpARI / HpBARI | *Heligmosomoides polygyrus* | IL-33 / ST2 |
| FhHDM-1 / Fh12 | *Fasciola hepatica* | TLR4, macrophage polarisation |
| omega-1 / IPSE / Sj16 | *Schistosoma mansoni* | IL-4R, IL-33, Th2 axis |
| SEA / SmSP2 | *Schistosoma mansoni* | FasL/Fas axis, B-1a-mediated CD4+ apoptosis |
| SjIAP | *Schistosoma japonicum* | Caspase / apoptosis (upstream of FAS DISC) |
| AvCystatin / AIP-2 | *Acanthocheilonema / Anisakis* | Cathepsins, MHC-II antigen presentation |
| CrmB / CrmC / CrmD / CrmE | Poxviruses | TNF decoy receptor (vTNFR family) |
| vIL-10 | Cytomegalovirus | IL-10R signalling |
| vIL-18BP | Poxvirus | IL-18 neutralisation |
| DcR3-like | Various parasites | FasL decoy / apoptosis blockade |

---

## Curation rules

Read `references/curation.md` before promoting any hit to a curated candidate.

Minimum acceptance bar:
- Target must appear in the disease's Open Targets ranked list.
- MITAB rows must have `taxid:9606` on the matched host side.
- The parasite molecule must be a real biological molecule, not an incidental word match.
- PubMed title/abstract must explicitly name the ranked target by symbol or approved name.
- Article must support direct interaction, pathway modulation, or disease-relevant immunomodulation.

Mark uncertain results as `scan-hit`. Never label a hit `verified` without source inspection.
A `cooccurrence-only` hit is not evidence of molecular interaction.
