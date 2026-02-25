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

function parseAssignmentDoc(data: Record<string, unknown>): StudentAssignment | null {
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

/**
 * Get all assigned tests for a student (supports multiple assignments per student).
 * Reads legacy doc assignments/{userId} and any docs with studentId == userId.
 */
export async function getAssignments(userId: string): Promise<StudentAssignment[]> {
  if (!db) return [];
  const uid = userId.trim() || "Anonymous";
  const result: StudentAssignment[] = [];
  const legacyRef = doc(db, "assignments", uid);
  const legacySnap = await getDoc(legacyRef);
  if (legacySnap.exists()) {
    const a = parseAssignmentDoc(legacySnap.data() as Record<string, unknown>);
    if (a) result.push(a);
  }
  const q = query(collection(db, "assignments"), where("studentId", "==", uid));
  const snap = await getDocs(q);
  snap.docs.forEach((d) => {
    const a = parseAssignmentDoc(d.data() as Record<string, unknown>);
    if (a) result.push(a);
  });
  return result;
}

/**
 * Get the first assigned test for a student (for backward compatibility).
 */
export async function getAssignment(userId: string): Promise<StudentAssignment | null> {
  const list = await getAssignments(userId);
  return list[0] ?? null;
}

/** For teacher view: list all assignments (one row per assignment; a student can have multiple). */
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
    const studentId = typeof data.studentId === "string" && data.studentId ? data.studentId : d.id;
    return {
      studentId,
      testId: typeof data.testId === "string" ? data.testId : undefined,
      rwM1ModuleId: typeof data.rwM1ModuleId === "string" ? data.rwM1ModuleId : undefined,
      mathM1ModuleId: typeof data.mathM1ModuleId === "string" ? data.mathM1ModuleId : undefined,
    };
  });
}

/**
 * Add a pool-based assignment for a student (adds a new assignment; does not overwrite).
 * Student can have multiple assignments; they choose which to take on the start screen.
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
  await addDoc(collection(db, "assignments"), { studentId: uid, rwM1ModuleId, mathM1ModuleId });
}

/**
 * Check if a student is allowed to start a test (active). Default true if no record.
 * Store in Firestore: collection "students", document ID = studentId, field active: boolean.
 */
export async function getStudentActive(studentId: string): Promise<boolean> {
  if (!db) return true;
  const uid = studentId.trim() || "Anonymous";
  const ref = doc(db, "students", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return true;
  const data = snap.data();
  return data?.active !== false;
}

/**
 * Set a student active (true) or inactive (false). Inactive students cannot start a test.
 */
export async function setStudentActive(studentId: string, active: boolean): Promise<void> {
  if (!db) {
    throw new Error("Firebase is not configured. Set REACT_APP_FIREBASE_* env variables.");
  }
  const uid = studentId.trim() || "Anonymous";
  const ref = doc(db, "students", uid);
  await setDoc(ref, { active });
}

/**
 * For teacher: get active status for all students who have a document in "students".
 * Students not in the returned map are treated as active.
 */
export async function getAllStudentsStatus(): Promise<Record<string, boolean>> {
  if (!db) return {};
  const snap = await getDocs(collection(db, "students"));
  return Object.fromEntries(
    snap.docs.map((d) => [d.id, (d.data() as { active?: boolean }).active !== false])
  );
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
