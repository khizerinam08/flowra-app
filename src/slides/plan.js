"use client";

import { Check } from "lucide-react";
import { team } from "@/components/TeamGallery";
import { Reveal } from "@/components/deck/DeckContext";
import { SlideFrame, Layout } from "@/components/deck/ui";

const label = { fontSize: 14, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" };

/* ─── 09 · Scope ─── */
function ScopeList({ items }) {
  return (
    <div>
      {items.map((t) => (
        <div key={t} style={{ display: "flex", gap: 16, alignItems: "baseline", padding: "15px 0", borderTop: "1px solid #eceef1", fontSize: 23, color: "#111" }}>
          <span style={{ color: "#10B981", flex: "none", position: "relative", top: 3 }}><Check size={22} strokeWidth={3} /></span>
          {t}
        </div>
      ))}
    </div>
  );
}

export function ScopeSlide() {
  const inScope = [
    "GitHub, GitLab or an archive",
    "Apps, APIs, static sites, workers",
    "AWS, GCP, Azure",
    "Short-lived credentials",
    "Approval before every change",
  ];
  return (
    <SlideFrame theme="light">
      <Layout title="What Depot" sub="covers." gap={48}
        cite="Extended scope only if M8 is met early: guided mode, Oracle and Yandex Cloud, voice, preview environments.">
        <Reveal delay={0.1}>
          <div style={{ ...label, color: "#10B981", marginBottom: 12 }}>In scope</div>
          <ScopeList items={inScope} />
        </Reveal>
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
    ["M6", "Workspaces, live migration", "Waleed", "2027-02-02", "2027-03-13"],
    ["M7", "Agent, savings, model comparison", "Ahsan", "2027-02-02", "2027-04-03"],
    ["M8", "Evaluation", "Ahsan", "2027-03-09", "2027-04-25"],
    ["M9", "Final report and defence", "All", "2027-04-21", "2027-05-30"],
  ];
  const labelW = 420;
  const demo = pos("2027-01-30");
  return (
    <SlideFrame theme="light">
      <Layout title="Three clouds first," sub="then everything else." gap={40}
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
            {rows.map(([m, text, owner, s, e], k) => (
              <div key={m} style={{ display: "flex", alignItems: "center", height: 50, borderTop: "1px solid #f3f4f6" }}>
                <div style={{ width: labelW, flex: "none", display: "flex", alignItems: "center", gap: 14, fontSize: 20 }}>
                  <span style={{ width: 36, fontSize: 15, fontWeight: 800, color: "#9CA3AF" }}>{m}</span>
                  <span>{text}</span>
                </div>
                <div style={{ position: "relative", flex: 1, height: "100%" }}>
                  <div className="fx-grow" style={{ "--d": `${400 + k * 110}ms`, position: "absolute", top: 15, bottom: 15, left: `${pos(s)}%`, width: `${pos(e) - pos(s)}%`, borderRadius: 6, background: OWNER[owner] }} />
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

/* ─── 11 · Work division ─── */
export function WorkSlide() {
  const leads = [
    { color: "#8B5CF6", leads: "Application Model, agent mode, incident loop, research", tags: ["O1", "O2", "O3"] },
    { color: "#60A5FA", leads: "User-facing work, team workspaces, managed platforms", tags: ["O1", "O2"] },
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
          Advisor <b style={{ color: "#111" }}>Hira Anwar</b> · Co-advisor <b style={{ color: "#111" }}>Ayesha Hakim</b>
        </Reveal>
      </div>
    </SlideFrame>
  );
}
