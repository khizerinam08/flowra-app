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
