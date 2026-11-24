import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny one-star review from a house cat about its human, built from
// parts so the line stays exactly as written (112 chars, gate max 200).
const headline = "One star.";
const complaint =
  "He refills my bowl, then sits on my keyboard for eight hours.";
const verdict = "I was never consulted about any of this.";

const review = [headline, complaint, verdict].join(" ");

// Gate: 1-200 chars (bounty rule), trimmed, single line.
const GATE_MAX = 200;
function validateEntry(text: string): void {
  if (text.length < 1 || text.length > GATE_MAX) {
    throw new Error(`entry length ${text.length} outside 1-${GATE_MAX}`);
  }
  if (text !== text.trim() || /\s{2}/.test(text)) {
    throw new Error("entry must be a single trimmed line");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
validateEntry(review);
const target = join(outDir, "entry.txt");
writeFileSync(target, review);
console.log(`wrote ${target} (${review.length} chars, gate max ${GATE_MAX})`);
