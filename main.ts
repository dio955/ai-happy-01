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

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), readFileSync(join(here, 'entry.png')));
