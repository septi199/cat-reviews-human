import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny one-star review from a house cat about its human, 112 chars (gate max 200).
const review =
  "One star. He refills my bowl, then sits on my keyboard for eight hours. I was never consulted about any of this.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, review);
console.log(`wrote ${target} (${review.length} chars)`);
