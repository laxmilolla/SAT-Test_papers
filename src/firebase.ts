import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDoc, setDoc, query, where, getDocs, orderBy, limit } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

let app: FirebaseApp | null = null;
let db: ReturnType<typeof getFirestore> | null = null;

if (firebaseConfig.apiKey && firebaseConfig.projectId) {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
}

export interface SubmissionScores {
  rwRaw: number;
  rwTotal: number;
  rwPercentage: number;
  mathRaw: number;
  mathTotal: number;
  mathPercentage: number;
}

/** Per-concept scores stored on submission (raw, total, pct). */
export type ConceptScores = Record<string, { raw: number; total: number; pct: number }>;

export async function saveSubmission(
  userId: string,
  answers: Record<string, string>,
  options: {
    testId: string;
    testLabel?: string;
    scores: SubmissionScores;
    rwModule2Difficulty?: "easier" | "harder";
    mathModule2Difficulty?: "easier" | "harder";
    conceptScores?: ConceptScores;
    /** When pool test: which R&W M1 and Math M1 were given (for teacher "what was given" view). */
    rwM1ModuleId?: string;
    mathM1ModuleId?: string;
  }
): Promise<void> {
  if (!db) {
    throw new Error("Firebase is not configured. Set REACT_APP_FIREBASE_* env variables.");
  }
  const doc: Record<string, unknown> = {
    userId: userId.trim() || "Anonymous",
    answers,
    testId: options.testId,
    testLabel: options.testLabel ?? null,
    rwRaw: options.scores.rwRaw,
    rwTotal: options.scores.rwTotal,
    rwPercentage: options.scores.rwPercentage,
    mathRaw: options.scores.mathRaw,
    mathTotal: options.scores.mathTotal,
    mathPercentage: options.scores.mathPercentage,
    rwModule2Difficulty: options.rwModule2Difficulty ?? null,
    mathModule2Difficulty: options.mathModule2Difficulty ?? null,
    submittedAt: new Date().toISOString(),
  };
  if (options.conceptScores && Object.keys(options.conceptScores).length > 0) {
    doc.conceptScores = options.conceptScores;
  }
  if (options.rwM1ModuleId != null && options.rwM1ModuleId !== "") {
    doc.rwM1ModuleId = options.rwM1ModuleId;
  }
  if (options.mathM1ModuleId != null && options.mathM1ModuleId !== "") {
    doc.mathM1ModuleId = options.mathM1ModuleId;
  }
  await addDoc(collection(db, "submissions"), doc);
}

/** Returns the list of testIds this user has already submitted. */
export async function getSubmissionHistory(userId: string): Promise<string[]> {
  if (!db) {
    return [];
  }
  const uid = userId.trim() || "Anonymous";
  const q = query(
    collection(db, "submissions"),
    where("userId", "==", uid)
  );
  const snap = await getDocs(q);
  const testIds: string[] = [];
  snap.docs.forEach((d) => {
    const testId = d.data().testId;
    if (testId && !testIds.includes(testId)) testIds.push(testId);
  });
  return testIds;
}

/** Returns pool (rwM1, mathM1) pairs this user has already submitted (for no-repeat pool assignment). */
export async function getPoolPairsTaken(userId: string): Promise<Array<{ rwM1ModuleId: string; mathM1ModuleId: string }>> {
  if (!db) return [];
  const uid = userId.trim() || "Anonymous";
  const q = query(collection(db, "submissions"), where("userId", "==", uid));
  const snap = await getDocs(q);
  const seen = new Set<string>();
  const pairs: Array<{ rwM1ModuleId: string; mathM1ModuleId: string }> = [];
  snap.docs.forEach((d) => {
    const data = d.data();
    if (data.testId !== "pool") return;
    const rw = typeof data.rwM1ModuleId === "string" ? data.rwM1ModuleId : "";
    const math = typeof data.mathM1ModuleId === "string" ? data.mathM1ModuleId : "";
    if (!rw || !math) return;
    const key = `${rw}:${math}`;
    if (seen.has(key)) return;
    seen.add(key);
    pairs.push({ rwM1ModuleId: rw, mathM1ModuleId: math });
  });
  return pairs;
}

/** Assignment (manual in Firebase). If present, student gets this test when they start. */
export interface StudentAssignment {
  /** When set, load full test from registry. */
  testId?: string;
  /** When both set, load from module pool (takes precedence over testId). */
  rwM1ModuleId?: string;
  mathM1ModuleId?: string;
}

/**
 * Get the assigned test for a student. Set in Firebase: collection "assignments",
 * document ID = student ID (or "Anonymous").
 * - testId = "test1" etc. → load full test from registry.
 * - rwM1ModuleId + mathM1ModuleId → load from module pool (e.g. "rw-m1-a", "math-m1-a").
 */
