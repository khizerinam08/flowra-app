"use client";

import { team } from "@/components/TeamGallery";
import { Reveal } from "@/components/deck/DeckContext";
import { SlideFrame, Layout, Panel, Ref, BLUE, INK, BODY, MUTED } from "@/components/deck/ui";

/* Same look as the rest of the deck: white slides, white cards, one accent, large text. */

/* ─── 10 · Scope: the flagship things Depot covers ─── */
export function ScopeSlide() {
  const inScope = [
    ["Any web app, API, static site or worker", "Written in JavaScript/TypeScript, Python or Go"],
    ["From GitHub, GitLab or an upload", "One code source per app"],
    ["On AWS, Google Cloud or Azure", "In the user's own cloud account"],
  ];
  return (
    <SlideFrame theme="light">
      <Layout title="What Depot" sub="covers." gap={40} middle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {inScope.map(([t, d], i) => (
            <Reveal key={t} delay={0.08 + i * 0.06} y={20}>
              <Panel style={{ minHeight: 320 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 600, letterSpacing: "-0.7px", lineHeight: 1.12 }}>{t}</div>
                <p style={{ marginTop: "auto", paddingTop: 14, fontSize: 23, lineHeight: 1.4, color: BODY }}>{d}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 11 · Evaluation: the proposal's pass thresholds (Table 5.5), in plain words ─── */
export function EvaluationSlide() {
  const rows = [
    ["Deploys successfully", "7 of 8 test apps live after repair", <>Today&apos;s AI: 20.8–30.2% on the first try<Ref n={1} /></>],
    ["Picks the right architecture", "80% or more accepted by reviewers", "Two independent reviewers"],
    ["Understands the app", "85% or more of facts correct", "Checked against labelled apps"],
    ["Estimates the cost", "Within 25% of the cloud's own calculator", "Before anything is switched on"],
    ["Cuts the cost", "20% or more saved each month", "On apps that sit idle"],
    ["Blocks risky changes", "Zero unapproved changes", "Every seeded unsafe plan blocked"],
    ["Easy to use", <>80% deploy unaided; usability 68 or more<Ref n={8} /></>, "68 is the published average"],
  ];
  const grid = "0.95fr 1.45fr 1fr";
  return (
    <SlideFrame theme="light">
      <Layout title="How we'll prove it works." sub="Pass marks set before we build." gap={30} middle
        cite="Pass marks from the FYDP-I proposal, measured in milestone M8.">
        <Reveal delay={0.1}>
          <Panel style={{ padding: "6px 30px" }}>
            <div style={{ display: "grid", gridTemplateColumns: grid, gap: 20, padding: "16px 0 12px", borderBottom: "2px solid #E2E8F0", fontSize: 21, fontWeight: 700, color: MUTED }}>
              <div>We measure</div>
              <div>Pass if</div>
              <div>Context</div>
            </div>
            {rows.map(([what, pass, note], i) => (
              <div key={what} style={{ display: "grid", gridTemplateColumns: grid, gap: 20, alignItems: "center", padding: "15px 0", borderBottom: i < rows.length - 1 ? "1px solid #EEF2F6" : "none" }}>
                <div style={{ fontSize: 27, fontWeight: 600, color: INK }}>{what}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 27, fontWeight: 600, color: BLUE }}>{pass}</div>
                <div style={{ fontSize: 21, color: BODY }}>{note}</div>
              </div>
            ))}
          </Panel>
        </Reveal>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 12 · Timeline ─── */
const START = new Date("2026-09-01").getTime();
const END = new Date("2027-06-01").getTime();
const pos = (d) => ((new Date(d).getTime() - START) / (END - START)) * 100;

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
  const labelW = 470;
  const demo = pos("2027-01-30");
  const today = pos("2026-10-01");
  return (
    <SlideFrame theme="light">
      <Layout title="Three clouds first," sub="then everything else." gap={34}
        cite="Team planning targets; dates will follow the official defence schedule.">
        <Reveal delay={0.1}>
          <Panel style={{ padding: "50px 30px 20px", position: "relative" }}>
            <div style={{ display: "flex", marginLeft: labelW, position: "relative", height: 28, fontSize: 18, fontWeight: 600, color: MUTED }}>
              {months.map(([m, d]) => <span key={m} style={{ position: "absolute", left: `${pos(d)}%` }}>{m}</span>)}
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: 0, bottom: 0, left: labelW, right: 0, pointerEvents: "none" }}>
                {months.map(([m, d]) => <div key={m} style={{ position: "absolute", top: 0, bottom: 0, left: `${pos(d)}%`, width: 1, background: "#EEF2F6" }} />)}
                <div style={{ position: "absolute", top: 0, bottom: 0, left: `${demo}%`, borderLeft: `2px dashed ${INK}` }} />
                <div style={{ position: "absolute", top: -40, bottom: 0, left: `${today}%`, width: 2, marginLeft: -1, background: BLUE }} />
                <span style={{ position: "absolute", top: -66, left: `${today}%`, transform: "translateX(-50%)", fontSize: 17, fontWeight: 700, color: BLUE, whiteSpace: "nowrap" }}>Today</span>
              </div>
              {rows.map(([m, text, owner, s, e], k) => (
                <div key={m} style={{ display: "flex", alignItems: "center", height: 44, borderTop: "1px solid #F1F5F9" }}>
                  <div style={{ width: labelW, flex: "none", display: "flex", alignItems: "center", gap: 14, fontSize: 21, color: INK }}>
                    <span style={{ flex: "none", width: 42, fontWeight: 700, color: BLUE }}>{m}</span>
                    <span style={{ flex: 1 }}>{text}</span>
                    <span style={{ flex: "none", width: 92, fontSize: 17, color: MUTED }}>{owner === "All" ? "Team" : owner}</span>
                  </div>
                  <div style={{ position: "relative", flex: 1, height: "100%" }}>
                    <div className="fx-grow" style={{ "--d": `${400 + k * 110}ms`, position: "absolute", top: 12, bottom: 12, left: `${pos(s)}%`, width: `${pos(e) - pos(s)}%`, borderRadius: 6, background: BLUE }} />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 14, fontSize: 17, color: BODY, gap: 8, alignItems: "center" }}>
              <span style={{ width: 0, height: 18, borderLeft: `2px dashed ${INK}` }} /> FYDP-I demo
            </div>
          </Panel>
        </Reveal>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 13 · The team: who owns which layer ─── */
export function WorkSlide() {
  const areas = [
    { area: "AI & data logic", work: ["Reads code into the Application Model", "Agent mode and incident loop", "Model research and optimisation"] },
    { area: "Front end & delivery", work: ["Dashboard and team workspaces", "Deploys, rollback and monitoring", "User research and testing"] },
    { area: "Cloud & backend logic", work: ["AI architect and Terraform writing", "AWS, GCP and Azure adapters", "Safety gate and cost savings"] },
  ];
  return (
    <SlideFrame theme="light">
      <Layout title="The team." sub="No one reviews only their own work." gap={44} middle
        cite={<>Advisor <b style={{ color: INK }}>Hira Anwar</b> · Co-advisor <b style={{ color: INK }}>Ayesha Hakim</b></>}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {team.slice(0, 3).map((m, i) => (
            <Reveal key={m.name} delay={0.12 + i * 0.1} y={20}>
              <Panel style={{ minHeight: 440, padding: "32px 34px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.avatar} alt="" width={84} height={84} style={{ width: 84, height: 84, borderRadius: "50%", background: "#F1F5F9", border: "1px solid #E2E8F0", flex: "none" }} />
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 600, letterSpacing: "-0.7px", lineHeight: 1.12 }}>{m.name}</h3>
                </div>
                <div style={{ marginTop: 26, fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 600, color: BLUE }}>{areas[i].area}</div>
                <ul style={{ marginTop: 14, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {areas[i].work.map((w) => (
                    <li key={w} style={{ fontSize: 24, lineHeight: 1.35, color: BODY, paddingLeft: 20, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, top: 13, width: 8, height: 8, borderRadius: 2, background: BLUE }} />
                      {w}
                    </li>
                  ))}
                </ul>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Layout>
    </SlideFrame>
  );
}
