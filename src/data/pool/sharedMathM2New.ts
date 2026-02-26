import type { PoolModule } from "../poolTypes";

/**
 * Math Module 2 New — Real SAT variety.
 * Circle: center (0,0), point (5,0) → radius 5 (not center (3,-2) radius 3).
 * Right triangle: legs 7 and 24 → hypotenuse 25 (not 5-12 or 6-8).
 */
export const mathM2NewEasier: PoolModule = {
  id: "math-m2-new-easier",
  type: "math-m2-easier",
  label: "Math Module 2 — New Easier",
  questions: [
    { id: "m2ne-1", question: "Solve for x: 6x − 12 = 30", options: ["A) 5", "B) 6", "C) 7", "D) 8"], correct: "C", explanation: "6x = 42, x = 7.", domain: "algebra" },
    { id: "m2ne-2", question: "What is 20% of 150?", options: ["A) 20", "B) 25", "C) 30", "D) 35"], correct: "C", explanation: "0.20 × 150 = 30.", domain: "problem_solving_data" },
    {
      id: "m2ne-3",
      question: "The figure shows a circle in the xy-plane with center at the origin (0, 0). The point (5, 0) lies on the circle. What is the radius of the circle?",
      options: ["A) 3", "B) 4", "C) 5", "D) 10"],
      correct: "C",
      explanation: "Distance from (0, 0) to (5, 0) is 5. Radius = 5.",
      image: "/m2n_2_circle_origin.png",
      domain: "geometry_trig",
    },
    { id: "m2ne-4", question: "What is the area, in square units, of a triangle with base 8 and height 15?", options: ["A) 60", "B) 120", "C) 40", "D) 23"], correct: "A", explanation: "Area = ½(8)(15) = 60.", domain: "geometry_trig" },
    {
      id: "m2ne-5",
      question: "The figure above shows a right triangle with legs of length 7 and 24. What is the length of the hypotenuse?",
      options: ["A) 25", "B) 31", "C) 20", "D) 28"],
      correct: "A",
      explanation: "7² + 24² = 49 + 576 = 625. Hypotenuse = √625 = 25.",
      image: "/m2n_4_right_triangle_7_24.png",
      domain: "geometry_trig",
    },
    { id: "m2ne-6", question: "If y = 2x + 3 and x = 4, what is the value of y?", options: ["A) 9", "B) 10", "C) 11", "D) 12"], correct: "C", explanation: "y = 8 + 3 = 11.", domain: "algebra" },
    { id: "m2ne-7", question: "What is the mean of the data set {5, 10, 15, 20, 25}?", options: ["A) 12", "B) 15", "C) 18", "D) 20"], correct: "B", explanation: "Sum = 75, mean = 15.", domain: "problem_solving_data" },
    { id: "m2ne-8", question: "Solve for x: 3(x − 2) = 21", options: ["A) 5", "B) 7", "C) 9", "D) 11"], correct: "C", explanation: "3x − 6 = 21, x = 9.", domain: "algebra" },
    { id: "m2ne-9", question: "What is the perimeter of a square with side length 7 units?", options: ["A) 14", "B) 21", "C) 28", "D) 49"], correct: "C", explanation: "Perimeter = 4 × 7 = 28.", domain: "geometry_trig" },
    { id: "m2ne-10", question: "The ratio of apples to oranges in a basket is 4:5. If there are 36 apples, how many oranges are there?", options: ["A) 40", "B) 45", "C) 48", "D) 50"], correct: "B", explanation: "36 × 5/4 = 45.", domain: "problem_solving_data" },
    { id: "m2ne-11", question: "Simplify: 4x + 3x − 6 + 9", options: ["A) 7x + 3", "B) 7x − 15", "C) 12x + 3", "D) x + 3"], correct: "A", explanation: "7x + 3.", domain: "algebra" },
    { id: "m2ne-12", question: "A phone costs $200 and is on sale for 15% off. What is the sale price?", options: ["A) $170", "B) $185", "C) $175", "D) $165"], correct: "A", explanation: "0.85 × 200 = $170.", domain: "problem_solving_data" },
    { id: "m2ne-13", question: "What is the volume of a rectangular prism with length 5, width 4, and height 6?", options: ["A) 15", "B) 60", "C) 120", "D) 240"], correct: "C", explanation: "5 × 4 × 6 = 120.", domain: "geometry_trig" },
    { id: "m2ne-14", question: "Solve for x: x/5 = 12", options: ["A) 60", "B) 2.4", "C) 17", "D) 50"], correct: "A", explanation: "x = 60.", domain: "algebra" },
    { id: "m2ne-15", question: "What is the median of {2, 4, 6, 8, 10, 12}?", options: ["A) 5", "B) 6", "C) 7", "D) 8"], correct: "C", explanation: "Median = (6 + 8)/2 = 7.", domain: "problem_solving_data" },
    { id: "m2ne-16", question: "If f(x) = 6x − 5, what is f(4)?", options: ["A) 19", "B) 21", "C) 23", "D) 25"], correct: "A", explanation: "f(4) = 24 − 5 = 19.", domain: "algebra" },
    { id: "m2ne-17", question: "A right triangle has legs of length 6 and 8. What is the length of the hypotenuse?", options: ["A) 10", "B) 12", "C) 14", "D) 9"], correct: "A", explanation: "√(36 + 64) = 10.", domain: "geometry_trig" },
    { id: "m2ne-18", question: "Solve for x: −4x + 20 = 0", options: ["A) −5", "B) 5", "C) 4", "D) −4"], correct: "B", explanation: "x = 5.", domain: "algebra" },
    { id: "m2ne-19", question: "A bag has 4 red, 5 blue, and 3 green marbles. What is the probability of picking a blue marble?", options: ["A) 1/4", "B) 5/12", "C) 1/3", "D) 4/12"], correct: "B", explanation: "P(blue) = 5/12.", domain: "problem_solving_data" },
    { id: "m2ne-20", question: "What is the circumference of a circle with diameter 10? (Use π ≈ 3.14)", options: ["A) 31.4", "B) 62.8", "C) 15.7", "D) 78.5"], correct: "A", explanation: "C = 3.14 × 10 = 31.4.", domain: "geometry_trig" },
    { id: "m2ne-21", question: "18 is what percent of 72?", options: ["A) 20%", "B) 25%", "C) 30%", "D) 15%"], correct: "B", explanation: "18/72 = 25%.", domain: "problem_solving_data" },
    { id: "m2ne-22", question: "What is the area of a circle with radius 5? (Leave answer in terms of π.)", options: ["A) 10π", "B) 25π", "C) 5π", "D) 50π"], correct: "B", explanation: "Area = 25π.", domain: "geometry_trig" },
  ],
};

