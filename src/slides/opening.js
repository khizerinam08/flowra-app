"use client";

import TeamGallery, { team } from "@/components/TeamGallery";
import { Reveal } from "@/components/deck/DeckContext";
import { SlideFrame, Layout, Ref, BLUE, SourceLink, Panel, INK, BODY, MUTED } from "@/components/deck/ui";
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
   Four numbers from four independent sources, each saying one thing a judge can repeat:
   AI setups don't deploy, aren't secure, cloud money is wasted, few know the tools. */
export function ChallengeSlide() {
  const stats = [
    { n: "~70%", what: "of AI-written cloud setups fail on their first deploy", note: "Even from the best of six AI models, tested on 153 real-world scenarios", source: "T. Zhang et al., \"Deployability-centric infrastructure-as-code generation,\" ACM FSE, 2026", url: "https://arxiv.org/abs/2506.05623", r: 1 },
    { n: "77%", what: "of AI-written cloud code that works still fails a security check", note: "Even from the best model tested", source: "F. Vargas et al., \"Security-first evaluation of text-to-Terraform,\" arXiv:2608.02672, 2026", url: "https://arxiv.org/abs/2608.02672", r: 2 },
    { n: "29%", what: "of company cloud spend is wasted", note: "Estimated by 753 cloud decision-makers", source: "Flexera, \"2026 State of the Cloud Report,\" 2026", url: "https://info.flexera.com/cm-report-state-of-the-cloud", r: 3 },
    { n: "7 of 15", what: "developers found choosing cloud services or an architecture hard", note: "The hard step most often reported", source: "Depot pilot survey of developers, Sep 2026 (15 respondents, mostly CS students)", url: null, r: 4 },
  ];
  return (
    <SlideFrame theme="light">
      <Layout title="Building apps is fast now." sub="Shipping them is the bottleneck." gap={36} middle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {stats.map((s, i) => (
            <Reveal key={s.n} delay={0.15 + i * 0.1} y={24}>
              <Panel style={{ padding: "26px 32px 22px", minHeight: 250 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
                  <div style={{ flex: "none", width: 250, fontFamily: "var(--font-display)", fontSize: 80, fontWeight: 600, letterSpacing: "-3px", lineHeight: 1, color: BLUE }}>
                    <Roll value={s.n} delay={600 + i * 150} />
                  </div>
                  <div>
                    <div style={{ fontSize: 28, fontWeight: 600, lineHeight: 1.22, color: INK }}>{s.what}</div>
                    <div style={{ marginTop: 8, fontSize: 21, lineHeight: 1.3, color: BODY }}>{s.note}</div>
                  </div>
                </div>
                <div style={{ marginTop: "auto", paddingTop: 14, borderTop: "1px solid #EEF2F6", fontSize: 18, lineHeight: 1.35, color: MUTED }}>
                  <SourceLink href={s.url}>{s.source}</SourceLink><Ref n={s.r} />
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 03 · Problem statement: the four decisions, in plain words ─── */
export function ProblemSlide() {
  const decisions = [
    ["What it needs", "Which servers, database and storage the app needs to run."],
    ["Where it runs", "Which cloud company hosts it: Amazon, Google or Microsoft."],
    ["What it costs", "The monthly bill, known before anything is switched on."],
    ["How to change it safely", "Updating it later without breaking what already works."],
  ];
  return (
    <SlideFrame theme="light">
      <Layout title="Working code still leaves" sub="four decisions." gap={44} middle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {decisions.map(([d, plain], i) => (
            <Reveal key={d} delay={0.1 + i * 0.08}>
              <Panel style={{ minHeight: 300 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: BLUE }}>0{i + 1}</div>
                <div style={{ marginTop: 14, fontFamily: "var(--font-display)", fontSize: 42, fontWeight: 600, letterSpacing: "-0.9px", lineHeight: 1.12 }}>{d}</div>
                <p style={{ marginTop: 14, fontSize: 27, lineHeight: 1.4, color: BODY }}>{plain}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.45} style={{ marginTop: 64 }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: 42, lineHeight: 1.25, color: INK, fontWeight: 500, letterSpacing: "-0.8px" }}>
            Depot answers all four, <span style={{ color: BLUE }}>and explains, records and approves every change.</span>
          </p>
        </Reveal>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 04 · What exists today: three named products against Depot, three plain questions ─── */
export function LandscapeSlide() {
  const tools = ["Vercel", "Porter", "Pulumi Neo", "Depot"];
  const rows = [
    { q: "Easy to deploy?", v: [["Yes", "Push code, it's live"], ["Yes", "Connect a repository"], ["No", "Needs infrastructure code"], ["Yes", "Point it at your code"]] },
    { q: "Runs on your own cloud?", v: [["No", "Vercel's platform only"], ["Yes", "AWS, GCP or Azure"], ["Yes", "Any cloud"], ["Yes", "AWS, GCP or Azure"]] },
    { q: "Cuts your cloud bill?", v: [["No", "Fixed pricing"], ["No", "You watch the bill"], ["No", "Not its focus"], ["Yes", "Picks the cheapest fit, finds savings"]] },
  ];
  const grid = "1.25fr repeat(4, 1fr)";
  const DEPOT_BG = "rgba(30,64,175,0.07)";
  return (
    <SlideFrame theme="light">
      <Layout title="Each tool solves part of it." sub="Someone still decides where it runs." gap={36} middle
        cite={<>From each product&apos;s own documentation<Ref n={6} />. Depot is proposed.</>}>
        <Reveal delay={0.1}>
          <Panel style={{ padding: "8px 28px" }}>
            <div style={{ display: "grid", gridTemplateColumns: grid, alignItems: "center", borderBottom: "2px solid #E2E8F0" }}>
              <div />
              {tools.map((t, j) => (
                <div key={t} style={{ padding: "26px 12px", textAlign: "center", fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 600, color: j === 3 ? BLUE : INK, background: j === 3 ? DEPOT_BG : "transparent", borderRadius: "16px 16px 0 0" }}>{t}</div>
              ))}
            </div>
            {rows.map((r, i) => (
              <div key={r.q} style={{ display: "grid", gridTemplateColumns: grid, alignItems: "stretch", borderBottom: i < rows.length - 1 ? "1px solid #EEF2F6" : "none" }}>
                <div style={{ display: "flex", alignItems: "center", padding: "26px 16px 26px 0", fontSize: 28, fontWeight: 600, lineHeight: 1.25, color: INK }}>{r.q}</div>
                {r.v.map(([yes, why], j) => (
                  <div key={j} style={{ padding: "26px 12px", textAlign: "center", background: j === 3 ? DEPOT_BG : "transparent", borderRadius: i === rows.length - 1 && j === 3 ? "0 0 16px 16px" : 0 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 600, color: yes === "Yes" ? BLUE : "#94A3B8" }}>{yes}</div>
                    <div style={{ marginTop: 6, fontSize: 20, lineHeight: 1.3, color: BODY }}>{why}</div>
                  </div>
                ))}
              </div>
            ))}
          </Panel>
        </Reveal>
      </Layout>
    </SlideFrame>
  );
}
