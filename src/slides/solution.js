"use client";

import { ArrowRight, ArrowDown } from "lucide-react";
import { Reveal } from "@/components/deck/DeckContext";
import { SlideFrame, Layout, Panel, BLUE, INK, BODY, MUTED } from "@/components/deck/ui";

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

/* ─── 09 · Architecture: the target design in four layers, for a non-technical audience ─── */
export function ArchitectureSlide() {
  const layers = [
    { name: "You", parts: ["Web dashboard", "Chat assistant"], note: "Same rules for both: a chat can't do more than a button." },
    { name: "Depot's brain", parts: ["Reads the code", "Designs and writes the setup", "Checks and repairs it"], note: "Drafts from proven blueprints, then tests its own work." },
    { name: "Safety gate", parts: ["Shows cost and risks", "Waits for a signed approval"], note: "Nothing reaches the cloud without a person saying yes." },
    { name: "Your cloud", parts: ["Amazon Web Services", "Google Cloud", "Microsoft Azure"], note: "Runs in the user's own account, with short-lived access." },
  ];
  return (
    <SlideFrame theme="light">
      <Layout title="How Depot is built:" sub="four simple layers." gap={22} middle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 270px", gap: 22 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {layers.map((l, i) => (
              <div key={l.name}>
                <Reveal delay={0.1 + i * 0.12} y={16}>
                  <Panel style={{ flexDirection: "row", alignItems: "center", gap: 22, padding: "12px 24px", ...(l.name === "Safety gate" ? { border: `2px solid ${BLUE}` } : null) }}>
                    <div style={{ flex: "none", width: 200 }}>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, color: BLUE }}>Layer {i + 1}</div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 600, letterSpacing: "-0.7px" }}>{l.name}</div>
                    </div>
                    <div style={{ flex: 1, display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {l.parts.map((p, k) => (
                        <div key={p} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ padding: "8px 14px", borderRadius: 12, background: "#F1F5F9", border: "1px solid #E2E8F0", fontSize: 21, fontWeight: 600, color: INK }}>{p}</span>
                          {l.name === "Depot's brain" && k < l.parts.length - 1 && <ArrowRight size={20} color={BLUE} strokeWidth={2.6} />}
                        </div>
                      ))}
                    </div>
                    <div style={{ flex: "none", width: 270, fontSize: 19, lineHeight: 1.3, color: BODY }}>{l.note}</div>
                  </Panel>
                </Reveal>
                {i < layers.length - 1 && (
                  <div aria-hidden="true" style={{ height: 20, display: "flex", alignItems: "center", justifyContent: "center", color: BLUE }}>
                    <ArrowDown size={22} strokeWidth={2.6} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <Reveal delay={0.6} style={{ display: "flex" }}>
            <Panel style={{ justifyContent: "center", padding: "26px 26px" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, color: BLUE }}>Alongside every layer</div>
              <div style={{ marginTop: 6, fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 600 }}>Memory</div>
              <p style={{ marginTop: 14, fontSize: 21, lineHeight: 1.45, color: BODY }}>Every decision, change, cost and approval is recorded, so anyone can see why the setup is what it is.</p>
            </Panel>
          </Reveal>
        </div>
      </Layout>
    </SlideFrame>
  );
}
