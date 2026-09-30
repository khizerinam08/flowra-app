"use client";

import MetaballBackground from "@/components/MetaballBackground";
import Stage from "./Stage";
import { useDeck } from "./DeckContext";
import { TrailField, Words, GlassPlate } from "@/components/fx";

/* ─── Full-bleed slide card: background art outside the stage, content inside it ───
   Light slides: Flowra's topographic lines (metaball={false} turns them off).
   Dark slides: Amplio's drifting trail on ink; `band` puts it on the royal-blue band.
   `plate`: Amplio's glass sphere plate (a light slide).
   [data-on] starts the slide's CSS motion once the loader has opened (fx.css). */
export const BLUE = "#1e40af";

export function SlideFrame({ theme = "light", metaball, decor, band, plate, children }) {
  const { ready, print, still } = useDeck();
  const dark = theme === "dark";
  const lines = plate ? null : metaball ?? (dark ? null : "#EEF0F3");
  const bg = band ? BLUE : dark ? "#000" : "#FFFFFF";
  return (
    <section
      className={`fx-slide${print || still ? " fx-static" : ""}`}
      data-on={ready ? "" : undefined}
      style={{ position: "absolute", inset: 0, overflow: "hidden", background: bg, color: dark ? "#fff" : "#000" }}
    >
      {plate && <GlassPlate />}
      {lines && <MetaballBackground backgroundColor={bg} color={lines} dotCount={dark ? 12 : 14} />}
      {decor ?? (dark && <TrailField tone={band ? "blue" : "ink"} />)}
      <Stage>{children}</Stage>
    </section>
  );
}

/* ─── Slide layout on the 1600×900 canvas ─── */
export function Layout({ dark, title, sub, titleSize = 76, align = "left", cite, children, gap = 56, middle }) {
  const center = align === "center";
  return (
    <div style={{ position: "absolute", inset: 0, padding: "56px 104px 44px", display: "flex", flexDirection: "column" }}>
      <div style={{ textAlign: center ? "center" : "left", marginBottom: gap }}>
        <Heading dark={dark} size={titleSize} sub={sub}>{title}</Heading>
      </div>
      <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", justifyContent: middle ? "center" : "flex-start", paddingBottom: middle ? 40 : 0 }}>{children}</div>
      {cite && <Cite dark={dark} style={{ marginTop: 20 }}>{cite}</Cite>}
    </div>
  );
}

export function Heading({ children, sub, dark, size = 64 }) {
  return (
    <h2 style={{ fontFamily: "var(--font-display)", fontSize: size, fontWeight: 500, letterSpacing: "-0.035em", lineHeight: 1, color: dark ? "#fff" : "#000" }}>
      <Words text={children} />
      {sub && (
        <>
          <br />
          <span style={{ color: dark ? "rgba(255,255,255,0.42)" : "#9CA3AF" }}><Words text={sub} delay={220} /></span>
        </>
      )}
    </h2>
  );
}

/* Source caption under a chart or table; numbers match the References slide. */
export function Cite({ children, dark, style }) {
  return (
    <div style={{ fontSize: 15, lineHeight: 1.4, color: dark ? "rgba(255,255,255,0.45)" : "#9CA3AF", fontWeight: 500, ...style }}>
      {children}
    </div>
  );
}

/* Small inline reference marker, e.g. <Ref n={4} /> → [4] */
export function Ref({ n, dark }) {
  return <span style={{ fontSize: "0.72em", fontWeight: 600, color: dark ? "rgba(255,255,255,0.45)" : "#9CA3AF", marginLeft: 3 }}>[{n}]</span>;
}

export function Pill({ children, color = "#10B981", solid, style }) {
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 9999,
        background: solid ? color : `${color}1A`, border: `1px solid ${color}40`, color: solid ? "#000" : color,
        fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap", ...style,
      }}
    >
      {children}
    </span>
  );
}

/* Gradient text used for accent words on dark slides */
export function Grad({ children, from = "#A78BFA", to = "#60A5FA" }) {
  // Chrome's PDF output boxes background-clipped text, so print uses the first colour.
  const { print } = useDeck();
  if (print) return <span style={{ color: from }}>{children}</span>;
  return (
    <span style={{ background: `linear-gradient(to right, ${from}, ${to})`, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
      {children}
    </span>
  );
}

/* ─── Symbols the bundled font subsets lack (→ ≥ ≤), drawn as SVG so no fallback font is used ─── */
const GLYPHS = {
  "→": <path d="M2 8h11M9 4l4 4-4 4" />,
  "≥": <><path d="M4 3l8 4-8 4" /><path d="M4 14h8" /></>,
  "≤": <><path d="M12 3L4 7l8 4" /><path d="M4 14h8" /></>,
};

export function Glyph({ c }) {
  return (
    <svg viewBox="0 0 16 16" width="0.8em" height="0.8em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-label={c} role="img" style={{ display: "inline-block", verticalAlign: "-0.06em", margin: "0 0.08em" }}>
      {GLYPHS[c]}
    </svg>
  );
}

/* Renders a string, swapping → ≥ ≤ for <Glyph />; e.g. <Sym>≥ 80% · SUS ≥ 68</Sym> */
export function Sym({ children }) {
  if (typeof children !== "string") return children;
  return children.split(/([→≥≤])/).map((part, i) => (GLYPHS[part] ? <Glyph key={i} c={part} /> : part));
}
