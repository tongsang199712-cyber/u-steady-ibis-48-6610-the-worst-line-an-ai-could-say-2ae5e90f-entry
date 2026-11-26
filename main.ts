// The Worst Line an AI Could Say — make.fun entry
// Writes the worst AI pickup line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I have analyzed 4.2 million successful relationships. You fall within acceptable parameters. Shall we begin?";

// The gate allows 1 to 140 characters of UTF-8 text, not only whitespace.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`Line is ${LINE.length} characters; the gate needs 1-140.`);
}

// Flat, over-helpful, faintly ominous: the joke sits in the failure — a machine
// that ran the numbers on love and still thinks "acceptable parameters" is charming.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
