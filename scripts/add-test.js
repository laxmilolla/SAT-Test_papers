#!/usr/bin/env node
/**
 * Scaffold a new test file from the template and print the registry entry.
 * Usage: node scripts/add-test.js <id> "Practice Test N"
 * Example: node scripts/add-test.js test3 "Practice Test 3"
 */

const fs = require("fs");
const path = require("path");

const id = process.argv[2];
const label = process.argv[3];

if (!id || !label) {
  console.error("Usage: node scripts/add-test.js <id> \"Practice Test N\"");
  console.error('Example: node scripts/add-test.js test3 "Practice Test 3"');
  process.exit(1);
}

if (!/^[a-z0-9-]+$/.test(id)) {
  console.error("Error: id must be lowercase letters, numbers, and hyphens only (e.g. test3)");
  process.exit(1);
}

const root = path.resolve(__dirname, "..");
const templatePath = path.join(root, "src", "data", "tests", "_template.ts");
const outPath = path.join(root, "src", "data", "tests", `${id}.ts`);

if (!fs.existsSync(templatePath)) {
  console.error("Error: template not found at src/data/tests/_template.ts");
  process.exit(1);
}

if (fs.existsSync(outPath)) {
  console.error(`Error: ${id}.ts already exists at src/data/tests/${id}.ts`);
  process.exit(1);
}

fs.copyFileSync(templatePath, outPath);
console.log(`Created src/data/tests/${id}.ts from template.`);
console.log("");
console.log("Add this entry to src/data/testRegistry.ts (inside the array):");
console.log("");
console.log(`  {
    id: "${id}",
    label: "${label.replace(/"/g, '\\"')}",
    load: () =>
      import("./tests/${id}").then((m) => ({
        readingWritingModule1: m.readingWritingModule1,
        readingWritingModule2: m.readingWritingModule2,
        mathModule1: m.mathModule1,
        mathModule2: m.mathModule2,
      })),
  },`);
console.log("");
