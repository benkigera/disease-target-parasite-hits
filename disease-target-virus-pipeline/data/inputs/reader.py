from pathlib import Path

path = Path("hpidb2.mitab/hpidb2.mitab_plus.txt")
target_line = 1429
row = None

with path.open(encoding="utf-8", errors="replace") as f:
    header = next(f).lstrip("# ").rstrip("\n").split("\t")
    for line_number, line in enumerate(f, start=2):
        if line_number == target_line:
            row = line.rstrip("\n").split("\t")
            break

if row is None:
    raise ValueError(f"Could not find line {target_line} in {path}")

print(f"{'idx':<4} {'column':<32} value")
print("-" * 120)

for i, (name, value) in enumerate(zip(header, row)):
    print(f"{i:<4} {name:<32} {value[:90]}")
