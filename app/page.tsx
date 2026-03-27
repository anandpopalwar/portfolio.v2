"use client";
// import dynamic from "next/dynamic";

import { useEffect, useRef, useState } from "react";
import Navbar from "./sections/Navbar.jsx";
import ProjectShowcase from "./sections/ProjectShowcase.jsx";
import Hero from "./sections/Hero.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import StickyFooter from "./sections/StickyFooter.jsx";
import IndustrialHoverCard from "./components/ui/IndustrialHoverCard";
import Dither from "./components/ui/Dither.jsx";
import { FunkySVG } from "./components/ui/DraggableSvg.jsx";
import Text from "./components/ui/Text";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const REVEAL_HEIGHT = 100; // Fixed reveal height as requested

  useEffect(() => {
    // Throttling scroll events with requestAnimationFrame for performance
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;

        // The reveal starts when we are exactly REVEAL_HEIGHT away from the bottom
        const revealStart = fullHeight - windowHeight - REVEAL_HEIGHT;

        if (scrollY > revealStart) {
          const progress = (scrollY - revealStart) / REVEAL_HEIGHT;
          setScrollProgress(Math.min(Math.max(progress, 0), 1));
        } else {
          setScrollProgress(0);
        }
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  // Animation values based on scroll
  // We use CSS transition with a custom bezier for that "weighted" smooth feel
  const scale = 1 - scrollProgress * 0.04;
  const borderRadius = scrollProgress * 0;

  return (
    <main
      ref={containerRef}
      className={`min-h-screen font-sans transition-colors duration-700 bg-black text-black overflow-hidden`}
    >
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
      </div>

      <Navbar {...{ containerRef }} />
      <main
        className="relative z-20 bg-neutral-0 shadow-[0_-20px_80px_-20px_rgba(0,0,0,0.5)] transition-all duration-150 ease-out will-change-transform overflow-hidden"
        style={{
          marginBottom: `${REVEAL_HEIGHT}px`,
          transform: `scale(${scale})`,
          borderRadius: `${borderRadius}px`,
          // opacity: opacity,
          transformOrigin: "center bottom",
        }}
      >
        <Hero />
        <TechStack />
        <ProjectShowcase />
        <Contact />
      </main>

      <footer
        className="fixed bottom-0 left-0 w-full z-10 px-6 md:px-12 overflow-hidden flex flex-col justify-center"
        style={{ height: `${REVEAL_HEIGHT}px` }}
      >
        <div className="relative z-10 flex flex-col items-center space-y-3 text-center">
          {/* Avatar & Name */}
          <div className="flex flex-row items-center gap-0">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex items-center justify-center p-2">
              <FunkySVG />
            </div>
            <Text
              variant="heading3"
              as="span"
              className="text-2xl sm:text-3xl font-black tracking-tighter text-neutral-50"
            >
              ANAND POPALWAR
            </Text>
          </div>

          {/* <Text
            variant="body"
            as="p"
            className="text-neutral-50 text-xs sm:text-sm md:text-base font-medium max-w-[280px] sm:max-w-md"
          >
            Crafting premium digital experiences, enterprise dashboards, and
            real-time systems.
          </Text> */}
        </div>
      </footer>
    </main>
  );
}