export async function getAssignment(userId: string): Promise<StudentAssignment | null> {
  if (!db) return null;
  const uid = userId.trim() || "Anonymous";
  const ref = doc(db, "assignments", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  const data = snap.data();
  const testId = data?.testId;
  const rwM1ModuleId = data?.rwM1ModuleId;
  const mathM1ModuleId = data?.mathM1ModuleId;
  if (typeof rwM1ModuleId === "string" && typeof mathM1ModuleId === "string" && rwM1ModuleId && mathM1ModuleId) {
    return { rwM1ModuleId, mathM1ModuleId, testId: typeof testId === "string" ? testId : undefined };
  }
  if (typeof testId === "string" && testId) {
    return { testId };
  }
  return null;
}

/** For teacher view: list all assignments (student ID → what they're assigned). */
export interface AssignmentRow {
  studentId: string;
  testId?: string;
  rwM1ModuleId?: string;
  mathM1ModuleId?: string;
}

export async function getAllAssignments(): Promise<AssignmentRow[]> {
  if (!db) return [];
  const snap = await getDocs(collection(db, "assignments"));
  return snap.docs.map((d) => {
    const data = d.data();
    return {
      studentId: d.id,
      testId: typeof data.testId === "string" ? data.testId : undefined,
      rwM1ModuleId: typeof data.rwM1ModuleId === "string" ? data.rwM1ModuleId : undefined,
      mathM1ModuleId: typeof data.mathM1ModuleId === "string" ? data.mathM1ModuleId : undefined,
    };
  });
}

/**
 * Set pool-based assignment for a student (document ID = studentId).
 * Overwrites the document with only rwM1ModuleId and mathM1ModuleId (pool test).
 */
export async function saveAssignment(
  studentId: string,
  rwM1ModuleId: string,
  mathM1ModuleId: string
): Promise<void> {
  if (!db) {
    throw new Error("Firebase is not configured. Set REACT_APP_FIREBASE_* env variables.");
  }
  const uid = studentId.trim() || "Anonymous";
  const ref = doc(db, "assignments", uid);
  await setDoc(ref, { rwM1ModuleId, mathM1ModuleId });
}

/** One row for teacher results view. */
export interface SubmissionRow {
  id: string;
  userId: string;
  testId: string;
  testLabel: string | null;
  rwRaw: number;
  rwTotal: number;
  rwPercentage: number;
  mathRaw: number;
  mathTotal: number;
  mathPercentage: number;
  rwModule2Difficulty: string | null;
  mathModule2Difficulty: string | null;
  submittedAt: string;
  conceptScores?: ConceptScores;
  /** Pool test: which modules were given (for "what was given to which student"). */
  rwM1ModuleId?: string;
  mathM1ModuleId?: string;
}

/**
 * Get submissions for teacher results view.
 * If userId is provided, returns that student's submissions; otherwise returns recent submissions (up to 100).
 */
export async function getSubmissions(userId?: string): Promise<SubmissionRow[]> {
  if (!db) return [];
  const coll = collection(db, "submissions");
  let q;
  if (userId && userId.trim()) {
    const uid = userId.trim();
    q = query(coll, where("userId", "==", uid), orderBy("submittedAt", "desc"), limit(100));
  } else {
    q = query(coll, orderBy("submittedAt", "desc"), limit(100));
  }
  const snap = await getDocs(q);
  return snap.docs.map((d) => {
    const data = d.data();
    return {
      id: d.id,
      userId: typeof data.userId === "string" ? data.userId : "",
      testId: typeof data.testId === "string" ? data.testId : "",
      testLabel: typeof data.testLabel === "string" ? data.testLabel : null,
      rwRaw: typeof data.rwRaw === "number" ? data.rwRaw : 0,
      rwTotal: typeof data.rwTotal === "number" ? data.rwTotal : 0,
      rwPercentage: typeof data.rwPercentage === "number" ? data.rwPercentage : 0,
      mathRaw: typeof data.mathRaw === "number" ? data.mathRaw : 0,
      mathTotal: typeof data.mathTotal === "number" ? data.mathTotal : 0,
      mathPercentage: typeof data.mathPercentage === "number" ? data.mathPercentage : 0,
      rwModule2Difficulty: data.rwModule2Difficulty ?? null,
      mathModule2Difficulty: data.mathModule2Difficulty ?? null,
      submittedAt: typeof data.submittedAt === "string" ? data.submittedAt : "",
      conceptScores: data.conceptScores && typeof data.conceptScores === "object" ? (data.conceptScores as ConceptScores) : undefined,
      rwM1ModuleId: typeof data.rwM1ModuleId === "string" ? data.rwM1ModuleId : undefined,
      mathM1ModuleId: typeof data.mathM1ModuleId === "string" ? data.mathM1ModuleId : undefined,
    };
  });
}

export { db };
