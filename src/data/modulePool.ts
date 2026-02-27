import type { PoolModule, PoolTestData, RWQuestion, MathQuestion } from "./poolTypes";
import { rwM1A } from "./pool/rwM1A";
import { rwM1B } from "./pool/rwM1B";
import { rwM1C } from "./pool/rwM1C";
import { rwM1D } from "./pool/rwM1D";
import { rwM1F } from "./pool/rwM1F";
import { mathM1A } from "./pool/mathM1A";
import { mathM1B } from "./pool/mathM1B";
import { mathM1C } from "./pool/mathM1C";
import { mathM1D } from "./pool/mathM1D";
import { rwM2Easier, rwM2Harder } from "./pool/sharedRwM2";
import { rwM2Reading1Harder } from "./pool/sharedRwM2Reading1";
import { mathM2Easier, mathM2Harder } from "./pool/sharedMathM2";
import { mathM1E } from "./pool/mathM1E";
import { mathM1F } from "./pool/mathM1F";
import { mathM2NewEasier, mathM2NewHarder } from "./pool/sharedMathM2New";
import { mathM2Math1Easier, mathM2Math1Harder } from "./pool/sharedMathM2Math1";

const poolModulesById = new Map<string, PoolModule>();

function register(m: PoolModule): void {
  poolModulesById.set(m.id, m);
}

function initPool(): void {
  register(rwM1A);
  register(rwM1B);
  register(rwM1C);
  register(rwM1D);
  register(rwM1F);
  register(mathM1A);
  register(mathM1B);
  register(mathM1C);
  register(mathM1D);
  register(mathM1E);
  register(mathM1F);
  register(rwM2Easier);
  register(rwM2Harder);
  register(rwM2Reading1Harder);
  register(mathM2Easier);
  register(mathM2Harder);
  register(mathM2NewEasier);
  register(mathM2NewHarder);
  register(mathM2Math1Easier);
  register(mathM2Math1Harder);
}

initPool();

export function getPoolModule(id: string): PoolModule | null {
  return poolModulesById.get(id) ?? null;
}

export function getAllPoolModules(): PoolModule[] {
  return Array.from(poolModulesById.values());
}

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
