# Prompt template: Generate Digital SAT–style questions by concept

Use this with an AI (e.g. Claude, Gemini) to generate math questions in the app’s shape. Paste the model output into a new `.ts` file under `src/data/pool/` or `src/data/bank/`, then export and register if needed.

---

**Prompt (fill in CONCEPT and N):**

```
Generate N Digital SAT–style multiple-choice math questions for the concept: CONCEPT.

Concept must be one of: algebra, advanced_math, problem_solving_data, geometry_trig.

Output a JSON array. Each object must have:
- id: string (unique, e.g. "gen-1", "gen-2")
- question: string (stem only)
- options: array of 4 strings, each starting with "A)", "B)", "C)", or "D)"
- correct: string, one of "A", "B", "C", "D"
- explanation: string (brief solution)
- domain: string (same as CONCEPT)

Do not include image. Keep difficulty appropriate for high school SAT.
```

**Example (CONCEPT = advanced_math, N = 5):**

```
Generate 5 Digital SAT–style multiple-choice math questions for the concept: advanced_math.
...
```

**After generation:** Wrap the JSON in a TypeScript export, e.g.:

```ts
import type { MathQuestion } from "../poolTypes";
export const myNewModule: MathQuestion[] = [
  // paste generated array here
];
```

Then add `domain` to each object if the model omitted it, and register the module in `modulePool.ts` if it is part of the pool.
