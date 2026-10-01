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
            <div style={{ ...label, color: "#9CA3AF" }}>FYDP-I · October 2026</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: 120, fontWeight: 500, letterSpacing: "-5px", lineHeight: 0.92, color: "#000", marginTop: 12 }}>
              <Words text="Career" /><span style={{ color: BLUE }}><Words text="Konnect" delay={200} /></span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p style={{ marginTop: 26, fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 400, letterSpacing: "-0.6px", lineHeight: 1.3, color: "#6B7280", maxWidth: 640 }}>
              Bridging the gap between <span style={{ color: "#000" }}>fresh graduates and employers</span> in Pakistan.
            </p>
          </Reveal>
          <Reveal delay={0.26} style={{ marginTop: 56, display: "grid", gridTemplateColumns: "auto auto", columnGap: 56, rowGap: 10, justifyContent: "start" }}>
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

/* ─── 02 · The Crisis: Pakistan unemployment, in four numbers ─── */
export function StatsSlide() {
  const stats = [
    { n: "7.1%", what: "overall unemployment rate in Pakistan", note: "Labour Force Survey 2024–25", source: "Pakistan Bureau of Statistics — Labour Force Survey 2024–25", url: "https://www.pbs.gov.pk/wp-content/uploads/2020/07/LFS-2024-25-Annual-Report.pdf", r: 1 },
    { n: "5.9M", what: "people unemployed across the country", note: "5.9 million working-age adults actively seeking work", source: "Pakistan Bureau of Statistics — Labour Force Survey 2024–25", url: "https://www.pbs.gov.pk/wp-content/uploads/2020/07/LFS-2024-25-Annual-Report.pdf", r: 1 },
    { n: "12.6%", what: "youth unemployment among ages 15–24", note: "The most affected age group in the workforce", source: "Pakistan Bureau of Statistics — Labour Force Survey 2024–25", url: "https://www.pbs.gov.pk/wp-content/uploads/2020/07/LFS-2024-25-Annual-Report.pdf", r: 1 },
    { n: "10.9%", what: "unemployment among degree holders", note: "A degree alone is no longer enough", source: "Pakistan Bureau of Statistics — Labour Force Survey 2024–25", url: "https://www.pbs.gov.pk/wp-content/uploads/2020/07/LFS-2024-25-Annual-Report.pdf", r: 1 },
  ];
  return (
    <SlideFrame theme="light">
      <Layout title="A degree is not enough." sub="Pakistan's employment crisis in numbers." gap={36} middle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {stats.map((s, i) => (
            <Reveal key={s.n} delay={0.15 + i * 0.1} y={24}>
              <Panel style={{ padding: "26px 32px 22px", minHeight: 250 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
                  <div style={{ flex: "none", width: 220, fontFamily: "var(--font-display)", fontSize: 80, fontWeight: 600, letterSpacing: "-3px", lineHeight: 1, color: BLUE }}>
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

/* ─── 03 · The Gap: two sides of the same problem ─── */
export function GapSlide() {
  return (
    <SlideFrame theme="light">
      <Layout title="Two sides of" sub="the same problem." gap={44} middle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <Reveal delay={0.12} y={24}>
            <Panel style={{ minHeight: 420, padding: "40px 42px" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 600, color: BLUE }}>The Graduate</div>
              <h3 style={{ marginTop: 16, fontFamily: "var(--font-display)", fontSize: 46, fontWeight: 600, letterSpacing: "-1.4px", lineHeight: 1.08 }}>Has a degree, no direction</h3>
              <ul style={{ marginTop: "auto", paddingTop: 22, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Sends the same resume to every opening",
                  "No idea what a company actually wants",
                  "Has never sat in a real interview",
                  "No safe place to practise",
                ].map((t) => (
                  <li key={t} style={{ fontSize: 24, lineHeight: 1.35, color: BODY, paddingLeft: 22, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: 13, width: 8, height: 8, borderRadius: 2, background: "#EF4444" }} />
                    {t}
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>
          <Reveal delay={0.24} y={24}>
            <Panel style={{ minHeight: 420, padding: "40px 42px" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 600, color: BLUE }}>The Employer</div>
              <h3 style={{ marginTop: 16, fontFamily: "var(--font-display)", fontSize: 46, fontWeight: 600, letterSpacing: "-1.4px", lineHeight: 1.08 }}>Needs talent, can&apos;t find it</h3>
              <ul style={{ marginTop: "auto", paddingTop: 22, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Small startups can't afford expensive sourcing",
                  "No efficient way to reach qualified graduates",
                  "Resumes don't reflect real capability",
                  "Hiring is slow and unstructured",
                ].map((t) => (
                  <li key={t} style={{ fontSize: 24, lineHeight: 1.35, color: BODY, paddingLeft: 22, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: 13, width: 8, height: 8, borderRadius: 2, background: "#EF4444" }} />
                    {t}
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>
        </div>
        <Reveal delay={0.4} style={{ marginTop: 40 }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: 38, lineHeight: 1.25, color: INK, fontWeight: 500, letterSpacing: "-0.8px", textAlign: "center" }}>
            The gap is not effort or qualification. <span style={{ color: BLUE }}>It is exposure.</span>
          </p>
        </Reveal>
      </Layout>
    </SlideFrame>
  );
}
