/**
 * Types for the module pool (Digital SAT–aligned modules).
 * Used to build TestData when assignment uses rwM1ModuleId + mathM1ModuleId.
 */

export type ModuleType =
  | "rw-m1"
  | "rw-m2-easier"
  | "rw-m2-harder"
  | "math-m1"
  | "math-m2-easier"
  | "math-m2-harder";

/** R&W question shape (passage-based). */
export interface RWQuestion {
  id: string;
  question?: string;
  options?: string[];
  passage?: string;
  correct: string;
  explanation?: string;
}

/** Math question shape (optional image). */
export interface MathQuestion {
  id: string;
  question?: string;
  options?: string[];
  image?: string;
  correct: string;
  explanation?: string;
}

export type PoolQuestion = RWQuestion | MathQuestion;

/**
 * A single module in the pool. M1 modules can link to their M2 easier/harder variants.
 */
export interface PoolModule {
  id: string;
  type: ModuleType;
  label?: string;
  questions: PoolQuestion[];
  /** Only for type rw-m1 or math-m1: IDs of the M2 easier and harder modules. */
  m2EasierModuleId?: string;
  m2HarderModuleId?: string;
}

/** Shape of test data built from pool (matches App TestData). */
export interface PoolTestData {
  readingWritingModule1: RWQuestion[];
  readingWritingModule2: RWQuestion[];
  mathModule1: MathQuestion[];
  mathModule2: MathQuestion[];
  readingWritingModule2Easier?: RWQuestion[];
  readingWritingModule2Harder?: RWQuestion[];
  mathModule2Easier?: MathQuestion[];
  mathModule2Harder?: MathQuestion[];
}
