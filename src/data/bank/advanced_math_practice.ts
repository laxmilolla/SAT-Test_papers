/**
 * Example concept-only module: 5 Advanced Math questions.
 * Use this as a template for targeted practice by domain.
 * Domain: advanced_math (quadratics, polynomials, exponents, radicals, rationals).
 */
import type { MathQuestion } from "../poolTypes";

export const advancedMathPracticeQuestions: MathQuestion[] = [
  {
    id: "am-p1",
    question: "What are the solutions to x² − 7x + 12 = 0?",
    options: ["A) x = 3 and x = 4", "B) x = −3 and x = −4", "C) x = 2 and x = 6", "D) x = 1 and x = 12"],
    correct: "A",
    explanation: "Factor: (x − 3)(x − 4) = 0, so x = 3 or x = 4.",
    domain: "advanced_math",
  },
  {
    id: "am-p2",
    question: "Simplify (2x³)².",
    options: ["A) 2x⁵", "B) 4x⁵", "C) 4x⁶", "D) 2x⁶"],
    correct: "C",
    explanation: "(2x³)² = 2² · (x³)² = 4x⁶.",
    domain: "advanced_math",
  },
  {
    id: "am-p3",
    question: "If f(x) = x² − 4x + 4, what is the minimum value of f(x)?",
    options: ["A) 0", "B) 2", "C) −4", "D) 4"],
    correct: "A",
    explanation: "f(x) = (x − 2)², so the minimum is 0 when x = 2.",
    domain: "advanced_math",
  },
  {
    id: "am-p4",
    question: "Which expression is equivalent to √(18) for x > 0?",
    options: ["A) 3√2", "B) 2√3", "C) 6√3", "D) 9√2"],
    correct: "A",
    explanation: "√18 = √(9 · 2) = √9 · √2 = 3√2.",
    domain: "advanced_math",
  },
  {
    id: "am-p5",
    question: "If 3ˣ⁺¹ = 81, what is x?",
    options: ["A) 2", "B) 3", "C) 4", "D) 5"],
    correct: "B",
    explanation: "81 = 3⁴, so x + 1 = 4, hence x = 3.",
    domain: "advanced_math",
  },
];
