"use client";

import { team } from "@/components/TeamGallery";
import { Reveal } from "@/components/deck/DeckContext";
import { SlideFrame, Layout, Eyebrow, Ref } from "@/components/deck/ui";

/* ─── 17 · UN Sustainable Development Goals ─── */
export function SdgSlide() {
  const goals = [
    { img: "/images/sdg/sdg-08.png", goal: "SDG 8.3", name: "Small-enterprise growth", line: "Small teams run products on cloud accounts they own, at a known monthly cost, without hiring." },
    { img: "/images/sdg/sdg-09.png", goal: "SDG 9.5", name: "Research and technological capability", line: "An open benchmark, and views that explain why each architecture was chosen." },
  ];
  return (
    <SlideFrame theme="light">
      <Layout eyebrow="UN Sustainable Development Goals" eyebrowColor="#FD6925" title="Two goals" sub="we contribute to." gap={40} middle
        cite={<>Icons are the official UN SDG icons, used under the UN SDG guidelines<Ref n={13} />. The content of this publication has not been approved by the United Nations and does not reflect the views of the United Nations or its officials or Member States.</>}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72 }}>
          {goals.map((g, i) => (
            <Reveal key={g.goal} delay={0.12 + i * 0.12} style={{ display: "flex", gap: 36, alignItems: "flex-start" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.img} alt={`UN ${g.goal}: ${g.name}`} width={220} height={220} style={{ width: 220, height: 220, borderRadius: 16, flex: "none" }} />
              <div>
                <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: "0.14em", color: "#9CA3AF" }}>{g.goal.toUpperCase()}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 500, letterSpacing: "-1px", lineHeight: 1.1, margin: "12px 0 16px" }}>{g.name}</h3>
                <p style={{ fontSize: 22, lineHeight: 1.5, color: "#4B5563" }}>{g.line}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 18 · References (numbers match the [n] markers on the slides) ─── */
export const REFERENCES = [
  `I. Mehta, "A quarter of startups in YC's current cohort have codebases that are almost entirely AI-generated," TechCrunch, Mar. 2025.`,
  `M. Begoug et al., "What do infrastructure-as-code practitioners discuss: An empirical study on Stack Overflow," ESEM, 2023.`,
  `F. L. S. Vargas, R. B. Mansilha and D. Kreutz, "Security-first evaluation of text-to-Terraform," arXiv:2608.02672, 2026.`,
  `Stack Overflow, "Technology," 2025 Stack Overflow Developer Survey, 2025.`,
  `P. T. J. Kon et al., "IaC-Eval: A code generation benchmark for cloud infrastructure-as-code programs," NeurIPS, 2024.`,
  `Flexera, "New Flexera report finds that 84% of organizations struggle to manage cloud spend," Mar. 2025.`,
  `Flexera, 2026 State of the Cloud Report, 2026.`,
  `Vendor documentation of the fifteen products compared, accessed Sep. 30, 2026.`,
  `M. Jouini, "Verifier-first evaluation of agentic LLMs for infrastructure-as-code generation," arXiv:2607.20478, 2026.`,
  `J. Brooke, "SUS: A 'quick and dirty' usability scale," in Usability Evaluation in Industry, 1996.`,
  `J. Sauro, "Measuring usability with the System Usability Scale (SUS)," MeasuringU, 2011.`,
  `OWASP Gen AI Security Project, "LLM06:2025 Excessive agency," 2025.`,
  `United Nations, "Goal 8" and "Goal 9," Sustainable Development Goals, accessed Sep. 30, 2026.`,
];

export function ReferencesSlide() {
  const half = Math.ceil(REFERENCES.length / 2);
  const cols = [REFERENCES.slice(0, half), REFERENCES.slice(half)];
  return (
    <SlideFrame theme="light">
      <Layout eyebrow="References" eyebrowColor="#9CA3AF" title="Sources." gap={48}
        cite="Full IEEE entries, with links and access dates, are in the proposal.">
        <Reveal delay={0.1} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          {cols.map((col, c) => (
            <ol key={c} start={c * half + 1} style={{ listStyle: "none" }}>
              {col.map((r, i) => (
                <li key={i} style={{ display: "grid", gridTemplateColumns: "44px 1fr", padding: "12px 0", borderTop: "1px solid #f0f1f3", fontSize: 17, lineHeight: 1.45, color: "#374151" }}>
                  <span style={{ fontWeight: 800, color: "#10B981" }}>{c * half + i + 1}</span>
                  <span>{r}</span>
                </li>
              ))}
            </ol>
          ))}
        </Reveal>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 19 · Thank you ─── */
export function ThanksSlide() {
  return (
    <SlideFrame theme="dark" metaball="#1f1f1f">
      <div style={{ position: "absolute", inset: 0, padding: "56px 104px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <Reveal>
          <Eyebrow dark>Depot · FYDP-I</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 140, fontWeight: 500, letterSpacing: "-6px", lineHeight: 0.92, marginTop: 8 }}>
            Thank you.<br /><span style={{ color: "#10B981" }}>Any questions?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2} style={{ marginTop: 64, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          {team.slice(0, 3).map((m) => (
            <span key={m.name} style={{ padding: "12px 28px", borderRadius: 9999, border: "1px solid rgba(255,255,255,0.16)", fontSize: 20, color: "rgba(255,255,255,0.85)" }}>{m.name}</span>
          ))}
        </Reveal>
        <Reveal delay={0.28} style={{ marginTop: 22, fontSize: 19, color: "rgba(255,255,255,0.5)" }}>
          Advisor Hira Anwar · Co-advisor Ayesha Hakim · NUST SEECS
        </Reveal>
      </div>
    </SlideFrame>
  );
}
