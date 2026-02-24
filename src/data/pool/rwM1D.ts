import type { PoolModule } from "../poolTypes";
import { readingWritingModule1 } from "../tests/test2";

export const rwM1D: PoolModule = {
  id: "rw-m1-d",
  type: "rw-m1",
  label: "R&W Module 1 (Set D)",
  questions: readingWritingModule1,
  m2EasierModuleId: "rw-m2-easier",
  m2HarderModuleId: "rw-m2-harder",
};
