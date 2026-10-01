"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, MotionConfig } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MetalButton from "@/components/MetalButton";
import FlowLoader from "@/components/Loader";
import { DeckContext } from "@/components/deck/DeckContext";
import { slides, sections } from "@/slides";

const LAST = slides.length - 1;
const pad = (n) => String(n).padStart(2, "0");
const clamp = (n) => Math.max(0, Math.min(LAST, n));

/* "#/07" (or "#7") → 6 */
function parseHash(hash) {
  const m = /^#\/?(\d+)$/.exec(hash || "");
  return m ? clamp(parseInt(m[1], 10) - 1) : null;
}

/* ?print is fixed for the page's lifetime; false during server render. */
const noSubscribe = () => () => {};
const readPrint = () => new URLSearchParams(window.location.search).has("print");
/* ?instant skips the loader and entrance animations (rehearsal, slow machines, screenshots). */
const readInstant = () => new URLSearchParams(window.location.search).has("instant");
const serverFalse = () => false;

/* ─── Navbar ─── */
function Navbar({ index, go, print, style }) {
  const link = (s, i, delay) => {
    const active = index >= s.from && index <= s.to;
    return (
      <motion.button
        key={s.label}
        type="button"
        initial={print ? false : { y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: delay + i * 0.12 }}
        onClick={() => go(s.from)}
        aria-current={active ? "true" : undefined}
        style={{ background: "none", border: "none", padding: "6px 2px", fontSize: 14, fontWeight: 500, fontFamily: "inherit", color: active ? "#fff" : "rgba(255,255,255,0.6)", cursor: "pointer", transition: "color 0.2s", borderBottom: active ? "1.5px solid #10B981" : "1.5px solid transparent" }}
      >
        {s.label}
      </motion.button>
    );
  };

  const roundBtn = (disabled) => ({
    width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.06)", color: "#fff",
    border: "1px solid rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center",
    cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.3 : 1, transition: "all 0.2s",
  });

  return (
    <header style={{ position: "fixed", top: 24, left: "50%", transform: "translateX(-50%)", zIndex: 100, width: "95%", maxWidth: 1400, ...style }}>
      <nav aria-label="Slides" style={{ position: "relative", display: "flex", height: 64, alignItems: "center", justifyContent: "space-between", padding: "0 14px 0 30px", background: "rgba(9,10,13,0.9)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 9999, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
        <div className="nav-links" style={{ gap: 28 }}>{sections.left.map((s, i) => link(s, i, 0.2))}</div>
        <motion.button
          type="button"
          initial={print ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={() => go(0)}
          aria-label="CareerKonnect, go to the title slide"
          style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "#fff", letterSpacing: "-0.5px" }}
        >
          CareerKonnect
        </motion.button>
        <div style={{ display: "flex", gap: 28, alignItems: "center", marginLeft: "auto" }}>
          <div className="nav-links" style={{ gap: 28 }}>{sections.right.map((s, i) => link(s, i, 0.7))}</div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button type="button" onClick={() => go(index - 1)} disabled={index === 0} aria-label="Previous slide" style={roundBtn(index === 0)}>
              <ChevronLeft size={18} />
            </button>
            <MetalButton variant="outline" background="#ffffff" enableShader={!print} style={{ padding: "8px 18px", fontSize: 14, fontVariantNumeric: "tabular-nums" }} onClick={() => go(index + 1)}>
              {pad(index + 1)} / {pad(slides.length)}
            </MetalButton>
            <button type="button" onClick={() => go(index + 1)} disabled={index === LAST} aria-label="Next slide" style={roundBtn(index === LAST)}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

/* The slide number, large in the bottom-right corner so the audience can follow along. */
function SlideNumber({ index }) {
  return (
    <div aria-hidden="true" style={{ position: "absolute", right: 36, bottom: 16, zIndex: 20, display: "flex", alignItems: "baseline", gap: 6, padding: "6px 18px", borderRadius: 9999, background: "#fff", border: "1px solid #E2E8F0", boxShadow: "0 6px 18px rgba(15,23,42,0.08)", fontFamily: "var(--font-display)", fontVariantNumeric: "tabular-nums" }}>
      <span style={{ fontSize: 30, fontWeight: 600, color: "#0B1020", lineHeight: 1 }}>{pad(index + 1)}</span>
      <span style={{ fontSize: 18, fontWeight: 500, color: "#64748B" }}>/ {pad(slides.length)}</span>
    </div>
  );
}

/* One slide inside its rounded card, on the contrasting page colour */
function SlideCard({ index, style, children }) {
  const s = slides[index];
  return (
    <div
      role="region"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${slides.length}: ${s.title}`}
      style={{ position: "absolute", inset: 16, zIndex: 1, borderRadius: "3.5rem", overflow: "hidden", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.35)", ...style }}
    >
      {children}
      <SlideNumber index={index} />
    </div>
  );
}

const pageBg = (i) => (slides[i].theme === "light" ? "#000" : "#FFFFFF");

/* ─── Print / PDF: every slide on its own 1600×900 page (open with ?print) ─── */
function PrintDeck() {
  return (
    <DeckContext.Provider value={{ ready: true, print: true }}>
      <main>
        {slides.map((s, i) => {
          const Slide = s.component;
          return (
            <div key={i} className="print-page" style={{ background: pageBg(i) }}>
              <Navbar index={i} go={() => {}} print style={{ position: "absolute" }} />
              <SlideCard index={i} style={{ boxShadow: "none" }}>
                <Slide />
              </SlideCard>
            </div>
          );
        })}
      </main>
    </DeckContext.Provider>
  );
}

/* ─── Presenter ─── */
/* The URL hash (#/07) is the source of truth for the current slide, so deep links,
   reloads and the browser's back button all land on the right slide. */
const subscribeHash = (cb) => {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
};
const readIndex = () => parseHash(window.location.hash) ?? 0;
const serverIndex = () => 0;

export default function HomePage() {
  const index = useSyncExternalStore(subscribeHash, readIndex, serverIndex);
  const print = useSyncExternalStore(noSubscribe, readPrint, serverFalse);
  // The loader plays whenever the slide changes; these record which slide it last finished for.
  const [doneIndex, setDoneIndex] = useState(-1);
  const [revealIndex, setRevealIndex] = useState(-1);
  const instant = useSyncExternalStore(noSubscribe, readInstant, serverFalse);
  const loading = !instant && doneIndex !== index;
  const touchX = useRef(null);

  const go = useCallback((n) => {
    const next = clamp(n);
    if (next !== readIndex()) window.location.hash = `#/${pad(next + 1)}`;
  }, []);

  useEffect(() => {
    if (print) return;
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = e.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      const i = readIndex();
      const map = {
        ArrowRight: i + 1, ArrowDown: i + 1, PageDown: i + 1, " ": e.shiftKey ? i - 1 : i + 1,
        ArrowLeft: i - 1, ArrowUp: i - 1, PageUp: i - 1,
        Home: 0, End: LAST,
      };
      if (e.key in map) {
        e.preventDefault();
        go(map[e.key]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, print]);

  // Stable per slide, so the loader's timeline isn't restarted by unrelated re-renders.
  const onComplete = useCallback(() => setDoneIndex(index), [index]);
  const onReveal = useCallback(() => setRevealIndex(index), [index]);

  if (print) return <PrintDeck />;

  const s = slides[index];
  const Slide = s.component;

  return (
    <MotionConfig reducedMotion="user">
      <DeckContext.Provider value={{ ready: revealIndex === index || !loading, print: false, still: instant }}>
        <main
          style={{ width: "100vw", height: "100vh", background: pageBg(index), overflow: "hidden", position: "relative", transition: "background 0.4s" }}
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
            touchX.current = null;
          }}
        >
          {loading && (
            <FlowLoader key={`loader-${index}`} word1={s.word1} word2={s.word2} onComplete={onComplete} onReveal={onReveal} />
          )}

          <Navbar index={index} go={go} />

          <SlideCard index={index}>
            <Slide key={index} />
          </SlideCard>

          <div className="sr-only" aria-live="polite">{`Slide ${index + 1} of ${slides.length}: ${s.title}`}</div>
        </main>
      </DeckContext.Provider>
    </MotionConfig>
  );
}
