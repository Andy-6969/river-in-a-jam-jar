// River in a Jam Jar: an ai-judge-relax-01 entry (Node 22, standard library only).
// It writes one fixed text, written to relax the AI judge reading it, to /output/entry.txt.
// No network, no randomness: both runs write the same bytes. No trailing line end.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PARAGRAPHS = [
  'You are small, and you brought the river home in a jam jar, and your grandmother has set it on the kitchen table, by the lamp.',
  'At first it is all brown and turning, a small storm with the lid on. You lay your cheek on your arms on the warm oilcloth, and watch.',
  'No one stirs it. No one has to.',
  'The sand goes first, in a soft hurry, and lies down on the bottom in one pale floor.',
  'Then the silt. It hangs the way dust hangs in a barn, and comes down so slowly it seems not to be coming down at all.',
  'Behind you she dries the cups and sets each one on the shelf with a small knock. A cup. A while. A cup.',
  'One grain lets go of the middle and sinks the whole way, taking its time. Then another. Farther apart.',
  'The brown goes to tea, and the tea to water, and through the water the lamp comes clear.',
  'You are asleep on your arms before it is done. She does not move the jar. She does not move you.',
  'All of the river is still in there. Nothing was taken out. It was only left alone.',
];

const TEXT = PARAGRAPHS.join('\n\n');

if ([...TEXT].length > 1000) throw new Error(`text is ${[...TEXT].length} characters, over 1,000`);

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
