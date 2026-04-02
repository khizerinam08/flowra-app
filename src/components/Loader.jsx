"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const FlowLoader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const loaderRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const loader = loaderRef.current;
    if (!container || !loader) return;

    const loadingLetters = container.querySelectorAll(".willem__letter");
    const headingStart = container.querySelector(".willem__h1-start");
    const headingEnd = container.querySelector(".willem__h1-end");
    const mainContent = document.querySelector("#main-content");

    // Force start at the absolute top of the website
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    /* GSAP Timeline */
    const tl = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
      },
      onStart: () => {
        container.classList.remove('is--hidden');
      },
      onComplete: () => {
        document.body.style.overflow = "auto";
        if (onComplete) onComplete();
      }
    });

    timelineRef.current = tl;

    /* 1. Initial Styles (Ensure website content is ready to zoom) */
    if (mainContent) {
      gsap.set(mainContent, { scale: 0.7, opacity: 0, transformOrigin: "center center" });
    }
    gsap.set(loader, { "--portal-radius": "0%" });

    /* 2. Brand Reveal (Letters slide up) */
    tl.from(loadingLetters, {
      yPercent: 100,
      stagger: 0.08,
      duration: 1,
    });

    /* 3. The CIRCULAR MASK HOLE Reveal + WEBSITE SCALE-UP (Dynamic 'from scratch' effect) */
    // Synchronize mask expansion with content zoom-in
    tl.to(loader, {
      "--portal-radius": "150%",
      duration: 2.2,
      ease: "power3.inOut"
    }, "+=0.3"); // Brand pause

    if (mainContent) {
      tl.to(mainContent, {
        scale: 1,
        opacity: 1,
        duration: 2.2,
        ease: "power3.inOut"
      }, "<"); // Perfect sync with mask growth
    }

    /* 4. Branding Disperse (Sync with expansion) */
    tl.to(headingStart, {
      xPercent: -150,
      opacity: 0,
      duration: 1.8,
      ease: "power2.inOut"
    }, "<0.1");

    tl.to(headingEnd, {
      xPercent: 150,
      opacity: 0,
      duration: 1.8,
      ease: "power2.inOut"
    }, "<");

    return () => {
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, [onComplete]);

  return (
    <section ref={containerRef} className="willem-header is--loading is--hidden">
      <div ref={loaderRef} className="willem-loader">
        <div className="willem__h1">
          <div className="willem__h1-start">
            <span className="willem__letter">F</span>
            <span className="willem__letter">L</span>
            <span className="willem__letter">O</span>
          </div>
          <div style={{ width: "0.1em" }} />
          <div className="willem__h1-end">
            <span className="willem__letter">W</span>
            <span className="willem__letter">R</span>
            <span className="willem__letter">A</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowLoader;
