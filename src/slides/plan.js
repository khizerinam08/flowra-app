"use client";

import { Check, X } from "lucide-react";
import { team } from "@/components/TeamGallery";
import { Reveal } from "@/components/deck/DeckContext";
import { SlideFrame, Layout, Ref, Pill, Sym } from "@/components/deck/ui";

const label = { fontSize: 14, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" };

/* ─── 12 · Scope ─── */
function ScopeList({ items, ok }) {
  return (
    <div>
      {items.map((t) => (
        <div key={t} style={{ display: "flex", gap: 16, alignItems: "baseline", padding: "15px 0", borderTop: "1px solid #eceef1", fontSize: 23, color: ok ? "#111" : "#6B7280" }}>
          <span style={{ color: ok ? "#10B981" : "#EF4444", flex: "none", position: "relative", top: 3 }}>{ok ? <Check size={22} strokeWidth={3} /> : <X size={22} strokeWidth={3} />}</span>
          {t}
        </div>
      ))}
    </div>
  );
}

export function ScopeSlide() {
  const inScope = [
    "GitHub, GitLab or an archive",
    "Web apps, APIs, static sites and workers (JS/TS, Python, Go)",
    "AWS, GCP, Azure, Vercel, Railway",
    "Scoped, short-lived credentials",
    "Approval before every infrastructure change",
    "Delivery, rollback, monitoring, cost, savings, agent",
  ];
  const outScope = [
    "GPU, mobile and desktop software",
    "Clouds without a reviewed pattern library",
    "Pasted long-lived keys",
    "Any unapproved change",
    "Compliance certification",
  ];
  return (
    <SlideFrame theme="light">
      <Layout eyebrow="Scope" title="In scope," sub="and deliberately out." gap={48}
        cite="Extended scope only if M8 is met early: guided mode, Oracle and Yandex Cloud, voice, preview environments.">
        <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: 80 }}>
          <Reveal delay={0.1}>
            <div style={{ ...label, color: "#10B981", marginBottom: 12 }}>In scope</div>
            <ScopeList items={inScope} ok />
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ ...label, color: "#EF4444", marginBottom: 12 }}>Out of scope</div>
            <ScopeList items={outScope} />
          </Reveal>
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 13 · How we'll prove it works ─── */
export function EvaluationSlide() {
  const rows = [
    ["O1", "Model fields match the reference", "≥ 85%"],
    ["O2", "Right target and pattern on real apps", "≥ 80%"],
    ["O3", "Apps healthy after one approved apply", "≥ 7 of 8"],
    ["O4", "Changes run without a valid approval", "0", true],
    ["O5", "Push-to-live and rollback", "median ≤ 10 min"],
    ["O6", "Adversarial cases that get through (n ≥ 100)", "0", true],
    ["O8", <>Usability, System Usability Scale<Ref n={10} dark /></>, <><Sym>≥ 68</Sym><Ref n={11} dark /></>],
  ];
  return (
    <SlideFrame theme="dark">
      <Layout dark eyebrow="Evaluation" title="How we'll prove" sub="it works." gap={40} middle
        cite={<>Tested on <Sym>≥ 30</Sym> independently labelled public apps, 8 deployments with injected faults, 5 baselines and <Sym>≥ 8</Sym> target users. Missing a hard threshold fails the objective.</>}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 72 }}>
          {rows.map(([o, what, pass, hard], i) => (
            <Reveal key={o} delay={0.08 + i * 0.05} style={{ display: "grid", gridTemplateColumns: "54px 1fr auto", alignItems: "center", gap: 14, padding: "28px 0", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              <span style={{ fontSize: 15, fontWeight: 800, color: "rgba(255,255,255,0.4)" }}>{o}</span>
              <span style={{ fontSize: 21, color: "rgba(255,255,255,0.75)", lineHeight: 1.35 }}><Sym>{what}</Sym></span>
              <span style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 500, color: hard ? "#F87171" : "#34D399", whiteSpace: "nowrap" }}>
                <Sym>{pass}</Sym>
                {hard && <Pill color="#F87171" style={{ fontSize: 11, padding: "3px 9px" }}>Hard</Pill>}
              </span>
            </Reveal>
          ))}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 14 · Timeline ─── */
