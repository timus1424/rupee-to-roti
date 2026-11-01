# Rupee to Roti — project brief

## One-line concept
An independent, source-linked visual explainer showing how India's public spending, energy and farm-input dependencies, food markets, and household affordability connect.

## Refined build prompt

> Create an educational, mobile-first website that helps Indian readers trace how public money and global supply-chain exposure affect food security. Use the reference site BL00D.MONEY as a structural inspiration for its source-linked ledger, searchable network of actors, and case-file storytelling, but create an original visual identity and neutral editorial voice.
>
> The site should explain (1) what the Union government allocates across selected sectors; (2) how fertiliser, energy, edible oils, pulses, imports, storage, weather, prices, and household budgets interact; (3) what the supplied Think School video argues through its fuel/food/fertiliser/finance (“4F”) lens; and (4) a spectrum of responses from a long-term aspirational vision to practical pilots.
>
> Show the fiscal year and whether each figure is an estimate, revised estimate, or actual. Attach primary sources and dates to facts. Separate video claims from independently checked facts. Explain that subsidies have beneficiaries and trade-offs; do not label all support waste. Never imply that India is about to run out of staple grain unless authoritative evidence supports it. Make clear that “self-sufficiency” must account for farmer income, nutrition, water, soil, climate, affordability, biodiversity, and trade resilience.
>
> Include an interactive sector comparison, an import-dependency visual for edible oil, a clearly labelled cause-and-effect map, solution tabs (“implementable” and “utopian”), and a transparent what-if calculator. The calculator may show arithmetic on a selected budget estimate but must not imply savings can be achieved without yield, price, or income effects. Use accessible charts, keyboard-friendly controls, responsive layouts, and clear source notes. Avoid false precision and unsupported causal claims.

## Audience and purpose
- Curious students, general readers, and builders of educational websites.
- Help readers ask better questions about public priorities and supply-chain resilience, rather than advocate a single party or policy.
- Make the source trail visible enough that readers can verify claims and suggest corrections.

## Reference-site pattern observed
BL00D.MONEY organises a large evidence set into a headline money overview, case files, an entity/relationship index, and explicit source-quality notes. This project adapts the navigable ledger and linked-source pattern, while using a less accusatory, public-finance explainer framing suited to policy trade-offs.

## Video summary
The supplied video uses a “4F” framework: fuel, food, fertiliser and finance. It argues that global energy and shipping shocks can increase import and production costs; fertiliser affordability depends on both supply and large public subsidies; grain availability does not eliminate vulnerability in imported edible oils and some pulses; higher food costs reduce household purchasing power; and currency/financial pressure may amplify import costs. It invokes India's 1960s food dependence as a historical warning and suggests that resilience creates room for domestic innovation.

This is a summary of the video's framing, not a validation of each claim. Numerical claims in the video (including reserve-day estimates, contemporary outflow totals, crisis forecasts, subsidy figures, and crop-stock comparisons) should be independently checked against primary records and date-stamped before reuse.

## Core problem framing
India can produce large quantities of staple grains while remaining exposed to shocks in particular inputs and foods. Fertiliser is both a productivity input and a budget commitment; its supply chain is affected by energy and global markets. Edible-oil demand is substantially met through imports. Pulses and horticulture can experience harvest and price volatility. These issues interact with climate, water, logistics, storage, farmer incentives and household affordability. This is a resilience and distribution challenge, not a simple binary of “food secure” versus “food insecure.”

## Sector comparison currently used
FY 2026–27 Union Budget estimates (BE): total expenditure ₹53,47,315 crore; food subsidy ₹2,27,629 crore; fertiliser subsidy ₹1,70,799 crore; public capital expenditure ₹12.2 lakh crore. Food and fertiliser subsidy numbers are budget-line comparisons; capex is a different spending measure and is not directly comparable as an outcome. Percentages on the page are approximate shares of total expenditure.

Edible oil data: Government of India DFPD Annual Report 2024–25 reports 2023–24 oil-year domestic availability of 12.17 million tonnes and imports of 15.65 million tonnes, total 27.83 million tonnes. Imports therefore supplied roughly 56% of demand/availability in that series. The year and denominator are shown so the figure is not presented as a current real-time value.

## Solutions spectrum
### Implementable steps
1. Pair soil testing and crop-specific extension with balanced nutrient-use incentives; pilot, evaluate, and safeguard yield and farm income.
2. Support region-appropriate oilseed production with better seed, agronomy, processing and storage, plus predictable trade policy.
3. Improve pulse varieties, procurement, storage, processing and market access; retain transparent imports as a buffer in poor harvest years.
4. Reduce post-harvest losses through warehousing, cold chains, market links and timely price information.
5. Publish a food-resilience ledger linking public allocations to yield stability, import exposure, farmer margins, soil indicators, nutrition and consumer prices.

### Utopian horizon
A diverse and regenerative food system that uses nutrients precisely, earns farmers fair returns, protects soil and water, uses more local energy, reduces losses, grows more oilseeds and pulses where ecologically appropriate, and keeps imports as a choice and buffer. This is a north star, not a near-term forecast.

## Editorial guardrails
- Use “fertiliser” consistently for Indian/British English; source quotations may differ.
- Distinguish Union budget allocations from total public spending across Centre and states.
- Name units, fiscal year/oil year, and estimate/actual status next to every number.
- “Potential saving” is not a realised saving; expose assumptions and missing impacts.
- No unverified crisis language, partisan framing, unsupported blame, or causal certainty.
- Link the claim itself to a source, not only to a source list at the bottom.

## Sources
- Department of Expenditure, Government of India, [Budget at a Glance 2026–27](https://doe.gov.in/budget-glance-2026-27).
- PRS Legislative Research, [Union Budget 2026–27 analysis](https://prsindia.org/budgets/parliament/union-budget-2026-27-analysis).
- PRS Legislative Research, [Analysis of Expenditure by Ministries, 2026–27](https://prsindia.org/files/budget/budget_parliament/2026/Analysis_of_Expenditure_2026-27.pdf).
- Department of Food and Public Distribution, Government of India, [Annual Report 2024–25](https://dfpd.gov.in/WriteReadData/AnnualRecordUploadDocuments/b9c640b8-5889-4ffd-a62d-5b56c5d4f029_Food%20AR%202024-25%20English%20small%20size.pdf), edible oils chapter.
- Supplied Think School video: [India's Biggest Economic Threat | Why Jaishankar Is Warning Every Indian About the 4F Crisis?](https://youtu.be/e1cwjeP5Ofs).
- Design reference: [BL00D.MONEY](https://www.bl00d.money/), viewed 1 November 2026.

## Current prototype status
A standalone static site with responsive layout, sector ledger, edible-oil data visual, video summary, implementation/utopian tabs, what-if arithmetic, and source/method section. No backend or live data connection yet. A GitHub Pages Actions workflow is prepared in `.github/workflows/pages.yml`; publishing still needs a project repository and Pages source set to GitHub Actions.
