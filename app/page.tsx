"use client";
// import dynamic from "next/dynamic";

import { useRef } from "react";
import Navbar from "./sections/Navbar.jsx";
import ProjectShowcase from "./sections/ProjectShowcase.jsx";
import Hero from "./sections/Hero.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import StickyFooter from "./sections/StickyFooter.jsx";
import IndustrialHoverCard from "./components/ui/IndustrialHoverCard"; 

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main
      ref={containerRef}
      className={`min-h-screen font-sans transition-colors duration-700  bg-neutral-0 text-black overflow-hidden`}
    >
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600 blur-[80px] md:blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-pink-600 blur-[150px] rounded-full opacity-40" />
      </div>

      <Navbar {...{ isDarkMode: false, containerRef }} />
      <div className={`relative z-10 px-0 bg-neutral-0`}>
        <Hero isDarkMode={false} />
        <TechStack />
        <ProjectShowcase />
        <Contact />
      </div>
      {/* Spacer for ScrollTrigger room */}
      <div className="h-50" aria-hidden="true" />

      <StickyFooter />
    </main>
  );
}
