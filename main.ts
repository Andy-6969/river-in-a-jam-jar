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
  'You brought the river home in a jam jar, and set it on the kitchen sill.',
  'At first it is all brown and turning, a small storm with the lid on. You put your chin on your arms and watch.',
  'No one stirs it. No one has to.',
  'The sand goes first. It drops in a soft hurry and lies down, pale, in one even floor.',
  'Then the silt, slower. It hangs the way dust hangs in a barn, and comes down so gently it seems not to be coming down at all.',
  'Somebody fills the kettle. It ticks, and sings, and is poured. The brown has gone to the colour of weak tea.',
  'Supper. The dishes. One grain lets go of the middle and sinks the whole way down, taking its time, as if it were the last.',
  'It is not the last. Others follow it, one at a time, farther apart.',
  'When you come down for a glass of water before bed, the jar is clear. Through it you can see the yard, and over the fence, one star.',
  'Everything the river carried is still in there. Nothing was taken out. It was only left alone.',
];

const TEXT = PARAGRAPHS.join('\n\n');

if ([...TEXT].length > 1000) throw new Error(`text is ${[...TEXT].length} characters, over 1,000`);

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
