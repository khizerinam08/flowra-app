"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/deck/DeckContext";
import { SlideFrame, Layout, Panel, BLUE, INK, BODY, MUTED } from "@/components/deck/ui";
import Mermaid from "@/components/deck/Mermaid";

/* One look for every slide in this file: white slides, white cards, one accent (blue).
   No icons, tags or alternating card colours, and body text no smaller than 20px. */

const Num = ({ children }) => (
  <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: BLUE }}>{children}</div>
);

/* ─── 05 · Users of the system ─── */
export function UsersSlide() {
  const users = [
    { title: "AI-assisted builders", who: "A working product, but little experience of running one." },
    { title: "Solo full-stack developers", who: "Outgrowing a managed platform: stay, or move to a cloud?" },
    { title: "Small teams and agencies", who: "Two to ten people, with no DevOps staff." },
  ];
  return (
    <SlideFrame theme="light">
      <Layout title="Built for builders without" sub="an infrastructure engineer." gap={48} middle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {users.map((u, i) => (
            <Reveal key={u.title} delay={0.12 + i * 0.1} y={24}>
              <Panel style={{ minHeight: 400, padding: "40px 38px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 46, fontWeight: 600, letterSpacing: "-1.3px", lineHeight: 1.1, minHeight: 100 }}>{u.title}</h3>
                <p style={{ marginTop: "auto", paddingTop: 20, fontSize: 28, lineHeight: 1.45, color: BODY }}>{u.who}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 06 · Key features: the flagship ones, as what Depot does ─── */
export function FeaturesSlide() {
  const feats = [
    { title: "Reads your code", desc: "Works out what the app needs from its code and a few questions." },
    { title: "Picks the cloud", desc: "Compares AWS, Google Cloud and Azure, and chooses the best fit at the lowest cost." },
    { title: "Writes the infrastructure", desc: "Designs the architecture and writes the Terraform from proven, security-reviewed blueprints." },
    { title: "Checks and repairs its work", desc: "Validates, scans and prices every change, and fixes failures before you see them." },
    { title: "Ships and keeps it running", desc: "Deploys on every push, rolls back bad releases and tracks cost." },
    { title: "Fixes problems by chat", desc: "Diagnoses incidents and proposes fixes and savings for a person to approve." },
  ];
  return (
    <SlideFrame theme="light">
      <Layout title="What Depot" sub="does for you." gap={36} middle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {feats.map((f, i) => (
            <Reveal key={f.title} delay={0.06 + i * 0.06}>
              <Panel style={{ minHeight: 270 }}>
                <Num>0{i + 1}</Num>
                <h3 style={{ marginTop: 12, fontFamily: "var(--font-display)", fontSize: 35, fontWeight: 600, letterSpacing: "-0.7px", lineHeight: 1.1 }}>{f.title}</h3>
                <p style={{ marginTop: 12, fontSize: 23, lineHeight: 1.42, color: BODY }}>{f.desc}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 07 · Objectives ─── */
/* What a user can do once Depot exists; the O-numbers stay stable for the plan slides. */
const OBJECTIVES = [
  { n: "01", head: "Deploy any supported repository", body: "Code in, live app out, on AWS, GCP or Azure." },
  { n: "02", head: "Check health, metrics and cost", body: "Logs, spend and rollback in one place." },
  { n: "03", head: "Remembers every decision", body: "What changed, when, and why." },
];

export function ObjectivesSlide() {
  return (
    <SlideFrame theme="light">
      <Layout title="Three objectives." sub="What a user can do with Depot." gap={48} middle
        cite="Research sits inside all three: comparing ten current AI models on architecture and IaC writing, and measured guardrails for the agent loop.">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {OBJECTIVES.map((o, i) => (
            <Reveal key={o.n} delay={0.08 + i * 0.08}>
              <Panel style={{ minHeight: 420, padding: "40px 38px" }}>
                <Num>{o.n}</Num>
                <h3 style={{ marginTop: 16, fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 600, letterSpacing: "-1.4px", lineHeight: 1.08 }}>{o.head}</h3>
                <p style={{ marginTop: "auto", paddingTop: 20, fontSize: 28, lineHeight: 1.45, color: BODY }}>{o.body}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 08 · Depot in action: a connected workflow, explained for non-technical listeners ─── */
export function InActionSlide() {
  const steps = [
    ["Connect", "GitHub, GitLab or an archive", "Point Depot at the app's code, or upload it."],
    ["Answer", "Up to eight questions", "Answer simple questions the code can't, like expected traffic and budget."],
    ["Review", "AI-written architecture and Terraform, with monthly cost", "See the proposed setup and what it will cost each month."],
    ["Approve", "Signed and role-checked", "Nothing goes live until an authorised person signs it off."],
    ["Run", "Deploy on push, roll back, watch cost", "The app goes live, updates itself, and can be undone."],
  ];
  return (
    <SlideFrame theme="light">
      <Layout title="One session," sub="from working code to live." gap={40} middle>
        <div style={{ display: "flex", alignItems: "stretch" }}>
          {steps.map(([title, what, plain], i) => (
            <div key={title} style={{ display: "flex", alignItems: "flex-start", flex: 1 }}>
              <Reveal delay={0.1 + i * 0.12} y={20} style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Panel style={{ height: 236, padding: "26px 22px" }}>
                  <Num>Step {i + 1}</Num>
                  <h3 style={{ marginTop: 8, fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 600, letterSpacing: "-0.9px" }}>{title}</h3>
                  <p style={{ marginTop: "auto", fontSize: 20, lineHeight: 1.3, color: MUTED }}>{what}</p>
                </Panel>
                <p style={{ marginTop: 20, padding: "0 6px", fontSize: 24, lineHeight: 1.4, color: INK }}>{plain}</p>
              </Reveal>
              {i < steps.length - 1 && (
                <div aria-hidden="true" style={{ flex: "none", width: 40, height: 236, display: "flex", alignItems: "center", justifyContent: "center", color: BLUE }}>
                  <ArrowRight size={30} strokeWidth={2.6} />
                </div>
              )}
            </div>
          ))}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 09 · Architecture: the target design, as a flow diagram (Mermaid) ───
   Follows the proposal: code in, an Application Model, AI-written Terraform from proven
   blueprints, self-verification with auto-repair, one signed approval gate, the user's own
   cloud, then operations, with incidents routed back through the same gate. */
const ARCH_DESIGN = `flowchart TB
  SRC["Code: GitHub, GitLab or archive"] --> ANA["Analyser and guided intake"]
  ANA --> MODEL["Application Model: every fact and its source"]
  MODEL --> ARCHI["AI architect: picks the cloud, writes the Terraform"]
  LIB[("Proven, security-reviewed blueprints")] -.-> ARCHI
  ARCHI --> CHK["Validate, plan, scan, cost"]
  CHK -- "fails" --> ARCHI
`;

const ARCH_RUN = `flowchart TB
  GATE["Safety gate: signed, role-checked approval"] --> CLOUD["Your cloud: AWS, GCP or Azure"]
  CLOUD --> OPS["Deploy, roll back, monitor, track cost"]
  OPS -- "alarm" --> INC["Incident loop: AI proposes a fix"]
  INC --> GATE
  GATE -.-> REC[("Decision record: plans, approvals, costs")]
`;

export function ArchitectureSlide() {
  const head = { fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 600, color: BLUE, marginBottom: 6 };
  return (
    <SlideFrame theme="light">
      <Layout title="How Depot is built:" sub="from code to a running cloud." gap={30} middle
        cite="One approval gate for every change, from the dashboard, the chat assistant or an incident fix.">
        <Reveal delay={0.15}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 120px 1fr", alignItems: "center", gap: 0 }}>
            <Panel style={{ padding: "18px 22px" }}>
              <div style={head}>1 · Understand, design and verify</div>
              <Mermaid chart={ARCH_DESIGN} label="Code is analysed into an Application Model; an AI architect writes Terraform from proven blueprints; the result is validated, scanned and costed, with automatic repair on failure." />
            </Panel>
            <div aria-hidden="true" style={{ textAlign: "center", color: BLUE }}>
              <ArrowRight size={44} strokeWidth={2.6} />
              <div style={{ marginTop: 6, fontSize: 21, fontWeight: 600 }}>passes</div>
            </div>
            <Panel style={{ padding: "18px 22px" }}>
              <div style={head}>2 · Approve and run</div>
              <Mermaid chart={ARCH_RUN} label="A signed, role-checked approval gate releases changes to the user's own cloud; operations alarms return as an AI-proposed fix through the same gate; every decision is recorded." />
            </Panel>
          </div>
        </Reveal>
      </Layout>
    </SlideFrame>
  );
}
