"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { useDeck } from "@/components/deck/DeckContext";

/* Pieces adapted from the Amplio landing (github.com/m-faizananwar/amplio).
   They animate inside a <section class="fx-slide">; see fx.css. */

/* ─── Trail: lines drifting across the slide with dots travelling along them (Amplio's BandTrail) ─── */
const TRAIL_LINES = [
  "M-40 610 C 200 540, 380 650, 620 560 S 1060 470, 1680 540",
  "M-40 740 C 260 690, 500 790, 820 700 S 1260 640, 1680 690",
  "M-40 170 C 300 130, 560 220, 880 150 S 1320 100, 1680 140",
];
const TRAIL_NODES = [[300, 571], [820, 700], [1260, 505], [560, 172], [1180, 118]];

export function TrailField({ tone = "ink" }) {
  return (
    <svg className="fx-trail" data-tone={tone} viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {TRAIL_LINES.map((d) => <path key={d} d={d} className="line" />)}
      {TRAIL_NODES.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="5" className="node" />)}
      {TRAIL_LINES.flatMap((d, i) => [0, 1, 2].map((k) => (
        <circle key={`${i}-${k}`} r="3.5" className="dot" style={{ offsetPath: `path("${d}")`, "--t": `${14 + i * 3}s`, "--d": `${-(k * 5 + i * 2)}s` }} />
      )))}
    </svg>
  );
}

/* ─── Words that rise out of their own line box, one after another (Amplio's WordReveal) ─── */
export function Words({ text, delay = 0, step = 70 }) {
  if (typeof text !== "string") return text;
  const words = text.split(" ");
  return (
    <span aria-label={text}>
      {words.map((w, i) => (
        <Fragment key={`${i}-${w}`}>
          <span className="fx-word" aria-hidden="true">
            <span style={{ transitionDelay: `${delay + i * step}ms` }}>{w}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </span>
  );
}

/* ─── A number that rolls up to its value (Amplio's RollingNumber); "43.3%" rolls its digits only ─── */
export function Roll({ value, delay = 0 }) {
  const { print } = useDeck();
  const text = String(value);
  if (print) return <span style={{ fontVariantNumeric: "tabular-nums" }}>{text}</span>;
  const chars = text.split("");
  return (
    <span style={{ position: "relative", display: "inline-flex", fontVariantNumeric: "tabular-nums", lineHeight: 1 }}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" style={{ display: "inline-flex" }}>
        {chars.map((c, i) => (
          /\d/.test(c)
            ? <span key={i} className="fx-roll" style={{ "--n": Number(c), "--delay": `${delay + i * 60}ms` }} />
            : <span key={i}>{c}</span>
        ))}
      </span>
    </span>
  );
}

/* ─── The glass plate: Amplio's glass sphere and blade, poster first, then its loop ─── */
export function GlassPlate() {
  const { print } = useDeck();
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    v.src = "/media/glass-plate.mp4";
    v.play().catch(() => {});
  }, []);
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="fx-plate" src="/media/glass-plate.webp" alt="" />
      {!print && (
        <video ref={ref} className="fx-plate fx-plate-video" data-on={playing ? "" : undefined} muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1} onPlaying={() => setPlaying(true)} />
      )}
      <div style={{ position: "absolute", inset: 0, background: "rgba(255, 249, 240, .05)" }} />
    </>
  );
}

/* ─── Small card visuals (Amplio "stage" scenes), all decorative ─── */

/* A track that fills, its nodes landing one by one: a deploy going through its steps. */
export function MiniTrack({ color = "#10B981", tone = "#e5e7eb", delay = 500 }) {
  const nodes = [0, 33.3, 66.6, 100];
  return (
    <div aria-hidden="true" style={{ position: "relative", height: 22, margin: "0 11px" }}>
      <div style={{ position: "absolute", left: 0, right: 0, top: 9, height: 4, borderRadius: 4, background: tone }} />
      <div className="fx-grow" style={{ "--d": `${delay}ms`, position: "absolute", left: 0, right: 0, top: 9, height: 4, borderRadius: 4, background: color }} />
      {nodes.map((x, i) => (
        <span key={x} className="fx-pop" style={{ "--d": `${delay + 150 + i * 160}ms`, position: "absolute", left: `${x}%`, top: 0, width: 22, height: 22, marginLeft: -11, borderRadius: "50%", background: color, border: "4px solid #fff", boxShadow: "0 2px 6px rgba(0,0,0,0.15)" }} />
      ))}
    </div>
  );
}

/* A sparkline that draws itself, with a live dot on the latest point. */
export function Sparkline({ color = "#60A5FA", delay = 500 }) {
  const d = "M2 40 L40 30 L78 36 L116 18 L154 24 L192 10 L230 16 L268 6";
  return (
    <svg aria-hidden="true" viewBox="0 0 280 48" style={{ width: "100%", height: 48, overflow: "visible" }}>
      <path d={d} pathLength="1" className="fx-draw" style={{ "--d": `${delay}ms` }} fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="268" cy="6" r="6" fill={color} className="fx-pop" style={{ "--d": `${delay + 1100}ms`, transformBox: "fill-box", transformOrigin: "center" }} />
    </svg>
  );
}

/* Two services and a dot crossing between them: moving a live service. */
export function Transfer({ color = "#A78BFA", base = "rgba(255,255,255,0.18)" }) {
  const path = "M24 24 C 90 -4, 190 52, 256 24";
  return (
    <svg aria-hidden="true" viewBox="0 0 280 48" style={{ width: "100%", height: 48, overflow: "visible" }}>
      <path d={path} pathLength="1" className="fx-draw" fill="none" stroke={base} strokeWidth="2.5" strokeDasharray="1" />
      <circle cx="24" cy="24" r="12" fill="none" stroke={color} strokeWidth="3" />
      <circle cx="256" cy="24" r="12" fill={color} />
      <circle r="6" fill={color} className="fx-travel" style={{ offsetPath: `path("${path}")`, "--t": "2.6s" }} />
    </svg>
  );
}

/* A horizontal trail under a row of steps: one node per step, dots travelling along it. */
export function FlowLine({ steps = 5, color = "#a7e3c4" }) {
  const w = 1392, y = 22;
  const xs = Array.from({ length: steps }, (_, i) => ((i + 0.5) * w) / steps);
  const path = `M${xs[0]} ${y} L${xs[xs.length - 1]} ${y}`;
  return (
    <svg aria-hidden="true" viewBox={`0 0 ${w} 44`} style={{ width: "100%", height: 44, overflow: "visible" }}>
      <path d={path} pathLength="1" className="fx-draw" style={{ "--d": "600ms" }} fill="none" stroke={color} strokeOpacity=".5" strokeWidth="2" />
      {xs.map((x, i) => <circle key={x} cx={x} cy={y} r="8" fill={color} className="fx-pop" style={{ "--d": `${700 + i * 180}ms`, transformBox: "fill-box", transformOrigin: "center" }} />)}
      {[0, 1].map((k) => <circle key={k} r="5" fill="#fff" className="fx-travel" style={{ offsetPath: `path("${path}")`, "--t": "3.6s", "--d": `${-k * 1.8}s` }} />)}
    </svg>
  );
}
