import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDoc, query, where, getDocs } from "firebase/firestore";

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

export async function saveSubmission(
  userId: string,
  answers: Record<string, string>,
  options: {
    testId: string;
    testLabel?: string;
    scores: SubmissionScores;
    rwModule2Difficulty?: "easier" | "harder";
    mathModule2Difficulty?: "easier" | "harder";
  }
): Promise<void> {
  if (!db) {
    throw new Error("Firebase is not configured. Set REACT_APP_FIREBASE_* env variables.");
  }
  await addDoc(collection(db, "submissions"), {
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
  });
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

export { db };
