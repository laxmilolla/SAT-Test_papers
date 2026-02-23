import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCD5QvCw_hM6VVXvZe_7dw9tG9q3Bs84rU",
  authDomain: "sat-papers.firebaseapp.com",
  projectId: "sat-papers",
  storageBucket: "sat-papers.firebasestorage.app",
  messagingSenderId: "539790005741",
  appId: "1:539790005741:web:02785e5304994c53a283e4",
  measurementId: "G-SBPNQ3KKD9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function saveSubmission(
  userId: string,
  answers: Record<string, string>
): Promise<void> {
  await addDoc(collection(db, "submissions"), {
    userId: userId.trim() || "Anonymous",
    answers,
    submittedAt: new Date().toISOString(),
  });
}

export { db };
