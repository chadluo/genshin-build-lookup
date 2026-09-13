#!/usr/bin/env node
// Warns about placeholder `"zh-CN": ""` entries left in the data model —
// legitimate while a version is unreleased (see CLAUDE.md), but easy to
// forget once the official name is published. Run before committing.

import { readFileSync } from "node:fs";
import { join } from "node:path";

const files = ["src/models/characters.ts", "src/models/weapons.ts"];
const blankPattern = /"zh-CN":\s*""/;

let blankCount = 0;

for (const file of files) {
  const lines = readFileSync(join(process.cwd(), file), "utf8").split("\n");
  lines.forEach((line, i) => {
    if (blankPattern.test(line)) {
      blankCount++;
      console.warn(`${file}:${i + 1}: blank zh-CN name — ${line.trim()}`);
    }
  });
}

if (blankCount > 0) {
  console.warn(`\n${blankCount} blank zh-CN name(s) found. Fill these in once the official name is published.`);
} else {
  console.log("No blank zh-CN names found.");
}
