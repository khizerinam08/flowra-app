#!/usr/bin/env node
/*
 * Export the deck to a 19-page PDF (one 1600×900 page per slide) with headless Chrome.
 * No extra dependencies: it drives the Chrome/Chromium already installed.
 *
 *   npm run dev            # or: npm run build && npm start
 *   npm run export:pdf     # → Depot_Pitch_Deck_web.pdf
 *
 * Options (env): DECK_URL (default http://localhost:3000), OUT (output path), CHROME (browser binary).
 */
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const url = new URL(process.env.DECK_URL || "http://localhost:3000");
url.searchParams.set("print", "1");
const out = resolve(process.env.OUT || "Depot_Pitch_Deck_web.pdf");

const candidates = [
  process.env.CHROME,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
].filter(Boolean);
const chrome = candidates.find((p) => existsSync(p));
if (!chrome) {
  console.error("No Chrome/Chromium found. Set CHROME=/path/to/chrome.");
  process.exit(1);
}

execFileSync(chrome, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--no-pdf-header-footer",
  "--window-size=1600,900",
  // Give fonts and the metaball backgrounds time to settle before printing.
  "--virtual-time-budget=8000",
  `--print-to-pdf=${out}`,
  url.toString(),
], { stdio: "inherit" });

console.log(`Wrote ${out}`);
