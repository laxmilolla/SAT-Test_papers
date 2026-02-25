import React, { useState, useEffect } from "react";
import { saveSubmission, getSubmissionHistory, getPoolPairsTaken, getAssignments, getAllAssignments, saveAssignment, getStudentActive, setStudentActive, getAllStudentsStatus, getSubmissions, AssignmentRow, SubmissionRow, StudentAssignment } from "./firebase";
import { testRegistry } from "./data/testRegistry";
import { getPoolTestData, getAllPoolModules } from "./data/modulePool";
import { scoreSection, scoreByConcept } from "./utils/scoring";

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
  const [startStatus, setStartStatus] = React.useState<"idle" | "loading" | "error" | "all_taken" | "pool_already_taken" | "inactive">("idle");
  const [view, setView] = React.useState("start");
  const [section, setSection] = React.useState("reading");
  const [module, setModule] = React.useState(1);
  const [qIdx, setQIdx] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = React.useState(32 * 60);

  const [studentId, setStudentId] = React.useState("");
  const [saveStatus, setSaveStatus] = React.useState<"idle" | "saving" | "done" | "error">("idle");
  const [teacherAssignments, setTeacherAssignments] = React.useState<AssignmentRow[]>([]);
  const [teacherStudentStatus, setTeacherStudentStatus] = React.useState<Record<string, boolean>>({});
  const [teacherStatus, setTeacherStatus] = React.useState<"idle" | "loading" | "error">("idle");
  const [teacherError, setTeacherError] = React.useState<string>("");
  const [expandedModules, setExpandedModules] = React.useState<Set<string>>(new Set());
  const [assignStudentId, setAssignStudentId] = React.useState("");
  /** "" = Select student, "__new__" = Add new student, else = existing studentId */
  const [assignStudentDropdown, setAssignStudentDropdown] = React.useState<string>("");
  const [assignRwM1, setAssignRwM1] = React.useState("");
  const [assignMathM1, setAssignMathM1] = React.useState("");
  const [assignStatus, setAssignStatus] = React.useState<"idle" | "saving" | "done" | "error" | "duplicate">("idle");
  /** When student has multiple assignments, they pick one here before starting. */
  const [assignmentsForPicker, setAssignmentsForPicker] = React.useState<StudentAssignment[] | null>(null);
  const [resultsSubmissions, setResultsSubmissions] = React.useState<SubmissionRow[]>([]);
  const [resultsFilterStudentId, setResultsFilterStudentId] = React.useState("");
  const [resultsStatus, setResultsStatus] = React.useState<"idle" | "loading" | "error">("idle");
  const [resultsError, setResultsError] = React.useState("");

  /** Adaptive Module 2: set after scoring Module 1. Above threshold → harder M2. */
  const [rwModule2Variant, setRwModule2Variant] = React.useState<"easier" | "harder" | null>(null);
  const [mathModule2Variant, setMathModule2Variant] = React.useState<"easier" | "harder" | null>(null);
  const MODULE1_HARDER_THRESHOLD = 0.5; // >50% correct → harder Module 2

  /** Pool test: which M1 modules were given (saved on submission for "what was given"). */
  const [assignedRwM1ModuleId, setAssignedRwM1ModuleId] = React.useState<string | null>(null);
  const [assignedMathM1ModuleId, setAssignedMathM1ModuleId] = React.useState<string | null>(null);

  /** Teacher access: code-gated; persisted in sessionStorage. */
  const [isTeacherMode, setIsTeacherMode] = React.useState(
    () => typeof window !== "undefined" && sessionStorage.getItem("sat_teacher_mode") === "1"
  );
  const [showTeacherCodeForm, setShowTeacherCodeForm] = React.useState(false);
  const [teacherCodeInput, setTeacherCodeInput] = React.useState("");
  const [teacherCodeError, setTeacherCodeError] = React.useState(false);
  const TEACHER_CODE = process.env.REACT_APP_TEACHER_CODE || "1116";

  React.useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;
    if (view === "test" && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [view, timeLeft]);

  React.useEffect(() => {
    if (view === "teacher" && !isTeacherMode) setView("start");
  }, [view, isTeacherMode]);

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

  const loadOneAssignment = async (assignment: StudentAssignment) => {
    const uid = studentId.trim() || "Anonymous";
    setAssignmentsForPicker(null);
    try {
      if (assignment.rwM1ModuleId && assignment.mathM1ModuleId) {
        const pairsTaken = await getPoolPairsTaken(uid);
        const alreadyTaken = pairsTaken.some(
          (p) => p.rwM1ModuleId === assignment.rwM1ModuleId && p.mathM1ModuleId === assignment.mathM1ModuleId
        );
        if (alreadyTaken) {
          setStartStatus("pool_already_taken");
          return;
        }
        const data = (await getPoolTestData(assignment.rwM1ModuleId, assignment.mathM1ModuleId)) as TestData;
        setTestData(data);
        setSelectedTestId("pool");
        setAssignedRwM1ModuleId(assignment.rwM1ModuleId);
        setAssignedMathM1ModuleId(assignment.mathM1ModuleId);
        setRwModule2Variant(null);
        setMathModule2Variant(null);
        setView("test");
        setStartStatus("idle");
        return;
      }
      let assignTestId: string | null = null;
      if (assignment.testId && combinedRegistry.some((t) => t.id === assignment.testId)) {
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
      setAssignedRwM1ModuleId(null);
      setAssignedMathM1ModuleId(null);
      setRwModule2Variant(null);
      setMathModule2Variant(null);
      setView("test");
      setStartStatus("idle");
    } catch {
      setStartStatus("error");
    }
  };

  const handleStart = async () => {
    const uid = studentId.trim() || "Anonymous";
    setStartStatus("loading");
    setAssignmentsForPicker(null);
    try {
      const isActive = await getStudentActive(uid);
      if (!isActive) {
        setStartStatus("inactive");
        return;
      }

      const assignments = await getAssignments(uid);

      if (assignments.length > 1) {
        setAssignmentsForPicker(assignments);
        setStartStatus("idle");
        return;
      }

      if (assignments.length === 1) {
        await loadOneAssignment(assignments[0]);
        return;
      }

      const taken = await getSubmissionHistory(uid);
      const available = combinedRegistry.filter((t) => !taken.includes(t.id));
      if (available.length === 0) {
        setStartStatus("all_taken");
        return;
      }
      const assignTestId = available[0].id;
      setSelectedTestId(assignTestId);
      const entry = combinedRegistry.find((t) => t.id === assignTestId);
      if (!entry) throw new Error("Unknown test");
      const data = (await loadTestData(entry)) as TestData;
      setTestData(data);
      setAssignedRwM1ModuleId(null);
      setAssignedMathM1ModuleId(null);
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
        {startStatus === "pool_already_taken" && (
          <p style={{ color: "#c62828", margin: "10px 0" }}>You&apos;ve already completed this assigned test. Ask your teacher to assign a different module set.</p>
        )}
        {startStatus === "inactive" && (
          <p style={{ color: "#c62828", margin: "10px 0" }}>Your access has been deactivated. Please contact your teacher.</p>
        )}
        {startStatus === "error" && (
          <p style={{ color: "#c62828", margin: "10px 0" }}>Failed to load test. Please try again.</p>
        )}
        {assignmentsForPicker && assignmentsForPicker.length > 1 && (
          <div style={{ marginTop: "20px", padding: "16px", background: "#f5f5f5", borderRadius: "8px", maxWidth: "420px", marginLeft: "auto", marginRight: "auto" }}>
            <p style={{ marginBottom: "12px", fontWeight: 600 }}>You have multiple tests assigned. Choose one to start:</p>
            {assignmentsForPicker.map((a, idx) => {
              const label = a.rwM1ModuleId && a.mathM1ModuleId
                ? `Set ${idx + 1}: R&W ${a.rwM1ModuleId}, Math ${a.mathM1ModuleId}`
                : a.testId
                  ? `Set ${idx + 1}: ${combinedRegistry.find((t) => t.id === a.testId)?.label ?? a.testId}`
                  : `Set ${idx + 1}`;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => loadOneAssignment(a)}
                  style={{
                    display: "block",
                    width: "100%",
                    marginBottom: "8px",
                    padding: "12px 16px",
                    fontSize: "14px",
                    textAlign: "left",
                    background: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  {label}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => setAssignmentsForPicker(null)}
              style={{ marginTop: "8px", fontSize: "13px", background: "transparent", border: "none", color: "#666", cursor: "pointer", textDecoration: "underline" }}
            >
              Cancel
            </button>
          </div>
        )}
        {!assignmentsForPicker?.length && (
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
        )}
        <p style={{ marginTop: "24px", fontSize: "12px", color: "#888" }}>
          Your test is chosen by your teacher or assigned automatically.
        </p>
        {showTeacherCodeForm ? (
          <div style={{ marginTop: "24px", padding: "16px", background: "#f5f5f5", borderRadius: "8px", maxWidth: "320px", marginLeft: "auto", marginRight: "auto" }}>
            <label htmlFor="teacher-code" style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: 600 }}>Teacher code</label>
            <input
              id="teacher-code"
              type="password"
              value={teacherCodeInput}
              onChange={(e) => {
                setTeacherCodeInput(e.target.value);
                setTeacherCodeError(false);
              }}
              placeholder="Enter code"
              style={{ padding: "8px 12px", fontSize: "14px", width: "100%", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "6px", marginBottom: "8px" }}
            />
            {teacherCodeError && <p style={{ color: "#c62828", fontSize: "13px", marginBottom: "8px" }}>Incorrect code.</p>}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={() => {
                  const ok = teacherCodeInput.trim() === TEACHER_CODE;
                  if (ok) {
                    setIsTeacherMode(true);
                    if (typeof window !== "undefined") sessionStorage.setItem("sat_teacher_mode", "1");
                    setShowTeacherCodeForm(false);
                    setTeacherCodeInput("");
                    setTeacherCodeError(false);
                    setView("teacher");
                    setTeacherStatus("loading");
                    setTeacherError("");
                    Promise.all([getAllAssignments(), getAllStudentsStatus()])
                      .then(([rows, status]) => {
                        setTeacherAssignments(rows);
                        setTeacherStudentStatus(status);
                        setTeacherStatus("idle");
                      })
                      .catch((err: unknown) => {
                        setTeacherStatus("error");
                        const msg = err && typeof err === "object" && "message" in err ? String((err as { message: string }).message) : "Unknown error";
                        setTeacherError(msg);
                      });
                  } else {
                    setTeacherCodeError(true);
                  }
                }}
                style={{ padding: "8px 16px", fontSize: "14px", fontWeight: 600, background: "#0052cc", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowTeacherCodeForm(false);
                  setTeacherCodeInput("");
                  setTeacherCodeError(false);
                }}
                style={{ padding: "8px 16px", fontSize: "14px", background: "#eee", border: "1px solid #ccc", borderRadius: "6px", cursor: "pointer" }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <p style={{ marginTop: "16px", fontSize: "12px", color: "#999" }}>
            <button
              type="button"
              onClick={() => {
                if (isTeacherMode) {
                  setView("teacher");
                  setTeacherStatus("loading");
                  setTeacherError("");
                  Promise.all([getAllAssignments(), getAllStudentsStatus()])
                    .then(([rows, status]) => {
                      setTeacherAssignments(rows);
                      setTeacherStudentStatus(status);
                      setTeacherStatus("idle");
                    })
                    .catch((err: unknown) => {
                      setTeacherStatus("error");
                      const msg = err && typeof err === "object" && "message" in err ? String((err as { message: string }).message) : "Unknown error";
                      setTeacherError(msg);
                    });
                } else {
                  setShowTeacherCodeForm(true);
                }
              }}
              style={{
                background: "none",
                border: "none",
                color: "#999",
                textDecoration: "underline",
                cursor: "pointer",
                fontSize: "12px",
              }}
            >
              Teacher
            </button>
          </p>
        )}
      </div>
    );

  if (view === "teacher" && !isTeacherMode) {
    return null;
  }
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

    const allPoolModules = getAllPoolModules();
    const rwM1Modules = allPoolModules.filter((m) => m.type === "rw-m1");
    const rwM2Modules = allPoolModules.filter((m) => m.type === "rw-m2-easier" || m.type === "rw-m2-harder");
    const mathM1Modules = allPoolModules.filter((m) => m.type === "math-m1");
    const mathM2Modules = allPoolModules.filter((m) => m.type === "math-m2-easier" || m.type === "math-m2-harder");

    const thStyle: React.CSSProperties = { padding: "10px 12px", textAlign: "left", border: "1px solid #ddd", whiteSpace: "nowrap" };
    const tdStyle: React.CSSProperties = { padding: "10px 12px", border: "1px solid #ddd" };
    const sectionHead: React.CSSProperties = { marginTop: "36px", marginBottom: "8px", fontSize: "18px", fontWeight: 600 };
    const chipBase: React.CSSProperties = { display: "inline-block", padding: "2px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: 600 };

    const typeChip = (type: string) => {
      const colors: Record<string, { bg: string; fg: string }> = {
        "rw-m1": { bg: "#e3f2fd", fg: "#1565c0" },
        "rw-m2-easier": { bg: "#e8f5e9", fg: "#2e7d32" },
        "rw-m2-harder": { bg: "#fce4ec", fg: "#c62828" },
        "math-m1": { bg: "#fff3e0", fg: "#e65100" },
        "math-m2-easier": { bg: "#e8f5e9", fg: "#2e7d32" },
        "math-m2-harder": { bg: "#fce4ec", fg: "#c62828" },
      };
      const c = colors[type] ?? { bg: "#eee", fg: "#333" };
      return <span style={{ ...chipBase, background: c.bg, color: c.fg }}>{type}</span>;
    };

    const toggleModule = (id: string) => {
      setExpandedModules((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
      });
    };

    const questionCard = (q: { id: string; question?: string; options?: string[]; passage?: string; image?: string; correct: string; explanation?: string }, idx: number) => (
      <div
        key={q.id}
        style={{
          padding: "14px 16px",
          margin: "8px 0",
          background: "#fff",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          fontSize: "14px",
          lineHeight: "1.6",
        }}
      >
        <div style={{ fontWeight: 600, marginBottom: "6px", color: "#333" }}>
          Q{idx + 1} <span style={{ fontWeight: 400, color: "#999", fontSize: "12px" }}>({q.id})</span>
        </div>
        {q.passage && (
          <div style={{ padding: "10px 12px", background: "#f9f9f9", borderRadius: "6px", marginBottom: "8px", fontSize: "13px", color: "#444", borderLeft: "3px solid #ccc" }}>
            {q.passage.length > 300 ? q.passage.slice(0, 300) + "…" : q.passage}
          </div>
        )}
        {q.question && <div style={{ marginBottom: "8px" }}>{q.question}</div>}
        {q.options && q.options.length > 0 && (
          <div style={{ marginBottom: "8px" }}>
            {q.options.map((opt, oi) => {
              const isCorrect = opt.charAt(0) === q.correct;
              return (
                <div
                  key={oi}
                  style={{
                    padding: "4px 10px",
                    margin: "3px 0",
                    borderRadius: "4px",
                    background: isCorrect ? "#e8f5e9" : "transparent",
                    fontWeight: isCorrect ? 600 : 400,
                    color: isCorrect ? "#2e7d32" : "#333",
                  }}
                >
                  {isCorrect && "✓ "}{opt}
                </div>
              );
            })}
          </div>
        )}
        {!q.options && (
          <div style={{ fontSize: "13px", color: "#555" }}>
            Correct answer: <strong>{q.correct}</strong>
          </div>
        )}
        {q.explanation && (
          <div style={{ fontSize: "12px", color: "#666", marginTop: "4px", fontStyle: "italic" }}>
            {q.explanation}
          </div>
        )}
      </div>
    );

    const moduleTable = (title: string, modules: typeof allPoolModules) => (
      <>
        <h4 style={sectionHead}>{title}</h4>
        {modules.length === 0 ? (
          <p style={{ color: "#999", fontSize: "14px" }}>None registered.</p>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd", marginBottom: "8px" }}>
            <thead>
              <tr style={{ background: "#f5f5f5" }}>
                <th style={thStyle}>Module ID</th>
                <th style={thStyle}>Type</th>
                <th style={thStyle}>Label</th>
                <th style={thStyle}>Questions</th>
                <th style={thStyle}>Linked M2</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((m) => {
                const isOpen = expandedModules.has(m.id);
                return (
                  <React.Fragment key={m.id}>
                    <tr
                      onClick={() => toggleModule(m.id)}
                      style={{ cursor: "pointer", transition: "background 0.15s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#fafafa")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                    >
                      <td style={{ ...tdStyle, fontFamily: "monospace", fontSize: "13px" }}>
                        <span style={{ marginRight: "6px", display: "inline-block", width: "14px" }}>{isOpen ? "▼" : "▶"}</span>
                        {m.id}
                      </td>
                      <td style={tdStyle}>{typeChip(m.type)}</td>
                      <td style={tdStyle}>{m.label ?? "—"}</td>
                      <td style={{ ...tdStyle, textAlign: "center" }}>{m.questions.length}</td>
                      <td style={{ ...tdStyle, fontFamily: "monospace", fontSize: "13px" }}>
                        {m.m2EasierModuleId && <div>easier → {m.m2EasierModuleId}</div>}
                        {m.m2HarderModuleId && <div>harder → {m.m2HarderModuleId}</div>}
                        {!m.m2EasierModuleId && !m.m2HarderModuleId && "—"}
                      </td>
                    </tr>
                    {isOpen && (
                      <tr>
                        <td colSpan={5} style={{ padding: "12px 20px", background: "#fafcff", border: "1px solid #ddd" }}>
                          <div style={{ maxHeight: "500px", overflowY: "auto" }}>
                            {(m.questions as Array<{ id: string; question?: string; options?: string[]; passage?: string; image?: string; correct: string; explanation?: string }>).map(
                              (q, idx) => questionCard(q, idx)
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        )}
      </>
    );

    return (
      <div style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ marginBottom: "20px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={() => setView("start")}
            style={{
              padding: "8px 16px",
              background: "#eee",
              border: "1px solid #ccc",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            ← Back to start
          </button>
          <button
            type="button"
            onClick={() => {
              setIsTeacherMode(false);
              if (typeof window !== "undefined") sessionStorage.removeItem("sat_teacher_mode");
              setView("start");
            }}
            style={{
              padding: "8px 16px",
              background: "transparent",
              border: "1px solid #999",
              borderRadius: "6px",
              cursor: "pointer",
              color: "#666",
              fontSize: "13px",
            }}
          >
            Log out (teacher)
          </button>
        </div>

        <div style={{ marginBottom: "20px", padding: "12px 16px", background: "#f0f4ff", borderRadius: "8px", fontSize: "14px" }}>
          <strong>Jump to:</strong>{" "}
          <a href="#student-access" style={{ marginRight: "12px" }}>Student access</a>
          <a href="#assignments" style={{ marginRight: "12px" }}>Assignments</a>
          <a href="#results" style={{ marginRight: "12px" }}>Results</a>
          <a href="#available-tests" style={{ marginRight: "12px" }}>Available tests</a>
          <a href="#module-pool">All modules (Module Pool)</a>
        </div>

        {/* ── Assign test form ── */}
        <div style={{ marginBottom: "28px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", background: "#fafafa" }}>
          <h3 style={{ marginTop: 0, marginBottom: "12px" }}>Assign test to student</h3>
          <p style={{ color: "#555", fontSize: "14px", marginBottom: "8px" }}>
            Choose Module 1 for Reading &amp; Writing and Math. The student will get this test when they enter their ID on the start screen. M2 (easier/harder) is chosen automatically from their M1 score.
          </p>
          <p style={{ color: "#666", fontSize: "13px", marginBottom: "16px" }}>
            Choose a student and add a new assignment (each save adds a set; students can have multiple assigned sets).
          </p>
          {(() => {
            const effectiveStudentId = assignStudentDropdown === "__new__" ? assignStudentId.trim() : assignStudentDropdown;
            const sortedStudentIds = Array.from(new Set(teacherAssignments.map((r) => r.studentId))).sort((a, b) => a.localeCompare(b));
            return (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "flex-end" }}>
            <div>
              <label htmlFor="assign-student-select" style={{ display: "block", marginBottom: "4px", fontSize: "14px", fontWeight: 600 }}>Student</label>
              <select
                id="assign-student-select"
                value={assignStudentDropdown}
                onChange={(e) => {
                  const v = e.target.value;
                  setAssignStudentDropdown(v);
                  setAssignStatus("idle");
                  if (v === "__new__") setAssignStudentId("");
                  else setAssignStudentId(v);
                }}
                style={{ padding: "8px 12px", fontSize: "14px", minWidth: "200px", border: "1px solid #ccc", borderRadius: "6px" }}
              >
                <option value="">— Select student —</option>
                {sortedStudentIds.map((sid) => (
                  <option key={sid} value={sid}>{sid}</option>
                ))}
                <option value="__new__">Add new student…</option>
              </select>
              {assignStudentDropdown === "__new__" && (
                <input
                  id="assign-student-id"
                  type="text"
                  value={assignStudentId}
                  onChange={(e) => { setAssignStudentId(e.target.value); setAssignStatus("idle"); }}
                  placeholder="e.g. 1001 or Jane"
                  style={{ marginTop: "8px", padding: "8px 12px", fontSize: "14px", width: "100%", maxWidth: "200px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "6px", display: "block" }}
                />
              )}
            </div>
            <div>
              <label htmlFor="assign-rw-m1" style={{ display: "block", marginBottom: "4px", fontSize: "14px", fontWeight: 600 }}>R&amp;W Module 1</label>
              <select
                id="assign-rw-m1"
                value={assignRwM1}
                onChange={(e) => { setAssignRwM1(e.target.value); setAssignStatus("idle"); }}
                style={{ padding: "8px 12px", fontSize: "14px", minWidth: "200px", border: "1px solid #ccc", borderRadius: "6px" }}
              >
                <option value="">— Select —</option>
                {rwM1Modules.map((m) => (
                  <option key={m.id} value={m.id}>{m.label ?? m.id}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="assign-math-m1" style={{ display: "block", marginBottom: "4px", fontSize: "14px", fontWeight: 600 }}>Math Module 1</label>
              <select
                id="assign-math-m1"
                value={assignMathM1}
                onChange={(e) => { setAssignMathM1(e.target.value); setAssignStatus("idle"); }}
                style={{ padding: "8px 12px", fontSize: "14px", minWidth: "200px", border: "1px solid #ccc", borderRadius: "6px" }}
              >
                <option value="">— Select —</option>
                {mathM1Modules.map((m) => (
                  <option key={m.id} value={m.id}>{m.label ?? m.id}</option>
                ))}
              </select>
            </div>
            <button
              type="button"
              disabled={assignStatus === "saving" || !effectiveStudentId || !assignRwM1 || !assignMathM1}
              onClick={async () => {
                const alreadyAssigned = teacherAssignments.some(
                  (r) =>
                    r.studentId === effectiveStudentId &&
                    r.rwM1ModuleId === assignRwM1 &&
                    r.mathM1ModuleId === assignMathM1
                );
                if (alreadyAssigned) {
                  setAssignStatus("duplicate");
                  return;
                }
                setAssignStatus("saving");
                try {
                  await saveAssignment(effectiveStudentId, assignRwM1, assignMathM1);
                  const [rows, status] = await Promise.all([getAllAssignments(), getAllStudentsStatus()]);
                  setTeacherAssignments(rows);
                  setTeacherStudentStatus(status);
                  setAssignStudentDropdown(effectiveStudentId);
                  setAssignStudentId(effectiveStudentId);
                  setAssignStatus("done");
                } catch (err) {
                  setAssignStatus("error");
                }
              }}
              style={{
                padding: "8px 20px",
                fontSize: "14px",
                fontWeight: 600,
                background: "#0052cc",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: assignStatus === "saving" ? "wait" : "pointer",
              }}
            >
              {assignStatus === "idle" && "Add assignment"}
              {assignStatus === "saving" && "Saving…"}
              {assignStatus === "done" && "Saved!"}
              {assignStatus === "error" && "Save failed"}
              {assignStatus === "duplicate" && "Already assigned"}
            </button>
          </div>
            );
          })()}
          {assignStatus === "done" && <p style={{ marginTop: "12px", color: "#2e7d32", fontSize: "14px" }}>Assignment added. The student will see this set when they enter their ID (if they have multiple, they can choose which to take).</p>}
          {assignStatus === "error" && <p style={{ marginTop: "12px", color: "#c62828", fontSize: "14px" }}>Could not save. Check Firestore rules and env variables.</p>}
          {assignStatus === "duplicate" && <p style={{ marginTop: "12px", color: "#c62828", fontSize: "14px" }}>This student already has this set assigned. Choose a different student or a different R&amp;W / Math module combination.</p>}
        </div>

        {/* ── Results ── */}
        <h2 id="results" style={{ marginBottom: "4px" }}>Results</h2>
        <p style={{ color: "#555", marginBottom: "12px", fontSize: "14px" }}>
          View submissions to see how tests were performed. Filter by student ID to see one student&apos;s history. Use the concept breakdown to suggest practice (e.g. &quot;Practice advanced math&quot;).
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", marginBottom: "12px" }}>
          <label htmlFor="results-filter" style={{ fontSize: "14px", fontWeight: 600 }}>Filter by Student ID (optional)</label>
          <input
            id="results-filter"
            type="text"
            value={resultsFilterStudentId}
            onChange={(e) => setResultsFilterStudentId(e.target.value)}
            placeholder="e.g. 1001"
            style={{ padding: "8px 12px", fontSize: "14px", width: "160px", border: "1px solid #ccc", borderRadius: "6px" }}
          />
          <button
            type="button"
            onClick={() => {
              setResultsStatus("loading");
              setResultsError("");
              getSubmissions(resultsFilterStudentId.trim() || undefined)
                .then((rows) => {
                  setResultsSubmissions(rows);
                  setResultsStatus("idle");
                })
                .catch((err: unknown) => {
                  setResultsStatus("error");
                  setResultsError(err && typeof err === "object" && "message" in err ? String((err as { message: string }).message) : "Failed to load");
                });
            }}
            style={{
              padding: "8px 16px",
              fontSize: "14px",
              fontWeight: 600,
              background: "#0052cc",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: resultsStatus === "loading" ? "wait" : "pointer",
            }}
          >
            {resultsStatus === "loading" ? "Loading…" : "Load results"}
          </button>
        </div>
        {resultsStatus === "error" && <p style={{ color: "#c62828", marginBottom: "12px", fontSize: "14px" }}>{resultsError}</p>}
        {resultsStatus === "idle" && resultsSubmissions.length > 0 && (
          <div style={{ overflowX: "auto", marginBottom: "24px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd", fontSize: "14px" }}>
              <thead>
                <tr style={{ background: "#f5f5f5" }}>
                  <th style={thStyle}>Student ID</th>
                  <th style={thStyle}>Date</th>
                  <th style={thStyle}>Test</th>
                  <th style={thStyle}>What was given</th>
                  <th style={thStyle}>R&W</th>
                  <th style={thStyle}>Math</th>
                  <th style={thStyle}>M2 difficulty</th>
                  <th style={thStyle}>By concept</th>
                </tr>
              </thead>
              <tbody>
                {resultsSubmissions.map((row) => (
                  <tr key={row.id}>
                    <td style={tdStyle}>{row.userId}</td>
                    <td style={tdStyle}>
                      {row.submittedAt ? new Date(row.submittedAt).toLocaleString(undefined, { dateStyle: "short", timeStyle: "short" }) : "—"}
                    </td>
                    <td style={tdStyle}>{row.testLabel || row.testId || "—"}</td>
                    <td style={tdStyle}>
                      {row.rwM1ModuleId && row.mathM1ModuleId
                        ? `R&W: ${row.rwM1ModuleId}, Math: ${row.mathM1ModuleId}`
                        : "—"}
                    </td>
                    <td style={tdStyle}>{row.rwRaw}/{row.rwTotal} ({row.rwPercentage}%)</td>
                    <td style={tdStyle}>{row.mathRaw}/{row.mathTotal} ({row.mathPercentage}%)</td>
                    <td style={tdStyle}>
                      {row.rwModule2Difficulty || row.mathModule2Difficulty
                        ? [row.rwModule2Difficulty, row.mathModule2Difficulty].filter(Boolean).join(", ")
                        : "—"}
                    </td>
                    <td style={tdStyle}>
                      {row.conceptScores && Object.keys(row.conceptScores).filter((d) => d !== "unspecified").length > 0
                        ? Object.entries(row.conceptScores)
                            .filter(([d]) => d !== "unspecified")
                            .sort(([a], [b]) => a.localeCompare(b))
                            .map(([domain, s]) => `${domain.replace(/_/g, " ")} ${s.pct}%`)
                            .join(" · ")
                        : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {resultsStatus === "idle" && resultsSubmissions.length === 0 && resultsFilterStudentId === "" && (
          <p style={{ color: "#666", marginBottom: "24px", fontSize: "14px" }}>Click &quot;Load results&quot; to see recent submissions.</p>
        )}
        {resultsStatus === "idle" && resultsSubmissions.length === 0 && resultsFilterStudentId !== "" && (
          <p style={{ color: "#666", marginBottom: "24px", fontSize: "14px" }}>No submissions found for this student.</p>
        )}

        {/* ── Student access (active/inactive) ── */}
        <h2 id="student-access" style={{ marginBottom: "4px" }}>Student access</h2>
        <p style={{ color: "#555", marginBottom: "16px", fontSize: "14px" }}>
          Inactive students cannot start a test when they enter their ID. Use this when a student leaves your class.
        </p>
        {teacherStatus === "idle" && (() => {
          const uniqueStudentIds = Array.from(new Set(teacherAssignments.map((r) => r.studentId))).sort((a, b) => a.localeCompare(b));
          if (uniqueStudentIds.length === 0) {
            return <p style={{ color: "#666" }}>No students with assignments yet. Assign a test first.</p>;
          }
          return (
            <table style={{ width: "100%", maxWidth: "480px", borderCollapse: "collapse", border: "1px solid #ddd", marginBottom: "24px" }}>
              <thead>
                <tr style={{ background: "#f5f5f5" }}>
                  <th style={thStyle}>Student ID</th>
                  <th style={thStyle}>Status</th>
                  <th style={thStyle}>Action</th>
                </tr>
              </thead>
              <tbody>
                {uniqueStudentIds.map((sid) => {
                  const isActive = teacherStudentStatus[sid] !== false;
                  return (
                    <tr key={sid}>
                      <td style={tdStyle}>{sid}</td>
                      <td style={tdStyle}>
                        <span style={{ color: isActive ? "#2e7d32" : "#c62828", fontWeight: 600 }}>
                          {isActive ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td style={tdStyle}>
                        <button
                          type="button"
                          onClick={async () => {
                            try {
                              await setStudentActive(sid, !isActive);
                              setTeacherStudentStatus((prev) => ({ ...prev, [sid]: !isActive }));
                            } catch {
                              // keep UI unchanged on error
                            }
                          }}
                          style={{
                            padding: "4px 12px",
                            fontSize: "13px",
                            background: isActive ? "#c62828" : "#2e7d32",
                            color: "white",
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer",
                          }}
                        >
                          {isActive ? "Deactivate" : "Activate"}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          );
        })()}

        {/* ── Assignments ── */}
        <h2 id="assignments" style={{ marginBottom: "4px" }}>Student Assignments</h2>
        <p style={{ color: "#555", marginBottom: "16px", fontSize: "14px" }}>
          Assigned tests appear below. You can also add or change assignments in Firebase Console → Firestore → <code>assignments</code>.
        </p>
        {teacherStatus === "loading" && <p>Loading…</p>}
        {teacherStatus === "error" && (
          <p style={{ color: "#c62828" }}>
            Failed to load assignments. {teacherError && <span style={{ fontSize: "14px" }}>({teacherError})</span>}
            <br />
            <strong>Check Firestore rules:</strong> allow <code>read</code> on <code>assignments</code>.
          </p>
        )}
        {teacherStatus === "idle" && (
          <>
            {teacherAssignments.length === 0 ? (
              <p style={{ color: "#666" }}>No assignments yet.</p>
            ) : (
              <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
                <thead>
                  <tr style={{ background: "#f5f5f5" }}>
                    <th style={thStyle}>Student ID</th>
                    <th style={thStyle}>Assigned Test</th>
                  </tr>
                </thead>
                <tbody>
                  {teacherAssignments.map((row, idx) => (
                    <tr key={`${row.studentId}-${row.rwM1ModuleId ?? row.testId ?? ""}-${idx}`}>
                      <td style={tdStyle}>{row.studentId}</td>
                      <td style={tdStyle}>{assignmentLabel(row)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}

        {/* ── Available Tests ── */}
        <h2 id="available-tests" style={{ marginTop: "48px", marginBottom: "4px" }}>Available Tests</h2>
        <p style={{ color: "#555", marginBottom: "12px", fontSize: "14px" }}>
          Fixed tests (assign via <code>testId</code> field in Firestore).
        </p>
        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd", marginBottom: "8px" }}>
          <thead>
            <tr style={{ background: "#f5f5f5" }}>
              <th style={thStyle}>Test ID</th>
              <th style={thStyle}>Label</th>
            </tr>
          </thead>
          <tbody>
            {combinedRegistry.map((t) => (
              <tr key={t.id}>
                <td style={{ ...tdStyle, fontFamily: "monospace", fontSize: "13px" }}>{t.id}</td>
                <td style={tdStyle}>{t.label}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ── Module Pool ── */}
        <h2 id="module-pool" style={{ marginTop: "48px", marginBottom: "4px" }}>Module Pool (all {allPoolModules.length} modules)</h2>
        <p style={{ color: "#555", marginBottom: "4px", fontSize: "14px" }}>
          Individual modules for adaptive testing. Assign via <code>rwM1ModuleId</code> + <code>mathM1ModuleId</code> in Firestore.
          The system auto-picks the linked M2 (easier or harder) based on M1 score.
        </p>

        {moduleTable("R&W — Module 1", rwM1Modules)}
        {moduleTable("R&W — Module 2 variants", rwM2Modules)}
        {moduleTable("Math — Module 1", mathM1Modules)}
        {moduleTable("Math — Module 2 variants", mathM2Modules)}

        <div style={{ marginTop: "40px", padding: "16px", background: "#f0f4ff", borderRadius: "8px", fontSize: "14px", color: "#333" }}>
          <strong>How to assign a pool test in Firestore:</strong>
          <ol style={{ margin: "8px 0 0 0", paddingLeft: "20px", lineHeight: "1.8" }}>
            <li>Go to Firebase Console → Firestore → <code>assignments</code></li>
            <li>Create a document with <strong>document ID = student ID</strong></li>
            <li>Add field <code>rwM1ModuleId</code> (string) → e.g. <code>rw-m1-a</code></li>
            <li>Add field <code>mathM1ModuleId</code> (string) → e.g. <code>math-m1-a</code></li>
          </ol>
        </div>
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
    const allQuestionsWithDomain = [
      ...testData.readingWritingModule1,
      ...rw2Questions,
      ...testData.mathModule1,
      ...m2Questions,
    ];
    const conceptScoresRaw = scoreByConcept(answers, allQuestionsWithDomain);
    const conceptScores =
      Object.keys(conceptScoresRaw).length > 0
        ? (Object.fromEntries(
            Object.entries(conceptScoresRaw).map(([domain, s]) => [
              domain,
              { raw: s.rawScore, total: s.total, pct: s.percentage },
            ])
          ) as import("./firebase").ConceptScores)
        : undefined;
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
        {conceptScores && Object.keys(conceptScores).filter((d) => d !== "unspecified").length > 0 && (
          <div style={{ marginTop: "16px", padding: "12px 20px", background: "#f5f5f5", borderRadius: "8px", maxWidth: "480px", marginLeft: "auto", marginRight: "auto", textAlign: "left" }}>
            <div style={{ fontWeight: 600, marginBottom: "8px", fontSize: "14px" }}>By concept</div>
            <div style={{ fontSize: "14px", color: "#333" }}>
              {Object.entries(conceptScores)
                .filter(([domain]) => domain !== "unspecified")
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([domain, s]) => (
                  <span key={domain} style={{ display: "inline-block", marginRight: "12px", marginBottom: "4px" }}>
                    {domain.replace(/_/g, " ")}: {s.pct}%
                  </span>
                ))}
            </div>
          </div>
        )}
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
                  conceptScores,
                  ...(selectedTestId === "pool" && assignedRwM1ModuleId && assignedMathM1ModuleId
                    ? { rwM1ModuleId: assignedRwM1ModuleId, mathM1ModuleId: assignedMathM1ModuleId }
                    : {}),
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
