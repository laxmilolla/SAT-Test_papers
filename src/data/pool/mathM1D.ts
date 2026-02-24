import type { PoolModule } from "../poolTypes";
import { mathModule1 } from "../tests/test2";

export const mathM1D: PoolModule = {
  id: "math-m1-d",
  type: "math-m1",
  label: "Math Module 1 (Set D)",
  questions: mathModule1,
  m2EasierModuleId: "math-m2-easier",
  m2HarderModuleId: "math-m2-harder",
};
