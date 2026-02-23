import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

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

export async function saveSubmission(
  userId: string,
  answers: Record<string, string>
): Promise<void> {
  if (!db) {
    throw new Error("Firebase is not configured. Set REACT_APP_FIREBASE_* env variables.");
  }
  await addDoc(collection(db, "submissions"), {
    userId: userId.trim() || "Anonymous",
    answers,
    submittedAt: new Date().toISOString(),
  });
}

export { db };
