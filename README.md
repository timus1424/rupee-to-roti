# Rupee to Roti

An independent, source-linked visual explainer tracing how India's public spending, farm inputs, import dependencies and food markets connect to household affordability.

## What is here

- `index.html` — the explainer and its linked sources
- `styles.css` — responsive visual design
- `app.js` — solution tabs and illustrative budget what-if slider
- `docs/project-brief.md` — refined build prompt, video summary, framing and editorial guardrails
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow

## Run locally

Open `index.html` in a browser. The site is static and has no build step or backend.

## Publish with GitHub Pages

The workflow deploys the site from the `main` branch using GitHub Actions. In the repository's **Settings → Pages**, select **GitHub Actions** as the publishing source. After that, pushes to `main` deploy the site automatically.

## Evidence and limitations

Budget values are FY 2026–27 Budget Estimates, not actual spending. Edible-oil dependence uses the Government of India 2023–24 oil-year series. The video section summarizes the video's 4F framing; time-sensitive claims are not treated as verified facts. See the source and method section on the site and the full project brief in `docs/project-brief.md`.

## Sources

- [Government of India — Budget at a Glance 2026–27](https://doe.gov.in/budget-glance-2026-27)
- [PRS Legislative Research — Union Budget 2026–27 analysis](https://prsindia.org/budgets/parliament/union-budget-2026-27-analysis)
- [Department of Food and Public Distribution — Annual Report 2024–25](https://dfpd.gov.in/WriteReadData/AnnualRecordUploadDocuments/b9c640b8-5889-4ffd-a62d-5b56c5d4f029_Food%20AR%202024-25%20English%20small%20size.pdf)
- [Think School video — India's 4F crisis](https://youtu.be/e1cwjeP5Ofs)
