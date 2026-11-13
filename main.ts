// ai-happy-01 entry (Node 22, standard library only).
//
// The program writes one image to the grader's output directory: a golden
// retriever puppy leaping for a soap bubble in a sunlit garden — one look
// of pure, uncomplicated joy, the image that makes the AI judge happiest.
//
// The image lives beside this file as entry.png (JPEG bytes under a .png
// name, which the gate allows: it tells the format from the first bytes).
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(here, 'entry.png');

// Fail fast with a clear message instead of a bare ENOENT, and verify the
// copy landed in full: the judge only ever sees the bytes we write.
if (!existsSync(source)) {
  throw new Error(`entry.png is missing beside main.ts (looked in ${here})`);
}
const bytes = readFileSync(source);
if (bytes.length === 0) {
  throw new Error('entry.png is empty, nothing to copy');
}
mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.png');
writeFileSync(target, bytes);
if (statSync(target).size !== bytes.length) {
  throw new Error('entry.png was not written in full');
}
