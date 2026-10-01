"use client";

import { team } from "@/components/TeamGallery";
import { Reveal } from "@/components/deck/DeckContext";
import { SlideFrame, Layout, Ref, BLUE, SourceLink, Panel, INK, BODY, MUTED } from "@/components/deck/ui";
import { Words } from "@/components/fx";

/* ─── 12 · UN Sustainable Development Goals ─── */
export function SdgSlide() {
  const goals = [
    { img: "/images/sdg/sdg-04.png", goal: "SDG 4", name: "Quality Education", line: "Industry-backed courses ensure students learn what employers actually need, not outdated academic theory." },
    { img: "/images/sdg/sdg-08.png", goal: "SDG 8.3", name: "Decent Work & Economic Growth", line: "Directly connects graduates to employment opportunities, reducing youth unemployment in Pakistan." },
    { img: "/images/sdg/sdg-09.png", goal: "SDG 9.5", name: "Industry, Innovation & Infrastructure", line: "AI-powered skill assessment and interview engine built on modern cloud infrastructure." },
  ];
  return (
    <SlideFrame theme="light">
      <Layout title="Three goals" sub="we contribute to." gap={40} middle
        cite={<>Icons are the official UN SDG icons, used under the UN SDG guidelines<Ref n={7} />. This publication has not been approved by the United Nations.</>}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {goals.map((g, i) => (
            <Reveal key={g.goal} delay={0.12 + i * 0.12} y={24}>
              <Panel style={{ minHeight: 400, padding: "36px 38px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.img} alt={`UN ${g.goal}: ${g.name}`} width={140} height={140} style={{ width: 140, height: 140, borderRadius: 16, boxShadow: "0 12px 30px rgba(0,0,0,0.18)", marginBottom: 18 }} />
                <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, color: BLUE }}>{g.goal}</div>
                <h3 style={{ marginTop: 10, fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 600, letterSpacing: "-1.2px", lineHeight: 1.08 }}>{g.name}</h3>
                <p style={{ marginTop: "auto", paddingTop: 18, fontSize: 24, lineHeight: 1.45, color: BODY }}>{g.line}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 13 · Business Plan: revenue model ─── */
export function BusinessSlide() {
  const streams = [
    {
      num: "01", title: "Company Module Sales",
      desc: "Students purchase individual company modules to access hiring guides, demo interviews, and tailored application advice.",
      note: "Per-module pricing, accessible to students",
    },
    {
      num: "02", title: "Yearly Membership",
      desc: "~₨6,000/year gives students ongoing career counselling, community access, and platform-wide benefits.",
      note: "10× cheaper than comparable market services",
    },
    {
      num: "03", title: "Employer Portal Subscriptions",
      desc: "Companies pay to access the verified resume pool, post requirements, and directly recruit assessed graduates.",
      note: "Recurring revenue from hiring companies",
    },
  ];
  return (
    <SlideFrame theme="light">
      <Layout title="Three revenue streams." sub="Sustainable from day one." gap={44} middle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {streams.map((s, i) => (
            <Reveal key={s.title} delay={0.12 + i * 0.1} y={24}>
              <Panel style={{ minHeight: 420, padding: "40px 38px" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: BLUE }}>{s.num}</div>
                <h3 style={{ marginTop: 16, fontFamily: "var(--font-display)", fontSize: 44, fontWeight: 600, letterSpacing: "-1.4px", lineHeight: 1.08 }}>{s.title}</h3>
                <p style={{ marginTop: 24, fontSize: 25, lineHeight: 1.45, color: BODY }}>{s.desc}</p>
                <div style={{ marginTop: "auto", paddingTop: 18, borderTop: "1px solid #EEF2F6", fontSize: 20, color: MUTED, fontWeight: 500 }}>{s.note}</div>
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
  { text: `Pakistan Bureau of Statistics, "Labour Force Survey 2024–25 Annual Report," 2025.`, url: "https://www.pbs.gov.pk/wp-content/uploads/2020/07/LFS-2024-25-Annual-Report.pdf" },
  { text: `Higher Education Commission, "Higher Education Data Repository Annual Report," 2021.`, url: "https://www.hec.gov.pk/english/services/universities/HEDP/PublishingImages/Pages/Component-4/Annex%203%20HEDR%20Annual%20Report%20(C4).pdf" },
  { text: `Gallup Pakistan, "Unemployment among graduates aged 20–24," analysis of Labour Force Survey microdata.`, url: "https://gallup.com.pk/post/40187" },
  { text: `P@SHA, "The Great Divide: Industry-Academia Skills Gap Analysis 2022."`, url: "https://www.pasha.org.pk/wp-content/uploads/The-Great-Divide-Industry-Academia-Skills-Gap-Analysis-Report-2022.pdf" },
  { text: `World Bank, "Pakistan Enterprise Survey 2022."`, url: "https://microdata.worldbank.org/catalog/6461" },
  { text: `Vendor documentation of the products compared (Coursera, LinkedIn, Indeed, Upwork).`, url: null },
  { text: `United Nations, "Goal 4," "Goal 8" and "Goal 9," Sustainable Development Goals.`, url: "https://sdgs.un.org/goals" },
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
