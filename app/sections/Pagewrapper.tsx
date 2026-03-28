"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer, { REVEAL_HEIGHT } from "./Footer";
import Navbar from "./Navbar";
import dynamic from "next/dynamic";

const Dither = dynamic(() => import("../components/ui/Dither"), {
  ssr: false,
});

// Register ScrollTrigger only on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type PageWrapperProps = { children: React.ReactNode };

const Pagewrapper = ({ children }: PageWrapperProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // The "Anti-Gravity" shrink effect
      // This moves the animation logic to the GPU via GSAP
      gsap.to(mainRef.current, {
        scale: 0.95,
        // borderRadius: "4px", // Gives a "card" look as it shrinks
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: document.documentElement,
          // Starts shrinking when the bottom of the page enters the viewport
          start: () => `bottom ${window.innerHeight + REVEAL_HEIGHT}px`,
          end: "bottom bottom",
          scrub: true, // Smoothly ties animation to scroll
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className={`min-h-screen font-sans transition-colors duration-700 bg-black text-black overflow-hidden`}
    >
      {/* Pass the ref to Navbar if it needs to track the main container's position */}
      <Navbar containerRef={mainRef} />
      <main
        ref={mainRef}
        className="relative z-20 bg-neutral-0 shadow-[0_-20px_80px_-20px_rgba(0,0,0,0.5)] transition-all duration-150 ease-out will-change-transform overflow-hidden"
        style={{
          marginBottom: `${REVEAL_HEIGHT}px`,
          transformOrigin: "center bottom",
        }}
      >
        {children}
      </main>

      <div className="dither_bg fixed inset-0 w-full h-full z-10">
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.1}
          colorNum={12.2}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
        <Footer />
      </div>
    </div>
  );
};

export default Pagewrapper;
