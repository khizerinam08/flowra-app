"use client";

import { Check, GitBranch, Boxes, Cloud, KeyRound, ShieldCheck } from "lucide-react";
import { team } from "@/components/TeamGallery";
import { Reveal } from "@/components/deck/DeckContext";
import { SlideFrame, Layout, AmplioCard, CARD_SURFACE } from "@/components/deck/ui";

const label = { fontSize: 14, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" };

/* ─── 09 · Scope ─── */
export function ScopeSlide() {
  const inScope = [
    [GitBranch, "GitHub, GitLab or an archive"],
    [Boxes, "Apps, APIs, static sites, workers"],
    [Cloud, "AWS, GCP, Azure"],
    [KeyRound, "Short-lived credentials"],
    [ShieldCheck, "Approval before every change"],
  ];
  return (
    <SlideFrame theme="light">
      <Layout title="What Depot" sub="covers." gap={40} middle
        cite="Extended scope only if M8 is met early: guided mode, more clouds (e.g. DigitalOcean, Oracle), voice, preview environments.">
        <Reveal delay={0.05}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "8px 16px 8px 14px", borderRadius: 9999, fontSize: 16, fontWeight: 600, background: "#050505", color: "#fff" }}>
            <span className="fx-ping" style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981" }} />
            In scope
          </span>
        </Reveal>
        <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
          {inScope.map(([Icon, t], i) => {
            const tone = i % 2 === 0 ? "ink" : "white";
            return (
              <Reveal key={t} delay={0.1 + i * 0.07} y={24}>
                <AmplioCard compact tone={tone} Icon={Icon} delay={i * 120} style={{ minHeight: 280 }}>
                  <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 14 }}>
                    <span className="fx-pop" style={{ "--d": `${900 + i * 160}ms`, width: 34, height: 34, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#10B981", color: "#fff" }}>
                      <Check size={19} strokeWidth={3.2} />
                    </span>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 27, fontWeight: 500, letterSpacing: "-0.5px", lineHeight: 1.18 }}>{t}</div>
                  </div>
                </AmplioCard>
              </Reveal>
            );
          })}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 10 · Timeline ─── */
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
    ["M6", "Workspaces and delivery", "Waleed", "2027-02-02", "2027-03-13"],
    ["M7", "Agent, savings, model comparison", "Ahsan", "2027-02-02", "2027-04-03"],
    ["M8", "Evaluation", "Ahsan", "2027-03-09", "2027-04-25"],
    ["M9", "Final report and defence", "All", "2027-04-21", "2027-05-30"],
  ];
  const labelW = 400;
  const demo = pos("2027-01-30");
  const today = pos("2026-10-01");
  return (
    <SlideFrame theme="light">
      <Layout title="Three clouds first," sub="then everything else." gap={40}
        cite="Team planning targets; dates will follow the official defence schedule.">
        <Reveal delay={0.1} style={{ position: "relative", borderRadius: 28, padding: "54px 30px 22px", ...CARD_SURFACE.white }}>
          <div style={{ display: "flex", marginLeft: labelW, position: "relative", height: 30, fontSize: 15, fontWeight: 700, color: "#9CA3AF" }}>
            {months.map(([m, d]) => <span key={m} style={{ position: "absolute", left: `${pos(d)}%` }}>{m}</span>)}
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: 0, bottom: 0, left: labelW, right: 0, pointerEvents: "none" }}>
              {months.map(([m, d]) => <div key={m} style={{ position: "absolute", top: 0, bottom: 0, left: `${pos(d)}%`, width: 1, background: "#f0f1f3" }} />)}
              <div style={{ position: "absolute", top: -8, bottom: 0, left: `${demo}%`, borderLeft: "2px dashed #111" }} />
              <div style={{ position: "absolute", top: -42, bottom: 0, left: `${today}%`, width: 2, marginLeft: -1, background: "#10B981" }} />
              <span style={{ position: "absolute", top: -68, left: `${today}%`, transform: "translateX(-50%)", display: "inline-flex", alignItems: "center", gap: 7, padding: "4px 10px 4px 8px", borderRadius: 9999, background: "#10B981", color: "#04120C", fontSize: 12.5, fontWeight: 700, whiteSpace: "nowrap" }}>
                <span className="fx-ping" style={{ width: 7, height: 7, borderRadius: "50%", background: "#04120C" }} />
                Today
              </span>
            </div>
            {rows.map(([m, text, owner, s, e], k) => (
              <div key={m} style={{ display: "flex", alignItems: "center", height: 43, borderTop: "1px solid #f3f4f6" }}>
                <div style={{ width: labelW, flex: "none", display: "flex", alignItems: "center", gap: 14, fontSize: 20 }}>
                  <span style={{ flex: "none", width: 44, textAlign: "center", padding: "3px 0", borderRadius: 9999, fontSize: 13.5, fontWeight: 700, background: "#050505", color: "#fff" }}>{m}</span>
                  <span>{text}</span>
                </div>
                <div style={{ position: "relative", flex: 1, height: "100%" }}>
                  <div className="fx-grow" style={{ "--d": `${400 + k * 110}ms`, position: "absolute", top: 12, bottom: 12, left: `${pos(s)}%`, width: `${pos(e) - pos(s)}%`, borderRadius: 6, background: OWNER[owner] }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 24, marginTop: 18, marginLeft: labelW, fontSize: 16, color: "#6B7280", fontWeight: 600, alignItems: "center" }}>
            {Object.entries(OWNER).map(([k, c]) => (
              <span key={k} style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "5px 12px 5px 10px", borderRadius: 9999, background: c, color: "#fff", fontSize: 14 }}><span style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff" }} />{k === "All" ? "Whole team" : k}</span>
            ))}
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, marginLeft: "auto" }}><span style={{ width: 0, height: 16, borderLeft: "2px dashed #111" }} />FYDP-I demo</span>
          </div>
        </Reveal>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 11 · Work division ─── */