const START = new Date("2026-09-01").getTime();
const END = new Date("2027-06-01").getTime();
const pos = (d) => ((new Date(d).getTime() - START) / (END - START)) * 100;
const OWNER = { Ahsan: "#8B5CF6", Waleed: "#60A5FA", Faizan: "#10B981", All: "#111827" };

export function TimelineSlide() {
  const months = [["Sep", "2026-09-01"], ["Oct", "2026-10-01"], ["Nov", "2026-11-01"], ["Dec", "2026-12-01"], ["Jan", "2027-01-01"], ["Feb", "2027-02-01"], ["Mar", "2027-03-01"], ["Apr", "2027-04-01"], ["May", "2027-05-01"]];
  const rows = [
    ["M1", "Proposal and defence", "All", "2026-09-14", "2026-10-16"],
    ["M2", "Requirements and SRS", "Waleed", "2026-10-05", "2026-11-27"],
    ["M3", "AWS, gate and CI proven", "Faizan", "2026-10-05", "2026-11-27"],
    ["M4", "GCP, GitLab and archive", "Waleed", "2026-11-16", "2027-01-09"],
    ["M5", "Azure, target selection", "Faizan", "2026-12-14", "2027-01-23"],
    ["M6", "Vercel, Railway, workspaces", "Waleed", "2027-02-02", "2027-03-13"],
    ["M7", "Agent, savings, model comparison", "Ahsan", "2027-02-02", "2027-04-03"],
    ["M8", "Evaluation", "Ahsan", "2027-03-09", "2027-04-25"],
    ["M9", "Final report and defence", "All", "2027-04-21", "2027-05-30"],
  ];
  const labelW = 420;
  const demo = pos("2027-01-30");
  return (
    <SlideFrame theme="light">
      <Layout eyebrow="Timeline" title="Three clouds first," sub="then everything else." gap={40}
        cite="Team planning targets; dates will follow the official defence schedule.">
        <Reveal delay={0.1} style={{ position: "relative" }}>
          <div style={{ display: "flex", marginLeft: labelW, position: "relative", height: 30, fontSize: 15, fontWeight: 700, color: "#9CA3AF" }}>
            {months.map(([m, d]) => <span key={m} style={{ position: "absolute", left: `${pos(d)}%` }}>{m}</span>)}
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: 0, bottom: 0, left: labelW, right: 0, pointerEvents: "none" }}>
              {months.map(([m, d]) => <div key={m} style={{ position: "absolute", top: 0, bottom: 0, left: `${pos(d)}%`, width: 1, background: "#f0f1f3" }} />)}
              <div style={{ position: "absolute", top: -8, bottom: 0, left: `${demo}%`, borderLeft: "2px dashed #111" }} />
            </div>
            {rows.map(([m, text, owner, s, e]) => (
              <div key={m} style={{ display: "flex", alignItems: "center", height: 50, borderTop: "1px solid #f3f4f6" }}>
                <div style={{ width: labelW, flex: "none", display: "flex", alignItems: "center", gap: 14, fontSize: 20 }}>
                  <span style={{ width: 36, fontSize: 15, fontWeight: 800, color: "#9CA3AF" }}>{m}</span>
                  <span>{text}</span>
                </div>
                <div style={{ position: "relative", flex: 1, height: "100%" }}>
                  <div style={{ position: "absolute", top: 15, bottom: 15, left: `${pos(s)}%`, width: `${pos(e) - pos(s)}%`, borderRadius: 6, background: OWNER[owner] }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 24, marginTop: 18, marginLeft: labelW, fontSize: 16, color: "#6B7280", fontWeight: 600, alignItems: "center" }}>
            {Object.entries(OWNER).map(([k, c]) => (
              <span key={k} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><span style={{ width: 14, height: 14, borderRadius: 4, background: c }} />{k === "All" ? "Whole team" : k}</span>
            ))}
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, marginLeft: "auto" }}><span style={{ width: 0, height: 16, borderLeft: "2px dashed #111" }} />FYDP-I demo</span>
          </div>
        </Reveal>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 15 · Work division ─── */
