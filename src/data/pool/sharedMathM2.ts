import type { PoolModule } from "../poolTypes";

export const mathM2Easier: PoolModule = {
  id: "math-m2-easier",
  type: "math-m2-easier",
  label: "Math Module 2 — Easier (Shared)",
  questions: [
    {
      id: "m2e-1",
      question: "Solve for x: 5x − 10 = 25",
      options: ["A) 3", "B) 7", "C) 5", "D) 9"],
      correct: "B",
      explanation: "Add 10 to both sides: 5x = 35. Divide by 5: x = 7.",
    },
    {
      id: "m2e-2",
      question: "What is 15% of 200?",
      options: ["A) 25", "B) 35", "C) 30", "D) 20"],
      correct: "C",
      explanation: "15% of 200 = 0.15 × 200 = 30.",
    },
    {
      id: "m2e-3",
      question:
        "What is the area, in square units, of a triangle with a base of 10 and a height of 12?",
      options: ["A) 60", "B) 44", "C) 120", "D) 30"],
      correct: "A",
      explanation: "Area = (1/2) × base × height = (1/2)(10)(12) = 60.",
    },
    {
      id: "m2e-4",
      question: "If y = 3x + 1 and x = 5, what is the value of y?",
      options: ["A) 14", "B) 18", "C) 11", "D) 16"],
      correct: "D",
      explanation: "Substitute x = 5: y = 3(5) + 1 = 15 + 1 = 16.",
    },
    {
      id: "m2e-5",
      question: "What is the mean of the data set {4, 8, 6, 10, 2}?",
      options: ["A) 8", "B) 6", "C) 7", "D) 5"],
      correct: "B",
      explanation: "Sum = 4 + 8 + 6 + 10 + 2 = 30. Mean = 30 / 5 = 6.",
    },
    {
      id: "m2e-6",
      question: "Solve for x: 2(x + 5) = 18",
      options: ["A) 6", "B) 3", "C) 9", "D) 4"],
      correct: "D",
      explanation:
        "Distribute: 2x + 10 = 18. Subtract 10: 2x = 8. Divide by 2: x = 4.",
    },
    {
      id: "m2e-7",
      question:
        "What is the perimeter of a square with a side length of 9 units?",
      options: ["A) 36", "B) 81", "C) 18", "D) 27"],
      correct: "A",
      explanation: "Perimeter of a square = 4 × side = 4 × 9 = 36.",
    },
    {
      id: "m2e-8",
      question:
        "The ratio of cats to dogs at a shelter is 2:3. If there are 10 cats, how many dogs are there?",
      options: ["A) 12", "B) 18", "C) 15", "D) 20"],
      correct: "C",
      explanation: "2/3 = 10/x → x = 10 × 3/2 = 15 dogs.",
    },
    {
      id: "m2e-9",
      question: "Simplify the expression: 3x + 2x − 4 + 7",
      options: ["A) 5x − 3", "B) 5x + 3", "C) 6x + 3", "D) 5x + 11"],
      correct: "B",
      explanation:
        "Combine like terms: 3x + 2x = 5x and −4 + 7 = 3, giving 5x + 3.",
    },
    {
      id: "m2e-10",
      question:
        "A jacket originally costs $60 and is on sale for 25% off. What is the sale price?",
      options: ["A) $45", "B) $40", "C) $50", "D) $35"],
      correct: "A",
      explanation: "Discount = 0.25 × 60 = $15. Sale price = 60 − 15 = $45.",
    },
    {
      id: "m2e-11",
      question:
        "What is the volume, in cubic units, of a rectangular prism with length 4, width 3, and height 5?",
      options: ["A) 12", "B) 30", "C) 48", "D) 60"],
      correct: "D",
      explanation: "Volume = length × width × height = 4 × 3 × 5 = 60.",
    },
    {
      id: "m2e-12",
      question: "Solve for x: x / 4 = 9",
      options: ["A) 36", "B) 2.25", "C) 13", "D) 32"],
      correct: "A",
      explanation: "Multiply both sides by 4: x = 36.",
    },
    {
      id: "m2e-13",
      question: "What is the median of the data set {1, 3, 5, 7, 9, 11}?",
      options: ["A) 5", "B) 7", "C) 6", "D) 5.5"],
      correct: "C",
      explanation:
        "The data is already sorted. With 6 values the median is the average of the 3rd and 4th: (5 + 7) / 2 = 6.",
    },
    {
      id: "m2e-14",
      question: "If f(x) = 4x − 7, what is f(3)?",
      options: ["A) 7", "B) −5", "C) 19", "D) 5"],
      correct: "D",
      explanation: "f(3) = 4(3) − 7 = 12 − 7 = 5.",
    },
    {
      id: "m2e-15",
      question:
        "A right triangle has legs of length 5 and 12. What is the length of the hypotenuse?",
      options: ["A) 17", "B) 15", "C) 13", "D) 11"],
      correct: "C",
      explanation:
        "By the Pythagorean theorem: c = √(5² + 12²) = √(25 + 144) = √169 = 13.",
    },
    {
      id: "m2e-16",
      question: "Solve for x: −3x + 12 = 0",
      options: ["A) −4", "B) 4", "C) −3", "D) 3"],
      correct: "B",
      explanation: "Subtract 12: −3x = −12. Divide by −3: x = 4.",
    },
    {
      id: "m2e-17",
      question:
        "A bag contains 3 red, 5 blue, and 2 green marbles. If one marble is chosen at random, what is the probability it is blue?",
      options: ["A) 1/3", "B) 2/5", "C) 3/10", "D) 1/2"],
      correct: "D",
      explanation:
        "Total marbles = 3 + 5 + 2 = 10. P(blue) = 5/10 = 1/2.",
    },
    {
      id: "m2e-18",
      question: "What is the value of 5² + 12²?",
      options: ["A) 119", "B) 169", "C) 144", "D) 194"],
      correct: "B",
      explanation: "5² + 12² = 25 + 144 = 169.",
    },
    {
      id: "m2e-19",
      question:
        "What is the circumference of a circle with a diameter of 14? (Leave your answer in terms of π.)",
      options: ["A) 7π", "B) 28π", "C) 14π", "D) 49π"],
      correct: "C",
      explanation: "Circumference = πd = 14π.",
    },
    {
      id: "m2e-20",
      question: "Solve for x: 7x + 3 = 52",
      options: ["A) 7", "B) 8", "C) 6", "D) 9"],
      correct: "A",
      explanation:
        "Subtract 3 from both sides: 7x = 49. Divide by 7: x = 7.",
    },
    {
      id: "m2e-21",
      question: "12 is what percent of 48?",
      options: ["A) 20%", "B) 30%", "C) 15%", "D) 25%"],
      correct: "D",
      explanation: "12 / 48 = 0.25 = 25%.",
    },
    {
      id: "m2e-22",
      question:
        "What is the area of a circle with radius 6? (Leave your answer in terms of π.)",
      options: ["A) 6π", "B) 36π", "C) 12π", "D) 72π"],
      correct: "B",
      explanation: "Area = πr² = π(6²) = 36π.",
    },
  ],
};

