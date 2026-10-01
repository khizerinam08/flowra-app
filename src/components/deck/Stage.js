"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useDeck } from "./DeckContext";

/* Slides are authored on a fixed 1600×900 canvas and scaled uniformly to fit the
   space under the navbar, so layout is identical on a laptop, a projector or the PDF. */
export const DESIGN_W = 1600;
export const DESIGN_H = 900;

/* Print pages are a fixed 1600×900 with the card inset 16px, so the fit is known up front;
   Chrome's print layout does not re-run ResizeObserver, so it must not depend on measuring. */
const CARD_W = DESIGN_W - 32;
const CARD_H = DESIGN_H - 32;

function PrintStage({ children, padTop, padBottom, padX }) {
  const w = CARD_W - padX * 2;
  const h = CARD_H - padTop - padBottom;
  const k = Math.min(w / DESIGN_W, h / DESIGN_H);
  // zoom, not transform: print pagination uses the unscaled layout box, and a 900px-tall box
  // placed under the navbar would cross the page edge and lose everything past it.
  return (
    <div style={{ position: "absolute", zIndex: 5, top: padTop + (h - DESIGN_H * k) / 2, left: padX + (w - DESIGN_W * k) / 2, width: DESIGN_W * k, height: DESIGN_H * k }}>
      <div style={{ position: "relative", width: DESIGN_W, height: DESIGN_H, zoom: k }}>
        {children}
      </div>
    </div>
  );
}

export default function Stage({ children, padTop = 84, padBottom = 62, padX = 32 }) {
  const { print } = useDeck();
  const Impl = print ? PrintStage : LiveStage;
  return <Impl padTop={padTop} padBottom={padBottom} padX={padX}>{children}</Impl>;
}

function LiveStage({ children, padTop, padBottom, padX }) {
  const ref = useRef(null);
  const [scale, setScale] = useState(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setScale(Math.min(el.clientWidth / DESIGN_W, el.clientHeight / DESIGN_H));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ position: "absolute", top: padTop, bottom: padBottom, left: padX, right: padX, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 5 }}
    >
      <div style={{ position: "relative", flex: "none", width: DESIGN_W * scale, height: DESIGN_H * scale }}>
        <div
          style={{
            position: "absolute", top: 0, left: 0, width: DESIGN_W, height: DESIGN_H,
            transform: `scale(${scale})`, transformOrigin: "0 0",
            visibility: scale ? "visible" : "hidden",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
