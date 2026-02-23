import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";

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
  options: { testId: string; testLabel?: string; scores: SubmissionScores }
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

export { db };
