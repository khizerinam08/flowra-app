"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/deck/DeckContext";
import { SlideFrame, Layout, Panel, BLUE, INK, BODY, MUTED } from "@/components/deck/ui";

const Num = ({ children }) => (
  <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: BLUE }}>{children}</div>
);

/* ─── 04 · Three platforms, three partial solutions ─── */
export function CompetitorsSlide() {
  const competitors = [
    {
      num: "01", type: "Learning Platforms", example: "Coursera, Udemy",
      offers: "Online courses and certifications",
      misses: "No employer feedback on what skills are actually needed. Content is generic, not tied to real hiring.",
    },
    {
      num: "02", type: "Job Portals", example: "LinkedIn, Indeed",
      offers: "Job listings and networking",
      misses: "They say \"fresh grads welcome\" but never explain what the company actually wants from them.",
    },
    {
      num: "03", type: "Freelance Platforms", example: "Upwork, Fiverr",
      offers: "Project-based work marketplace",
      misses: "No guaranteed quality. Workers can't be totally verified. No structured career path.",
    },
  ];
  return (
    <SlideFrame theme="light">
      <Layout title="Three platforms." sub="Each solves part of it." gap={44} middle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {competitors.map((c, i) => (
            <Reveal key={c.type} delay={0.12 + i * 0.1} y={24}>
              <Panel style={{ minHeight: 440, padding: "38px 36px" }}>
                <Num>{c.num}</Num>
                <h3 style={{ marginTop: 12, fontFamily: "var(--font-display)", fontSize: 42, fontWeight: 600, letterSpacing: "-1.2px", lineHeight: 1.08 }}>{c.type}</h3>
                <div style={{ marginTop: 10, fontSize: 20, color: MUTED, fontWeight: 600 }}>{c.example}</div>
                <div style={{ marginTop: 24, padding: "14px 18px", borderRadius: 14, background: "#F0FDF4", fontSize: 22, lineHeight: 1.4, color: "#166534" }}>
                  ✓ {c.offers}
                </div>
                <div style={{ marginTop: 12, padding: "14px 18px", borderRadius: 14, background: "#FEF2F2", fontSize: 22, lineHeight: 1.4, color: "#991B1B" }}>
                  ✗ {c.misses}
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 05 · Comparison table: what each type covers vs what's missing ─── */
export function ComparisonSlide() {
  const tools = ["Coursera", "LinkedIn", "Upwork", "CareerKonnect"];
  const rows = [
    { q: "Industry-backed courses?", v: [["Partial", "Generic content"], ["No", "Not a learning platform"], ["No", "Only project listings"], ["Yes", "Companies create the content"]] },
    { q: "Real interview prep?", v: [["No", "No mock interviews"], ["No", "Tips only, no simulation"], ["No", "Not designed for hiring"], ["Yes", "AI-powered, role-specific"]] },
    { q: "Verified talent pool?", v: [["No", "Certificates ≠ capability"], ["Partial", "Self-reported skills"], ["No", "No skill verification"], ["Yes", "Scenario-based assessment"]] },
    { q: "Direct employer access?", v: [["No", "No employer portal"], ["Partial", "Employers post, hope for fits"], ["Partial", "Employers browse proposals"], ["Yes", "Matched resume pool"]] },
  ];
  const grid = "1.25fr repeat(4, 1fr)";
  const CK_BG = "rgba(30,64,175,0.07)";
  return (
    <SlideFrame theme="light">
      <Layout title="None of them" sub="solve the full problem." gap={36} middle
        cite="CareerKonnect merges learning, preparation, and placement into one platform.">
        <Reveal delay={0.1}>
          <Panel style={{ padding: "8px 28px" }}>
            <div style={{ display: "grid", gridTemplateColumns: grid, alignItems: "center", borderBottom: "2px solid #E2E8F0" }}>
              <div />
              {tools.map((t, j) => (
                <div key={t} style={{ padding: "26px 12px", textAlign: "center", fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 600, color: j === 3 ? BLUE : INK, background: j === 3 ? CK_BG : "transparent", borderRadius: "16px 16px 0 0" }}>{t}</div>
              ))}
            </div>
            {rows.map((r, i) => (
              <div key={r.q} style={{ display: "grid", gridTemplateColumns: grid, alignItems: "stretch", borderBottom: i < rows.length - 1 ? "1px solid #EEF2F6" : "none" }}>
                <div style={{ display: "flex", alignItems: "center", padding: "22px 16px 22px 0", fontSize: 24, fontWeight: 600, lineHeight: 1.25, color: INK }}>{r.q}</div>
                {r.v.map(([yes, why], j) => (
                  <div key={j} style={{ padding: "22px 12px", textAlign: "center", background: j === 3 ? CK_BG : "transparent", borderRadius: i === rows.length - 1 && j === 3 ? "0 0 16px 16px" : 0 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 600, color: yes === "Yes" ? BLUE : yes === "Partial" ? "#D97706" : "#94A3B8" }}>{yes}</div>
                    <div style={{ marginTop: 4, fontSize: 17, lineHeight: 1.3, color: BODY }}>{why}</div>
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

/* ─── 06 · What is CareerKonnect: the three pillars ─── */
export function WhatIsCKSlide() {
  const pillars = [
    { title: "Company Modules", desc: "HR teams create the content students see: how to apply, tailor a resume, and what the interview looks like — straight from the people who hire." },
    { title: "AI Mock Interviews", desc: "Scenario-based questions tailored to the student's resume, target role and company. Scored and explained, not a generic question bank." },
    { title: "Employer Resume Pool", desc: "Verified skill profiles, not self-reported claims. An employer says \"3 full-stack engineers\" and the platform retrieves matching graduates." },
  ];
  return (
    <SlideFrame theme="light">
      <Layout title="One platform." sub="Three things nobody else combines." gap={48} middle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={0.12 + i * 0.1} y={24}>
              <Panel style={{ minHeight: 400, padding: "40px 38px" }}>
                <Num>0{i + 1}</Num>
                <h3 style={{ marginTop: 16, fontFamily: "var(--font-display)", fontSize: 46, fontWeight: 600, letterSpacing: "-1.4px", lineHeight: 1.08 }}>{p.title}</h3>
                <p style={{ marginTop: "auto", paddingTop: 20, fontSize: 25, lineHeight: 1.45, color: BODY }}>{p.desc}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 07 · How it works: a connected workflow ─── */
export function HowItWorksSlide() {
  const steps = [
    ["Onboard", "Student or employer", "Sign up, set your goal and background. The platform shapes your path."],
    ["Learn", "Company-backed modules", "Study content built by the companies that actually hire."],
    ["Practise", "AI mock interviews", "Tailored questions for your resume, role and target company."],
    ["Match", "Resume pool", "Verified skill profiles matched to employer needs automatically."],
    ["Hire", "Direct placement", "Employers recruit from a pool of prepared, assessed graduates."],
  ];
  return (
    <SlideFrame theme="light">
      <Layout title="From sign-up" sub="to placement." gap={40} middle>
        <div style={{ display: "flex", alignItems: "stretch" }}>
          {steps.map(([title, what, plain], i) => (
            <div key={title} style={{ display: "flex", alignItems: "flex-start", flex: 1 }}>
              <Reveal delay={0.1 + i * 0.12} y={20} style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Panel style={{ height: 236, padding: "26px 22px" }}>
                  <Num>Step {i + 1}</Num>
                  <h3 style={{ marginTop: 8, fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 600, letterSpacing: "-0.9px" }}>{title}</h3>
                  <p style={{ marginTop: "auto", fontSize: 20, lineHeight: 1.3, color: MUTED }}>{what}</p>
                </Panel>
                <p style={{ marginTop: 20, padding: "0 6px", fontSize: 22, lineHeight: 1.4, color: INK }}>{plain}</p>
              </Reveal>
              {i < steps.length - 1 && (
                <div aria-hidden="true" style={{ flex: "none", width: 40, height: 236, display: "flex", alignItems: "center", justifyContent: "center", color: BLUE }}>
                  <ArrowRight size={30} strokeWidth={2.6} />
                </div>
              )}
            </div>
          ))}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 08 · Why it's better: six numbered features ─── */
export function WhyBetterSlide() {
  const feats = [
    { title: "Industry-created content", desc: "Courses and modules written by the companies that hire, not generic content writers." },
    { title: "Personalised mock interviews", desc: "AI generates scenario-based questions from your resume, role and target company." },
    { title: "Verified skill profiles", desc: "Students are assessed on demonstrated capability, not self-reported claims." },
    { title: "Direct employer matching", desc: "Companies search a resume pool of prepared graduates filtered by verified skills." },
    { title: "Affordable counselling", desc: "Yearly membership at ~₨6,000 gives ongoing career guidance — 10× cheaper than the market." },
    { title: "One unified platform", desc: "Courses, interviews, job matching, counselling — all in one place instead of five separate tools." },
  ];
  return (
    <SlideFrame theme="light">
      <Layout title="Why CareerKonnect" sub="is different." gap={36} middle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {feats.map((f, i) => (
            <Reveal key={f.title} delay={0.06 + i * 0.06}>
              <Panel style={{ minHeight: 270 }}>
                <Num>0{i + 1}</Num>
                <h3 style={{ marginTop: 12, fontFamily: "var(--font-display)", fontSize: 33, fontWeight: 600, letterSpacing: "-0.7px", lineHeight: 1.1 }}>{f.title}</h3>
                <p style={{ marginTop: 12, fontSize: 22, lineHeight: 1.42, color: BODY }}>{f.desc}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Layout>
    </SlideFrame>
  );
}
