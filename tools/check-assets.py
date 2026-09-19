#!/usr/bin/env python3
"""Two questions about public/images, both from sites that went wrong.

1. Is anything in here unreferenced? An unused image is how a retracted asset
   stays alive: install-demo.gif was deleted from the product repository for
   teaching a command that does not exist, and it sat here, unused, for a day.

2. Does anything here disagree with the same file in the product repository?
   A second copy is how one of them gets fixed and the other does not.

Run it from the repository root:

    python3 tools/check-assets.py                    # product repo next door
    python3 tools/check-assets.py --product ../homebutler
"""
import argparse
import hashlib
import pathlib
import sys

IMAGES = pathlib.Path("public/images")
SEARCHED = ["src", "index.html", "public/sitemap.xml"]


def referenced_text() -> str:
    parts = []
    for target in SEARCHED:
        p = pathlib.Path(target)
        if p.is_file():
            parts.append(p.read_text(errors="ignore"))
        elif p.is_dir():
            for f in p.rglob("*"):
                if f.is_file():
                    parts.append(f.read_text(errors="ignore"))
    return "\n".join(parts)


def digest(path: pathlib.Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()[:16]


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--product", default="../homebutler",
                    help="path to the product repository (default: ../homebutler)")
    args = ap.parse_args()

    if not IMAGES.is_dir():
        print(f"no {IMAGES}/ — run this from the repository root")
        return 2

    text = referenced_text()
    product_assets = pathlib.Path(args.product) / "assets"
    failures = []

    for image in sorted(IMAGES.iterdir()):
        if not image.is_file():
            continue

        if image.name not in text:
            failures.append(
                f"{image.name} is not referenced by anything under {', '.join(SEARCHED)}.\n"
                f"  An unused image is how a retracted asset survives. Delete it, or use it."
            )

        twin = product_assets / image.name
        if twin.is_file() and digest(twin) != digest(image):
            failures.append(
                f"{image.name} differs from {twin}.\n"
                f"  site {digest(image)} · product {digest(twin)}\n"
                f"  The product repository is the original. Copy it here, or better, bake both from the same capture."
            )

    if not product_assets.is_dir():
        print(f"note: {product_assets} not found, so drift against the product repository was not checked")

    if failures:
        print("public/images does not hold up:\n")
        for f in failures:
            print(f"- {f}\n")
        return 1

    print(f"public/images: {sum(1 for _ in IMAGES.iterdir())} files, all referenced, none drifting")
    return 0


if __name__ == "__main__":
    sys.exit(main())
