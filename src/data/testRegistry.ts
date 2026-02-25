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
  // Fixed tests removed; use pool assignment (R&W M1 + Math M1) to create combos per student.
];