export const mathM2Harder: PoolModule = {
  id: "math-m2-harder",
  type: "math-m2-harder",
  label: "Math Module 2 — Harder (Shared)",
  questions: [
    {
      id: "m2h-1",
      question:
        "If 3x + y = 10 and x + 2y = 5, what is the value of the product xy?",
      options: ["A) 2", "B) 5", "C) 3", "D) 4"],
      correct: "C",
      explanation:
        "From the second equation, x = 5 − 2y. Substitute into the first: 3(5 − 2y) + y = 10 → 15 − 6y + y = 10 → −5y = −5 → y = 1, x = 3. Product xy = 3.",
    },
    {
      id: "m2h-2",
      question:
        "What is the product of the solutions of x² − 5x + 6 = 0?",
      options: ["A) 5", "B) 6", "C) −6", "D) −5"],
      correct: "B",
      explanation:
        "Factor: (x − 2)(x − 3) = 0, so x = 2 or x = 3. Product = 2 × 3 = 6. (By Vieta's formulas, the product of roots equals c/a = 6.)",
    },
    {
      id: "m2h-3",
      question:
        "A car travels at 60 mph for 2 hours and then at 40 mph for 3 hours. What is the car's average speed for the entire trip?",
      options: ["A) 50 mph", "B) 52 mph", "C) 48 mph", "D) 44 mph"],
      correct: "C",
      explanation:
        "Total distance = 60(2) + 40(3) = 120 + 120 = 240 miles. Total time = 5 hours. Average speed = 240 / 5 = 48 mph.",
    },
    {
      id: "m2h-4",
      question:
        "What is the volume of a cone with radius 4 and height 9? (Leave your answer in terms of π.)",
      options: ["A) 36π", "B) 48π", "C) 144π", "D) 108π"],
      correct: "B",
      explanation:
        "V = (1/3)πr²h = (1/3)π(16)(9) = (1/3)(144π) = 48π.",
    },
    {
      id: "m2h-5",
      question:
        "A bacteria population of 500 doubles every 3 years. What will the population be after 9 years?",
      options: ["A) 1,500", "B) 2,000", "C) 3,000", "D) 4,000"],
      correct: "D",
      explanation:
        "In 9 years, the population doubles 9/3 = 3 times. 500 × 2³ = 500 × 8 = 4,000.",
    },
    {
      id: "m2h-6",
      question: "What is the vertex of the parabola y = x² − 6x + 11?",
      options: [
        "A) (3, 2)",
        "B) (3, −2)",
        "C) (−3, 2)",
        "D) (6, 11)",
      ],
      correct: "A",
      explanation:
        "x-coordinate of vertex = −b/(2a) = 6/2 = 3. y = (3)² − 6(3) + 11 = 9 − 18 + 11 = 2. Vertex is (3, 2).",
    },
    {
      id: "m2h-7",
      question:
        "What is the area of a sector with radius 6 and a central angle of 60°? (Leave your answer in terms of π.)",
      options: ["A) 12π", "B) 36π", "C) 6π", "D) 3π"],
      correct: "C",
      explanation:
        "Sector area = (θ/360)πr² = (60/360)π(36) = (1/6)(36π) = 6π.",
    },
    {
      id: "m2h-8",
      question: "If f(x) = x³ − 3x² + 2x, what is f(4)?",
      options: ["A) 24", "B) 16", "C) 20", "D) 32"],
      correct: "A",
      explanation:
        "f(4) = 4³ − 3(4²) + 2(4) = 64 − 48 + 8 = 24.",
    },
    {
      id: "m2h-9",
      question:
        "One class of 20 students has an average score of 80, and another class of 30 students has an average score of 90. What is the overall average score for all 50 students?",
      options: ["A) 84", "B) 85", "C) 86", "D) 87"],
      correct: "C",
      explanation:
        "Total points = 20(80) + 30(90) = 1,600 + 2,700 = 4,300. Overall average = 4,300 / 50 = 86.",
    },
    {
      id: "m2h-10",
      question:
        "The sum of two numbers is 50 and their difference is 14. What is the larger number?",
      options: ["A) 32", "B) 36", "C) 28", "D) 30"],
      correct: "A",
      explanation:
        "Let the numbers be x and y with x > y. x + y = 50 and x − y = 14. Adding: 2x = 64, so x = 32.",
    },
    {
      id: "m2h-11",
      question:
        "A ball is thrown upward with height h(t) = −16t² + 64t + 80, where t is in seconds. What is the maximum height in feet?",
      options: ["A) 128", "B) 144", "C) 160", "D) 120"],
      correct: "B",
      explanation:
        "Maximum at t = −64/(2 × −16) = 2. h(2) = −16(4) + 64(2) + 80 = −64 + 128 + 80 = 144.",
    },
    {
      id: "m2h-12",
      question:
        "In a right triangle, one leg measures 7 and the hypotenuse measures 25. What is the length of the other leg?",
      options: ["A) 18", "B) 20", "C) 22", "D) 24"],
      correct: "D",
      explanation:
        "By the Pythagorean theorem: leg = √(25² − 7²) = √(625 − 49) = √576 = 24.",
    },
    {
      id: "m2h-13",
      question:
        "A radioactive substance loses 20% of its mass each hour. If the initial mass is 500 grams, how many grams remain after 3 hours?",
      options: ["A) 320", "B) 256", "C) 200", "D) 400"],
      correct: "B",
      explanation:
        "After each hour, 80% remains. After 3 hours: 500 × (0.8)³ = 500 × 0.512 = 256 grams.",
    },
    {
      id: "m2h-14",
      question:
        "If x/2 + y/3 = 5 and x + y = 12, what is the value of xy?",
      options: ["A) 30", "B) 42", "C) 36", "D) 24"],
      correct: "C",
      explanation:
        "Substitute x = 12 − y into the first equation: (12 − y)/2 + y/3 = 5. Multiply by 6: 3(12 − y) + 2y = 30 → 36 − 3y + 2y = 30 → y = 6, x = 6. xy = 36.",
    },
    {
      id: "m2h-15",
      question:
        "A 13-foot ladder leans against a wall. If the base of the ladder is 5 feet from the wall, how high up the wall does the ladder reach?",
      options: ["A) 10 ft", "B) 8 ft", "C) 11 ft", "D) 12 ft"],
      correct: "D",
      explanation:
        "Height = √(13² − 5²) = √(169 − 25) = √144 = 12 feet.",
    },
    {
      id: "m2h-16",
      question:
        "If (x + 2) is a factor of x² + bx + 6, what is the value of b?",
      options: ["A) 4", "B) 5", "C) 7", "D) 8"],
      correct: "B",
      explanation:
        "If (x + 2) is a factor, then f(−2) = 0: (−2)² + b(−2) + 6 = 0 → 4 − 2b + 6 = 0 → 2b = 10 → b = 5. Check: x² + 5x + 6 = (x + 2)(x + 3).",
    },
    {
      id: "m2h-17",
      question:
        "Pipe A can fill a pool in 6 hours and pipe B can fill it in 4 hours. Working together, how long will it take to fill the pool?",
      options: [
        "A) 2.4 hours",
        "B) 2.5 hours",
        "C) 3 hours",
        "D) 5 hours",
      ],
      correct: "A",
      explanation:
        "Combined rate = 1/6 + 1/4 = 2/12 + 3/12 = 5/12 per hour. Time = 12/5 = 2.4 hours.",
    },
    {
      id: "m2h-18",
      question:
        "A rectangle is inscribed in a circle of diameter 10. If one side of the rectangle is 6, what is the length of the other side?",
      options: ["A) 7", "B) 8", "C) 9", "D) 10"],
      correct: "B",
      explanation:
        "The diagonal of the rectangle equals the diameter: 10. So a² + 6² = 10² → a² = 100 − 36 = 64 → a = 8.",
    },
    {
      id: "m2h-19",
      question:
        "$1,000 is invested at 5% annual interest compounded yearly. What is the total amount after 2 years?",
      options: [
        "A) $1,105.00",
        "B) $1,100.00",
        "C) $1,102.50",
        "D) $1,110.25",
      ],
      correct: "C",
      explanation:
        "A = 1000(1.05)² = 1000 × 1.1025 = $1,102.50.",
    },
    {
      id: "m2h-20",
      question:
        "In an arithmetic sequence, the first term is 3 and the common difference is 4. What is the 15th term?",
      options: ["A) 56", "B) 63", "C) 62", "D) 59"],
      correct: "D",
      explanation:
        "a₁₅ = a₁ + (n − 1)d = 3 + 14(4) = 3 + 56 = 59.",
    },
    {
      id: "m2h-21",
      question:
        "If f(x) = x² + 1 and g(x) = 2x − 3, what is f(g(3))?",
      options: ["A) 10", "B) 13", "C) 7", "D) 37"],
      correct: "A",
      explanation:
        "g(3) = 2(3) − 3 = 3. f(3) = 3² + 1 = 10.",
    },
    {
      id: "m2h-22",
      question:
        "The midpoint of points (a, b) and (8, 12) is (5, 7). What is the value of a + b?",
      options: ["A) 6", "B) 2", "C) 8", "D) 4"],
      correct: "D",
      explanation:
        "Midpoint formula: (a + 8)/2 = 5 → a = 2, and (b + 12)/2 = 7 → b = 2. So a + b = 4.",
    },
  ],
};
