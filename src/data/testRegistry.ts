export const testRegistry: Array<{
  id: string;
  label: string;
  load: () => Promise<{
    readingWritingModule1: unknown[];
    readingWritingModule2: unknown[];
    mathModule1: unknown[];
    mathModule2: unknown[];
  }>;
}> = [
  {
    id: "test1",
    label: "Practice Test 1",
    load: () =>
      import("./tests/test1").then((m) => ({
        readingWritingModule1: m.readingWritingModule1,
        readingWritingModule2: m.readingWritingModule2,
        mathModule1: m.mathModule1,
        mathModule2: m.mathModule2,
      })),
  },
  {
    id: "test2",
    label: "Practice Test 2",
    load: () =>
      import("./tests/test2").then((m) => ({
        readingWritingModule1: m.readingWritingModule1,
        readingWritingModule2: m.readingWritingModule2,
        mathModule1: m.mathModule1,
        mathModule2: m.mathModule2,
      })),
  },
];
