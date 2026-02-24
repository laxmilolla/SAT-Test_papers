import type { PoolModule } from "../poolTypes";
import { mathModule1 } from "../tests/test1";

export const mathM1A: PoolModule = {
  id: "math-m1-a",
  type: "math-m1",
  label: "Math Module 1 (Set A)",
  questions: mathModule1,
  m2EasierModuleId: "math-m2-easier",
  m2HarderModuleId: "math-m2-harder",
};
