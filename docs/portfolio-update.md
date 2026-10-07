# Portfolio indexing update — October 6, 2026

Review branch: `portfolio-indexing-2026-10-06`. No push or deployment performed.

Added seven Media & Press entries, the JITCAI reviewer listing, the 2017 cash-transactions paper, ORCID, SciSpace author indexing, and the Tsuba supporting reference. Added ResearchGate and J-GLOBAL indexing links to the existing microservices paper, IEEE DOI/proceedings links to the existing matrix hashing paper, and gumo release history. Kept all four existing publications, both HackerNoon articles, both projects, and the original resume/assets.

Consolidated five repeated outbound links: GitHub, Google Scholar, npm, helmet arXiv, and email. Repeated placements now point to local anchors. Structured metadata references the same resources intentionally; it does not create additional visible entries. No Vignan placement record was added.

Updated canonical identity, title/description, canonical URL, Open Graph and Twitter tags, and image alt text. One JSON-LD graph contains one canonical Person, five ScholarlyArticle nodes, seven media references, a media collection, and gumo SoftwareSourceCode. Existing CSS, fonts and colors are unchanged. Long sources remain in metadata with compact card badges. Gumo fixed version/download counts were removed in favor of live npm links. The publication counter now reflects five papers. Springer metadata uses the existing resume's 2018 AISC reference and DOI; no LNCS claim was introduced.

Validation: parsed JSON-LD and sitemap XML; checked unique IDs/destinations, internal anchors and asset paths, external link rel attributes, and a single canonical/social tag set. Desktop (1440px) and responsive (500px) Chrome rendering checked; card overflow checks found none. Chrome uses a minimum 500px viewport in this environment, so a true 390px viewport was not verified. No build system exists. `git diff --check` passes.

All supplied external URLs were checked using curl HEAD, followed by GET for non-200 responses, following redirects. HTTP 200 verifies response status, not identity or page content. Full URLs and results are in `link-verification.json`.

Non-200 results retained:
- ResearchGate: both publication records and profile — 403, unverifiable by script.
- SciSpace author record — 403, unverifiable by script.
- Academia.edu profile — 403, unverifiable by script.
- LinkedIn profile — 999, unverifiable by script.
- npm package and versions pages — 403, unverifiable by script.
- J-GLOBAL — 503, unavailable during verification.
- IEEE DOI — redirects to IEEE Xplore, which returns 202; unverifiable by script.

Other supplied URLs returned 200, including media links, reviewer listing, arXiv, Zenodo DOI, ORCID, Scholar, GitHub, and both supporting PDFs.