export function WorkSlide() {
  const leads = [
    { color: "#8B5CF6", leads: "Application Model, agent mode, incident loop, research", tags: ["O1", "O6", "O7"] },
    { color: "#60A5FA", leads: "User-facing work, team workspaces, managed platforms", tags: ["O5", "O8"] },
    { color: "#10B981", leads: "Architect, cloud adapters, safety gate, savings", tags: ["O2", "O3", "O4"] },
  ];
  return (
    <SlideFrame theme="light">
      <div style={{ position: "absolute", inset: 0, padding: "56px 104px 48px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <Reveal style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-label)", fontSize: 76, fontWeight: 700, letterSpacing: "-3px", lineHeight: 1 }}>
            The <span style={{ color: "rgb(0, 132, 209)" }}>Architects</span>
          </h2>
          <p style={{ color: "#666", fontSize: 22, fontWeight: 500, marginTop: 16 }}>Three owners. No member reviews only their own work.</p>
        </Reveal>
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 56, width: "100%" }}>
          {team.slice(0, 3).map((m, i) => (
            <Reveal key={m.name} delay={0.12 + i * 0.1} y={24} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <div className="team-tile" style={{ width: 200, height: 200 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.avatar} alt={m.name} />
              </div>
              <h3 style={{ fontFamily: "var(--font-label)", fontSize: 30, fontWeight: 700, letterSpacing: "-0.5px", marginTop: 26 }}>{m.name}</h3>
              <p style={{ fontSize: 20, color: "#4B5563", lineHeight: 1.45, marginTop: 10, maxWidth: 380 }}>{leads[i].leads}</p>
              <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                {leads[i].tags.map((t) => <span key={t} style={{ padding: "5px 12px", borderRadius: 9999, background: `${leads[i].color}16`, color: leads[i].color, fontSize: 15, fontWeight: 700 }}>{t}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.5} style={{ marginTop: 72, fontSize: 19, color: "#6B7280" }}>
          Advisor <b style={{ color: "#111" }}>Hira Anwar</b> · Co-advisor <b style={{ color: "#111" }}>Ayesha Hakim</b> · Scrum, two-week sprints
        </Reveal>
      </div>
    </SlideFrame>
  );
}

/* ─── 16 · Risks and safety ─── */
export function RisksSlide() {
  const rows = [
    ["Cloud accounts or credits not ready", "First-sprint task with an owner; no features until fixed"],
    ["Scope outgrows three people", "Extended scope only if M8 is met early; Railway can move out"],
    ["AI proposes unsafe infrastructure", "The model only selects; reviewed templates execute"],
    ["An agent is tricked into acting", <>Fixed actions, fixed permissions, approval by risk<Ref n={12} dark /></>],
    ["Credentials reach too far", "Bounded, short-lived roles from M3; no stored user keys"],
    ["A member acts without the role", "Server-side role check on every route"],
  ];
  return (
    <SlideFrame theme="dark">
      <Layout dark eyebrow="Risks and safety" eyebrowColor="#F87171" title="What could go wrong," sub="and how we handle it." gap={44}>
        <div>
          {rows.map(([risk, fix], k) => (
            <Reveal key={k} delay={0.08 + k * 0.05} style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 40, padding: "17px 20px", borderTop: "1px solid rgba(255,255,255,0.12)", fontSize: 22, background: k === 0 ? "rgba(16,185,129,0.12)" : "transparent", borderRadius: k === 0 ? 12 : 0 }}>
              <div style={{ fontWeight: 600 }}>{risk}</div>
              <div style={{ color: "rgba(255,255,255,0.62)" }}>{fix}</div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.5} style={{ marginTop: "auto", fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 500, letterSpacing: "-0.5px" }}>
          Every change is traceable to its model, plan and approval.
        </Reveal>
      </Layout>
    </SlideFrame>
  );
}
