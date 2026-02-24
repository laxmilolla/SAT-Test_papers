import React, { useState, useEffect } from "react";
import { saveSubmission, getSubmissionHistory } from "./firebase";
import { testRegistry } from "./data/testRegistry";
import { scoreSection } from "./utils/scoring";

export interface TestData {
  readingWritingModule1: Array<{ id: string; question?: string; options?: string[]; passage?: string; correct: string; explanation?: string }>;
  readingWritingModule2: Array<{ id: string; question?: string; options?: string[]; passage?: string; correct: string; explanation?: string }>;
  mathModule1: Array<{ id: string; question?: string; options?: string[]; image?: string; correct: string; explanation?: string }>;
  mathModule2: Array<{ id: string; question?: string; options?: string[]; image?: string; correct: string; explanation?: string }>;
}

export default function App() {
  const [selectedTestId, setSelectedTestId] = React.useState<string | null>(testRegistry.length === 1 ? testRegistry[0].id : null);
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

  React.useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;
    if (view === "test" && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [view, timeLeft]);

  // Point to the correct list of questions based on where the student is
  let currentQuestions: Array<{ id: string; question?: string; options?: string[]; passage?: string; image?: string }> = [];
  if (testData) {
    if (section === "reading" && module === 1) currentQuestions = testData.readingWritingModule1;
    else if (section === "reading" && module === 2) currentQuestions = testData.readingWritingModule2;
    else if (section === "math" && module === 1) currentQuestions = testData.mathModule1;
    else if (section === "math" && module === 2) currentQuestions = testData.mathModule2;
  }

  const q = currentQuestions[qIdx];

  const handleNext = () => {
    if (qIdx < currentQuestions.length - 1) {
      setQIdx(qIdx + 1);
    } else {
      if (module === 1) {
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
    const testIdToUse = testRegistry.length === 1 ? testRegistry[0].id : selectedTestId;
    if (!testIdToUse) return;
    setStartStatus("loading");
    try {
      const uid = studentId.trim() || "Anonymous";
      const taken = await getSubmissionHistory(uid);
      let assignTestId = testIdToUse;
      if (taken.includes(testIdToUse)) {
        const available = testRegistry.filter((t) => !taken.includes(t.id));
        if (available.length === 0) {
          setStartStatus("all_taken");
          return;
        }
        assignTestId = available[0].id;
        setSelectedTestId(assignTestId);
      }
      const entry = testRegistry.find((t) => t.id === assignTestId);
      if (!entry) throw new Error("Unknown test");
      const data = (await entry.load()) as TestData;
      setTestData(data);
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
        {testRegistry.length > 1 && (
          <div style={{ margin: "20px 0" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>Select test</label>
            <select
              value={selectedTestId ?? ""}
              onChange={(e) => setSelectedTestId(e.target.value || null)}
              style={{ padding: "10px 15px", fontSize: "16px", minWidth: "200px", border: "1px solid #ccc", borderRadius: "8px" }}
            >
              <option value="">Choose a test</option>
              {testRegistry.map((t) => (
                <option key={t.id} value={t.id}>{t.label}</option>
              ))}
            </select>
          </div>
        )}
        <div style={{ margin: "20px 0" }}>
          <label htmlFor="student-id" style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Student ID or name (optional)
          </label>
          <input
            id="student-id"
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="e.g. John D. or 12345"
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
          disabled={startStatus === "loading" || (testRegistry.length > 1 && !selectedTestId)}
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
          v2 · multi-test, grading, no-repeat
        </p>
      </div>
    );

  if (view === "results" && testData && selectedTestId) {
    const rw1 = scoreSection(answers, testData.readingWritingModule1);
    const rw2 = scoreSection(answers, testData.readingWritingModule2);
    const m1 = scoreSection(answers, testData.mathModule1);
    const m2 = scoreSection(answers, testData.mathModule2);
    const scores = {
      rwRaw: rw1.rawScore + rw2.rawScore,
      rwTotal: rw1.total + rw2.total,
      rwPercentage: rw1.total + rw2.total > 0 ? Math.round(((rw1.rawScore + rw2.rawScore) / (rw1.total + rw2.total)) * 100) : 0,
      mathRaw: m1.rawScore + m2.rawScore,
      mathTotal: m1.total + m2.total,
      mathPercentage: m1.total + m2.total > 0 ? Math.round(((m1.rawScore + m2.rawScore) / (m1.total + m2.total)) * 100) : 0,
    };
    const testLabel = testRegistry.find((t) => t.id === selectedTestId)?.label;

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
                await saveSubmission(studentId, answers, { testId: selectedTestId, testLabel, scores });
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
