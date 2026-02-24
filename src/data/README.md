# Question bank and concept tagging

## Question shape

All questions use the types in `poolTypes.ts`.

### R&W question (RWQuestion)

```ts
{
  id: string;           // unique, e.g. "rw1-1"
  question?: string;
  options?: string[];  // first character = key, e.g. "A) choice text"
  passage?: string;
  correct: string;     // "A" | "B" | "C" | "D"
  explanation?: string;
  domain?: string;     // optional: information_ideas | craft_structure | expression_ideas | standard_english
  subdomain?: string;
}
```

### Math question (MathQuestion)

```ts
{
  id: string;
  question?: string;
  options?: string[];
  image?: string;      // path in public/, e.g. "/m1_4_triangle.png"
  correct: string;
  explanation?: string;
  domain?: string;     // optional, see below
  subdomain?: string;
}
```

## Math domain values (Digital SAT–aligned)

Use these for the `domain` field on math questions so results can show per-concept performance:

| domain | Description |
|--------|-------------|
| `algebra` | Linear equations, inequalities, systems, linear functions, slope, expressions |
| `advanced_math` | Quadratics, polynomials, exponents, radicals, rationals, function notation |
| `problem_solving_data` | Ratios, percentages, statistics, probability, scatterplots, averages |
| `geometry_trig` | Area, perimeter, volume, circles, triangles, Pythagorean theorem, trig |

Questions without `domain` are grouped under `"unspecified"` when scoring by concept.

## Where questions live

- **Pool modules:** `src/data/pool/*.ts` — one file per module (e.g. `mathM1A.ts`, `sharedMathM2.ts`). Registered in `modulePool.ts`.
- **Full tests:** `src/data/tests/test1.ts`, `test2.ts` — export `readingWritingModule1`, `mathModule1`, etc.
- **Example concept-only set:** `src/data/bank/advanced_math_practice.ts` — 5 questions tagged `domain: "advanced_math"` for reference and future “practice by concept” use.

## Adding or generating new questions

1. **Manually:** Add questions to a new or existing `.ts` file under `pool/` or `tests/`. Each math question should include `domain` (and optionally `subdomain`). Register the module in `modulePool.ts` if it is part of the adaptive pool.
2. **AI-assisted:** Use a prompt that asks for JSON in the shape above (id, question, options, correct, explanation, domain). Paste the output into a new `.ts` file and export as a module or array. See `docs/prompt-template.md` for an example prompt.

## Concept index (optional)

To list “which questions cover which concept,” you can add a file like `conceptBank.ts` that maps domain → question IDs, or run a script over the pool/test files to report by domain. The app does not require this at runtime; concept scores are computed from the questions actually on the test.
