import React, { useState, useEffect } from "react";
import { saveSubmission, getSubmissionHistory, getAssignment, getAllAssignments, type AssignmentRow } from "./firebase";
import { testRegistry } from "./data/testRegistry";
import { getPoolTestData } from "./data/modulePool";
import { scoreSection } from "./utils/scoring";

export interface TestData {
  readingWritingModule1: Array<{ id: string; question?: string; options?: string[]; passage?: string; correct: string; explanation?: string }>;
  readingWritingModule2: Array<{ id: string; question?: string; options?: string[]; passage?: string; correct: string; explanation?: string }>;
  mathModule1: Array<{ id: string; question?: string; options?: string[]; image?: string; correct: string; explanation?: string }>;
  mathModule2: Array<{ id: string; question?: string; options?: string[]; image?: string; correct: string; explanation?: string }>;
  /** Optional: use for adaptive Module 2. If both present, M1 score picks easier vs harder. */
  readingWritingModule2Easier?: Array<{ id: string; question?: string; options?: string[]; passage?: string; correct: string; explanation?: string }>;
  readingWritingModule2Harder?: Array<{ id: string; question?: string; options?: string[]; passage?: string; correct: string; explanation?: string }>;
  mathModule2Easier?: Array<{ id: string; question?: string; options?: string[]; image?: string; correct: string; explanation?: string }>;
  mathModule2Harder?: Array<{ id: string; question?: string; options?: string[]; image?: string; correct: string; explanation?: string }>;
}

/** Registry entry: either code-loaded (load) or JSON-loaded (url). */
export type RegistryEntry =
  | { id: string; label: string; load: () => Promise<TestData> }
  | { id: string; label: string; url: string };

function loadTestData(entry: RegistryEntry): Promise<TestData> {
  if ("load" in entry && entry.load) return entry.load();
  if ("url" in entry && entry.url) {
    return fetch(entry.url).then((r) => {
      if (!r.ok) throw new Error("Failed to load test");
      return r.json();
    });
  }
  throw new Error("Invalid registry entry");
}

