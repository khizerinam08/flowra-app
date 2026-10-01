"use client";

import TeamGallery, { team } from "@/components/TeamGallery";
import { Reveal } from "@/components/deck/DeckContext";
import { Boxes, Cloud, Wallet, ShieldCheck, Server, Layers, Check, Minus, X, CodeXml, Bot } from "lucide-react";
import { SlideFrame, Layout, Ref, BLUE, SourceLink } from "@/components/deck/ui";
import { Words, Roll } from "@/components/fx";

const label = { fontSize: 14, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" };

/* ─── 01 · Title ─── */
export function TitleSlide() {
  const members = team.slice(0, 3);
  const advisors = team.slice(3);
  return (
    <SlideFrame theme="light">
      <div style={{ position: "absolute", inset: 0, padding: "60px 104px 48px", display: "grid", gridTemplateColumns: "1fr 620px", gap: 60, alignItems: "center" }}>
        <div>
          <Reveal>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: 196, fontWeight: 500, letterSpacing: "-9px", lineHeight: 0.85, color: "#000" }}><Words text="Depot" /></h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p style={{ marginTop: 26, fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 400, letterSpacing: "-0.8px", lineHeight: 1.2, color: "#6B7280", maxWidth: 640 }}>
              An infrastructure architect powered by AI, <span style={{ color: "#000" }}>from code to cloud.</span>
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

/* ─── 02 · The challenge ───
   One claim, four numbers: building is fast; deploys break, costs run away and
   few can ship it. Cards alternate white and blue glass; tags are solid Amplio live-dot pills. */
function Tag({ light, children }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 9, padding: "7px 14px 7px 12px", borderRadius: 9999,
      fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em",
      background: light ? BLUE : "#fff",
      color: light ? "#fff" : BLUE,
      boxShadow: light ? "0 6px 16px rgba(30,64,175,0.28)" : "0 6px 16px rgba(8,20,64,0.25)",
    }}>
      <span className="fx-ping" style={{ width: 8, height: 8, borderRadius: "50%", background: light ? "#fff" : BLUE }} />
      {children}
    </span>
  );
}

const whiteGlass = {
  background: "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(255,255,255,0.91))",
  border: "1px solid rgba(255,255,255,0.9)",
  boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.9), 0 24px 50px rgba(8,20,64,0.28)",
  color: "#0b1020",
};
const blueGlass = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.22)",
  color: "#fff",
};

