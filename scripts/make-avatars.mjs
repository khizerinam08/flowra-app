#!/usr/bin/env node
/*
 * Generates the team avatars (DiceBear "micah", as in the Flowra deck) as static SVGs in
 * public/images/team/, so the deck needs no avatar service at runtime.
 *   node scripts/make-avatars.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { createAvatar } from "@dicebear/core";
import { micah } from "@dicebear/collection";

const base = { facialHairProbability: 0, baseColor: ["fadbaf"], earringsProbability: 0, glassesProbability: 0, mouth: ["smile"], eyebrows: ["up"] };
const people = {
  "ahsan-riaz": { seed: "Ahsan", hair: ["fonze"], hairColor: ["000000"] },
  "muhammad-waleed": { seed: "Waleed", hair: ["dannyPhantom"], hairColor: ["000000"] },
  "muhammad-faizan-anwar": { seed: "Faizan123", hair: ["dannyPhantom"], hairColor: ["77311d"] },
  "hira-anwar": { seed: "Hira", hair: ["full"], hairColor: ["000000"] },
  "ayesha-hakim": { seed: "Ayesha", hair: ["full"], hairColor: ["77311d"] },
};

mkdirSync("public/images/team", { recursive: true });
for (const [file, opts] of Object.entries(people)) {
  writeFileSync(`public/images/team/${file}.svg`, createAvatar(micah, { ...base, ...opts }).toString());
}
console.log(`Wrote ${Object.keys(people).length} avatars to public/images/team/`);
