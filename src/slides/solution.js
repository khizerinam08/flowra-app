"use client";

import { Sparkles, CodeXml, Users, ShieldCheck, Layers, Route, KeyRound, Activity, Bot, Rocket, ArrowRightLeft, GitBranch, MessageSquare, Eye } from "lucide-react";
import { MiniTrack, Sparkline, Transfer, FlowLine } from "@/components/fx";
import { Reveal } from "@/components/deck/DeckContext";
import { SlideFrame, Layout, Ref, Pill, AmplioCard } from "@/components/deck/ui";

const label = { fontSize: 14, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" };

/* ─── 05 · Objectives ─── */
/* Stated as what a user can do once Depot exists. The O-numbers are referenced by the
   evaluation and work-division slides, so they stay stable. */
const OBJECTIVES = [
  {
    n: "O1",
    color: "#10B981",
    head: "Deploy any supported repository",
    body: "Point Depot at a repo. It reads the app, picks the target, prices it, provisions it.",
  },
  {
    n: "O2",
    color: "#60A5FA",
    head: "Check health, metrics and cost",
    body: "History, health, logs, spend and rollback in one place.",
  },
  {
    n: "O3",
    color: "#8B5CF6",
    head: "Move a live service, not just its code",
    body: "Cutover planned, priced and rehearsed before the switch.",
  },
];

export function ObjectivesSlide() {
  const icons = [Rocket, Activity, ArrowRightLeft];
  return (
    <SlideFrame theme="light">
      <Layout title="Three objectives." sub="What a user can do with Depot." gap={48} middle
        cite="Research sits inside all three: comparing language models on extraction, and measured guardrails for the agent loop.">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {OBJECTIVES.map((o, i) => {
            const tone = i % 2 === 0 ? "ink" : "white";
            const dark = tone === "ink";
            return (
              <Reveal key={o.n} delay={0.08 + i * 0.08}>
                <AmplioCard tone={tone} tag={o.n} Icon={icons[i]} delay={i * 120} style={{ minHeight: 420 }}>
                  <div style={{ marginTop: 34 }}>
                    {i === 0 && <MiniTrack color={o.color} tone={dark ? "rgba(255,255,255,0.14)" : "#e5e7eb"} />}
                    {i === 1 && <Sparkline color={o.color} />}
                    {i === 2 && <Transfer color={o.color} base={dark ? "rgba(255,255,255,0.25)" : "#d1d5db"} />}
                  </div>
                  <h3 style={{ marginTop: "auto", fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 500, letterSpacing: "-1.1px", lineHeight: 1.08 }}>{o.head}</h3>
                  <p style={{ marginTop: 14, fontSize: 19, lineHeight: 1.5, color: dark ? "rgba(255,255,255,0.66)" : "#64748b" }}>{o.body}</p>
                </AmplioCard>
              </Reveal>
            );
          })}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 06 · Users of the system ─── */
export function UsersSlide() {
  const users = [
    { Icon: Sparkles, title: "AI-assisted builders", who: "A working product, but little experience of running one." },
    { Icon: CodeXml, title: "Solo full-stack developers", who: "Outgrowing a managed platform: stay, or move to a cloud?" },
    { Icon: Users, title: "Small teams and agencies", who: "Two to ten people, with no DevOps staff." },
  ];
  return (
    <SlideFrame theme="dark">
      <Layout dark title="Built for builders without" sub="an infrastructure engineer." gap={44} middle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {users.map((u, i) => {
            const tone = i % 2 === 0 ? "white" : "ink";
            return (
              <Reveal key={u.title} delay={0.12 + i * 0.1} y={30}>
                <AmplioCard tone={tone} tag={`User 0${i + 1}`} Icon={u.Icon} style={{ minHeight: 380 }}>
                  <h3 style={{ marginTop: "auto", minHeight: 88, display: "flex", alignItems: "flex-end", fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 500, letterSpacing: "-1.2px", lineHeight: 1.1 }}>{u.title}</h3>
                  <p style={{ marginTop: 14, fontSize: 24, lineHeight: 1.45, color: tone === "white" ? "#475569" : "rgba(255,255,255,0.68)" }}>{u.who}</p>
                </AmplioCard>
              </Reveal>
            );
          })}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 07 · Key features ─── */
export function FeaturesSlide() {
  const feats = [
    { Icon: Layers, title: "Application Model", desc: "Every fact marked detected, inferred or user-supplied." },
    { Icon: Route, title: "Architect", desc: "Picks among reviewed patterns, ranked by cost and effort." },
    { Icon: ShieldCheck, title: "Safety gate", desc: "Validate, saved plan, policy, cost and role check." },
    { Icon: KeyRound, title: "No stored keys", desc: "Bounded roles, federation, or one scoped token per target." },
    { Icon: Activity, title: "Delivery and operations", desc: "Deploy on push, rollback, logs, cost, alerts, savings." },
    { Icon: Bot, title: "Agent and incident loop", desc: "Changes by conversation; alarms end in a fix a person approves." },
  ];
  return (
    <SlideFrame theme="light">
      <Layout title="What Depot" sub="actually does." gap={36} middle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {feats.map((f, i) => {
            const tone = (Math.floor(i / 3) + i) % 2 === 0 ? "ink" : "white";
            return (
              <Reveal key={f.title} delay={0.06 + i * 0.06}>
                <AmplioCard compact tone={tone} tag={`Feature 0${i + 1}`} Icon={f.Icon} delay={i * 110} style={{ minHeight: 236 }}>
                  <h3 style={{ marginTop: "auto", fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 500, letterSpacing: "-0.6px", lineHeight: 1.1 }}>{f.title}</h3>
                  <p style={{ marginTop: 8, fontSize: 19, lineHeight: 1.42, color: tone === "ink" ? "rgba(255,255,255,0.66)" : "#64748b" }}>{f.desc}</p>
                </AmplioCard>
              </Reveal>
            );
          })}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 08 · Depot in action ─── */
export function InActionSlide() {
  const steps = [
    [GitBranch, "Connect", "GitHub, GitLab or an archive"],
    [MessageSquare, "Answer", "Up to eight questions"],
    [Eye, "Review", "Target, architecture, monthly cost"],
    [ShieldCheck, "Approve", "Signed and role-checked"],
    [Rocket, "Run", "Deploy on push, roll back, watch cost"],
  ];
  return (
    <SlideFrame theme="dark" band>
      <Layout dark title="One session," sub="from working code to live." gap={40} middle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
          {steps.map(([Icon, title, desc], i) => {
            const tone = i % 2 === 0 ? "white" : "ink";
            return (
              <Reveal key={title} delay={0.1 + i * 0.08} y={30}>
                <AmplioCard compact tone={tone} tag={`Step ${i + 1}`} Icon={Icon} delay={i * 140} style={{ minHeight: 300 }}>
                  <h3 style={{ marginTop: "auto", fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 600, letterSpacing: "-1px" }}>{title}</h3>
                  <p style={{ marginTop: 8, fontSize: 19, lineHeight: 1.42, color: tone === "ink" ? "rgba(255,255,255,0.7)" : "#475569" }}>{desc}</p>
                </AmplioCard>
              </Reveal>
            );
          })}
        </div>
        <div style={{ marginTop: 22 }}>
          <FlowLine steps={steps.length} />
        </div>
      </Layout>
    </SlideFrame>
  );
}
