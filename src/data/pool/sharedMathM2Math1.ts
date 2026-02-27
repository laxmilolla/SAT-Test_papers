import type { PoolModule } from "../poolTypes";

/**
 * Math Module 2 from math_1.docx: Medium-Hard (easier) and Hard (harder).
 */

export const mathM2Math1Easier: PoolModule = {
  id: "math-m2-math1-easier",
  type: "math-m2-easier",
  label: "Math Module 2 — Medium-Hard (math_1 doc)",
  questions: [
    { id: "m2m1e-1", question: "A community theater sells adult tickets for $15 and child tickets for $9. Opening night sold 200 tickets and generated $2,460. How many adult tickets were sold?", options: ["A) 90", "B) 110", "C) 120", "D) 150"], correct: "B", explanation: "a + c = 200, 15a + 9c = 2460. Substitute c = 200 − a: 15a + 9(200−a) = 2460 → 6a = 660, a = 110.", domain: "algebra" },
    { id: "m2m1e-2", question: "Bird population 45,000 decreases by 3.5% each year. Which function models population P(t) after t years?", options: ["A) P(t) = 45000(0.035)^t", "B) P(t) = 45000(0.965)^t", "C) P(t) = 45000(1.035)^t", "D) P(t) = 45000 − 0.035t"], correct: "B", explanation: "3.5% decrease means 96.5% remains each year: 45000(0.965)^t.", domain: "problem_solving_data" },
    { id: "m2m1e-3", question: "P = V²/R. Which equation expresses V in terms of P and R (V > 0)?", options: ["A) V = P/R", "B) V = R/P", "C) V = √(PR)", "D) V = P√R"], correct: "C", explanation: "PR = V², so V = √(PR).", domain: "advanced_math" },
    { id: "m2m1e-4", question: "Parallel lines cut by transversal: one interior angle (4x+15)°, consecutive interior (3x−10)°. What is x?", options: ["A) 25", "B) 35", "C) 45", "D) 75"], correct: "A", explanation: "Consecutive interior angles are supplementary: (4x+15)+(3x−10)=180 → 7x+5=180 → x=25.", domain: "geometry_trig" },
    { id: "m2m1e-5", question: "The scatterplot shows x and y. Which equation best models the data?", options: ["A) y = 3x + 2", "B) y = −3x + 20", "C) y = 2(1.5)^x", "D) y = 20(0.5)^x"], correct: "C", explanation: "Data shows exponential growth; C is the only growth model.", image: "/math2m1e_5_scatter.png", domain: "problem_solving_data" },
    { id: "m2m1e-6", question: "What is the sum of the solutions to 3x² − 15x + 8 = 0?", options: ["A) −15", "B) −5", "C) 5", "D) 15"], correct: "C", explanation: "Sum of roots = −b/a = −(−15)/3 = 5.", domain: "advanced_math" },
    { id: "m2m1e-7", question: "h(t) = −4.9t² + 24t + 10 models rocket height. What does 10 represent?", options: ["A) Maximum height", "B) Total time in air", "C) Initial velocity", "D) Height at launch"], correct: "D", explanation: "Constant term is height at t = 0 (launch).", domain: "advanced_math" },
    { id: "m2m1e-8", question: "Right triangle ABC ~ XYZ; angle B and Y are right angles. If sin(A) = 0.6, what is cos(Z)?", options: ["A) 0.4", "B) 0.6", "C) 0.8", "D) 1.0"], correct: "B", explanation: "In similar triangles, angle A = angle X. In right XYZ, sin(X) = cos(Z). So cos(Z) = 0.6.", domain: "geometry_trig" },
    { id: "m2m1e-9", question: "If (3/4)x − 1/2 = 5/8, what is the value of x?", correct: "1.5", explanation: "Multiply by 8: 6x − 4 = 5 → 6x = 9 → x = 1.5 (or 3/2).", domain: "algebra", inputType: "grid_in" },
    { id: "m2m1e-10", question: "f(x) = x² − 4x and g(x) = 3x + 2. What is f(g(2))?", correct: "32", explanation: "g(2) = 8. f(8) = 64 − 32 = 32.", domain: "advanced_math", inputType: "grid_in" },
    { id: "m2m1e-11", question: "Circle x² + y² − 10x + 12y = 20. The area is kπ. What is k?", correct: "81", explanation: "Complete square: (x−5)² + (y+6)² = 81. r² = 81, area = 81π.", domain: "geometry_trig", inputType: "grid_in" },
    { id: "m2m1e-12", question: "Driver earns $10/hr plus $3 per delivery. In 8 hours wants at least $150. Which inequality gives deliveries d?", options: ["A) 80 + 3d ≤ 150", "B) 80 + 3d ≥ 150", "C) 10 + 24d ≥ 150", "D) 10 + 3d ≥ 150"], correct: "B", explanation: "Base 8×10 = 80; total 80 + 3d ≥ 150.", domain: "algebra" },
    { id: "m2m1e-13", question: "Coat price increased 20%, then decreased 25%. Final price $72. What was original price?", options: ["A) $75", "B) $80", "C) $85", "D) $90"], correct: "B", explanation: "x(1.20)(0.75) = 72 → 0.9x = 72 → x = 80.", domain: "problem_solving_data" },
    { id: "m2m1e-14", question: "Which form of y = x² − 6x + 5 displays the vertex as constants?", options: ["A) y = (x−1)(x−5)", "B) y = x(x−6) + 5", "C) y = (x−3)² − 4", "D) y = (x+3)² + 4"], correct: "C", explanation: "Vertex form: vertex (3, −4).", image: "/math2m1e_14_parabola.png", domain: "advanced_math" },
    { id: "m2m1e-15", question: "Triangle ABC ~ DEF, AB = 3·DE. Area of DEF is 12. What is area of ABC?", options: ["A) 36", "B) 48", "C) 72", "D) 108"], correct: "D", explanation: "Area ratio = (side ratio)² = 9. Area ABC = 9×12 = 108.", domain: "geometry_trig" },
    { id: "m2m1e-16", question: "Which is equivalent to (2x² + 5x − 3)/(x + 3), x ≠ −3?", options: ["A) 2x − 1", "B) 2x + 1", "C) 2x − 3", "D) 2x + 3"], correct: "A", explanation: "Numerator factors as (2x−1)(x+3); cancel to get 2x−1.", domain: "advanced_math" },
    { id: "m2m1e-17", question: "Random commuter from City A. Probability they prefer Public Transit? (Table: City A 120 car, 80 transit, 40 bike, 240 total.)", options: ["A) 80/500", "B) 80/240", "C) 80/190", "D) 190/500"], correct: "B", explanation: "Conditional on City A: 80/240.", domain: "problem_solving_data" },
    { id: "m2m1e-18", question: "Isotope halves every 15 days. Initial 200 g. Which function M(t) gives mass after t days?", options: ["A) M(t) = 200(0.5)^(15t)", "B) M(t) = 200(0.5)^(15/t)", "C) M(t) = 200(0.5)^(t/15)", "D) M(t) = 200(2)^(−15/t)"], correct: "C", explanation: "Half-life formula: initial × (0.5)^(t/period).", domain: "advanced_math" },
    { id: "m2m1e-19", question: "If |2x − 5| = 11, what is the positive value of x?", correct: "8", explanation: "2x − 5 = 11 → x = 8; or 2x − 5 = −11 → x = −3. Positive: 8.", domain: "algebra", inputType: "grid_in" },
    { id: "m2m1e-20", question: "Right rectangular prism length 4, width 5, height h. Volume 120. What is total surface area?", correct: "148", explanation: "120 = 4×5×h → h = 6. SA = 2(20+24+30) = 148.", domain: "geometry_trig", inputType: "grid_in" },
    { id: "m2m1e-21", question: "y = 3x + 5 and 6x − 2y = c have infinitely many solutions. What is c?", correct: "-10", explanation: "Second equation becomes y = 3x − c/2. Match y-intercept: −c/2 = 5 → c = −10.", domain: "algebra", inputType: "grid_in" },
    { id: "m2m1e-22", question: "Right triangle, tan θ = 15/8. What is 34 sin θ?", correct: "30", explanation: "Opp=15, adj=8, hyp=17. sin θ = 15/17. 34×(15/17) = 30.", domain: "geometry_trig", inputType: "grid_in" },
  ],
};

