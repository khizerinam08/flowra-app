"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDeck } from "@/components/deck/DeckContext";

/* Flowra's "spaced diamond" team gallery. Avatars are DiceBear "micah" portraits,
   pre-rendered to public/images/team/ by scripts/make-avatars.mjs so nothing loads remotely.
   Slot order: top, top-left, top-right, bottom-left, bottom-right, bottom. */
export const team = [
  { name: "Zayyan Ahmed", role: "Frontend, AI & platform design", avatar: "/images/team/zayyan-ahmed.svg" },
  { name: "Khizer Inam", role: "Backend, infrastructure & DevOps", avatar: "/images/team/khizer-inam.svg" },
  { name: "Wajih Us Sama", role: "AI engine, interviews & assessment", avatar: "/images/team/wajih-us-sama.svg" },
  { name: "Dr. Maajid Maqbool", role: "Advisor", avatar: "/images/team/dr-maajid-maqbool.svg" },
  { name: "Dr. Farzana Jabeen", role: "Co-advisor", avatar: "/images/team/dr-farzana-jabeen.svg" },
];

const TeamGallery = ({ members = team, title = "CK", caption = "TEAM", size = 620 }) => {
  const [hovered, setHovered] = useState(null);
  // Printed and ?instant slides show the centre label at rest, not mid-fade.
  const { print, still } = useDeck();
  const staticLabel = print || still;

  return (
    <div className="team-gallery" style={{ width: size }}>
      {/* 1. Center card */}
      <div className="label-box">
        <AnimatePresence mode="wait">
          {!hovered ? (
            <motion.h1
              key="title"
              initial={staticLabel ? false : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {title}<br /><span style={{ fontSize: "0.5em", opacity: 0.4, letterSpacing: 4, fontWeight: 500 }}>{caption}</span>
            </motion.h1>
          ) : (
            <motion.div key="info" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <motion.h2
                initial={{ opacity: 0, scale: 0, x: -50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0, x: -50 }}
                transition={{ duration: 0.2, ease: "easeInOut", delay: 0.05 }}
                style={{ margin: 0, fontSize: 24, fontWeight: 700, color: "#fff", lineHeight: 1.1 }}
              >
                {hovered.name}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, scale: 0, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0, x: 50 }}
                transition={{ duration: 0.2, ease: "easeInOut", delay: 0.05 }}
                style={{ margin: "6px 0 0", fontSize: 14, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}
              >
                {hovered.role}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 2+. Portraits */}
      {members.map((member) => (
        <div
          key={member.name}
          className="team-avatar-link"
          onMouseEnter={() => setHovered(member)}
          onMouseLeave={() => setHovered(null)}
          title={`${member.name}, ${member.role}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={member.avatar} alt={member.name} />
        </div>
      ))}
    </div>
  );
};

export default TeamGallery;