export function ChallengeSlide() {
  const stats = [
    { light: true, tag: "Building is fast", n: "~95%", what: "of the code written by AI, at a quarter of YC's Winter 2025 start-ups", source: "TechCrunch, 2025", url: "https://techcrunch.com/2025/03/06/a-quarter-of-startups-in-ycs-current-cohort-have-codebases-that-are-almost-entirely-ai-generated/", r: 1 },
    { tag: "Deploys break", n: "~70%", what: "of AI-written infrastructure failed to deploy on the first try, even from the best of six AI models", source: "Zhang et al., FSE 2026", url: "https://arxiv.org/abs/2506.05623", r: 2 },
    { light: true, tag: "Costs run away", n: "29%", what: "of their cloud spend is wasted, say 753 cloud decision-makers", source: "Flexera State of the Cloud, 2026", url: "https://info.flexera.com/cm-report-state-of-the-cloud", r: 3 },
    { tag: "Few can ship it", n: "17.8%", what: "of developers work extensively with Terraform, against 43.3% on AWS", source: "Stack Overflow Developer Survey, 2025", url: "https://survey.stackoverflow.co/2025/technology", r: 4 },
  ];
  return (
    <SlideFrame theme="dark" band>
      <div style={{ position: "absolute", inset: 0, padding: "60px 104px 52px", display: "flex", flexDirection: "column" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 88, fontWeight: 600, lineHeight: 1, letterSpacing: "-3px" }}>
          <Words text="Building apps is fast now." />
          <br />
          <span style={{ color: "#a7e3c4" }}><Words text="Shipping them is the bottleneck." delay={320} /></span>
        </h2>
        <div style={{ marginTop: "auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {stats.map((s, i) => (
            <Reveal key={s.n} delay={0.25 + i * 0.12} y={30}>
              <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", borderRadius: 28, padding: "26px 26px 24px", backdropFilter: "blur(24px) saturate(112%)", WebkitBackdropFilter: "blur(24px) saturate(112%)", ...(s.light ? whiteGlass : blueGlass) }}>
                <Tag light={s.light}>{s.tag}</Tag>
                <div style={{ marginTop: 22, fontFamily: "var(--font-display)", fontSize: 80, fontWeight: 500, letterSpacing: "-3px", lineHeight: 1 }}>
                  <Roll value={s.n} delay={700 + i * 150} />
                </div>
                <p style={{ marginTop: 16, fontSize: 19, lineHeight: 1.45, color: s.light ? "#334155" : "rgba(255,255,255,0.82)" }}>{s.what}</p>
                <p style={{ marginTop: "auto", paddingTop: 18, fontSize: 15, color: s.light ? "#64748b" : "rgba(255,255,255,0.6)" }}>
                  <SourceLink href={s.url}>{s.source}</SourceLink><Ref n={s.r} dark={!s.light} />
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}

/* ─── 03 · Problem statement ───
   Amplio's glass "Live" panel as a card: a pill tag with a live dot, a solid
   round badge for the mark, the line at the foot. Cards alternate ink and white glass. */
export function ProblemSlide() {
  const decisions = [
    [Boxes, "What it needs"],
    [Cloud, "Where it runs"],
    [Wallet, "What it costs"],
    [ShieldCheck, "How to change it safely"],
  ];
  const ink = {
    background: "linear-gradient(160deg, #111318, #050505 60%)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.08), 0 24px 50px rgba(0,0,0,0.22)",
  };
  const glass = {
    background: "linear-gradient(135deg, rgba(255,255,255,0.97), rgba(255,255,255,0.86))",
    color: "#0b1020",
    border: "1px solid #e6e9ef",
    boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.9), 0 18px 40px rgba(28,52,92,0.1)",
    backdropFilter: "blur(24px) saturate(112%)",
    WebkitBackdropFilter: "blur(24px) saturate(112%)",
  };
  return (
    <SlideFrame theme="light">
      <Layout title="Working code still leaves" sub="four decisions." gap={48} middle>
        <Reveal delay={0.1} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {decisions.map(([Icon, d], i) => {
            const dark = i % 2 === 0;
            return (
              <div key={d} style={{ display: "flex", flexDirection: "column", minHeight: 300, padding: "26px 26px 32px", borderRadius: 28, ...(dark ? ink : glass) }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "7px 14px 7px 12px", borderRadius: 9999, fontSize: 15, fontWeight: 600, background: dark ? "#fff" : "#050505", color: dark ? "#050505" : "#fff" }}>
                    <span className="fx-ping" style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981" }} />
                    Decision 0{i + 1}
                  </span>
                  <span style={{ width: 68, height: 68, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", background: dark ? "#fff" : "#050505", color: dark ? "#050505" : "#fff", boxShadow: dark ? "0 0 24px rgba(255,255,255,0.18)" : "0 8px 20px rgba(0,0,0,0.18)" }}>
                    <Icon size={28} strokeWidth={2.2} />
                  </span>
                </div>
                <div style={{ marginTop: "auto", fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 500, letterSpacing: "-0.9px", lineHeight: 1.14 }}>{d}</div>
              </div>
            );
          })}
        </Reveal>
        <Reveal delay={0.22} style={{ marginTop: 88 }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: 44, lineHeight: 1.25, color: "#000", fontWeight: 500, letterSpacing: "-0.9px" }}>
            Depot answers all four, <span style={{ color: "#10B981" }}>and explains, records and approves every change.</span>
          </p>
        </Reveal>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 04 · What exists today ───
   The four groups of existing tools against Depot (proposal Table A.1), as Amplio-style
   column cards: a pill tag, a solid round badge, the group and its examples, then a solid
   status mark per criterion. Columns alternate white and ink glass; Depot carries the green. */
const STRONG = "strong", PARTIAL = "partial", WEAK = "weak";

const MARK = {
  [STRONG]: { Icon: Check, bg: "#10B981", label: "Yes" },
  [PARTIAL]: { Icon: Minus, bg: "#F59E0B", label: "Partly" },
  [WEAK]: { Icon: X, bg: "#94A3B8", label: "No" },
};

function StatusMark({ level, size = 30 }) {
  const { Icon, bg, label } = MARK[level];
  return (
    <span aria-label={label} style={{ flex: "none", width: size, height: size, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", background: bg, color: "#fff" }}>
      <Icon size={size * 0.56} strokeWidth={3} />
    </span>
  );
}

export function LandscapeSlide() {
  const criteria = ["Starts from code as it is", "Chooses the cloud", "Cuts cloud cost", "Risk-assessed changes"];
  const groups = [
    { name: "Managed platforms", ex: "Vercel, Railway, Render", Icon: Server, v: [STRONG, WEAK, WEAK, PARTIAL] },
    { name: "Bring-your-own-cloud", ex: "Porter, Qovery, Northflank, Ravion", Icon: Cloud, v: [PARTIAL, WEAK, WEAK, PARTIAL] },
    { name: "Infrastructure-from-code", ex: "Encore, Nitric, SST, Defang", Icon: CodeXml, v: [WEAK, WEAK, WEAK, WEAK] },
    { name: "AI for one provider or codebase", ex: "Pulumi Neo, StackGen, Gemini Cloud Assist, azd init", Icon: Bot, v: [PARTIAL, PARTIAL, PARTIAL, PARTIAL] },
    { name: "Depot", ex: "AWS, GCP, Azure; one gate for all", Icon: Layers, depot: true, v: [STRONG, STRONG, STRONG, STRONG] },
  ];
  const HEAD = 196, ROW = 74;
  const whiteGlass = {
    background: "linear-gradient(135deg, #ffffff, #f4f6fa)",
    color: "#0b1020",
    border: "1px solid rgba(255,255,255,0.9)",
    boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.9), 0 24px 50px rgba(0,0,0,0.35)",
  };
  const inkGlass = {
    background: "linear-gradient(160deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.14)",
    boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.1)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
  };
  return (
    <SlideFrame theme="dark">
      <Layout dark title="Each tool solves part of it." sub="Someone still decides where it runs." gap={30} middle
        cite={<>Fifteen products, from their own documentation<Ref n={5} dark />. Partly = partly, or only some products; No = no, or not stated. Depot is planned.</>}>
        <Reveal delay={0.1} style={{ display: "grid", gridTemplateColumns: "0.9fr repeat(5, 1fr)", gap: 14 }}>
          {/* criteria down the left, aligned to the rows */}
          <div style={{ paddingTop: HEAD }}>
            {criteria.map((c) => (
              <div key={c} style={{ height: ROW, display: "flex", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.14)", fontSize: 19, fontWeight: 600, color: "rgba(255,255,255,0.92)", lineHeight: 1.25, paddingRight: 10 }}>{c}</div>
            ))}
          </div>
          {groups.map((g, k) => {
            const light = g.depot || k % 2 === 0;
            const solid = g.depot ? { background: "#10B981", color: "#04120C" } : light ? { background: "#050505", color: "#fff" } : { background: "#fff", color: "#050505" };
            return (
              <div key={g.name} style={{ borderRadius: 24, padding: "0 18px", ...(light ? whiteGlass : inkGlass), ...(g.depot ? { boxShadow: "0 0 0 3px #10B981, 0 24px 60px rgba(16,185,129,0.35)" } : null) }}>
                <div style={{ height: HEAD, display: "flex", flexDirection: "column", paddingTop: 18 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px 6px 10px", borderRadius: 9999, fontSize: 13, fontWeight: 600, ...solid }}>
                      <span className="fx-ping" style={{ width: 7, height: 7, borderRadius: "50%", background: g.depot ? "#04120C" : "#10B981" }} />
                      {g.depot ? "Proposed" : "Today"}
                    </span>
                    <span style={{ width: 46, height: 46, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", ...solid }}>
                      <g.Icon size={21} strokeWidth={2.2} />
                    </span>
                  </div>
                  <div style={{ marginTop: 14, fontFamily: "var(--font-display)", fontSize: g.depot ? 34 : 23, fontWeight: 500, letterSpacing: "-0.5px", lineHeight: 1.1 }}>{g.name}</div>
                  <div style={{ marginTop: 6, fontSize: 13.5, lineHeight: 1.35, color: light ? "#64748b" : "rgba(255,255,255,0.5)" }}>{g.ex}</div>
                </div>
                {g.v.map((level, i) => (
                  <div key={criteria[i]} style={{ height: ROW, display: "flex", alignItems: "center", gap: 12, borderTop: light ? "1px solid #e8ebf0" : "1px solid rgba(255,255,255,0.12)", fontSize: 18, fontWeight: 600 }}>
                    <StatusMark level={level} />
                    {MARK[level].label}
                  </div>
                ))}
              </div>
            );
          })}
        </Reveal>
      </Layout>
    </SlideFrame>
  );
}
