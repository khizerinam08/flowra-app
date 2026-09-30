"use client";

import { createContext, useContext } from "react";
import { motion } from "framer-motion";

/* ready: the loader portal has opened, so entrance animations can play.
   print: static render for PDF export; no animation, everything visible.
   still: presenter without transitions (?instant); the slide appears as it will print. */
export const DeckContext = createContext({ ready: true, print: false, still: false });

export const useDeck = () => useContext(DeckContext);

export function Reveal({ children, delay = 0, y = 24, x = 0, scale = 1, style, className }) {
  const { ready, print, still } = useDeck();
  if (print || still) return <div style={style} className={className}>{children}</div>;
  const hidden = { opacity: 0, y, x, scale };
  return (
    <motion.div
      initial={hidden}
      animate={ready ? { opacity: 1, y: 0, x: 0, scale: 1 } : hidden}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}
