export interface QuestionWithCorrect {
  id: string;
  correct: string;
}

/** Question with optional domain for concept-level scoring. */
export interface QuestionWithDomain extends QuestionWithCorrect {
  domain?: string;
}

export function scoreSection(
  answers: Record<string, string>,
  questions: QuestionWithCorrect[]
): { rawScore: number; total: number; percentage: number } {
  let raw = 0;
  for (const q of questions) {
    if (answers[q.id] === q.correct) raw++;
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
    if (answers[q.id] === q.correct) byDomain[domain].raw += 1;
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
