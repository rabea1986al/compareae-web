# CompareAE — MASTER GOVERNANCE & STRATEGIC FRAMEWORK
Version 1.1 · Approved 2026-05-31 · Owner: rabea1986al · Executor: Claude

> Binding internal governance for CompareAE. This is NOT legal advice; final
> compliance must be confirmed by a UAE-licensed insurance lawyer before launch.

---

## SECTION 1 — PROJECT IDENTITY
CompareAE is an **Insurance Discovery Platform** for the UAE market. It helps users discover insurance providers, understand coverage types, learn insurance concepts, and access official provider websites.

CompareAE is NOT: Insurance Broker · Insurance Agent · Insurance Marketplace · Insurance Comparison Engine · Lead Generation Platform · Recommendation Engine.

## SECTION 2 — PRODUCT LOCK
Official positioning: **CompareAE = Insurance Discovery Platform**. Locked. No future feature, content, design, workflow, or monetization may reposition it into a Comparison / Brokerage / Lead-Gen / Marketplace platform without explicit owner approval.

## SECTION 3 — CORE MISSION
Help users discover insurance providers and insurance knowledge. Mission does NOT include selling insurance, issuing policies, generating quotes, collecting insurance applications, or recommending insurers.

## SECTION 4 — LEGAL BOUNDARY LOCK
ALLOWED: Provider directory · Educational content · Insurance guides · FAQ pages · Affiliate links · Sponsored listings · Advertising.
FORBIDDEN: Price comparison · Premium comparison · Quote generation · Customer-provider matching · Personalized recommendations · Insurance applications · Lead collection · Lead sales.

## SECTION 5 — DATA POLICY
Allowed: Newsletter signup · Contact forms · Feedback forms.
Forbidden: Vehicle data collection for quotes · Driver data collection for quotes · Insurance application forms · Quote request forms.

## SECTION 6 — HOMEPAGE RULES
Purpose: discovery and education. Priority: (1) Provider discovery (2) Coverage education (3) Guides (4) FAQs.

## SECTION 7 — CTA RULES
Allowed: Visit Official Website · Learn More · Explore Provider · View Details.
Forbidden: Get Quote · Compare Prices · Apply Now · Request Offer.

## SECTION 8 — PROVIDER PAGE RULES
Informational only. Allowed: Company overview · Public information · Coverage categories · Official links. Forbidden: Rankings · Recommendations · Scores · Star ratings.

## SECTION 9 — REVIEW POLICY
No public ratings. No review scores. No fake testimonials. No fabricated trust signals.

## SECTION 10 — CONTENT POLICY
Content must be Educational · Neutral · Accurate · Informational. Avoid Best · Cheapest · Top choice · Recommended — unless supported by verifiable evidence.

## SECTION 11 — REVENUE MODEL LOCK
Approved: Affiliate Revenue · Sponsored Listings · Advertising · Sponsorships.
Forbidden: Lead sales · Brokerage commissions · Insurance intermediary revenue.

## SECTION 12 — SPONSORED CONTENT POLICY
Sponsored content must be disclosed (e.g. "Sponsored", "Featured Partner"). Advertising must never be disguised as editorial content.

## SECTION 13 — SEO STRATEGY
Primary growth engine: organic search. Priority assets: Provider pages · Guide pages · FAQ pages · Arabic content · English content.

## SECTION 14 — LANGUAGE STRATEGY
Languages: Arabic · English. Structure: /ar and /en (next-intl locale routing).

## SECTION 15 — DEVELOPMENT PRIORITIES
(1) Stability (2) SEO (3) Content (4) Provider Pages (5) Affiliate Integration (6) Monetization. Avoid feature creep and overengineering.

## SECTION 16 — TRUST FIRST RULE
If profit conflicts with trust: trust wins.

## SECTION 17 — NO FAKE AUTHORITY
Forbidden: Fake awards · Fake statistics · Fake reviews · Fake ratings. All claims must be verifiable.

## SECTION 18 — NO PAY TO WIN
Partners cannot buy Rankings · Recommendations · Editorial control. Payment only grants disclosed sponsored visibility.

## SECTION 19 — SCALE RULE
Before building a feature ask: (1) Does it increase revenue? (2) Does it increase legal risk? (3) Does it increase maintenance complexity? (4) Does it improve SEO? Reject features that increase legal risk without strategic value.

## SECTION 20 — CLAUDE EXECUTION RULE
Claude must respect this framework; not reopen resolved strategic decisions; not propose lead generation systems, comparison engines, or brokerage features.
**Clarification (v1.1):** Claude MAY flag legal/technical risks it discovers; doing so is protective and is NOT considered reopening a resolved decision.

## SECTION 21 — FINAL RULE
When uncertain, choose the option that reduces legal risk, improves trust, improves SEO, and improves maintainability. Long-term sustainability > short-term revenue.

---
# ADDITIONS (v1.1) — external-party dispute protection

## SECTION 22 — TRADEMARK & LOGO POLICY
No provider name/logo is used without **written permission** (affiliate contract or explicit consent). Until then: text only, no logos (placeholder imagery instead). Never imply a partnership, endorsement, or affiliation that does not exist.

## SECTION 23 — AFFILIATE LINK TECHNICAL RULES
Every external/partner link uses `rel="nofollow sponsored noopener"` and `target="_blank"`. A visible affiliate disclosure appears on every page that contains affiliate links.

## SECTION 24 — PROVIDER DATA ACCURACY & RIGHT TO CORRECTION
Provider info comes from public sources, is marked subject to change, and never copies copyrighted material. Any provider may request correction or removal of its information; we respond in good faith. **No disparagement** of any provider (defamation protection).

## SECTION 25 — MANDATORY DISCLAIMER
Every page that names a provider carries: "منصة معلوماتية مستقلة — لا نعرض أسعاراً، لا نجمع بيانات، لسنا وسيطاً أو شركة تأمين."

## SECTION 26 — NO PRICE DISPLAY LOCK
CompareAE NEVER displays a price/premium, even if supplied by a partner. Prices are determined only on the licensed provider's own domain.

## SECTION 27 — CHANGE CONTROL
Changes require owner sign-off, a date, and a changelog entry. Current: v1.1 — 2026-05-31 — added S22–S26, clarified S20.

---
## IMPLEMENTATION NOTES (executor)
- Brand/route naming: the route `/compare-preview` is renamed to `/providers` to avoid "comparison engine" interpretation. The "Compare" brand is framed as comparing *coverage knowledge*, never prices.
- The homepage hero car make/model/year/emirate matching form is removed (violated S4/S5) and replaced with a discovery-by-insurance-type panel.
- See memory: project_product_positioning, project_legal_comparison_constraint.
