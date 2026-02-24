# Test data

This folder holds the **test registry** and **per-test question data** for the Digital SAT practice app.

## Adding a new test

One test = **one file** in `tests/` + **one entry** in `testRegistry.ts`. No app code changes.

### 1. Create the test file

Add `src/data/tests/<id>.ts` (e.g. `test3.ts`). The file must **export** these four arrays (exact names):

- `readingWritingModule1`
- `readingWritingModule2`
- `mathModule1`
- `mathModule2`

**Question shape:**

- **R&W:** `{ id, passage?, question, options, correct, explanation }`
- **Math:** `{ id, question, options, correct, explanation, image? }` — `image` is optional (e.g. `"/m1_4_triangle.png"`).

Use **27 + 27** questions for R&W (Module 1 + Module 2) and **22 + 22** for Math to match the Digital SAT. Question IDs can be per-test (e.g. `rw1-1`, `m2-3`).

### 2. Register the test

In `src/data/testRegistry.ts`, add one entry:

```ts
{
  id: "test3",
  label: "Practice Test 3",
  load: () =>
    import("./tests/test3").then((m) => ({
      readingWritingModule1: m.readingWritingModule1,
      readingWritingModule2: m.readingWritingModule2,
      mathModule1: m.mathModule1,
      mathModule2: m.mathModule2,
    })),
},
```

Use your test’s `id` and file name in `import("./tests/<id>")`.

### 3. Deploy

Push to GitHub. Vercel will redeploy and the new test appears in the test selector. The no-repeat logic will assign it to students who haven’t taken it yet.

## Optional: template and script

- **Template:** Copy `tests/_template.ts` to `tests/<id>.ts` and replace the placeholder questions.
- **Script:** Run `node scripts/add-test.js <id> "Practice Test N"` to create the file and print the registry snippet to add.
