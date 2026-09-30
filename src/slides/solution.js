"use client";

import { Sparkles, CodeXml, Users, ShieldCheck, Layers, Route, KeyRound, Activity, Bot } from "lucide-react";
import { Reveal } from "@/components/deck/DeckContext";
import { SlideFrame, Layout, Ref, Pill } from "@/components/deck/ui";

const label = { fontSize: 14, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" };

/* ─── 05 · Objectives ─── */
/* Stated as what a user can do once Depot exists. The O-numbers are referenced by the
   evaluation and work-division slides, so they stay stable. */
const OBJECTIVES = [
  {
    n: "O1",
    color: "#10B981",
    head: "Deploy any supported repository",
    body: "Point Depot at GitHub, GitLab or an archive. It reads the application, decides the target and pattern, prices it, then provisions it to AWS, GCP, Azure, Vercel or Railway inside the user's own account — every change validated, costed and signed before it runs.",
  },
  {
    n: "O2",
    color: "#60A5FA",
    head: "Check health, metrics and cost",
    body: "Deployment history, health checks, logs, metrics, environment-variable metadata and running spend in one place, with rollback and the savings found. The agent investigates an incident and proposes a fix; a person approves.",
  },
  {
    n: "O3",
    color: "#8B5CF6",
    head: "Review every change, and trace it after",
    body: "Nothing reaches the cloud without a saved plan you can read and an explicit approval. Every release then links back through the commit, the model, the specification, the plan, the workflow run and the health outcome — a reviewer follows the whole chain, not just a diff.",
  },
];

export function ObjectivesSlide() {
  return (
    <SlideFrame theme="light">
      <Layout title="Three objectives." sub="What a user can do with Depot." gap={48} middle
        cite="Research sits inside all three: comparing language models on extraction, and measured guardrails for the agent loop.">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {OBJECTIVES.map((o, i) => (
            <Reveal key={o.n} delay={0.08 + i * 0.08} style={{ display: "flex", flexDirection: "column", height: "100%", padding: "40px 36px", borderRadius: 26, border: "1px solid #eceef1", background: "#fafafa" }}>
              <span style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", justifyContent: "center", minWidth: 62, height: 38, padding: "0 14px", borderRadius: 12, background: `${o.color}16`, color: o.color, fontSize: 18, fontWeight: 800 }}>{o.n}</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 500, letterSpacing: "-1.2px", lineHeight: 1.08, margin: "24px 0 0" }}>{o.head}</h3>
              <p style={{ fontSize: 19, lineHeight: 1.5, color: "#6B7280", margin: "18px 0 0" }}>{o.body}</p>
            </Reveal>
          ))}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 06 · Users of the system ─── */
export function UsersSlide() {
  const users = [
    { color: "oklch(0.7 0.15 160)", icon: <Sparkles size={40} />, title: "AI-assisted builders", who: "A working product, but little experience of running one." },
    { color: "oklch(0.65 0.25 280)", icon: <CodeXml size={40} />, title: "Solo full-stack developers", who: "Outgrowing a managed platform: stay, or move to a cloud?" },
    { color: "oklch(0.65 0.15 240)", icon: <Users size={40} />, title: "Small teams and agencies", who: "Two to ten people, with no DevOps staff." },
  ];
  return (
    <SlideFrame theme="dark">
      <Layout dark title="Built for builders without" sub="an infrastructure engineer." gap={44} middle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {users.map((u, i) => (
            <Reveal key={u.title} delay={0.12 + i * 0.1} y={30}>
              <div className="glass-prism" style={{ "--color-1": u.color, height: "100%", padding: "56px 48px" }}>
                <div className="glass-prism-icon" style={{ width: 84, height: 84, borderRadius: 20, marginBottom: 34 }}>{u.icon}</div>
                <h3 style={{ fontSize: 40, letterSpacing: "-1.4px", lineHeight: 1.1, minHeight: 88, marginBottom: 18 }}>{u.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.62)", lineHeight: 1.5, fontSize: 27 }}>{u.who}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 07 · Key features ─── */
export function FeaturesSlide() {
  const feats = [
    { icon: <Layers size={24} />, color: "#10B981", title: "Application Model", desc: "Every fact marked detected, inferred or user-supplied." },
    { icon: <Route size={24} />, color: "#60A5FA", title: "Architect", desc: "Picks among reviewed patterns, ranked by cost and effort." },
    { icon: <ShieldCheck size={24} />, color: "#8B5CF6", title: "Safety gate", desc: "Validate, saved plan, policy, cost and role check." },
    { icon: <KeyRound size={24} />, color: "#F59E0B", title: "No stored keys", desc: "Bounded roles, federation, or one scoped token per target." },
    { icon: <Activity size={24} />, color: "#10B981", title: "Delivery and operations", desc: "Deploy on push, rollback, logs, cost, alerts, savings." },
    { icon: <Bot size={24} />, color: "#EF4444", title: "Agent and incident loop", desc: "Changes by conversation; alarms end in a fix a person approves." },
  ];
  return (
    <SlideFrame theme="light">
      <Layout title="What Depot" sub="actually does." gap={40} middle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", columnGap: 56, rowGap: 48 }}>
          {feats.map((f, i) => (
            <Reveal key={f.title} delay={0.08 + i * 0.06}>
              <div style={{ width: 52, height: 52, borderRadius: 15, background: `${f.color}14`, color: f.color, border: `1px solid ${f.color}33`, display: "flex", alignItems: "center", justifyContent: "center" }}>{f.icon}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500, letterSpacing: "-0.6px", margin: "20px 0 8px" }}>{f.title}</h3>
              <p style={{ color: "#6B7280", fontSize: 21, lineHeight: 1.45 }}>{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 08 · Depot in action ─── */
export function InActionSlide() {
  const steps = [
    ["#A78BFA", "Connect", "GitHub, GitLab or an archive"],
    ["#60A5FA", "Answer", "Up to eight questions"],
    ["#34D399", "Review", "Target, architecture, monthly cost"],
    ["#FBBF24", "Approve", "Signed and role-checked"],
    ["#F472B6", "Run", "Deploy on push, roll back, watch cost"],
  ];
  return (
    <SlideFrame theme="dark">
      <Layout dark title="One session," sub="from working code to live." gap={40} middle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
          {steps.map(([color, title, desc], i) => (
            <Reveal key={title} delay={0.1 + i * 0.08} y={40}>
              <div style={{ position: "relative", height: "100%", borderRadius: 28, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.025)", padding: "30px 26px 34px", overflow: "hidden" }}>
                <div style={{ position: "absolute", right: -6, top: -30, fontFamily: "var(--font-display)", fontSize: 150, fontWeight: 900, color: "rgba(255,255,255,0.035)", lineHeight: 1 }}>0{i + 1}</div>
                <Pill color={color}>Step {i + 1}</Pill>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 600, margin: "26px 0 10px", letterSpacing: "-1px" }}>{title}</h3>
                <p style={{ color: "#9CA3AF", fontSize: 21, lineHeight: 1.45 }}>{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Layout>
    </SlideFrame>
  );
}