export const mathM2Math1Harder: PoolModule = {
  id: "math-m2-math1-harder",
  type: "math-m2-harder",
  label: "Math Module 2 — Hard (math_1 doc)",
  questions: [
    { id: "m2m1h-1", question: "The graphs of y = x² − 4x + c and y = 2x + 5 intersect at exactly one point. What is c?", options: ["A) 4", "B) 9", "C) 14", "D) 20"], correct: "C", explanation: "Set equal: x²−6x+(c−5)=0. One solution when discriminant 36−4(c−5)=0 → c=14.", image: "/math2m1h_1_parabola_line.png", domain: "advanced_math" },
    { id: "m2m1h-2", question: "Which is the solution to √(3x+7) − x = 1?", options: ["A) −2 only", "B) 3 only", "C) −2 and 3", "D) No real solutions"], correct: "B", explanation: "Square and solve: x²−x−6=0 → x=3 or −2. Only x=3 satisfies original.", domain: "advanced_math" },
    { id: "m2m1h-3", question: "Margin of error 1.5 in at 95% confidence. Which change would most likely reduce the margin of error?", options: ["A) Decrease sample size", "B) Increase sample size", "C) Different region", "D) Measure in cm"], correct: "B", explanation: "Larger sample size reduces margin of error.", domain: "problem_solving_data" },
    { id: "m2m1h-4", question: "Circle x² + y² − 12x + 4y = 9. What is the area?", options: ["A) 9π", "B) 25π", "C) 36π", "D) 49π"], correct: "D", explanation: "Complete square: (x−6)²+(y+2)²=49. r²=49, area=49π.", domain: "geometry_trig" },
    { id: "m2m1h-5", question: "Equivalent to (x²−9)/(2x²−6x) for x > 3?", options: ["A) (x−3)/(2x)", "B) (x+3)/(2x)", "C) 1/(2x)", "D) −3/(2x)"], correct: "B", explanation: "Factor: (x−3)(x+3)/[2x(x−3)] = (x+3)/(2x).", domain: "advanced_math" },
    { id: "m2m1h-6", question: "Terminal side of θ in standard position passes through (−√3/2, 1/2) on unit circle. What is tan θ?", options: ["A) −√3", "B) −√3/3", "C) 1/2", "D) √3"], correct: "B", explanation: "tan θ = sin/cos = (1/2)/(−√3/2) = −1/√3 = −√3/3.", domain: "geometry_trig" },
    { id: "m2m1h-7", question: "Radioactive sample 800 g, half-life 20 days. How many days until 50 g remain?", options: ["A) 60", "B) 80", "C) 100", "D) 120"], correct: "B", explanation: "800→400→200→100→50 is 4 half-lives. 4×20 = 80 days.", domain: "problem_solving_data" },
    { id: "m2m1h-8", question: "System ax+3y=15, 4x−5y=10 has exactly one solution. Which could NOT be a?", options: ["A) −2.4", "B) −1.5", "C) 0", "D) 4"], correct: "A", explanation: "Lines parallel when a/4 = 3/(−5) → a = −2.4. So a cannot be −2.4.", domain: "algebra" },
    { id: "m2m1h-9", question: "Quadratic f has vertex (4, 10) and passes through (2, −2). What is f(6)?", correct: "-2", explanation: "Parabola symmetric about x=4. (2,−2) is 2 left; (6,?) is 2 right, so f(6)=−2.", domain: "advanced_math", inputType: "grid_in" },
    { id: "m2m1h-10", question: "Circle radius 15 cm. Arc length 10π cm. What is the central angle in degrees?", correct: "120", explanation: "10π = (θ/360)·2π·15 → θ/360 = 1/3 → θ = 120.", domain: "geometry_trig", inputType: "grid_in" },
    { id: "m2m1h-11", question: "What value of x satisfies |4x − 10| + 6 = 6?", correct: "2.5", explanation: "|4x−10| = 0, so 4x−10 = 0, x = 2.5.", domain: "algebra", inputType: "grid_in" },
    { id: "m2m1h-12", question: "Solution set to x/(x−2) + 1/(x+2) = 8/(x²−4)?", options: ["A) {−5, 2}", "B) {−5}", "C) {2}", "D) {−2, 5}"], correct: "B", explanation: "Multiply by x²−4, get x²+3x−10=0 → x=−5 or 2. x=2 is extraneous (division by zero).", domain: "advanced_math" },
    { id: "m2m1h-13", question: "Morning class 20 students mean 85; afternoon n students mean 92. Combined mean 90. What is n?", options: ["A) 30", "B) 40", "C) 50", "D) 60"], correct: "C", explanation: "(20×85 + 92n)/(20+n) = 90 → 1700+92n = 1800+90n → 2n=100, n=50.", domain: "problem_solving_data" },
    { id: "m2m1h-14", question: "Angle 11π/6 rad in standard position. What is the y-coordinate of intersection with unit circle?", options: ["A) −√3/2", "B) −1/2", "C) 1/2", "D) √3/2"], correct: "B", explanation: "11π/6 = 330°; fourth quadrant; sin(11π/6) = −1/2.", domain: "geometry_trig" },
    { id: "m2m1h-15", question: "x^(a²)·x^(b²)=x^50 and x^(ab)=x^7, x>1. What is (a+b)²?", options: ["A) 43", "B) 57", "C) 64", "D) 100"], correct: "C", explanation: "a²+b²=50, ab=7. (a+b)² = a²+2ab+b² = 50+14 = 64.", domain: "advanced_math" },
    { id: "m2m1h-16", question: "p(x)=x³−4x²+kx−6 is divisible by (x−3). What is k?", options: ["A) 2", "B) 3", "C) 5", "D) 9"], correct: "C", explanation: "Remainder theorem: p(3)=0 → 27−36+3k−6=0 → 3k=15, k=5.", domain: "advanced_math" },
    { id: "m2m1h-17", question: "Population 50,000 triples every 12 years: P(t)=50000(c)^t. Which is closest to c?", options: ["A) 1.096", "B) 1.250", "C) 3.000", "D) 4.000"], correct: "A", explanation: "50000(3)^(t/12)=50000(3^(1/12))^t. c=3^(1/12)≈1.096.", domain: "problem_solving_data" },
    { id: "m2m1h-18", question: "3x−4y=12 and y=(3/4)x−k/2 have infinitely many solutions. What is k?", options: ["A) −6", "B) −3", "C) 3", "D) 6"], correct: "D", explanation: "First in slope-intercept: y=(3/4)x−3. So −k/2=−3, k=6.", domain: "algebra" },
    { id: "m2m1h-19", question: "f(x)=−2x²+24x−54 intersects x-axis at (a,0) and (b,0). What is |a−b|?", correct: "6", explanation: "Roots from −2(x²−12x+27)=0: x=3 and x=9. |9−3|=6.", domain: "advanced_math", inputType: "grid_in" },
    { id: "m2m1h-20", question: "Triangle ABC inscribed in circle, AB through center O. AC=10, BC=24. What is the radius?", correct: "13", explanation: "AB is diameter; angle C=90°. 10²+24²=676=26², diameter 26, radius 13.", image: "/math2m1h_20_inscribed.png", domain: "geometry_trig", inputType: "grid_in" },
    { id: "m2m1h-21", question: "Machine A 4 hr, Machine B 6 hr for one batch. Together how many hours? (decimal)", correct: "2.4", explanation: "1/4+1/6=5/12 per hour. Time = 12/5 = 2.4 hours.", domain: "problem_solving_data", inputType: "grid_in" },
    { id: "m2m1h-22", question: "4x²−kx+24=0 has sum of solutions 5.5. What is k?", correct: "22", explanation: "Sum of roots = k/4 = 5.5, so k = 22.", domain: "advanced_math", inputType: "grid_in" },
  ],
};
