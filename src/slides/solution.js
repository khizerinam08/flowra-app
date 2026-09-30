"use client";

import { ArrowRight, CornerDownLeft, Sparkles, CodeXml, Users, ShieldCheck, Layers, Route, KeyRound, Activity, Bot } from "lucide-react";
import { Reveal } from "@/components/deck/DeckContext";
import { SlideFrame, Layout, Ref, Pill, Glyph } from "@/components/deck/ui";

const label = { fontSize: 14, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" };

/* ─── 06 · Objectives ─── */
export function ObjectivesSlide() {
  const objs = [
    ["O1", "Model", "the application from its code and a short intake"],
    ["O2", "Select", "the target and pattern that fit at the lowest cost"],
    ["O3", "Deploy", "to five targets with scoped credentials"],
    ["O4", "Protect", "against any unapproved or policy-violating change"],
    ["O5", "Operate", "keep it running, inspectable and affordable"],
    ["O6", "Agent", "conversational changes and incident loop, with measured guardrails", true],
    ["O7", "Compare", "language models on extraction, selection and explanation", true],
    ["O8", "Validate", "requirements and usability with target users"],
  ];
  return (
    <SlideFrame theme="light">
      <Layout eyebrow="Objectives" title="Eight objectives." sub="Two of them are research." gap={48}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 72 }}>
          {objs.map(([n, v, d, research], i) => (
            <Reveal key={n} delay={0.06 + i * 0.04} style={{ display: "grid", gridTemplateColumns: "56px 1fr", alignItems: "baseline", padding: "20px 0", borderTop: "1px solid #eceef1" }}>
              <span style={{ fontSize: 16, fontWeight: 800, color: research ? "#8B5CF6" : "#10B981" }}>{n}</span>
              <div style={{ fontSize: 23, lineHeight: 1.4, color: "#6B7280" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 500, color: "#000", marginRight: 10 }}>{v}</span>
                {d}
                {research && <Pill color="#8B5CF6" style={{ marginLeft: 12, fontSize: 11, padding: "3px 9px", verticalAlign: "middle" }}>Research</Pill>}
              </div>
            </Reveal>
          ))}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 07 · Users of the system ─── */
export function UsersSlide() {
  const users = [
    { color: "oklch(0.7 0.15 160)", icon: <Sparkles size={30} />, title: "AI-assisted builders", who: "A working product, but little experience of running one." },
    { color: "oklch(0.65 0.25 280)", icon: <CodeXml size={30} />, title: "Solo full-stack developers", who: "Outgrowing a managed platform: stay, or move to a cloud?" },
    { color: "oklch(0.65 0.15 240)", icon: <Users size={30} />, title: "Small teams and agencies", who: "Two to ten people, with no DevOps staff." },
  ];
  return (
    <SlideFrame theme="dark">
      <Layout dark eyebrow="Users of the system" eyebrowColor="#60A5FA" title="Built for builders without" sub="an infrastructure engineer." gap={40} middle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {users.map((u, i) => (
            <Reveal key={u.title} delay={0.12 + i * 0.1} y={30}>
              <div className="glass-prism" style={{ "--color-1": u.color, height: "100%", padding: 40 }}>
                <div className="glass-prism-icon">{u.icon}</div>
                <h3>{u.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.62)", lineHeight: 1.5, fontSize: 22 }}>{u.who}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 08 · How Depot works ─── */
export function HowItWorksSlide() {
  const steps = ["Code", "Application Model", "Proposal and cost", "Plan and policy check", "Signed approval", "Live"];
  const levels = [["Read logs or metrics", "runs at once"], ["Restart or scale within limits", "one confirmation"], ["Change infrastructure", "signed approval", true]];
  return (
    <SlideFrame theme="light">
      <Layout eyebrow="How Depot works" title="From code to live," sub="through one gate." gap={64}
        cite={<>The model selects; reviewed templates execute. The checks, not the generation, do the work.<Ref n={9} /></>}>
        <div style={{ display: "flex", alignItems: "stretch", gap: 10 }}>
          {steps.map((s, i) => {
            const gate = i === 4;
            return (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
                <Reveal delay={0.08 + i * 0.07} y={16} style={{ flex: 1, height: "100%" }}>
                  <div style={{ height: "100%", borderRadius: 22, padding: "22px 20px", background: gate ? "#050505" : "#fafafa", color: gate ? "#fff" : "#000", border: gate ? "1px solid #050505" : "1px solid #eceef1" }}>
                    <div style={{ fontSize: 15, fontWeight: 800, color: gate ? "#34D399" : "#10B981" }}>0{i + 1}</div>
                    <div style={{ fontSize: 23, fontWeight: 600, marginTop: 10, lineHeight: 1.2 }}>{s}</div>
                  </div>
                </Reveal>
                {i < steps.length - 1 && <ArrowRight size={20} color="#9CA3AF" style={{ flex: "none" }} />}
              </div>
            );
          })}
        </div>
        <Reveal delay={0.5} style={{ marginTop: 22, display: "flex", alignItems: "center", gap: 14, color: "#10B981", fontSize: 19, fontWeight: 600 }}>
          <CornerDownLeft size={22} />
          <div style={{ flex: 1, height: 2, background: "linear-gradient(to right, #10B981, rgba(16,185,129,0.08))" }} />
          <span style={{ color: "#374151" }}>Every later change returns through the same gate</span>
        </Reveal>
        <Reveal delay={0.6} style={{ marginTop: "auto" }}>
          <div style={{ ...label, color: "#9CA3AF", marginBottom: 16 }}>Confirmation matches the risk</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
            {levels.map(([a, c, strong]) => (
              <div key={a} style={{ borderTop: `2px solid ${strong ? "#000" : "#e5e7eb"}`, paddingTop: 16 }}>
                <div style={{ fontSize: 21, color: "#374151" }}>{a}</div>
                <div style={{ fontSize: 24, fontWeight: 700, marginTop: 6, color: strong ? "#000" : "#6B7280" }}>{c}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 09 · Key features ─── */
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
      <Layout eyebrow="Key features" title="What Depot" sub="actually does." gap={40} middle>
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

/* ─── 10 · Depot in action ─── */
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
      <Layout dark eyebrow="Depot in action" eyebrowColor="#34D399" title="One session," sub="from working code to live." gap={40} middle>
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

/* ─── 11 · System architecture ─── */
function Box({ t, d, dashed, dark, style }) {
  return (
    <div style={{ borderRadius: 18, padding: "16px 16px", textAlign: "center", background: dark ? "#050505" : "#fff", color: dark ? "#fff" : "#111", border: dashed ? "1.5px dashed #10B981" : dark ? "1px solid #050505" : "1px solid #e5e7eb", display: "flex", flexDirection: "column", justifyContent: "center", ...style }}>
      <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.2 }}>{t}</div>
      {d && <div style={{ fontSize: 15, color: dark ? "rgba(255,255,255,0.6)" : "#6B7280", marginTop: 5, lineHeight: 1.3 }}>{d}</div>}
    </div>
  );
}

const Arrow = () => <ArrowRight size={20} color="#9CA3AF" style={{ flex: "none", alignSelf: "center" }} />;

function Tier({ name, children }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "150px 1fr", alignItems: "center", gap: 20 }}>
      <div style={{ ...label, fontSize: 13, color: "#9CA3AF" }}>{name}</div>
      {children}
    </div>
  );
}

export function ArchitectureSlide() {
  const stack = ["Next.js", "Python + FastAPI", "PostgreSQL", "Terraform", "OpenID Connect", "Docker Compose"];
  return (
    <SlideFrame theme="light">
      <Layout eyebrow="System architecture" eyebrowColor="#8B5CF6" title="One API, one gate," sub="two saved documents." gap={44}>
        <Reveal delay={0.1} style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <Tier name="Clients">
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <Box t="Dashboard" style={{ width: 260 }} />
              <Box t="Assistant" d="agent mode" style={{ width: 260 }} />
              <span style={{ fontSize: 19, color: "#6B7280", marginLeft: 8 }}><Glyph c="→" /> same API, same gate</span>
            </div>
          </Tier>
          <Tier name="Control plane">
            <div style={{ display: "flex", gap: 10, alignItems: "stretch" }}>
              <Box t="Analyser + intake" style={{ flex: 1 }} />
              <Arrow />
              <Box t="Application Model" dashed style={{ flex: 1 }} />
              <Arrow />
              <Box t="Architect" d="model selects, rules filter" style={{ flex: 1 }} />
              <Arrow />
              <Box t="Architecture Spec" dashed style={{ flex: 1 }} />
              <Arrow />
              <Box t="Safety gate" dark style={{ flex: 1 }} />
              <Arrow />
              <Box t="Runner" d="short-lived credentials" style={{ flex: 1 }} />
            </div>
          </Tier>
          <Tier name="Targets">
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              {["AWS", "GCP", "Azure", "Vercel", "Railway"].map((t) => (
                <span key={t} style={{ padding: "12px 26px", borderRadius: 9999, border: "1px solid #d1d5db", fontSize: 19, fontWeight: 600 }}>{t}</span>
              ))}
              <span style={{ fontSize: 17, color: "#9CA3AF", marginLeft: 10 }}>owned by the user</span>
            </div>
          </Tier>
          <Tier name="Data">
            <div style={{ display: "flex", gap: 14 }}>
              <Box t="PostgreSQL" d="state, job queue, events, audit" style={{ width: 360 }} />
              <Box t="Model providers" d="selection, explanation, diagnosis" style={{ width: 360 }} />
            </div>
          </Tier>
        </Reveal>
        <Reveal delay={0.3} style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ ...label, fontSize: 13, color: "#9CA3AF", width: 170 }}>Stack</span>
          {stack.map((s) => (
            <span key={s} style={{ padding: "8px 18px", borderRadius: 9999, background: "#fafafa", border: "1px solid #eceef1", fontSize: 17, fontWeight: 600, color: "#374151" }}>{s}</span>
          ))}
          <span style={{ fontSize: 15, color: "#9CA3AF", marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 24, height: 13, border: "1.5px dashed #10B981", borderRadius: 4 }} /> saved document
          </span>
        </Reveal>
      </Layout>
    </SlideFrame>
  );
}
