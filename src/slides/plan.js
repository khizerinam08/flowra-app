"use client";

import { Reveal } from "@/components/deck/DeckContext";
import { SlideFrame, Layout, Panel, BLUE, INK, BODY, MUTED } from "@/components/deck/ui";
import Mermaid from "@/components/deck/Mermaid";

/* ─── 09 · Tech Stack: what powers the platform ─── */
export function TechStackSlide() {
  const layers = [
    {
      area: "Frontend & Mobile",
      items: [
        ["Next.js 16 + React 19", "App Router, SSR, Clerk middleware"],
        ["Expo Mobile App", "Cross-platform native experience"],
        ["Cloudflare Edge", "DNS, proxy, WAF, bot protection"],
      ],
    },
    {
      area: "Backend & Data",
      items: [
        ["FastAPI (Python)", "30 modules, 18 services, 38 tables"],
        ["Neon Postgres", "System of record, Alembic migrations"],
        ["Pinecone", "RAG memory for resume matching"],
      ],
    },
    {
      area: "AI, Voice & Media",
      items: [
        ["LLM Providers", "DeepSeek, OpenAI, Gemini"],
        ["Daily.co + Deepgram + ElevenLabs", "Live interview runtime via Pipecat"],
        ["Cloudflare Stream + R2", "Video delivery and file storage"],
      ],
    },
  ];
  return (
    <SlideFrame theme="light">
      <Layout title="Built to scale." sub="The technology behind CareerKonnect." gap={44} middle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {layers.map((l, i) => (
            <Reveal key={l.area} delay={0.12 + i * 0.1} y={24}>
              <Panel style={{ minHeight: 460, padding: "38px 36px" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 600, color: BLUE, marginBottom: 28 }}>{l.area}</div>
                {l.items.map(([tech, note], j) => (
                  <div key={tech} style={{ paddingTop: j ? 18 : 0, paddingBottom: 18, borderTop: j ? "1px solid #EEF2F6" : "none" }}>
                    <div style={{ fontSize: 27, fontWeight: 600, color: INK }}>{tech}</div>
                    <div style={{ marginTop: 4, fontSize: 20, lineHeight: 1.3, color: BODY }}>{note}</div>
                  </div>
                ))}
              </Panel>
            </Reveal>
          ))}
        </div>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 10 · Architecture ─── */
const ARCH_PLATFORM = `flowchart TB
  WEB["Web Browser"] --> CF["Cloudflare Edge"]
  APP["Expo Mobile"] --> CF
  CF --> CKWEB["ck-web: Next.js 16 + React 19"]
  CKWEB --> API["ck-api: FastAPI, 30 modules"]
  API --> INT["Interview Runtime: Pipecat"]
  API --> DB["Neon Postgres"]
  API --> R2["Cloudflare R2"]
  API --> PINE["Pinecone RAG"]
  API --> CLERK["Clerk Auth"]
`;

const ARCH_AI = `flowchart TB
  INT["Interview Runtime"] --> LLM["LLM Providers: DeepSeek, OpenAI, Gemini"]
  INT --> DAILY["Daily.co WebRTC"]
  INT --> VOICE["Deepgram + ElevenLabs"]
  API["ck-api"] --> LLM
  API --> STREAM["Cloudflare Stream"]
  GH["GitHub Actions CI"] --> DEPLOY["Dokploy Deployment"]
  DEPLOY --> WORKERS["Worker Callbacks"]
  DEPLOY --> SENTRY["Sentry Observability"]
`;

export function ArchitectureSlide() {
  const head = { fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 600, color: BLUE, marginBottom: 6 };
  return (
    <SlideFrame theme="light">
      <Layout title="Platform architecture:" sub="self-hosted, AI-powered, observable." gap={30} middle
        cite="Self-hosted containers on Dokploy. Region is selected from the browser hostname.">
        <Reveal delay={0.15}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 100px 1fr", alignItems: "center", gap: 0 }}>
            <Panel style={{ padding: "18px 22px" }}>
              <div style={head}>1 · Application Platform</div>
              <Mermaid chart={ARCH_PLATFORM} label="Web and mobile clients connect through Cloudflare edge to the Next.js frontend and FastAPI backend, with Neon Postgres, Pinecone RAG, and Clerk auth." />
            </Panel>
            <div aria-hidden="true" style={{ textAlign: "center", color: BLUE, fontSize: 21, fontWeight: 600 }}>
              +
            </div>
            <Panel style={{ padding: "18px 22px" }}>
              <div style={head}>2 · AI, Voice & Delivery</div>
              <Mermaid chart={ARCH_AI} label="Interview runtime connects to LLM providers, Daily.co for WebRTC, and Deepgram + ElevenLabs for voice. CI/CD through GitHub Actions, Dokploy, and Sentry." />
            </Panel>
          </div>
        </Reveal>
      </Layout>
    </SlideFrame>
  );
}

/* ─── 11 · Timeline ─── */
const START = new Date("2026-09-01").getTime();
const END = new Date("2027-06-01").getTime();
const pos = (d) => ((new Date(d).getTime() - START) / (END - START)) * 100;

export function TimelineSlide() {
  const months = [["Sep", "2026-09-01"], ["Oct", "2026-10-01"], ["Nov", "2026-11-01"], ["Dec", "2026-12-01"], ["Jan", "2027-01-01"], ["Feb", "2027-02-01"], ["Mar", "2027-03-01"], ["Apr", "2027-04-01"], ["May", "2027-05-01"]];
  const rows = [
    ["M1", "Proposal and defence", "All", "2026-09-14", "2026-10-16"],
    ["M2", "Requirements, SRS and wireframes", "Zayyan", "2026-10-05", "2026-11-27"],
    ["M3", "Backend API and auth pipeline", "Khizer", "2026-10-05", "2026-11-27"],
    ["M4", "Company modules and LMS", "Zayyan", "2026-11-16", "2027-01-09"],
    ["M5", "AI interview engine (Pipecat)", "Wajih", "2026-12-14", "2027-01-23"],
    ["M6", "Employer portal and resume pool", "Khizer", "2027-02-02", "2027-03-13"],
    ["M7", "Assessment engine and matching", "Wajih", "2027-02-02", "2027-04-03"],
    ["M8", "Integration testing and evaluation", "All", "2027-03-09", "2027-04-25"],
    ["M9", "Final report and defence", "All", "2027-04-21", "2027-05-30"],
  ];
  const labelW = 470;
  const demo = pos("2027-01-30");
  const today = pos("2026-10-01");
  return (
    <SlideFrame theme="light">
      <Layout title="Nine milestones." sub="From proposal to deployment." gap={34}
        cite="Team planning targets; dates will follow the official defence schedule.">
        <Reveal delay={0.1}>
          <Panel style={{ padding: "50px 30px 20px", position: "relative" }}>
            <div style={{ display: "flex", marginLeft: labelW, position: "relative", height: 28, fontSize: 18, fontWeight: 600, color: MUTED }}>
              {months.map(([m, d]) => <span key={m} style={{ position: "absolute", left: `${pos(d)}%` }}>{m}</span>)}
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: 0, bottom: 0, left: labelW, right: 0, pointerEvents: "none" }}>
                {months.map(([m, d]) => <div key={m} style={{ position: "absolute", top: 0, bottom: 0, left: `${pos(d)}%`, width: 1, background: "#EEF2F6" }} />)}
                <div style={{ position: "absolute", top: 0, bottom: 0, left: `${demo}%`, borderLeft: `2px dashed ${INK}` }} />
                <div style={{ position: "absolute", top: -40, bottom: 0, left: `${today}%`, width: 2, marginLeft: -1, background: BLUE }} />
                <span style={{ position: "absolute", top: -66, left: `${today}%`, transform: "translateX(-50%)", fontSize: 17, fontWeight: 700, color: BLUE, whiteSpace: "nowrap" }}>Today</span>
              </div>
              {rows.map(([m, text, owner, s, e], k) => (
                <div key={m} style={{ display: "flex", alignItems: "center", height: 44, borderTop: "1px solid #F1F5F9" }}>
                  <div style={{ width: labelW, flex: "none", display: "flex", alignItems: "center", gap: 14, fontSize: 21, color: INK }}>
                    <span style={{ flex: "none", width: 42, fontWeight: 700, color: BLUE }}>{m}</span>
                    <span style={{ flex: 1 }}>{text}</span>
                    <span style={{ flex: "none", width: 92, fontSize: 17, color: MUTED }}>{owner === "All" ? "Team" : owner}</span>
                  </div>
                  <div style={{ position: "relative", flex: 1, height: "100%" }}>
                    <div className="fx-grow" style={{ "--d": `${400 + k * 110}ms`, position: "absolute", top: 12, bottom: 12, left: `${pos(s)}%`, width: `${pos(e) - pos(s)}%`, borderRadius: 6, background: BLUE }} />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 14, fontSize: 17, color: BODY, gap: 8, alignItems: "center" }}>
              <span style={{ width: 0, height: 18, borderLeft: `2px dashed ${INK}` }} /> FYDP-I demo
            </div>
          </Panel>
        </Reveal>
      </Layout>
    </SlideFrame>
  );
}