export default function App() {
  const [jsonRegistry, setJsonRegistry] = React.useState<Array<{ id: string; label: string; url: string }>>([]);
  const combinedRegistry = React.useMemo(
    (): RegistryEntry[] => [
      ...testRegistry.map((t) => ({ id: t.id, label: t.label, load: t.load as () => Promise<TestData> })),
      ...jsonRegistry,
    ],
    [jsonRegistry]
  );

  React.useEffect(() => {
    fetch("/tests/registry.json")
      .then((r) => (r.ok ? r.json() : []))
      .then((arr) => (Array.isArray(arr) ? setJsonRegistry(arr) : setJsonRegistry([])))
      .catch(() => setJsonRegistry([]));
  }, []);

  const [selectedTestId, setSelectedTestId] = React.useState<string | null>(
    combinedRegistry.length === 1 ? combinedRegistry[0].id : null
  );
  const [testData, setTestData] = React.useState<TestData | null>(null);
  const [startStatus, setStartStatus] = React.useState<"idle" | "loading" | "error" | "all_taken">("idle");
  const [view, setView] = React.useState("start");
  const [section, setSection] = React.useState("reading");
  const [module, setModule] = React.useState(1);
  const [qIdx, setQIdx] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = React.useState(32 * 60);

  const [studentId, setStudentId] = React.useState("");
  const [saveStatus, setSaveStatus] = React.useState<"idle" | "saving" | "done" | "error">("idle");
  const [teacherAssignments, setTeacherAssignments] = React.useState<AssignmentRow[]>([]);
  const [teacherStatus, setTeacherStatus] = React.useState<"idle" | "loading" | "error">("idle");

  /** Adaptive Module 2: set after scoring Module 1. Above threshold → harder M2. */
  const [rwModule2Variant, setRwModule2Variant] = React.useState<"easier" | "harder" | null>(null);
  const [mathModule2Variant, setMathModule2Variant] = React.useState<"easier" | "harder" | null>(null);
  const MODULE1_HARDER_THRESHOLD = 0.5; // >50% correct → harder Module 2

  React.useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;
    if (view === "test" && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [view, timeLeft]);

  // Point to the correct list of questions based on where the student is (and adaptive M2 if present)
  let currentQuestions: Array<{ id: string; question?: string; options?: string[]; passage?: string; image?: string }> = [];
  if (testData) {
    if (section === "reading" && module === 1) currentQuestions = testData.readingWritingModule1;
    else if (section === "reading" && module === 2) {
      if (rwModule2Variant === "harder" && testData.readingWritingModule2Harder?.length) currentQuestions = testData.readingWritingModule2Harder;
      else if (rwModule2Variant === "easier" && testData.readingWritingModule2Easier?.length) currentQuestions = testData.readingWritingModule2Easier;
      else currentQuestions = testData.readingWritingModule2;
    } else if (section === "math" && module === 1) currentQuestions = testData.mathModule1;
    else if (section === "math" && module === 2) {
      if (mathModule2Variant === "harder" && testData.mathModule2Harder?.length) currentQuestions = testData.mathModule2Harder;
      else if (mathModule2Variant === "easier" && testData.mathModule2Easier?.length) currentQuestions = testData.mathModule2Easier;
      else currentQuestions = testData.mathModule2;
    }
  }

  const q = currentQuestions[qIdx];

  const handleNext = () => {
    if (qIdx < currentQuestions.length - 1) {
      setQIdx(qIdx + 1);
    } else {
      if (module === 1) {
        if (testData && section === "reading") {
          const rw1 = scoreSection(answers, testData.readingWritingModule1);
          setRwModule2Variant(rw1.total > 0 && rw1.rawScore / rw1.total > MODULE1_HARDER_THRESHOLD ? "harder" : "easier");
        }
        if (testData && section === "math") {
          const m1 = scoreSection(answers, testData.mathModule1);
          setMathModule2Variant(m1.total > 0 && m1.rawScore / m1.total > MODULE1_HARDER_THRESHOLD ? "harder" : "easier");
        }
        setModule(2);
        setQIdx(0);
        setTimeLeft(section === "reading" ? 32 * 60 : 35 * 60);
      } else if (section === "reading") {
        setSection("math");
        setModule(1);
        setQIdx(0);
        setTimeLeft(35 * 60);
      } else {
        setView("results");
      }
    }
  };

  const handleStart = async () => {
    const uid = studentId.trim() || "Anonymous";
    setStartStatus("loading");
    try {
      const assignment = await getAssignment(uid);

      if (assignment?.rwM1ModuleId && assignment?.mathM1ModuleId) {
        const data = (await getPoolTestData(assignment.rwM1ModuleId, assignment.mathM1ModuleId)) as TestData;
        setTestData(data);
        setSelectedTestId("pool");
        setRwModule2Variant(null);
        setMathModule2Variant(null);
        setView("test");
        setStartStatus("idle");
        return;
      }

      let assignTestId: string | null = null;
      if (assignment?.testId && combinedRegistry.some((t) => t.id === assignment.testId)) {
        assignTestId = assignment.testId;
        setSelectedTestId(assignment.testId);
      }
      if (!assignTestId) {
        const taken = await getSubmissionHistory(uid);
        const available = combinedRegistry.filter((t) => !taken.includes(t.id));
        if (available.length === 0) {
          setStartStatus("all_taken");
          return;
        }
        assignTestId = available[0].id;
        setSelectedTestId(assignTestId);
      }
      const entry = combinedRegistry.find((t) => t.id === assignTestId);
      if (!entry) throw new Error("Unknown test");
      const data = (await loadTestData(entry)) as TestData;
      setTestData(data);
      setRwModule2Variant(null);
      setMathModule2Variant(null);
      setView("test");
      setStartStatus("idle");
    } catch (err) {
      setStartStatus("error");
    }
  };

  if (view === "start")
    return (
      <div
        style={{
          padding: "100px",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h1>Digital SAT Practice Test</h1>
        <p style={{ marginBottom: "24px", color: "#555" }}>Enter your Student ID to load your assigned test.</p>
        <div style={{ margin: "20px 0" }}>
          <label htmlFor="student-id" style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Student ID or name
          </label>
          <input
            id="student-id"
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="e.g. John D. or 12345"
            autoFocus
            style={{
              padding: "10px 15px",
              fontSize: "16px",
              width: "280px",
              maxWidth: "90%",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          />
        </div>
        {startStatus === "all_taken" && (
          <p style={{ color: "#c62828", margin: "10px 0" }}>You&apos;ve completed all available tests. Ask your teacher for more.</p>
        )}
        {startStatus === "error" && (
          <p style={{ color: "#c62828", margin: "10px 0" }}>Failed to load test. Please try again.</p>
        )}
        <button
          onClick={handleStart}
          disabled={startStatus === "loading"}
          style={{
            padding: "15px 50px",
            fontSize: "20px",
            background: "#0052cc",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: startStatus === "loading" ? "wait" : "pointer",
          }}
        >
          {startStatus === "loading" ? "Loading…" : "START TEST"}
        </button>
        <p style={{ marginTop: "24px", fontSize: "12px", color: "#888" }}>
          Your test is chosen by your teacher or assigned automatically.
        </p>
        <p style={{ marginTop: "16px" }}>
          <button
            type="button"
            onClick={() => {
              setView("teacher");
              setTeacherStatus("loading");
              getAllAssignments()
                .then((rows) => {
                  setTeacherAssignments(rows);
                  setTeacherStatus("idle");
                })
                .catch(() => setTeacherStatus("error"));
            }}
            style={{
              background: "none",
              border: "none",
              color: "#0052cc",
              textDecoration: "underline",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Teacher: view assignments
          </button>
        </p>
      </div>
    );

  if (view === "teacher") {
    const assignmentLabel = (row: AssignmentRow) => {
      if (row.rwM1ModuleId && row.mathM1ModuleId) {
        return `Pool (R&W: ${row.rwM1ModuleId}, Math: ${row.mathM1ModuleId})`;
      }
      if (row.testId) {
        const label = combinedRegistry.find((t) => t.id === row.testId)?.label ?? row.testId;
        return label;
      }
      return "—";
    };
    return (
      <div style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto" }}>
        <h2>Assignments by student</h2>
        <p style={{ color: "#555", marginBottom: "16px" }}>
          Students with an assignment get this test when they enter their ID. To add or change assignments, use Firebase Console → Firestore → assignments.
        </p>
        <button
          type="button"
          onClick={() => setView("start")}
          style={{
            marginBottom: "20px",
            padding: "8px 16px",
            background: "#eee",
            border: "1px solid #ccc",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          ← Back to start
        </button>
        {teacherStatus === "loading" && <p>Loading…</p>}
        {teacherStatus === "error" && <p style={{ color: "#c62828" }}>Failed to load assignments.</p>}
        {teacherStatus === "idle" && (
          <>
            {teacherAssignments.length === 0 ? (
              <p style={{ color: "#666" }}>No assignments yet. Add documents in Firestore under the &quot;assignments&quot; collection (document ID = student ID).</p>
            ) : (
              <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
                <thead>
                  <tr style={{ background: "#f5f5f5" }}>
                    <th style={{ padding: "10px", textAlign: "left", border: "1px solid #ddd" }}>Student ID</th>
                    <th style={{ padding: "10px", textAlign: "left", border: "1px solid #ddd" }}>Assigned test</th>
                  </tr>
                </thead>
                <tbody>
                  {teacherAssignments.map((row) => (
                    <tr key={row.studentId}>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>{row.studentId}</td>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>{assignmentLabel(row)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}
      </div>
    );
  }

  if (view === "results" && testData && selectedTestId) {
    const rw1 = scoreSection(answers, testData.readingWritingModule1);
    const rw2Questions =
      rwModule2Variant === "harder" && testData.readingWritingModule2Harder?.length
        ? testData.readingWritingModule2Harder
        : rwModule2Variant === "easier" && testData.readingWritingModule2Easier?.length
          ? testData.readingWritingModule2Easier
          : testData.readingWritingModule2;
    const rw2 = scoreSection(answers, rw2Questions);
    const m1 = scoreSection(answers, testData.mathModule1);
    const m2Questions =
      mathModule2Variant === "harder" && testData.mathModule2Harder?.length
        ? testData.mathModule2Harder
        : mathModule2Variant === "easier" && testData.mathModule2Easier?.length
          ? testData.mathModule2Easier
          : testData.mathModule2;
    const m2 = scoreSection(answers, m2Questions);
    const scores = {
      rwRaw: rw1.rawScore + rw2.rawScore,
      rwTotal: rw1.total + rw2.total,
      rwPercentage: rw1.total + rw2.total > 0 ? Math.round(((rw1.rawScore + rw2.rawScore) / (rw1.total + rw2.total)) * 100) : 0,
      mathRaw: m1.rawScore + m2.rawScore,
      mathTotal: m1.total + m2.total,
      mathPercentage: m1.total + m2.total > 0 ? Math.round(((m1.rawScore + m2.rawScore) / (m1.total + m2.total)) * 100) : 0,
    };
    const testLabel = selectedTestId === "pool" ? "Pool" : combinedRegistry.find((t) => t.id === selectedTestId)?.label;

    return (
      <div
        style={{
          padding: "100px",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h2>Test Complete!</h2>
        <p style={{ margin: "10px 0", color: "#555" }}>
          {studentId ? `Results for: ${studentId}` : "Anonymous submission"}
        </p>
        <p style={{ margin: "15px 0", fontSize: "18px", fontWeight: "bold" }}>
          R&W: {scores.rwRaw}/{scores.rwTotal} ({scores.rwPercentage}%) · Math: {scores.mathRaw}/{scores.mathTotal} ({scores.mathPercentage}%)
        </p>
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={async () => {
              setSaveStatus("saving");
              try {
                await saveSubmission(studentId, answers, {
                  testId: selectedTestId,
                  testLabel,
                  scores,
                  rwModule2Difficulty: rwModule2Variant ?? undefined,
                  mathModule2Difficulty: mathModule2Variant ?? undefined,
                });
                setSaveStatus("done");
              } catch (err) {
                setSaveStatus("error");
              }
            }}
            disabled={saveStatus === "saving"}
            style={{
              padding: "20px",
              background: saveStatus === "done" ? "#2e7d32" : saveStatus === "error" ? "#c62828" : "green",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: saveStatus === "saving" ? "wait" : "pointer",
              marginRight: "10px",
            }}
          >
            {saveStatus === "idle" && "Save results"}
            {saveStatus === "saving" && "Saving…"}
            {saveStatus === "done" && "Saved!"}
            {saveStatus === "error" && "Save failed — try again"}
          </button>
          <button
            onClick={() =>
              (window.location.href = `mailto:YOUR_EMAIL@gmail.com?subject=SAT Results${studentId ? ` - ${studentId}` : ""}&body=${encodeURIComponent(JSON.stringify({ studentId: studentId || "Anonymous", answers }, null, 2))}`)
            }
            style={{
              padding: "20px",
              background: "#1565c0",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Email results to teacher
          </button>
        </div>
      </div>
    );
  }

  if (view === "results") {
    return (
      <div style={{ padding: "100px", textAlign: "center", fontFamily: "sans-serif" }}>
        Loading results…
      </div>
    );
  }

  if (view === "test" && !testData) {
    return (
      <div style={{ padding: "100px", textAlign: "center", fontFamily: "sans-serif" }}>
        Loading test…
      </div>
    );
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          padding: "20px",
          borderBottom: "1px solid #ccc",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>
          {section.toUpperCase()} - Module {module}
        </h2>
        <h2 style={{ color: "red" }}>
          {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
        </h2>
      </div>
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <div
          style={{
            flex: 1,
            padding: "40px",
            overflowY: "auto",
            borderRight: "1px solid #ccc",
            background: "#fafafa",
          }}
        >
          {q?.passage && (
            <p style={{ fontSize: "18px", lineHeight: "1.6" }}>{q.passage}</p>
          )}
          {q?.image && (
            <img
              src={q.image}
              style={{
                maxWidth: "100%",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
              alt="Visual"
            />
          )}
        </div>
        <div style={{ flex: 1, padding: "40px", overflowY: "auto" }}>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>
            {qIdx + 1}. {q?.question}
          </p>
          {q?.options?.map((opt: string) => (
            <button
              key={opt}
              onClick={() => setAnswers({ ...answers, [q.id]: opt.charAt(0) })}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "15px",
                margin: "10px 0",
                cursor: "pointer",
                border: "1px solid #ccc",
                borderRadius: "8px",
                background:
                  answers[q.id] === opt.charAt(0) ? "#e8f0fe" : "white",
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
      <div
        style={{
          padding: "20px",
          textAlign: "right",
          borderTop: "1px solid #ccc",
        }}
      >
        <button
          onClick={handleNext}
          style={{
            padding: "15px 40px",
            background: "black",
            color: "white",
            fontSize: "16px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
