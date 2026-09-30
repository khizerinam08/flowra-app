"use client";

import TeamGallery, { team } from "@/components/TeamGallery";
import { Reveal } from "@/components/deck/DeckContext";
import { SlideFrame, Layout, Ref, BLUE } from "@/components/deck/ui";
import { Words, Roll } from "@/components/fx";

const label = { fontSize: 14, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" };

/* ─── 01 · Title ─── */
export function TitleSlide() {
  const members = team.slice(0, 3);
  const advisors = team.slice(3);
  return (
    <SlideFrame theme="light">
      <div style={{ position: "absolute", inset: 0, padding: "60px 104px 48px", display: "grid", gridTemplateColumns: "1fr 620px", gap: 60, alignItems: "center" }}>
        <div>
          <Reveal>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: 196, fontWeight: 500, letterSpacing: "-9px", lineHeight: 0.85, color: "#000" }}><Words text="Depot" /></h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p style={{ marginTop: 26, fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 400, letterSpacing: "-0.8px", lineHeight: 1.2, color: "#6B7280", maxWidth: 640 }}>
              An AI-powered infrastructure architect, <span style={{ color: "#000" }}>from code to cloud.</span>
            </p>
          </Reveal>
          <Reveal delay={0.26} style={{ marginTop: 64, display: "grid", gridTemplateColumns: "auto auto", columnGap: 56, rowGap: 10, justifyContent: "start" }}>
            <div style={{ ...label, color: "#9CA3AF" }}>Team</div>
            <div style={{ ...label, color: "#9CA3AF" }}>Advisors</div>
            <div style={{ fontSize: 22, lineHeight: 1.6, color: "#111" }}>{members.map((m) => <div key={m.name}>{m.name}</div>)}</div>
            <div style={{ fontSize: 22, lineHeight: 1.6, color: "#111" }}>{advisors.map((m) => <div key={m.name}>{m.name}</div>)}</div>
          </Reveal>
        </div>
        <Reveal delay={0.2} scale={0.94} y={0}>
          <TeamGallery />
        </Reveal>
      </div>
    </SlideFrame>
  );
}

/* ─── 02 · The challenge ───
   One claim, three numbers, as little text as each needs. The outer cards are
   white glass, the middle one blue glass; tags are solid Amplio live-dot pills. */
function Tag({ light, children }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 9, padding: "7px 14px 7px 12px", borderRadius: 9999,
      fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em",
      background: light ? BLUE : "#fff",
      color: light ? "#fff" : BLUE,
      boxShadow: light ? "0 6px 16px rgba(30,64,175,0.28)" : "0 6px 16px rgba(8,20,64,0.25)",
    }}>
      <span className="fx-ping" style={{ width: 8, height: 8, borderRadius: "50%", background: light ? "#fff" : BLUE }} />
      {children}
    </span>
  );
}

const whiteGlass = {
  background: "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(255,255,255,0.91))",
  border: "1px solid rgba(255,255,255,0.9)",
  boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.9), 0 24px 50px rgba(8,20,64,0.28)",
  color: "#0b1020",
};
const blueGlass = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.22)",
  color: "#fff",
};