export const mathM2NewHarder: PoolModule = {
  id: "math-m2-new-harder",
  type: "math-m2-harder",
  label: "Math Module 2 — New Harder",
  questions: [
    { id: "m2nh-1", question: "If 2x + 3y = 12 and x − y = 1, what is the value of xy?", options: ["A) 4", "B) 5", "C) 6", "D) 8"], correct: "C", explanation: "x = 1 + y. 2(1+y) + 3y = 12 → y = 2, x = 3. xy = 6.", domain: "algebra" },
    { id: "m2nh-2", question: "What is the product of the solutions of x² − 7x + 12 = 0?", options: ["A) 7", "B) 12", "C) −12", "D) −7"], correct: "B", explanation: "(x−3)(x−4)=0; product = 12.", domain: "advanced_math" },
    { id: "m2nh-3", question: "A car travels 120 miles at 40 mph and then 120 miles at 60 mph. What is the average speed for the entire trip?", options: ["A) 50 mph", "B) 48 mph", "C) 52 mph", "D) 55 mph"], correct: "B", explanation: "Time = 3 + 2 = 5 h. Average = 240/5 = 48 mph.", domain: "problem_solving_data" },
    { id: "m2nh-4", question: "What is the volume of a cone with radius 3 and height 12? (Leave answer in terms of π.)", options: ["A) 36π", "B) 108π", "C) 48π", "D) 72π"], correct: "A", explanation: "V = (1/3)π(9)(12) = 36π.", domain: "geometry_trig" },
    { id: "m2nh-5", question: "A population of 200 triples every 4 years. What will the population be after 8 years?", options: ["A) 600", "B) 1,200", "C) 1,800", "D) 2,000"], correct: "C", explanation: "200 × 3² = 1,800.", domain: "advanced_math" },
    { id: "m2nh-6", question: "What is the vertex of the parabola y = x² − 4x + 7?", options: ["A) (2, 3)", "B) (2, −3)", "C) (−2, 3)", "D) (4, 7)"], correct: "A", explanation: "x = 2, y = 3.", domain: "advanced_math" },
    { id: "m2nh-7", question: "What is the area of a sector with radius 8 and central angle 45°? (Leave answer in terms of π.)", options: ["A) 4π", "B) 8π", "C) 16π", "D) 32π"], correct: "B", explanation: "(45/360)π(64) = 8π.", domain: "geometry_trig" },
    { id: "m2nh-8", question: "If f(x) = x³ − 2x² + x, what is f(3)?", options: ["A) 12", "B) 15", "C) 18", "D) 21"], correct: "A", explanation: "f(3) = 27 − 18 + 3 = 12.", domain: "advanced_math" },
    { id: "m2nh-9", question: "Two classes have 25 and 35 students with averages 72 and 88. What is the overall average?", options: ["A) 78", "B) 80", "C) 82", "D) 84"], correct: "C", explanation: "(25×72 + 35×88)/60 ≈ 81.3; closest 82.", domain: "problem_solving_data" },
    { id: "m2nh-10", question: "The sum of two numbers is 44 and their difference is 10. What is the larger number?", options: ["A) 27", "B) 28", "C) 26", "D) 29"], correct: "A", explanation: "2x = 54, x = 27.", domain: "algebra" },
    { id: "m2nh-11", question: "A ball's height is h(t) = −16t² + 48t + 64. What is the maximum height in feet?", options: ["A) 64", "B) 80", "C) 96", "D) 100"], correct: "D", explanation: "t = 1.5; h(1.5) = 100.", domain: "advanced_math" },
    { id: "m2nh-12", question: "In a right triangle, one leg is 9 and the hypotenuse is 15. What is the other leg?", options: ["A) 10", "B) 12", "C) 14", "D) 16"], correct: "B", explanation: "√(225 − 81) = 12.", domain: "geometry_trig" },
    { id: "m2nh-13", question: "A substance loses 25% of its mass each hour. Initial mass 400 g. How many grams after 2 hours?", options: ["A) 200", "B) 225", "C) 250", "D) 275"], correct: "B", explanation: "400(0.75)² = 225 g.", domain: "advanced_math" },
    { id: "m2nh-14", question: "If x/3 + y/2 = 4 and x + y = 10, what is xy?", options: ["A) 12", "B) 18", "C) 24", "D) 30"], correct: "C", explanation: "y = 4, x = 6; xy = 24.", domain: "algebra" },
    { id: "m2nh-15", question: "A 15-foot ladder reaches 12 feet up a wall. How far is the base from the wall?", options: ["A) 6 ft", "B) 7 ft", "C) 8 ft", "D) 9 ft"], correct: "D", explanation: "√(225 − 144) = 9 ft.", domain: "geometry_trig" },
    { id: "m2nh-16", question: "If (x + 3) is a factor of x² + bx − 12, what is b?", options: ["A) 1", "B) −1", "C) 4", "D) −4"], correct: "B", explanation: "f(−3) = 9 − 3b − 12 = 0 → b = −1.", domain: "advanced_math" },
    { id: "m2nh-17", question: "Pipe A fills a tank in 5 hours, Pipe B in 10 hours. Together, how many hours?", options: ["A) 3", "B) 3.33", "C) 4", "D) 2.5"], correct: "B", explanation: "Time = 10/3 ≈ 3.33 h.", domain: "algebra" },
    { id: "m2nh-18", question: "A rectangle is inscribed in a circle of diameter 13. One side is 5. What is the other side?", options: ["A) 10", "B) 11", "C) 12", "D) 9"], correct: "C", explanation: "5² + a² = 13² → a = 12.", domain: "geometry_trig" },
    { id: "m2nh-19", question: "$500 at 4% compounded yearly for 2 years. Total amount?", options: ["A) $540", "B) $540.80", "C) $520", "D) $541"], correct: "B", explanation: "500(1.04)² = $540.80.", domain: "advanced_math" },
    { id: "m2nh-20", question: "Arithmetic sequence: first term 5, common difference 6. What is the 10th term?", options: ["A) 59", "B) 65", "C) 71", "D) 77"], correct: "A", explanation: "a₁₀ = 5 + 9(6) = 59.", domain: "algebra" },
    { id: "m2nh-21", question: "If f(x) = x² + 2 and g(x) = 3x − 1, what is f(g(2))?", options: ["A) 27", "B) 25", "C) 51", "D) 11"], correct: "A", explanation: "g(2)=5, f(5)=27.", domain: "advanced_math" },
    { id: "m2nh-22", question: "Midpoint of (a, b) and (10, 14) is (6, 9). What is a + b?", options: ["A) 2", "B) 4", "C) 6", "D) 8"], correct: "C", explanation: "a = 2, b = 4; a + b = 6.", domain: "algebra" },
  ],
};
