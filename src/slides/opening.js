"use client";

import { Check, Minus } from "lucide-react";
import TeamGallery, { team } from "@/components/TeamGallery";
import { Reveal } from "@/components/deck/DeckContext";
import { SlideFrame, Layout, Eyebrow, Ref, Grad } from "@/components/deck/ui";

const label = { fontSize: 14, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" };

/* ─── 01 · Title ─── */
export function TitleSlide() {
  const members = team.slice(0, 3);
  const advisors = team.slice(3);
  return (
    <SlideFrame theme="light" metaball="#F5F6F8">
      <div style={{ position: "absolute", inset: 0, padding: "60px 104px 48px", display: "grid", gridTemplateColumns: "1fr 620px", gap: 60, alignItems: "center" }}>
        <div>
          <Reveal>
            <Eyebrow>FYDP-I · Proposal Defence</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: 196, fontWeight: 500, letterSpacing: "-9px", lineHeight: 0.85, color: "#000" }}>Depot</h1>
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

/* ─── 02 · The challenge ─── */
export function ChallengeSlide() {
  const stats = [
    { n: "~95%", t: "of the code was AI-generated in a quarter of YC's Winter 2025 start-ups", r: 1 },
    { n: "150%", t: "average yearly growth in infrastructure-as-code questions on Stack Overflow, 2011–2022", r: 2 },
    { n: "0%", t: "of one model's Terraform passed a security scan, though 77.8% passed validation", r: 3 },
  ];
  return (
    <SlideFrame theme="dark">
      <div style={{ position: "absolute", inset: 0, padding: "80px 104px 64px", display: "flex", flexDirection: "column" }}>
        <Reveal>
          <Eyebrow dark color="#A78BFA">The challenge</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 96, fontWeight: 600, lineHeight: 0.98, letterSpacing: "-3.5px" }}>
            Building is fast now.<br />
            <Grad>Running it is still expert work.</Grad>
          </h2>
        </Reveal>
        <div style={{ marginTop: "auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 56 }}>
          {stats.map((s, i) => (
            <Reveal key={s.n} delay={0.2 + i * 0.1} style={{ borderTop: "1px solid rgba(255,255,255,0.18)", paddingTop: 26 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 76, fontWeight: 500, letterSpacing: "-2px", lineHeight: 1 }}>{s.n}</div>
              <p style={{ marginTop: 14, fontSize: 21, lineHeight: 1.5, color: "rgba(255,255,255,0.6)" }}>{s.t}<Ref n={s.r} dark /></p>
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
      <Layout eyebrow="Problem statement" title="Working code still leaves" sub="four decisions." gap={48}>
        <Reveal delay={0.1} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
          {decisions.map((d, i) => (
            <div key={d} style={{ padding: "26px 26px", borderRadius: 24, border: "1px solid #eceef1", background: "#fafafa" }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: "#10B981" }}>0{i + 1}</div>
              <div style={{ marginTop: 10, fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 500, letterSpacing: "-0.6px", lineHeight: 1.15 }}>{d}</div>
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.22} style={{ marginTop: "auto" }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: 34, lineHeight: 1.35, color: "#9CA3AF", maxWidth: 1250, letterSpacing: "-0.4px" }}>
            Today&apos;s tools answer one or two. None takes an application as it is, weighs clouds against managed platforms, and changes nothing without the user&apos;s approval.
          </p>
          <p style={{ marginTop: 28, fontFamily: "var(--font-display)", fontSize: 40, lineHeight: 1.25, color: "#000", fontWeight: 500, letterSpacing: "-0.8px" }}>
            Depot answers all four, <span style={{ color: "#10B981" }}>and explains, records and approves every change.</span>
          </p>
        </Reveal>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 04 · Why it matters ─── */
function Pair({ head, rows, cite, delay }) {
  return (
    <Reveal delay={delay} style={{ borderTop: "2px solid #000", paddingTop: 22, display: "flex", flexDirection: "column" }}>
      <div style={{ ...label, color: "#6B7280" }}>{head}</div>
      <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 26 }}>
        {rows.map((r) => (
          <div key={r.l}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 72, fontWeight: 500, letterSpacing: "-2px", lineHeight: 1, color: r.hot || "#000" }}>{r.v}</div>
            <div style={{ fontSize: 20, color: "#4B5563", marginTop: 8 }}>{r.l}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 26, fontSize: 15, color: "#9CA3AF" }}>{cite}</div>
    </Reveal>
  );
}

export function WhyItMattersSlide() {
  return (
    <SlideFrame theme="light">
      <Layout eyebrow="Why it matters" eyebrowColor="#60A5FA" title="Many build on the cloud." sub="Few can run it safely." gap={56}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 64 }}>
          <Pair delay={0.1} head="Cloud use vs. IaC use" cite={<>Stack Overflow Developer Survey 2025<Ref n={4} /></>}
            rows={[{ v: "43.3%", l: "worked extensively with AWS" }, { v: "17.8%", l: "with Terraform", hot: "#8B5CF6" }]} />
          <Pair delay={0.2} head="GPT-4 pass rate" cite={<>IaC-Eval, NeurIPS 2024<Ref n={5} /></>}
            rows={[{ v: "86.6%", l: "on general coding tasks" }, { v: "19.36%", l: "on infrastructure code", hot: "#F97316" }]} />
          <Pair delay={0.3} head="Cloud spend" cite={<>Flexera, 2025 and 2026<Ref n={6} /><Ref n={7} /></>}
            rows={[{ v: "84%", l: "call managing it their top cloud challenge", hot: "#10B981" }, { v: "29%", l: "of IaaS and PaaS spend estimated wasted" }]} />
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 05 · What exists today ─── */
const YES = "yes", PART = "part", NO = "no";

function Mark({ v }) {
  if (v === YES) return <span aria-label="yes" style={{ display: "inline-flex", width: 36, height: 36, borderRadius: "50%", alignItems: "center", justifyContent: "center", background: "rgba(16,185,129,0.16)", color: "#34D399" }}><Check size={20} strokeWidth={3} /></span>;
  if (v === PART) return <span aria-label="partly" style={{ display: "inline-flex", width: 36, height: 36, borderRadius: "50%", alignItems: "center", justifyContent: "center", border: "1.5px solid rgba(251,191,36,0.6)", color: "#FBBF24", fontSize: 14, fontWeight: 800 }}>½</span>;
  return <span aria-label="no or not stated" style={{ display: "inline-flex", width: 36, height: 36, alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.22)" }}><Minus size={20} strokeWidth={3} /></span>;
}

export function LandscapeSlide() {
  const cols = ["Starts from code as it is", "Runs in the user's account", "Chooses cloud or platform", "Approval before change"];
  const rows = [
    { name: "Managed platforms", ex: "Vercel, Railway, Render", v: [YES, NO, NO, PART] },
    { name: "Bring-your-own-cloud", ex: "Porter, Qovery, Northflank, Ravion", v: [PART, YES, NO, PART] },
    { name: "Infrastructure-from-code", ex: "Encore, Nitric, SST, Defang", v: [NO, YES, NO, NO] },
    { name: "AI for one provider or codebase", ex: "Pulumi Neo, StackGen, Gemini Cloud Assist, azd init", v: [PART, PART, PART, PART] },
  ];
  const grid = "1.7fr repeat(4, 1fr)";
  return (
    <SlideFrame theme="dark">
      <Layout dark eyebrow="What exists today" eyebrowColor="#60A5FA" title="Each tool solves part of it." sub="Someone still decides where it runs." gap={44}
        cite={<>Fifteen products, from their own documentation, 30 Sep 2026<Ref n={8} dark />. ½ = partly, or only some products; — = no, or not stated. Depot is planned.</>}>
        <Reveal delay={0.1}>
          <div style={{ display: "grid", gridTemplateColumns: grid, alignItems: "end", paddingBottom: 14, borderBottom: "1px solid rgba(255,255,255,0.14)", fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>
            <div />
            {cols.map((c) => <div key={c} style={{ textAlign: "center", padding: "0 12px", lineHeight: 1.3 }}>{c}</div>)}
          </div>
          {rows.map((r) => (
            <div key={r.name} style={{ display: "grid", gridTemplateColumns: grid, alignItems: "center", padding: "18px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div>
                <div style={{ fontSize: 23, fontWeight: 600 }}>{r.name}</div>
                <div style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", marginTop: 4 }}>{r.ex}</div>
              </div>
              {r.v.map((v, j) => <div key={j} style={{ textAlign: "center" }}><Mark v={v} /></div>)}
            </div>
          ))}
          <div style={{ display: "grid", gridTemplateColumns: grid, alignItems: "center", padding: "20px 0" }}>
            <div style={{ fontSize: 26, fontWeight: 700 }}>Depot</div>
            {[0, 1, 2, 3].map((j) => <div key={j} style={{ textAlign: "center" }}><Mark v={YES} /></div>)}
          </div>
        </Reveal>
      </Layout>
    </SlideFrame>
  );
}