export function WorkSlide() {
  const leads = [
    { color: "#8B5CF6", leads: "Application Model, agent mode, incident loop, research", tags: ["O1", "O2", "O3"] },
    { color: "#60A5FA", leads: "User-facing work, team workspaces, delivery and operations", tags: ["O1", "O2"] },
    { color: "#10B981", leads: "Architect, cloud adapters, safety gate, savings", tags: ["O1", "O3"] },
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
        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, width: "100%" }}>
          {team.slice(0, 3).map((m, i) => {
            const tone = i % 2 === 0 ? "white" : "ink";
            const dark = tone === "ink";
            return (
              <Reveal key={m.name} delay={0.12 + i * 0.1} y={24}>
                <AmplioCard tone={tone} tag={leads[i].tags.join(" · ")} delay={i * 120} style={{ minHeight: 360 }}
                  badge={(
                    <span className="fx-pop team-tile" style={{ "--d": `${400 + i * 120}ms`, width: 104, height: 104, padding: 8, flex: "none" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={m.avatar} alt={m.name} />
                    </span>
                  )}>
                  <h3 style={{ marginTop: "auto", fontFamily: "var(--font-label)", fontSize: 30, fontWeight: 700, letterSpacing: "-0.5px" }}>{m.name}</h3>
                  <p style={{ fontSize: 20, lineHeight: 1.45, marginTop: 10, color: dark ? "rgba(255,255,255,0.68)" : "#4B5563" }}>{leads[i].leads}</p>
                </AmplioCard>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.5} style={{ marginTop: 48, fontSize: 19, color: "#6B7280" }}>
          Advisor <b style={{ color: "#111" }}>Hira Anwar</b> · Co-advisor <b style={{ color: "#111" }}>Ayesha Hakim</b>
        </Reveal>
      </div>
    </SlideFrame>
  );
}
