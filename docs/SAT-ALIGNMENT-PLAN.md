# Plan: Fix SAT Alignment Gaps

This plan addresses the gaps between the current question set and the real Digital SAT. Work in phases; each phase can be done independently.

---

## Phase 1: R&W domain tagging (concept breakdown in results)

**Goal:** "By concept" in Results shows R&W domains (Information and Ideas, Craft and Structure) as well as Math.

**Tasks:**

| # | Task | Files | Notes |
|---|------|--------|--------|
| 1.1 | Define R&W domain constants and map to College Board–style names | `src/data/poolTypes.ts` or new `src/data/rwDomains.ts` | e.g. `information_ideas`, `craft_structure`; subdomains: `words_in_context`, `central_idea`, `inference`, `command_of_evidence`, `boundaries`, `form_structure`, etc. |
| 1.2 | Add `domain` (and optional `subdomain`) to every R&W question in pool modules | `src/data/pool/rwM1A.ts`, `rwM1B.ts`, `rwM1C.ts`, `rwM1D.ts`, `sharedRwM2.ts` | Tag each question with one domain; use subdomain for finer reporting if desired. |
| 1.3 | Ensure concept scores include R&W domains in submission | `src/firebase.ts`, `src/App.tsx` | `scoreByConcept` already uses `domain`; confirm R&W questions pass domain and that results UI shows them. |
| 1.4 | (Optional) Add a short key/label for display | `src/App.tsx` (results section) | e.g. "Information and Ideas", "Craft and Structure" instead of raw `information_ideas`. |

**Definition of done:** Results → "By concept" shows both R&W and Math domains with correct counts and percentages.

---

## Phase 2: Math grid-in (student-produced response)

**Goal:** Some Math questions accept a numeric (or fraction) answer instead of multiple choice, like the real SAT.

**Tasks:**

| # | Task | Files | Notes |
|---|------|--------|--------|
| 2.1 | Extend question shape for grid-in | `src/data/poolTypes.ts` | e.g. `inputType?: 'multiple_choice' \| 'grid_in'`; for grid-in, `correct` is the string form of the answer (e.g. `"7"`, `"3/4"`). |
| 2.2 | Add 2–4 grid-in questions per Math module | `src/data/pool/mathM1A.ts` (and B, C, D), `sharedMathM2.ts` | Replace or add questions with `inputType: 'grid_in'`, numeric/fraction answers. |
| 2.3 | UI: render grid-in input when `inputType === 'grid_in'` | `src/App.tsx` (test view) | Number input or fraction input (e.g. two boxes: numerator, denominator). Normalize value (e.g. "6/8" → "3/4") before comparing to `correct`. |
| 2.4 | Store grid-in answers like MC answers | `src/App.tsx` | Same `answers[q.id]`; value is the string the student entered. |
| 2.5 | Scoring: compare normalized grid-in answer to `correct` | `src/utils/scoring.ts` or inline in App | Accept equivalent forms (e.g. 0.75 and 3/4); trim whitespace; consider decimal vs fraction. |

**Definition of done:** At least one Math module has 2+ grid-in questions; student can enter a number (and optionally a fraction); answer is scored correctly and appears in results.

---

## Phase 3: R&W evidence and command-of-evidence questions

**Goal:** Include questions that ask for the best supporting evidence (sentence or quote) for a claim, matching the real SAT.

**Tasks:**

| # | Task | Files | Notes |
|---|------|--------|--------|
| 3.1 | Design question format for evidence pairs | `src/data/poolTypes.ts` | Option A: One item with two parts (claim + “which quote best supports?”). Option B: Claim question followed by evidence question with same passage. |
| 3.2 | Add 2–4 evidence-style questions per R&W M1 module | `src/data/pool/rwM1B.ts` (then A, C, D) | Passage with 3–4 sentences; question 1: “Which best states the claim?”; question 2: “Which sentence best supports that claim?” with options as sentence quotes. |
| 3.3 | Tag with domain/subdomain | Same files | e.g. `domain: "information_ideas"`, `subdomain: "command_of_evidence"`. |
| 3.4 | No UI change if using existing MC format | — | If evidence options are just text (quotes), current MC UI works. |

**Definition of done:** Each R&W M1 set has 2+ evidence/command-of-evidence questions; they appear in the test and in concept breakdown.

---

## Phase 4: R&W infographic / quantitative evidence

**Goal:** 1–2 R&W questions per module that include a chart, table, or figure (with an image or data).

**Tasks:**

| # | Task | Files | Notes |
|---|------|--------|--------|
| 4.1 | Support image/data in R&W questions | `src/data/poolTypes.ts` | `RWQuestion` already has optional fields; add `image?: string` (URL or path) and/or `tableData?: ...` if rendering tables from data. |
| 4.2 | Add 1–2 infographic questions per R&W M1 | `src/data/pool/rwM1B.ts` (then others) | Short passage + simple table or bar chart (e.g. “According to the table, …”); question and options as usual. Store image in `public/` or inline as data URL. |
| 4.3 | Render image/table in question block | `src/App.tsx` (test view) | When `question.image` or `question.tableData` exists, show figure above or below the passage; then show question and options. |
| 4.4 | Tag domain | Same files | e.g. `information_ideas` / quantitative evidence. |

**Definition of done:** At least one R&W module has 1–2 questions that display a chart or table and ask a question about it; concept breakdown reflects the domain.

---

## Phase 5: Polish and balance (optional)

**Goal:** Small improvements so the experience feels even closer to the SAT.

**Tasks:**

| # | Task | Files | Notes |
|---|------|--------|--------|
| 5.1 | Calculator note for Math section | `src/App.tsx` | On Math section, show a short line: “Calculator allowed” or “You may use a calculator.” Optionally embed a simple on-screen calculator (e.g. basic four-function). |
| 5.2 | Audit R&W mix per module | All R&W pool files | Ensure each module has: several words-in-context, several grammar, 1–2 main/central idea, 1–2 inference, 1–2 function/purpose, 0–1 cross-text, 2+ evidence (after Phase 3), 1–2 infographic (after Phase 4). |
| 5.3 | Normalize grid-in scoring edge cases | `src/utils/scoring.ts` or App | Document accepted formats (integer, decimal, fraction); handle "3.5" vs "7/2", etc. |

**Definition of done:** Math section has a clear calculator note; R&W mix is documented and roughly balanced; grid-in rules are consistent.

---

## Suggested order

1. **Phase 1** (R&W domains) — High value for tutoring, no UI change for students.
2. **Phase 3** (Evidence questions) — Content-only if you use existing MC UI.
3. **Phase 2** (Grid-in) — Requires UI and scoring work.
4. **Phase 4** (Infographic) — Requires asset (image/table) and render logic.
5. **Phase 5** (Polish) — After 1–4 are in place.

---

## Checklist summary

- [x] Phase 1: R&W domain tagging (rwM1B, rwM1C fully tagged; rwDomains.ts + display labels in App)
- [x] Phase 2: Math grid-in questions + UI (poolTypes, mathM1B m1b-7 and m1b-15, scoring utils, test view input)
- [x] Phase 3: R&W evidence / command-of-evidence (one evidence question rw1b-15e in rwM1B)
- [x] Phase 4: R&W infographic (one table-in-passage question rw1b-28 in rwM1B; no image asset)
- [x] Phase 5: Calculator note on Math section + grid-in scoring (normalizeGridInAnswer, gridInMatch)

**Remaining (optional):** Tag rwM1A/rwM1D (test1/test2) and sharedRwM2 with domains; add more evidence/grid-in questions to other modules; add image-based infographic if desired.
