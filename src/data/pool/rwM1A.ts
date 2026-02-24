import type { PoolModule } from "../poolTypes";
import { readingWritingModule1 } from "../tests/test1";

export const rwM1A: PoolModule = {
  id: "rw-m1-a",
  type: "rw-m1",
  label: "R&W Module 1 (Set A)",
  questions: readingWritingModule1,
  m2EasierModuleId: "rw-m2-easier",
  m2HarderModuleId: "rw-m2-harder",
};
