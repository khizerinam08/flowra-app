"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import MetalButton from "@/components/MetalButton";
import MetaballBackground from "@/components/MetaballBackground";

/* ─── Team data ─── */
const team = [
  { name: "Muhammad Waleed", role: "Product Owner", num: "01" },
  { name: "Furqan Basra", role: "Scrum Master", num: "02" },
  { name: "Muhammad Anas", role: "QA Tester", num: "03" },
  { name: "Muhammad Faizan Anwar", role: "Developer", num: "04" },
  { name: "Zarsham Waleed", role: "Developer", num: "05" },
  { name: "Haleema Imran", role: "Developer", num: "06" },
];

const metrics = [
  { role: "Developer", metric: "PRs, Commits, Code Reviews", source: "GitHub / GitLab" },
  { role: "Project Manager", metric: "Sprint Velocity, Blockers Cleared", source: "Jira / Slack" },
  { role: "Marketing", metric: "Campaign Updates, Deliveries", source: "Telegram / Drive" },
  { role: "QA / Tester", metric: "Defect Reports, Regression Tests", source: "Jira / Codebase" },
];

/* ─── Navbar ─── */
function Navbar() {
  const [menu, setMenu] = useState(null);
  return (
    <header style={{ position: "fixed", top: 32, left: "50%", transform: "translateX(-50%)", zIndex: 100, width: "95%", maxWidth: 1400 }}>
      <div
        onMouseLeave={() => setMenu(null)}
        style={{ display: "flex", height: 72, alignItems: "center", justifyContent: "space-between", padding: "0 32px", background: "rgba(9,10,13,0.6)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 9999, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
      >
        {/* Left links */}
        <div style={{ display: "flex", gap: 32, height: "100%", alignItems: "center" }}>
          {["Overview", "Features", "Team"].map((item, i) => (
            <motion.span key={item} initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 + i * 0.15 }}
              onMouseEnter={() => setMenu(item)}
              style={{ fontSize: 14, fontWeight: 500, color: menu === item ? "#fff" : "rgba(255,255,255,0.7)", cursor: "pointer", transition: "color 0.2s" }}>
              {item}
            </motion.span>
          ))}
        </div>

        {/* Center logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", fontFamily: "'Outfit', sans-serif", fontSize: "1.7rem", fontWeight: 700, color: "#fff", letterSpacing: "-1px" }}>
          Flowra
        </motion.div>

        {/* Right */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {["Metrics", "Execution"].map((item, i) => (
            <motion.span key={item} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.75 + i * 0.15 }}
              style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.7)", cursor: "pointer" }}>
              {item}
            </motion.span>
          ))}
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }}>
            <MetalButton variant="outline" background="#ffffff" style={{ padding: "8px 20px", fontSize: 14 }}>
              Group 3 ↗
            </MetalButton>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <div style={{ padding: "0 16px 16px" }}>
      <section style={{ position: "relative", width: "100%", borderRadius: "3.5rem", background: "#000", color: "#fff", padding: "144px 24px 80px", overflow: "hidden", minHeight: "95vh", display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}>

        {/* Green atmosphere */}
        <div style={{ position: "absolute", top: "-20%", left: "-10%", width: 1200, height: 1200, borderRadius: "50%", background: "radial-gradient(circle at center, #1a3b32 0%, transparent 60%)", filter: "blur(100px)", opacity: 0.6, pointerEvents: "none" }} />
        <motion.div initial={{ opacity: 0.4, x: -20 }} animate={{ opacity: 0.6, x: 20 }} transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          style={{ position: "absolute", top: "-30%", left: "-5%", width: 600, height: 900, background: "linear-gradient(135deg, transparent, #2d5e46, transparent)", filter: "blur(80px)", opacity: 0.5, pointerEvents: "none" }} />

        {/* Grid overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize: "110px 110px", maskImage: "radial-gradient(ellipse at top left, black 50%, transparent 90%)", pointerEvents: "none" }} />

        {/* Hero content */}
        <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 48, textAlign: "center", maxWidth: 900, marginBottom: 112 }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <motion.h1
              initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(3.5rem,7vw,6.8rem)", fontWeight: 500, letterSpacing: "-3px", lineHeight: 0.92, background: "linear-gradient(to bottom, #fff 0%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.7) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Automate your<br />Agile. Completely.
            </motion.h1>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 48 }}>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }}
              style={{ maxWidth: 480, fontSize: "1.15rem", color: "#9CA3AF", lineHeight: 1.7, fontWeight: 400 }}>
              AI agents that listen, verify, and synchronize your Jira board in real-time—so your team can focus on building, not updating tickets.
            </motion.p>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1.3 }}>
              <MetalButton style={{ height: 60, padding: "0 36px", fontSize: "1.05rem" }}>
                SE Project Proposal ↗
              </MetalButton>
            </motion.div>
          </div>
        </div>

        {/* Dashboard mockup */}
        <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 1.6, ease: "circOut" }}
          style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 1280 }}>
          <div style={{ position: "relative", width: "100%", borderRadius: "3rem", border: "1px solid rgba(255,255,255,0.06)", background: "#090909", padding: "48px", overflow: "hidden", minHeight: 680, boxShadow: "0 25px 50px rgba(0,0,0,0.8)" }}>

            {/* Dashboard header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 56 }}>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem", fontWeight: 500, color: "#fff" }}>Dashboard</div>
              <div style={{ display: "flex", gap: 12 }}>
                {["Overview", "Sprints", "Analytics"].map(tab => (
                  <button key={tab} style={{ padding: "8px 20px", borderRadius: 9999, background: tab === "Overview" ? "rgba(243,244,246,1)" : "transparent", color: tab === "Overview" ? "#000" : "#6B7280", border: "none", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>{tab}</button>
                ))}
              </div>
            </div>

            {/* Dashboard content grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
              {/* Jira sync card */}
              <div style={{ gridColumn: "span 2", borderRadius: 36, background: "#101010", padding: 32, minHeight: 280, position: "relative", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #27272a, #101010)", opacity: 0.4 }} />
                <div style={{ position: "relative", zIndex: 2 }}>
                  <div style={{ fontSize: 14, color: "#6B7280", marginBottom: 12 }}>Jira Sync Status</div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "3.8rem", fontWeight: 500, color: "#F3F4F6", letterSpacing: "-2px", lineHeight: 1 }}>100%</div>
                  <div style={{ fontSize: 13, color: "#4B5563", marginTop: 8 }}>Board Accuracy</div>
                  <div style={{ display: "flex", gap: 32, marginTop: 40 }}>
                    {[{ v: "6", l: "Integrations" }, { v: "15+", l: "User Stories" }, { v: "3", l: "Sprints" }].map(s => (
                      <div key={s.l}>
                        <div style={{ fontSize: 20, color: "#D1D5DB", fontWeight: 600 }}>{s.v}</div>
                        <div style={{ fontSize: 12, color: "#4B5563", marginTop: 4 }}>{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Chart card */}
              <div style={{ borderRadius: 36, background: "#101010", border: "1px solid rgba(255,255,255,0.04)", padding: 32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 280 }}>
                <div style={{ fontSize: 14, color: "#52525B", marginBottom: 24 }}>Sprint Velocity</div>
                <svg width="140" height="140" style={{ transform: "rotate(-90deg)" }}>
                  <circle cx="70" cy="70" r="56" stroke="#161616" strokeWidth="20" fill="none" />
                  <circle cx="70" cy="70" r="56" stroke="#10B981" strokeWidth="20" fill="none" strokeDasharray="351" strokeDashoffset="87" strokeLinecap="round" />
                  <circle cx="70" cy="70" r="56" stroke="#8B5CF6" strokeWidth="20" fill="none" strokeDasharray="351" strokeDashoffset="280" strokeLinecap="round" />
                </svg>
                <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
                  {[{ c: "#10B981", l: "Completed", p: "75%" }, { c: "#8B5CF6", l: "In Review", p: "25%" }].map(x => (
                    <div key={x.l} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#6B7280" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: x.c }} />
                      <span style={{ flex: 1 }}>{x.l}</span>
                      <span style={{ color: "#9CA3AF" }}>{x.p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div style={{ position: "absolute", bottom: 48, left: 48, display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#fff", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>↓</div>
              Scroll
            </div>

            {/* Toggle */}
            <div style={{ position: "absolute", bottom: 48, right: 48, background: "#18181A", borderRadius: 9999, padding: 6, display: "flex", border: "1px solid rgba(255,255,255,0.08)" }}>
              <button style={{ padding: "10px 28px", borderRadius: 9999, background: "#fff", color: "#000", border: "none", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>Personal</button>
              <button style={{ padding: "10px 28px", borderRadius: 9999, background: "transparent", color: "#9CA3AF", border: "none", fontSize: 13, cursor: "pointer" }}>Business</button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

/* ─── ScrollStory ─── */
function ScrollStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [150, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [300, -150]);

  const steps = [
    { num: "01", color: "#A78BFA", bg: "rgba(167,139,250,0.1)", border: "rgba(167,139,250,0.2)", title: "Connect & Listen", desc: "Link Jira, GitHub, Slack, Discord and Telegram. Flowra's agents run silently in the background, listening to every commit, PR, and standup message." },
    { num: "02", color: "#34D399", bg: "rgba(52,211,153,0.1)", border: "rgba(52,211,153,0.2)", title: "Verify with Proof", desc: 'When a developer says "Done with the API," Flowra checks GitHub for the actual commits and PRs — not just their word for it. Real proof of work.' },
    { num: "03", color: "#60A5FA", bg: "rgba(96,165,250,0.1)", border: "rgba(96,165,250,0.2)", title: "Approve & Sync", desc: "Flowra suggests a card move on the dashboard. The PM approves it with one click. Jira updates instantly, staying 100% accurate — automatically." },
  ];

  return (
    <div style={{ padding: "0 16px 16px" }}>
      <section ref={containerRef} style={{ position: "relative", width: "100%", borderRadius: "3.5rem", background: "#000", color: "#fff", padding: "128px 24px", overflow: "hidden", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 1000, height: 1000, background: "radial-gradient(circle at center, rgba(139,92,246,0.05) 0%, transparent 60%)", filter: "blur(100px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, width: 800, height: 800, background: "radial-gradient(circle at center, rgba(52,211,153,0.04) 0%, transparent 60%)", filter: "blur(100px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, padding: "0 48px" }}>
          {/* Sticky left */}
          <div style={{ position: "sticky", top: 160, height: "fit-content" }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(3rem,5vw,5rem)", fontWeight: 700, lineHeight: 0.9, letterSpacing: "-3px", marginBottom: 32 }}>
              Agile moves<br />
              <span style={{ background: "linear-gradient(to right, #A78BFA, #60A5FA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>differently.</span>
            </h2>
            <p style={{ color: "#6B7280", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: 48, fontWeight: 500 }}>
              We&apos;ve re-engineered how Agile state flows. Eliminate the overhead of manual board updates and execute project synchronization in real-time.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
                <div style={{ width: "100%", height: "100%", background: "#10B981", borderRadius: "50%", animation: "pulse 2s infinite", boxShadow: "0 0 20px rgba(16,185,129,0.5)" }} />
              </div>
              <div style={{ width: 56, height: 56, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
                <div style={{ width: "100%", height: "100%", background: "#8B5CF6", borderRadius: "50%", opacity: 0.6 }} />
              </div>
            </div>
          </div>

          {/* Scrolling steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: 128, paddingTop: 40, paddingBottom: 80 }}>
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px", once: true }} transition={{ duration: 0.8 }}
                style={{ position: "relative", borderRadius: "2rem", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.01)", padding: "56px", overflow: "hidden" }}>
                <div style={{ position: "absolute", right: -24, bottom: -40, fontFamily: "'Outfit', sans-serif", fontSize: "min(18rem, 30vw)", fontWeight: 900, color: "rgba(255,255,255,0.015)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>{step.num}</div>
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 12px", borderRadius: 9999, background: step.bg, border: `1px solid ${step.border}`, color: step.color, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 24 }}>
                    Step {["One", "Two", "Three"][i]}
                  </div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2.5rem", fontWeight: 500, color: "#fff", marginBottom: 16, lineHeight: 1.1, letterSpacing: "-1px" }}>{step.title}</h3>
                  <p style={{ color: "#9CA3AF", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 380 }}>{step.desc}</p>
                </div>
                {/* floating decoration */}
                <motion.div style={{ y: i % 2 === 0 ? y1 : y2, position: "absolute", right: -32, top: -64, width: 192, height: 192, borderRadius: 24, background: "#050505", border: "1px solid rgba(255,255,255,0.08)", padding: 20, display: "flex", flexDirection: "column", justifyContent: "flex-end", zIndex: 20, overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, right: 0, width: 96, height: 96, background: `${step.color}33`, filter: "blur(30px)" }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[1, 0.7, 0.5].map((w, j) => (
                      <div key={j} style={{ height: 6, width: `${w * 100}%`, background: `linear-gradient(to right, ${step.color}, transparent)`, borderRadius: 9999 }} />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Features (Bento, light bg) ─── */
function Features() {
  const ref = useRef(null);

  const feats = [
    { col: 2, title: "Intelligent Jira Automation", desc: "Automatic card movement based on verified task completion. Approval-first sync — changes pushed only after PM review.", visual: "bars" },
    { col: 1, title: "Privacy & Security", desc: "OAuth 2.0 with role-based access control. End-to-end encrypted cloud storage.", visual: "shield" },
    { col: 1, title: "Chat Signal Listening", desc: "Discord, Slack & Telegram bots monitoring standups for 'Done' signals and task mentions.", visual: "dots" },
    { col: 2, title: "Source-of-Truth Verification", desc: "GitHub / GitLab integration checking commits and PRs. Technical audit verifying code meets Jira ticket requirements.", visual: "rings" },
  ];

  return (
    <div style={{ padding: "0 16px 16px" }}>
      <section style={{ position: "relative", width: "100%", borderRadius: "3.5rem", background: "#FFFFFF", color: "#000", padding: "80px 24px 128px", overflow: "hidden", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)" }}>
        {/* Topographic Background */}
        <MetaballBackground backgroundColor="#FFFFFF" color="#1A1A1A" dotCount={15} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 9999, border: "1px solid #e5e7eb", background: "#fff", boxShadow: "0 1px 4px rgba(0,0,0,0.04)", marginBottom: 24 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981", animation: "pulse 2s infinite" }} />
              <span style={{ fontSize: 14, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>Core Capabilities</span>
            </div>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(3rem,5vw,5rem)", fontWeight: 500, letterSpacing: "-3px", lineHeight: 1, color: "#000" }}>
              Engineered<br /><span style={{ color: "#9CA3AF" }}>for every sprint.</span>
            </h2>
          </motion.div>

          <div ref={ref} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, gridAutoRows: 350 }}>
            {feats.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ scale: 0.98 }}
                style={{ gridColumn: `span ${f.col}`, position: "relative", borderRadius: 32, background: "#fff", border: "1px solid #f3f4f6", boxShadow: "0 4px 30px rgba(0,0,0,0.03)", padding: 40, overflow: "hidden", cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                {/* Visuals */}
                {f.visual === "bars" && (
                  <div style={{ position: "absolute", inset: 0, top: 0, paddingTop: 64, display: "flex", alignItems: "flex-start", justifyContent: "center", gap: 8, opacity: 0.3 }}>
                    {[...Array(12)].map((_, j) => (
                      <motion.div key={j} animate={{ height: ["20%", "70%", "30%", "60%", "20%"] }} transition={{ duration: 2, repeat: Infinity, delay: j * 0.1, ease: "easeInOut" }}
                        style={{ width: 16, background: "linear-gradient(to top, #10B981, #34D399)", borderRadius: 4, minHeight: 20 }} />
                    ))}
                  </div>
                )}
                {f.visual === "shield" && (
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: 80 }}>
                    <div style={{ width: 96, height: 96, borderRadius: "50%", border: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    </div>
                  </div>
                )}
                {f.visual === "dots" && (
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: "50%", marginTop: 48, padding: "0 48px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, opacity: 0.5 }}>
                    {[...Array(16)].map((_, j) => (
                      <motion.div key={j} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 3, repeat: Infinity, delay: j * 0.2 }}
                        style={{ borderRadius: 8, background: j % 3 === 0 ? "#e5e7eb" : j % 5 === 0 ? "rgba(59,130,246,0.3)" : "rgba(29,78,216,0.1)" }} />
                    ))}
                  </div>
                )}
                {f.visual === "rings" && (
                  <div style={{ position: "absolute", right: 40, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                    <div style={{ position: "relative", width: 192, height: 192 }}>
                      <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid #e5e7eb" }} />
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", inset: 16, borderRadius: "50%", borderTop: "2px solid #10B981", borderLeft: "2px solid transparent", borderRight: "2px solid transparent", borderBottom: "2px solid transparent" }} />
                      <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", inset: 32, borderRadius: "50%", borderBottom: "2px solid #60A5FA", borderRight: "2px solid transparent", borderTop: "2px solid transparent", borderLeft: "2px solid transparent" }} />
                      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: 10, color: "#9CA3AF", fontWeight: 700, letterSpacing: "0.2em" }}>LIVE</span>
                        <span style={{ fontFamily: "monospace", fontWeight: 700, color: "#000", marginTop: 4 }}>SYNC</span>
                      </div>
                    </div>
                  </div>
                )}
                <div style={{ position: "relative", zIndex: 1 }}>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.5rem", fontWeight: 500, marginBottom: 12, color: "#000" }}>{f.title}</h3>
                  <p style={{ color: "#6B7280", fontWeight: 500 }}>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Team (dark rounded card) ─── */
function Team() {
  return (
    <div style={{ padding: "0 16px 16px" }}>
      <section style={{ position: "relative", width: "100%", borderRadius: "3.5rem", background: "#000", color: "#fff", padding: "80px 48px 48px", overflow: "hidden", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(ellipse at top, rgba(16,185,129,0.05) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(3rem,5vw,4.5rem)", fontWeight: 700, letterSpacing: "-3px", marginBottom: 48 }}>
            Our Team
          </motion.h2>
          {team.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 32px", position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.07)", cursor: "default" }}
              className="team-row">
              <style>{`.team-row:hover .team-overlay { height: 100% !important; }`}</style>
              <div className="team-overlay" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "100%", height: "0%", background: "#0077ff", transition: "height 0.5s cubic-bezier(0.4,0,0.2,1)", zIndex: 0 }} />
              <div style={{ display: "flex", gap: "3vw", alignItems: "baseline", position: "relative", zIndex: 2 }}>
                <span style={{ fontWeight: 700, fontSize: "1.2rem", opacity: 0.3 }}>{m.num}</span>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.5rem" }}>{m.name}</span>
              </div>
              <span style={{ fontSize: "1rem", opacity: 0.6, position: "relative", zIndex: 2 }}>{m.role}</span>
            </motion.div>
          ))}
          <p style={{ textAlign: "center", padding: "32px", opacity: 0.4, fontStyle: "italic", fontSize: "0.9rem" }}>
            Scrum roles rotate across all 3 sprints — ensuring every team member gains comprehensive agile experience.
          </p>
        </div>
      </section>
    </div>
  );
}

/* ─── Metrics (light) ─── */
function Metrics() {
  return (
    <div style={{ padding: "0 16px 16px" }}>
      <section style={{ position: "relative", width: "100%", borderRadius: "3.5rem", background: "#FFFFFF", color: "#000", padding: "80px 48px 80px", overflow: "hidden" }}>
        {/* Topographic Background */}
        <MetaballBackground backgroundColor="#FFFFFF" color="#1A1A1A" dotCount={10} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 48 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 9999, border: "1px solid #e5e7eb", background: "#fff", marginBottom: 24 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#8B5CF6" }} />
              <span style={{ fontSize: 14, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>Analytics</span>
            </div>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem,4vw,4rem)", fontWeight: 500, letterSpacing: "-2px", color: "#000" }}>
              Performance<br /><span style={{ color: "#9CA3AF" }}>Metrics Matrix</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            style={{ background: "#FFFFFF", borderRadius: 32, border: "1px solid #f3f4f6", boxShadow: "0 4px 30px rgba(0,0,0,0.03)", padding: "48px", overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
                  {["Role", "Metric Tracked", "Verification Source"].map(h => (
                    <th key={h} style={{ padding: "16px 24px", textAlign: "left", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#10B981" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {metrics.map((row, i) => (
                  <motion.tr key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    style={{ borderBottom: "1px solid #f3f4f6" }}>
                    <td style={{ padding: "20px 24px", fontWeight: 700, color: "#000" }}>{row.role}</td>
                    <td style={{ padding: "20px 24px", color: "#6B7280" }}>{row.metric}</td>
                    <td style={{ padding: "20px 24px", color: "#6B7280" }}>{row.source}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ─── User Roles ─── */
function UserRoles() {
  const roles = [
    { icon: "👨‍💻", title: "Developers", desc: "Track GitHub PRs, commits, and Slack activity without manual overhead. AI verification of 'Done' claims against real codebase changes.", color: "#10B981" },
    { icon: "📊", title: "Project Managers", desc: "Dashboard-driven approvals of AI-suggested Jira card movements. Sprint velocity analytics and team performance evaluation.", color: "#8B5CF6" },
    { icon: "🧪", title: "QA Testers", desc: "End-to-end traceability connecting codebase updates with bug reports. Regression test tracking via Jira and codebase analysis.", color: "#60A5FA" },
  ];
  return (
    <div style={{ padding: "0 16px 16px" }}>
      <section style={{ position: "relative", width: "100%", borderRadius: "3.5rem", background: "#000", color: "#fff", padding: "80px 48px", overflow: "hidden", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.5rem,4vw,4rem)", fontWeight: 500, letterSpacing: "-2px", marginBottom: 16 }}>
            3 Distinct User Roles
          </motion.h2>
          <p style={{ color: "#9CA3AF", fontSize: "1.1rem", marginBottom: 48 }}>Each with distinct workflows generating 5+ user stories — 15+ total minimum for the product backlog.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {roles.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ scale: 0.98 }}
                style={{ borderRadius: 32, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.01)", padding: 40, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(to right, ${r.color}, transparent)` }} />
                <div style={{ fontSize: "2.5rem", marginBottom: 20 }}>{r.icon}</div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.4rem", fontWeight: 500, marginBottom: 12, color: "#fff" }}>{r.title}</h3>
                <p style={{ color: "#9CA3AF", lineHeight: 1.7, fontSize: "0.95rem" }}>{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── CTA ─── */
function CTA() {
  return (
    <div style={{ padding: "0 16px 16px" }}>
      <section style={{ position: "relative", width: "100%", borderRadius: "3.5rem", background: "#030405", color: "#fff", padding: "160px 24px", overflow: "hidden", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "100%", height: "100%", background: "radial-gradient(circle at center, rgba(16,185,129,0.15) 0%, transparent 50%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", zIndex: 10 }}>
          <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(3rem,7vw,6.5rem)", fontWeight: 500, letterSpacing: "-4px", lineHeight: 0.9, marginBottom: 40 }}>
            Build More.<br /><span style={{ color: "#10B981" }}>Admin Less.</span>
          </motion.h2>
          <motion.p initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontSize: "1.2rem", color: "#9CA3AF", maxWidth: 560, marginBottom: 64, lineHeight: 1.7 }}>
            Flowra turns the tedious &quot;Work about Work&quot; into an automated background process. Your team focuses on building. AI handles Agile synchronization.
          </motion.p>
          
          <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <MetalButton style={{ height: 72, padding: "0 48px", fontSize: "1.2rem" }}>
              Thank You — Q&amp;A ↗
            </MetalButton>
          </motion.div>
          <div style={{ marginTop: 48, display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            {["Group 3", "Section C", "SE Project 2026"].map(tag => (
              <span key={tag} style={{ padding: "10px 24px", borderRadius: 9999, border: "1px solid rgba(255,255,255,0.1)", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <div style={{ padding: "0 16px 16px" }}>
      <footer style={{ width: "100%", borderRadius: "0 0 2rem 2rem", background: "#fff", color: "#111", padding: "64px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #f3f4f6" }}>
        <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem", fontWeight: 900, letterSpacing: "-2px" }}>Flowra</div>
        <div style={{ display: "flex", gap: 32, fontSize: 14, fontWeight: 500, color: "rgba(0,0,0,0.5)" }}>
          {["Group 3", "Section C", "SE 2026", "Agile AI"].map(l => (
            <span key={l} style={{ cursor: "pointer", transition: "color 0.2s" }}>{l}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}

/* ─── Page ─── */
export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh", background: "#fff", overflowX: "hidden" }}>
      <Navbar />
      <motion.div initial={{ y: "100vh" }} animate={{ y: 0 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
        <Hero />
        <ScrollStory />
        <Features />
        <Team />
        <UserRoles />
        <Metrics />
        <CTA />
        <Footer />
      </motion.div>
    </main>
  );
}
