import type { PoolModule } from "../poolTypes";

/**
 * Math Module 1 Set E — Real SAT variety.
 * Avoids repeating: triangle (two angles → 70°), parallel 110°→70°, scatterplot 5h→80, same circle/right-triangle.
 * Uses: number line, bar chart, exterior angle triangle, varied parameters and text-only geometry.
 */
export const mathM1E: PoolModule = {
  id: "math-m1-e",
  type: "math-m1",
  label: "Math Module 1 (Set E — New)",
  questions: [
    { id: "m1e-1", question: "If 6z − 4 = 26, what is the value of z?", options: ["A) 4", "B) 5", "C) 6", "D) 7"], correct: "B", explanation: "Add 4: 6z = 30. Divide by 6: z = 5.", domain: "algebra" },
    { id: "m1e-2", question: "A rectangle has length 14 cm and width 6 cm. What is its perimeter?", options: ["A) 20 cm", "B) 40 cm", "C) 84 cm", "D) 42 cm"], correct: "B", explanation: "Perimeter = 2(14 + 6) = 40 cm.", domain: "geometry_trig" },
    { id: "m1e-3", question: "If y = 4x − 1 and x = 3, what is the value of y?", options: ["A) 10", "B) 11", "C) 12", "D) 13"], correct: "B", explanation: "y = 4(3) − 1 = 11.", domain: "algebra" },
    {
      id: "m1e-4",
      question: "The figure above shows a triangle with an exterior angle of 130° and one interior angle of 60°. What is the measure of the other interior angle at the vertex where the exterior angle is drawn?",
      options: ["A) 50°", "B) 60°", "C) 70°", "D) 80°"],
      correct: "C",
      explanation: "The exterior angle equals the sum of the two non-adjacent interior angles. So the other interior angle = 130° − 60° = 70°.",
      image: "/m1e_4_exterior_angle.png",
      domain: "geometry_trig",
    },
    { id: "m1e-5", question: "Which of the following is equivalent to 3(2x − 5) + 4x?", options: ["A) 10x − 15", "B) 6x − 5", "C) 10x − 5", "D) 9x − 15"], correct: "A", explanation: "3(2x − 5) + 4x = 6x − 15 + 4x = 10x − 15.", domain: "algebra" },
    { id: "m1e-6", question: "A store sells pens for $2 each. If Miguel buys p pens, which expression represents the total cost, in dollars?", options: ["A) 2 + p", "B) 2p", "C) p/2", "D) p − 2"], correct: "B", explanation: "Total cost = 2p.", domain: "algebra" },
    { id: "m1e-7", question: "A number decreased by 20% equals 64. What was the original number?", options: ["A) 51.2", "B) 80", "C) 76.8", "D) 84"], correct: "B", explanation: "0.80x = 64, so x = 80.", domain: "problem_solving_data" },
    { id: "m1e-7g", question: "If 7a + 2 = 37, what is the value of a?", correct: "5", explanation: "7a = 35, so a = 5.", domain: "algebra", inputType: "grid_in" },
    { id: "m1e-8", question: "What is the slope of the line passing through (1, 4) and (5, 12)?", options: ["A) 2", "B) 3", "C) 4", "D) 8"], correct: "A", explanation: "Slope = (12 − 4)/(5 − 1) = 2.", domain: "algebra" },
    { id: "m1e-9", question: "If x² = 81, what are all possible values of x?", options: ["A) 9 only", "B) −9 only", "C) 9 and −9", "D) 81"], correct: "C", explanation: "x = ±9.", domain: "advanced_math" },
    { id: "m1e-10", question: "A circle has a radius of 7 cm. What is its circumference? (Use π ≈ 3.14)", options: ["A) 21.98 cm", "B) 43.96 cm", "C) 153.86 cm", "D) 21.98 cm"], correct: "B", explanation: "C = 2πr = 2(3.14)(7) = 43.96 cm.", domain: "geometry_trig" },
    { id: "m1e-11", question: "If 6x − 5 = 4x + 11, what is the value of x?", options: ["A) 3", "B) 8", "C) 6", "D) 4"], correct: "B", explanation: "2x = 16, x = 8.", domain: "algebra" },
    { id: "m1e-12", question: "The average of six numbers is 18. What is their sum?", options: ["A) 3", "B) 24", "C) 108", "D) 126"], correct: "C", explanation: "Sum = 18 × 6 = 108.", domain: "problem_solving_data" },
    { id: "m1e-13", question: "A triangle has angles measuring 35° and 55°. What is the measure of the third angle?", options: ["A) 80°", "B) 90°", "C) 100°", "D) 85°"], correct: "B", explanation: "180° − 35° − 55° = 90°. (Text-only; no image.)", domain: "geometry_trig" },
    { id: "m1e-14", question: "If 3x + 2y = 16 and x = 2, what is y?", options: ["A) 4", "B) 5", "C) 6", "D) 7"], correct: "B", explanation: "6 + 2y = 16, y = 5.", domain: "algebra" },
    {
      id: "m1e-15",
      question: "On the number line above, point P is at 2 and point Q is at 8. Point R is between P and Q so that PR is 2 times RQ. What is the coordinate of R?",
      options: ["A) 4", "B) 5", "C) 6", "D) 7"],
      correct: "C",
      explanation: "PR = 2(RQ) and PR + RQ = 6, so 3(RQ) = 6, RQ = 2, PR = 4. R is at 2 + 4 = 6.",
      image: "/m1e_15_number_line.png",
      domain: "algebra",
    },
    { id: "m1e-15g", question: "The equation 9 = 3b + 3 is true. What is the value of b?", correct: "2", explanation: "3b = 6, b = 2.", domain: "algebra", inputType: "grid_in" },
    { id: "m1e-16", question: "A book originally costs $25 and is on sale for 30% off. What is the sale price?", options: ["A) $7.50", "B) $17.50", "C) $22.50", "D) $18.50"], correct: "B", explanation: "0.70 × 25 = $17.50.", domain: "problem_solving_data" },
    { id: "m1e-17", question: "If f(x) = 5x − 2, what is f(4)?", options: ["A) 18", "B) 20", "C) 22", "D) 12"], correct: "A", explanation: "f(4) = 20 − 2 = 18.", domain: "algebra" },
    { id: "m1e-18", question: "What is the area of a trapezoid with bases of length 5 and 9 and height 4?", options: ["A) 14", "B) 28", "C) 36", "D) 56"], correct: "B", explanation: "Area = ½(5 + 9)(4) = 28. (Text-only; no image.)", domain: "geometry_trig" },
    {
      id: "m1e-19",
      question: "The bar chart above shows the number of books read by four students (A, B, C, D) in one month: A read 3, B read 6, C read 5, D read 7. How many more books did the student who read the most read than the student who read the fewest?",
      options: ["A) 2", "B) 3", "C) 4", "D) 5"],
      correct: "C",
      explanation: "Most = 7 (D), fewest = 3 (A). Difference = 4.",
      image: "/m1e_19_bar_chart.png",
      domain: "problem_solving_data",
    },
    { id: "m1e-20", question: "What is the median of the set {4, 8, 3, 10, 6}?", options: ["A) 4", "B) 6", "C) 8", "D) 10"], correct: "B", explanation: "Ordered: 3, 4, 6, 8, 10. Median is 6.", domain: "problem_solving_data" },
    { id: "m1e-21", question: "If 2(x + 4) = 18, what is the value of x?", options: ["A) 5", "B) 7", "C) 9", "D) 13"], correct: "A", explanation: "2x + 8 = 18, x = 5.", domain: "algebra" },
    { id: "m1e-22", question: "A rectangle has area 54 square meters and length 9 meters. What is its width?", options: ["A) 5 m", "B) 6 m", "C) 7 m", "D) 8 m"], correct: "B", explanation: "54 = 9 × width, width = 6 m.", domain: "geometry_trig" },
  ],
  m2EasierModuleId: "math-m2-new-easier",
  m2HarderModuleId: "math-m2-new-harder",
};
