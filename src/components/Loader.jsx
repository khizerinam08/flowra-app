"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const FlowLoader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const loadingLetter = container.querySelectorAll(".willem__letter");
    const box = container.querySelectorAll(".willem-loader__box");
    const growingImage = container.querySelectorAll(".willem__growing-image");
    const headingStart = container.querySelectorAll(".willem__h1-start");
    const headingEnd = container.querySelectorAll(".willem__h1-end");
    const coverImageExtra = container.querySelectorAll(".willem__cover-image-extra");
    const headerLetter = container.querySelectorAll(".willem__letter-white");
    const navLinks = container.querySelectorAll(".willen-nav a, .osmo-credits__p");

    /* GSAP Timeline */
    const tl = gsap.timeline({
      defaults: {
        ease: "expo.inOut",
      },
      onStart: () => {
        container.classList.remove('is--hidden');
      },
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    timelineRef.current = tl;

    /* Start of Timeline */
    if (loadingLetter.length) {
      tl.from(loadingLetter, {
        yPercent: 100,
        stagger: 0.1, // Slightly slower stagger for more punch
        duration: 1.25
      });
    }
    
    if (box.length) {
      tl.fromTo(box, {
        width: "0em",
      },{
        width: "1.2em", // Adjusted for uppercase flow
        duration: 1.25
      }, "< 1.25");
    }

    if (box.length) {
      tl.fromTo(growingImage, {
        width: "0%",
      },{
        width: "100%",
        duration: 1.25
      }, "<");
    }
    
    if (headingStart.length) {
      tl.fromTo(headingStart, {
        x: "0em",
      },{
        x: "-0.1em",
        duration: 1.25
      }, "<");
    }
    
    if (headingEnd.length) {
      tl.fromTo(headingEnd, {
        x: "0em",
      },{
        x: "0.1em",
        duration: 1.25
      }, "<");
    }

    if (coverImageExtra.length) {
      tl.fromTo(coverImageExtra, {
        opacity: 1,
      },{
        opacity: 0,
        duration: 0.05,
        ease: "none",
        stagger: 0.4
      }, "-=0.2");
    }
      
    if (growingImage.length) {
      tl.to(growingImage, {
        width: "100vw",
        height: "100dvh",
        duration: 2
      }, "< 1.25");
    }
    
    if (box.length) {
      tl.to(box, {
        width: "110vw",
        duration: 2
      }, "<");
    }
    
    if (headerLetter.length) {
      tl.from(headerLetter, {
        yPercent: 100,
        duration: 1.25,
        ease: "expo.out",
        stagger: 0.05
      }, "< 1.2");
    }

    if (navLinks.length) {
      tl.from(navLinks, {
        yPercent: 100,
        duration: 1.25,
        ease: "expo.out",
        stagger: 0.1
      }, "<");
    }

    return () => {
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, [onComplete]);

  return (
    <section ref={containerRef} className="willem-header is--loading is--hidden">
      <div className="willem-loader">
        <div className="willem__h1">
          <div className="willem__h1-start">
            <span className="willem__letter">F</span>
            <span className="willem__letter">L</span>
            <span className="willem__letter">O</span>
          </div>
          <div className="willem-loader__box">
            <div className="willem-loader__box-inner">
              <div className="willem__growing-image">
                <div className="willem__growing-image-wrap">
                  <img className="willem__cover-image-extra is--1" src="/images/loader/loader-2.png" loading="lazy" alt="" />
                  <img className="willem__cover-image-extra is--2" src="/images/loader/loader-3.png" loading="lazy" alt="" />
                  <img className="willem__cover-image-extra is--3" src="/images/loader/loader-4.png" loading="lazy" alt="" />
                  <img className="willem__cover-image" src="/images/loader/loader-1.png" loading="lazy" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="willem__h1-end">
            <span className="willem__letter">W</span>
            <span className="willem__letter">R</span>
            <span className="willem__letter">A</span>
          </div>
        </div>
      </div>
      <div className="willem-header__content">
        <div className="willem-header__top">
          <nav className="willen-nav">
            <div className="willem-nav__start">
              <a href="#" className="willem-nav__link">FLOWRA ©</a>
            </div>
            <div className="willem-nav__end">
              <div className="willem-nav__links">
                <a href="#" className="willem-nav__link">Orchestrate,</a>
                <a href="#" className="willem-nav__link">Verify,</a>
                <a href="#" className="willem-nav__link">Sync</a>
              </div>
              <div className="willem-nav__cta">
                <a href="#" className="willem-nav__link">Enter Platform</a>
              </div>
            </div>
          </nav>
        </div>
        <div className="willem-header__bottom">
          <div className="willem__h1">
            <span className="willem__letter-white">F</span>
            <span className="willem__letter-white">L</span>
            <span className="willem__letter-white">O</span>
            <span className="willem__letter-white">W</span>
            <span className="willem__letter-white">R</span>
            <span className="willem__letter-white">A</span>
            <span className="willem__letter-white is--space">©</span>
          </div>
          <p className="osmo-credits__p">Engineered by <span className="osmo-credits__p-a">Flowra Labs</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FlowLoader;
