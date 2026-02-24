# Adding tests via JSON (no code changes)

Put test definitions here as JSON and list them in **registry.json**.

## Add a new test

1. **Create** `public/tests/<id>.json` (e.g. `test4.json`) with keys:
   - `readingWritingModule1` (array of R&W questions)
   - `readingWritingModule2`
   - `mathModule1` (array of Math questions)
   - `mathModule2`

2. **Edit** `registry.json`: add `{ "id": "test4", "label": "Practice Test 4", "url": "/tests/test4.json" }` to the array.

3. Deploy (or refresh). The new test appears in the dropdown. No code changes.

## Question shape (JSON)

- **R&W:** `{ "id": "rw1-1", "passage": "...", "question": "...", "options": ["A) ...", "B) ...", ...], "correct": "A", "explanation": "..." }`
- **Math:** `{ "id": "m1-1", "question": "...", "options": [...], "correct": "A", "explanation": "...", "image": "/m1_4_triangle.png" }` (image optional)

See **test3.json** for a minimal example.
