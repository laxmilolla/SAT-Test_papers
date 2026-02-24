/**
 * Module pool registry: resolve modules by ID and build TestData for pool-based assignments.
 */
import type { PoolModule, PoolTestData, RWQuestion, MathQuestion } from "./poolTypes";
import {
  rwM1A,
  rwM2EasierA,
  rwM2HarderA,
  mathM1A,
  mathM2EasierA,
  mathM2HarderA,
} from "./pool/familyA";

const poolModulesById = new Map<string, PoolModule>();

function register(m: PoolModule): void {
  poolModulesById.set(m.id, m);
}

// Register family A (will be populated when familyA is loaded)
function initPool(): void {
  register(rwM1A);
  register(rwM2EasierA);
  register(rwM2HarderA);
  register(mathM1A);
  register(mathM2EasierA);
  register(mathM2HarderA);
}

initPool();

export function getPoolModule(id: string): PoolModule | null {
  return poolModulesById.get(id) ?? null;
}

export function getAllPoolModules(): PoolModule[] {
  return Array.from(poolModulesById.values());
}

/**
 * Build TestData from two M1 pool modules (R&W and Math). Uses each M1's
 * m2EasierModuleId and m2HarderModuleId for adaptive M2.
 */
export async function getPoolTestData(
  rwM1ModuleId: string,
  mathM1ModuleId: string
): Promise<PoolTestData> {
  const rwM1 = getPoolModule(rwM1ModuleId);
  const mathM1 = getPoolModule(mathM1ModuleId);
  if (!rwM1 || rwM1.type !== "rw-m1") {
    throw new Error(`Invalid or missing R&W M1 module: ${rwM1ModuleId}`);
  }
  if (!mathM1 || mathM1.type !== "math-m1") {
    throw new Error(`Invalid or missing Math M1 module: ${mathM1ModuleId}`);
  }

  const rwM2E = rwM1.m2EasierModuleId ? getPoolModule(rwM1.m2EasierModuleId) : null;
  const rwM2H = rwM1.m2HarderModuleId ? getPoolModule(rwM1.m2HarderModuleId) : null;
  const mathM2E = mathM1.m2EasierModuleId ? getPoolModule(mathM1.m2EasierModuleId) : null;
  const mathM2H = mathM1.m2HarderModuleId ? getPoolModule(mathM1.m2HarderModuleId) : null;

  const rwM2Fallback = rwM2E?.questions ?? rwM2H?.questions ?? [];
  const mathM2Fallback = mathM2E?.questions ?? mathM2H?.questions ?? [];

  return {
    readingWritingModule1: rwM1.questions as RWQuestion[],
    readingWritingModule2: rwM2Fallback as RWQuestion[],
    mathModule1: mathM1.questions as MathQuestion[],
    mathModule2: mathM2Fallback as MathQuestion[],
    readingWritingModule2Easier: rwM2E?.questions as RWQuestion[],
    readingWritingModule2Harder: rwM2H?.questions as RWQuestion[],
    mathModule2Easier: mathM2E?.questions as MathQuestion[],
    mathModule2Harder: mathM2H?.questions as MathQuestion[],
  };
}
