export interface QuestionWithCorrect {
  id: string;
  correct: string;
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
