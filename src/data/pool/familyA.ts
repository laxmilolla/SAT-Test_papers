/**
 * Pool family A: one R&W M1 + M2 easier/harder, one Math M1 + M2 easier/harder.
 * Content from test1 so the pool feature works without external content.
 */
import type { PoolModule } from "../poolTypes";
import {
  readingWritingModule1,
  readingWritingModule2,
  mathModule1,
  mathModule2,
} from "../tests/test1";

export const rwM1A: PoolModule = {
  id: "rw-m1-a",
  type: "rw-m1",
  label: "R&W Module 1 (Set A)",
  questions: readingWritingModule1,
  m2EasierModuleId: "rw-m2-easier-a",
  m2HarderModuleId: "rw-m2-harder-a",
};

export const rwM2EasierA: PoolModule = {
  id: "rw-m2-easier-a",
  type: "rw-m2-easier",
  label: "R&W Module 2 Easier (Set A)",
  questions: readingWritingModule2,
};

export const rwM2HarderA: PoolModule = {
  id: "rw-m2-harder-a",
  type: "rw-m2-harder",
  label: "R&W Module 2 Harder (Set A)",
  questions: [...readingWritingModule2],
};

export const mathM1A: PoolModule = {
  id: "math-m1-a",
  type: "math-m1",
  label: "Math Module 1 (Set A)",
  questions: mathModule1,
  m2EasierModuleId: "math-m2-easier-a",
  m2HarderModuleId: "math-m2-harder-a",
};

export const mathM2EasierA: PoolModule = {
  id: "math-m2-easier-a",
  type: "math-m2-easier",
  label: "Math Module 2 Easier (Set A)",
  questions: mathModule2,
};

export const mathM2HarderA: PoolModule = {
  id: "math-m2-harder-a",
  type: "math-m2-harder",
  label: "Math Module 2 Harder (Set A)",
  questions: [...mathModule2],
};
