export interface QuestionWithCorrect {
  id: string;
  correct: string;
  /** When "grid_in", answer is numeric/fraction; compare with normalizeGridInAnswer. */
  inputType?: "multiple_choice" | "grid_in";
}

/** Question with optional domain for concept-level scoring. */
export interface QuestionWithDomain extends QuestionWithCorrect {
  domain?: string;
}

/** Normalize and compare grid-in answers (accept integer, decimal, fraction equivalents). */
export function normalizeGridInAnswer(value: string): string {
  const s = value.trim().replace(/,/g, "");
  if (s === "") return "";
  const num = parseFloat(s);
  if (!Number.isNaN(num)) return String(num);
  const frac = s.match(/^(-?\d+)\s*\/\s*(-?\d+)$/);
  if (frac) {
    const n = parseInt(frac[1], 10);
    const d = parseInt(frac[2], 10);
    if (d !== 0) return String(n / d);
  }
  return s;
}

export function gridInMatch(userAnswer: string, correct: string): boolean {
  const u = normalizeGridInAnswer(userAnswer);
  const c = normalizeGridInAnswer(correct);
  if (u === "" || c === "") return u === c;
  const un = parseFloat(u);
  const cn = parseFloat(c);
  if (!Number.isNaN(un) && !Number.isNaN(cn)) return Math.abs(un - cn) < 1e-6;
  return u === c;
}

export function scoreSection(
  answers: Record<string, string>,
  questions: QuestionWithCorrect[]
): { rawScore: number; total: number; percentage: number } {
  let raw = 0;
  for (const q of questions) {
    const match =
      q.inputType === "grid_in"
        ? gridInMatch(answers[q.id] ?? "", q.correct)
        : answers[q.id] === q.correct;
    if (match) raw++;
  }
  const total = questions.length;
  return {
    rawScore: raw,
    total,
    percentage: total > 0 ? Math.round((raw / total) * 100) : 0,
  };
}

/**
 * Returns per-domain scores for questions that have a domain.
 * Questions without domain are grouped under "unspecified".
 */
export function scoreByConcept(
  answers: Record<string, string>,
  questions: QuestionWithDomain[]
): Record<string, { rawScore: number; total: number; percentage: number }> {
  const byDomain: Record<string, { raw: number; total: number }> = {};
  for (const q of questions) {
    const domain = q.domain && q.domain.trim() ? q.domain.trim() : "unspecified";
    if (!byDomain[domain]) byDomain[domain] = { raw: 0, total: 0 };
    byDomain[domain].total += 1;
    const match =
      q.inputType === "grid_in"
        ? gridInMatch(answers[q.id] ?? "", q.correct)
        : answers[q.id] === q.correct;
    if (match) byDomain[domain].raw += 1;
  }
  const result: Record<string, { rawScore: number; total: number; percentage: number }> = {};
  for (const [domain, { raw, total }] of Object.entries(byDomain)) {
    result[domain] = {
      rawScore: raw,
      total,
      percentage: total > 0 ? Math.round((raw / total) * 100) : 0,
    };
  }
  return result;
}
