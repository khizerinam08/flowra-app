"use client";

import { team } from "@/components/TeamGallery";
import { Reveal } from "@/components/deck/DeckContext";
import { SlideFrame, Layout, Ref, BLUE, SourceLink, Panel, INK, BODY, MUTED } from "@/components/deck/ui";
import { Words } from "@/components/fx";

/* ─── 14 · UN Sustainable Development Goals ─── */
export function SdgSlide() {
  const goals = [
    { img: "/images/sdg/sdg-08.png", goal: "SDG 8.3", name: "Small-enterprise growth", line: "Small teams run products on cloud accounts they own, at a known monthly cost, without hiring." },
    { img: "/images/sdg/sdg-09.png", goal: "SDG 9.5", name: "Research and technological capability", line: "An open benchmark, and views that explain why each architecture was chosen." },
  ];
  return (
    <SlideFrame theme="light">
      <Layout title="Two goals" sub="we contribute to." gap={44} middle
        cite={<>Icons are the official UN SDG icons, used under the UN SDG guidelines<Ref n={7} />. This publication has not been approved by the United Nations and does not reflect the views of the United Nations or its officials or Member States.</>}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {goals.map((g, i) => (
            <Reveal key={g.goal} delay={0.12 + i * 0.12} y={24}>
              <Panel style={{ minHeight: 400, padding: "40px 42px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.img} alt={`UN ${g.goal}: ${g.name}`} width={170} height={170} style={{ width: 170, height: 170, borderRadius: 16, boxShadow: "0 12px 30px rgba(0,0,0,0.18)", marginBottom: 22 }} />
                <div style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 600, color: BLUE }}>{g.goal}</div>
                <h3 style={{ marginTop: 14, fontFamily: "var(--font-display)", fontSize: 50, fontWeight: 600, letterSpacing: "-1.4px", lineHeight: 1.08 }}>{g.name}</h3>
                <p style={{ marginTop: "auto", paddingTop: 22, fontSize: 28, lineHeight: 1.45, color: BODY }}>{g.line}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 14 · References (numbers match the [n] markers on the slides) ─── */
export const REFERENCES = [
  { text: `T. Zhang, S. Pan, Z. Zhang, Z. Xing and X. Sun, "Deployability-centric infrastructure-as-code generation: Fail, learn, refine, and succeed through LLM-empowered DevOps simulation," ACM FSE, 2026 (arXiv:2506.05623).`, url: "https://arxiv.org/abs/2506.05623" },
  { text: `F. L. S. Vargas, R. B. Mansilha and D. Kreutz, "Security-first evaluation of text-to-Terraform: Benchmarking LLMs and SLMs for secure IaC generation," arXiv:2608.02672, 2026.`, url: "https://arxiv.org/abs/2608.02672" },
  { text: `Flexera, 2026 State of the Cloud Report, 2026.`, url: "https://info.flexera.com/cm-report-state-of-the-cloud" },
  { text: `Depot pilot survey of developers (15 respondents, mostly computer science students), NUST SEECS, September 2026.`, url: null },
  { text: `Interview with the CEO of Lyte Studios, conducted with the same questions as the pilot survey, 2026.`, url: null },
  { text: `Vendor documentation of the products compared.`, url: null },
  { text: `United Nations, "Goal 8" and "Goal 9," Sustainable Development Goals.`, url: "https://sdgs.un.org/goals" },
  { text: `J. Sauro, "Measuring usability with the System Usability Scale (SUS)," MeasuringU, 2011.`, url: "https://measuringu.com/sus/" },
];

export function ReferencesSlide() {
  return (
    <SlideFrame theme="light">
      <Layout title="Sources." gap={40} middle
        cite="Click a source to open it. Full references are in the proposal.">
        <Reveal delay={0.1}>
          <Panel style={{ padding: "10px 34px" }}>
            {REFERENCES.map((r, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "52px 1fr", alignItems: "start", padding: "13px 0", borderTop: i ? "1px solid #EEF2F6" : "none", fontSize: 23, lineHeight: 1.4, color: BODY }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: BLUE }}>{i + 1}</span>
                <span><SourceLink href={r.url}>{r.text}</SourceLink></span>
              </div>
            ))}
          </Panel>
        </Reveal>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 15 · Thank you, on the Amplio glass plate ─── */
export function ThanksSlide() {
  return (
    <SlideFrame theme="light" plate>
      <div style={{ position: "absolute", inset: 0, padding: "56px 104px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 140, fontWeight: 500, letterSpacing: "-6px", lineHeight: 0.92, color: "#0b1020" }}>
          <Words text="Thank you." />
          <br />
          <span style={{ color: BLUE }}><Words text="Any questions?" delay={260} /></span>
        </h2>
        <Reveal delay={0.35} style={{ marginTop: 64, display: "flex", gap: 20, alignItems: "stretch" }}>
          <div className="fx-glass" style={{ borderRadius: 28, padding: "24px 30px", minWidth: 560 }}>
            <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.1em", color: "#475569" }}>TEAM</div>
            <div style={{ marginTop: 12, fontSize: 28, lineHeight: 1.55, color: "#0b1020" }}>
              {team.slice(0, 3).map((m) => <div key={m.name}>{m.name}</div>)}
            </div>
          </div>
          <div className="fx-glass" style={{ borderRadius: 28, padding: "24px 30px", minWidth: 380 }}>
            <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.1em", color: "#475569" }}>ADVISORS</div>
            <div style={{ marginTop: 12, fontSize: 28, lineHeight: 1.55, color: "#0b1020" }}>
              {team.slice(3).map((m) => <div key={m.name}>{m.name}</div>)}
            </div>
            <div style={{ marginTop: 10, fontSize: 19, color: "#64748b" }}>NUST SEECS · BS Computer Science</div>
          </div>
        </Reveal>
      </div>
    </SlideFrame>
  );
}
