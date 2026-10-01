"use client";

import { team } from "@/components/TeamGallery";
import { Reveal } from "@/components/deck/DeckContext";
import { SlideFrame, Layout, Ref, BLUE, SourceLink, AmplioCard, CARD_SURFACE } from "@/components/deck/ui";
import { Words } from "@/components/fx";

/* ─── 13 · UN Sustainable Development Goals ─── */
export function SdgSlide() {
  const goals = [
    { img: "/images/sdg/sdg-08.png", goal: "SDG 8.3", name: "Small-enterprise growth", line: "Small teams run products on cloud accounts they own, at a known monthly cost, without hiring." },
    { img: "/images/sdg/sdg-09.png", goal: "SDG 9.5", name: "Research and technological capability", line: "An open benchmark, and views that explain why each architecture was chosen." },
  ];
  return (
    <SlideFrame theme="light">
      <Layout title="Two goals" sub="we contribute to." gap={40} middle
        cite={<>Icons are the official UN SDG icons, used under the UN SDG guidelines<Ref n={4} />. The content of this publication has not been approved by the United Nations and does not reflect the views of the United Nations or its officials or Member States.</>}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {goals.map((g, i) => {
            const tone = i === 0 ? "white" : "ink";
            return (
              <Reveal key={g.goal} delay={0.12 + i * 0.12} y={24}>
                <AmplioCard tone={tone} tag={g.goal} delay={i * 150}
                  badge={(
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="fx-pop" src={g.img} alt={`UN ${g.goal}: ${g.name}`} width={150} height={150} style={{ "--d": `${400 + i * 150}ms`, width: 150, height: 150, borderRadius: 18, flex: "none", boxShadow: "0 12px 30px rgba(0,0,0,0.2)" }} />
                  )}>
                  <h3 style={{ marginTop: 26, fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 500, letterSpacing: "-1px", lineHeight: 1.1 }}>{g.name}</h3>
                  <p style={{ marginTop: 14, fontSize: 22, lineHeight: 1.5, color: tone === "ink" ? "rgba(255,255,255,0.68)" : "#4B5563" }}>{g.line}</p>
                </AmplioCard>
              </Reveal>
            );
          })}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 14 · References (numbers match the [n] markers on the slides) ─── */
export const REFERENCES = [
  { text: `I. Mehta, "A quarter of startups in YC's current cohort have codebases that are almost entirely AI-generated," TechCrunch, Mar. 2025.`, url: "https://techcrunch.com/2025/03/06/a-quarter-of-startups-in-ycs-current-cohort-have-codebases-that-are-almost-entirely-ai-generated/" },
  { text: `T. Zhang, S. Pan, Z. Zhang, Z. Xing and X. Sun, "Deployability-centric infrastructure-as-code generation: Fail, learn, refine, and succeed through LLM-empowered DevOps simulation," ACM FSE, 2026 (arXiv:2506.05623).`, url: "https://arxiv.org/abs/2506.05623" },
  { text: `Vendor documentation of the fifteen products compared.`, url: null },
  { text: `United Nations, "Goal 8" and "Goal 9," Sustainable Development Goals.`, url: "https://sdgs.un.org/goals" },
];

export function ReferencesSlide() {
  const half = Math.ceil(REFERENCES.length / 2);
  const cols = [REFERENCES.slice(0, half), REFERENCES.slice(half)];
  return (
    <SlideFrame theme="light">
      <Layout title="Sources." gap={48}
        cite="Click a source to open it. Full references are in the proposal.">
        <Reveal delay={0.1} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, borderRadius: 28, padding: "26px 32px", ...CARD_SURFACE.white }}>
          {cols.map((col, c) => (
            <ol key={c} start={c * half + 1} style={{ listStyle: "none" }}>
              {col.map((r, i) => (
                <li key={i} style={{ display: "grid", gridTemplateColumns: "48px 1fr", alignItems: "start", padding: "14px 0", borderTop: i ? "1px solid #eef0f3" : "none", fontSize: 17, lineHeight: 1.45, color: "#374151" }}>
                  <span className="fx-pop" style={{ "--d": `${300 + (c * half + i) * 90}ms`, width: 30, height: 30, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#050505", color: "#fff", fontSize: 14, fontWeight: 700 }}>{c * half + i + 1}</span>
                  <span><SourceLink href={r.url}>{r.text}</SourceLink></span>
                </li>
              ))}
            </ol>
          ))}
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
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: 800, letterSpacing: "0.14em", color: "#475569" }}>
              <span className="fx-ping" style={{ width: 9, height: 9, borderRadius: "50%", background: BLUE }} /> TEAM
            </div>
            <div style={{ marginTop: 12, fontSize: 24, lineHeight: 1.55, color: "#0b1020" }}>
              {team.slice(0, 3).map((m) => <div key={m.name}>{m.name}</div>)}
            </div>
          </div>
          <div className="fx-glass" style={{ borderRadius: 28, padding: "24px 30px", minWidth: 380 }}>
            <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: "0.14em", color: "#475569" }}>ADVISORS</div>
            <div style={{ marginTop: 12, fontSize: 24, lineHeight: 1.55, color: "#0b1020" }}>
              {team.slice(3).map((m) => <div key={m.name}>{m.name}</div>)}
            </div>
            <div style={{ marginTop: 10, fontSize: 16, color: "#64748b" }}>NUST SEECS · BS Computer Science</div>
          </div>
        </Reveal>
      </div>
    </SlideFrame>
  );
}
