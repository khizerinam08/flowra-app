#!/usr/bin/env node
/*
 * Screenshot deck slides at the 1600x900 design size with headless Chrome.
 * Used while tuning slide spacing; not part of the PDF export.
 *
 *   node scripts/shot.mjs 02 03        → /tmp/opencode/shots/02.png ...
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const CHROME = process.env.CHROME || `${process.env.HOME}/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome`;
const base = process.env.DECK_URL || "http://localhost:3000";
const dir = process.env.SHOT_DIR || "/tmp/opencode/shots";
mkdirSync(dir, { recursive: true });

const slides = process.argv.slice(2);
if (!slides.length) {
  console.error("usage: node scripts/shot.mjs <slide numbers...>");
  process.exit(1);
}
if (!existsSync(CHROME)) {
  console.error(`No Chrome at ${CHROME}. Set CHROME=/path/to/chrome.`);
  process.exit(1);
}

for (const s of slides) {
  const id = String(s).padStart(2, "0");
  const out = resolve(dir, `${id}.png`);
  execFileSync(CHROME, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--no-sandbox",
    "--force-device-scale-factor=1",
    "--window-size=1600,1000",
    "--virtual-time-budget=6000",
    `--screenshot=${out}`,
    `${base}/?instant#/${id}`,
  ], { stdio: ["ignore", "ignore", "inherit"] });
  console.log(out);
}
