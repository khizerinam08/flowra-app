# Depot — FYDP-I proposal defence (web deck)

A 15-slide, browser-presented pitch deck for **Depot: an AI-powered infrastructure architect, from code to cloud** (NUST SEECS, BS Computer Science). Built on the Flowra presentation site: Next.js, split-letter slide transitions, rounded black/white cards, metaball backgrounds.

Content follows the FYDP-I proposal (Fall 2026) and the advisor's slide outline. Every number on a slide carries a reference that maps to the References slide.

## Run

```bash
npm install
npm run dev          # http://localhost:3000
```

For the defence, run the production build: `npm run build && npm start`. It makes **no external network requests**: fonts are self-hosted by `next/font`, and the UN SDG icons are in `public/images/sdg/`. It therefore works offline.

## Presenting

| Action | Keys |
|---|---|
| Next slide | → · ↓ · Space · Page Down · swipe left |
| Previous slide | ← · ↑ · Shift+Space · Page Up · swipe right |
| First / last | Home / End |
| Jump to a section | Navbar: Problem, Solution, Scope, Plan (click "Depot" for the title slide) |

- **Deep links:** `#/07` opens slide 7. The URL updates as you move, so a reload or the back button lands on the same slide.
- **No transitions:** add `?instant`, e.g. `http://localhost:3000/?instant#/13`. This is for rehearsals or slow machines.

## Scaling

Slides are authored on a fixed **1600×900** canvas (`src/components/deck/Stage.js`). The canvas is scaled uniformly with CSS `transform: scale()` to fit the card under the navbar, so the layout is identical on a laptop, a 1280×720 projector or a 1080p screen. Only the card backgrounds are full-bleed.

## PDF export

```bash
npm run dev                      # or npm start
npm run export:pdf               # → Depot_Pitch_Deck_web.pdf (15 pages, 1600×900)
DECK_URL=http://localhost:3101 OUT=deck.pdf npm run export:pdf
```

The export renders `/?print` (every slide stacked, one per page, no animation) with the installed Chrome/Chromium in headless mode. It needs no extra dependencies. `pdffonts` should list only Inter, Outfit and Jura. The symbols → ≥ ≤ are drawn as SVG (`Glyph` in `src/components/deck/ui.js`) because the font subsets don't include them.

## Team avatars

The title slide uses Flowra's team gallery (`src/components/TeamGallery.jsx`): hover a portrait to see the name and role. The portraits are DiceBear "micah" avatars, rendered once to `public/images/team/` so nothing is fetched at runtime. To regenerate them:

```bash
node scripts/make-avatars.mjs
```

## Layout

```
src/app/page.js               presenter: navbar, loader, keyboard/hash navigation, print mode
src/slides/index.js           slide order, loader words, section map
src/slides/opening.js         01–04  title, challenge, problem, what exists today
src/slides/solution.js        05–08  objectives, users, features, in action
src/slides/plan.js            09–12  scope, timeline, work division, risks
src/slides/closing.js         13–15  SDGs, references, thank you
src/components/deck/          Stage (fit-to-screen), DeckContext/Reveal (animation), ui kit
src/components/TeamGallery.jsx  Flowra team gallery, with the team and advisors
reference/                    previous deck (Depot_Pitch_Deck_v3.pdf) and its per-slide renders
```