export function ChallengeSlide() {
  const stats = [
    { light: true, tag: "Building is fast", n: "~95%", what: "of the code written by AI, at a quarter of YC's Winter 2025 start-ups", source: "TechCrunch, 2025", r: 1 },
    { tag: "Shipping is the blocker", n: "30.2%", what: "at best, of AI-written infrastructure deployed on the first try (six LLMs, 153 real-world scenarios)", source: "Zhang et al., FSE 2026", r: 2 },
    { light: true, tag: "Shipping is the blocker", n: "17.8%", what: "of developers worked extensively with Terraform, against 43.3% with AWS (24,473 developers)", source: "Stack Overflow Developer Survey, 2025", r: 3 },
  ];
  return (
    <SlideFrame theme="dark" band>
      <div style={{ position: "absolute", inset: 0, padding: "60px 104px 52px", display: "flex", flexDirection: "column" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 88, fontWeight: 600, lineHeight: 1, letterSpacing: "-3px" }}>
          <Words text="Building apps is fast now." />
          <br />
          <span style={{ color: "#a7e3c4" }}><Words text="Shipping them is the bottleneck." delay={320} /></span>
        </h2>
        <div style={{ marginTop: "auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {stats.map((s, i) => (
            <Reveal key={s.n} delay={0.25 + i * 0.12} y={30}>
              <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", borderRadius: 28, padding: "28px 30px 26px", backdropFilter: "blur(24px) saturate(112%)", WebkitBackdropFilter: "blur(24px) saturate(112%)", ...(s.light ? whiteGlass : blueGlass) }}>
                <Tag light={s.light}>{s.tag}</Tag>
                <div style={{ marginTop: 22, fontFamily: "var(--font-display)", fontSize: 92, fontWeight: 500, letterSpacing: "-3.5px", lineHeight: 1 }}>
                  <Roll value={s.n} delay={700 + i * 150} />
                </div>
                <p style={{ marginTop: 16, fontSize: 21, lineHeight: 1.45, color: s.light ? "#334155" : "rgba(255,255,255,0.82)" }}>{s.what}</p>
                <p style={{ marginTop: "auto", paddingTop: 18, fontSize: 15, color: s.light ? "#64748b" : "rgba(255,255,255,0.6)" }}>
                  {s.source}<Ref n={s.r} dark={!s.light} />
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}

/* ─── 03 · Problem statement ─── */
export function ProblemSlide() {
  const decisions = ["What it needs", "Where it runs", "What it costs", "How to change it safely"];
  return (
    <SlideFrame theme="light">
      <Layout title="Working code still leaves" sub="four decisions." gap={48} middle>
        <Reveal delay={0.1} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {decisions.map((d, i) => (
            <div key={d} style={{ display: "flex", flexDirection: "column", justifyContent: "center", minHeight: 296, padding: "48px 36px", borderRadius: 26, border: "1px solid #eceef1", background: "#fafafa" }}>
              <div style={{ fontSize: 17, fontWeight: 800, color: "#10B981" }}>0{i + 1}</div>
              <div style={{ marginTop: 18, minHeight: 87, fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 500, letterSpacing: "-0.9px", lineHeight: 1.14 }}>{d}</div>
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.22} style={{ marginTop: 88 }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: 44, lineHeight: 1.25, color: "#000", fontWeight: 500, letterSpacing: "-0.9px" }}>
            Depot answers all four, <span style={{ color: "#10B981" }}>and explains, records and approves every change.</span>
          </p>
        </Reveal>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 04 · What exists today ─── */
/* Transposed: the four criteria are rows, the products are columns, and Depot carries
   its own highlighted band. Cells state the insight in words, tinted by how well the
   product meets the row: strong, partial or missing. Products follow proposal Table 1. */
const STRONG = "strong", PARTIAL = "partial", WEAK = "weak";

const TINT = {
  [STRONG]: { background: "rgba(16,185,129,0.18)", color: "#6EE7B7" },
  [PARTIAL]: { background: "rgba(251,191,36,0.15)", color: "#FCD34D" },
  [WEAK]: { background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.36)" },
};

function Cell({ level, depot, children }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "3px 4px" }}>
      <div style={{ ...TINT[level], width: "100%", padding: "12px 12px", borderRadius: 12, fontSize: 18, fontWeight: 600, lineHeight: 1.26, textAlign: "center", ...(depot ? { background: "rgba(16,185,129,0.92)", color: "#04120C" } : null) }}>
        {children}
      </div>
    </div>
  );
}

export function LandscapeSlide() {
  const criteria = ["Starts from the code", "Picks where it runs", "Asks before it acts"];
  const tools = [
    { name: "Vercel", cat: "managed platform", c: [[PARTIAL, "Plus platform config"], [WEAK, "The platform only"], [PARTIAL, "No approval gate"]] },
    { name: "Flightcontrol", cat: "bring-your-own-cloud", c: [[PARTIAL, "Repo plus config file"], [PARTIAL, "AWS only"], [PARTIAL, "Deploy only"]] },
    { name: "Depot", cat: "proposed", depot: true, c: [[STRONG, "Ordinary repository"], [STRONG, "Compares every option"], [STRONG, "Signed, risk-tiered"]] },
  ];
  const grid = "1.1fr repeat(3, 1fr)";
  return (
    <SlideFrame theme="dark">
      <Layout dark title="Each tool solves part of it." sub="Someone still decides where it runs." gap={40}
        cite={<>One representative product per category, from vendor documentation, 30 Sep 2026<Ref n={4} dark />. Depot is proposed.</>}>
        <Reveal delay={0.1}>
          <div style={{ display: "grid", gridTemplateColumns: grid, alignItems: "stretch", paddingBottom: 14, borderBottom: "1px solid rgba(255,255,255,0.14)" }}>
            <div />
            {tools.map((t) => (
              <div key={t.name} style={{ textAlign: "center", padding: "0 4px 8px", borderRadius: 14, ...(t.depot ? { background: "rgba(16,185,129,0.1)", boxShadow: "inset 0 0 0 1px rgba(16,185,129,0.3)" } : null) }}>
                <div style={{ fontSize: 23, fontWeight: 700, color: t.depot ? "#6EE7B7" : "#fff" }}>{t.name}</div>
                <div style={{ fontSize: 14, color: t.depot ? "rgba(110,231,183,0.75)" : "rgba(255,255,255,0.4)", marginTop: 3, letterSpacing: "0.04em" }}>{t.cat}</div>
              </div>
            ))}
          </div>
          {criteria.map((c, i) => (
            <div key={c} style={{ display: "grid", gridTemplateColumns: grid, alignItems: "center", padding: "22px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ paddingRight: 22, fontSize: 19, fontWeight: 600, lineHeight: 1.25, color: "rgba(255,255,255,0.9)" }}>{c}</div>
              {tools.map((t) => (
                <div key={t.name} style={{ borderRadius: 14, ...(t.depot ? { background: "rgba(16,185,129,0.08)", boxShadow: "inset 0 0 0 1px rgba(16,185,129,0.22)" } : null) }}>
                  <Cell level={t.c[i][0]} depot={t.depot}>{t.c[i][1]}</Cell>
                </div>
              ))}
            </div>
          ))}
        </Reveal>
      </Layout>
    </SlideFrame>
  );
}
