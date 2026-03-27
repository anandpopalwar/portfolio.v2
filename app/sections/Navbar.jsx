"use client";

import React from "react";
import { ArrowRight, Moon, Sun } from "lucide-react";
import Text from "../components/ui/Text";
import GlassSurface from "../components/ui/GlassSurface";
import DraggableSvg from "../components/ui/DraggableSvg";

const Navbar = ({ containerRef }) => {
  return (
    <nav className="fixed top-0 w-full z-1000 px-4 md:px-8 lg:px-16 py-2 md:py-4">
      <GlassSurface
        width={"100%"}
        height={"auto"}
        borderRadius={50}
        className="mx-auto backdrop-blur-2xl border p-3 md:p-4 rounded-1.5rem md:rounded-2rem transition-all bg-black/5 border-black/10 max-w-7xl py-0"
        saturation={0}
        Displace={50}
        Blur={"100px"}
        overflow="visible"
      >
        <div className="flex justify-between items-center w-full">
          <div className="text-lg md:text-2xl font-black tracking-tighter flex items-center gap-2">
            <DraggableSvg containerRef={containerRef} />
            <Text
              as="span"
              variant="heading3"
              className="text-lg md:text-2xl text-neutral-900 tracking-[-0.5%]"
            >
              Anand Popalwar
            </Text>
          </div>
          <div className="flex gap-3 md:gap-4 items-center text-xs md:text-sm font-bold tracking-tight">
            <div className="hidden sm:flex gap-6 md:gap-8">
              <a
                href="#contact"
                className="hover:underline hover:underline-offset-4 transition-colors"
              >
                Say Hi 👋
              </a>
            </div>
            <a
              href="#projects"
              className={`flex justify-center items-center align-middle gap-1 px-5 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all hover:scale-105 bg-blue-600 text-neutral-50 hover:bg-blue-500`}
            >
              Projects
              <ArrowRight className="w-3 h-3 md:w-5 md:h-5 text-neutral-50" />
            </a>
          </div>
        </div>
      </GlassSurface>
      {/* <div
        className={`max-w-7xl mx-auto flex justify-between items-center backdrop-blur-2xl border p-3 md:p-4 rounded-[1.5rem] md:rounded-[2rem] transition-all ${
          isDarkMode
            ? "bg-white/5 border-white/10"
            : "bg-black/5 border-black/10"
        }`}
      >
        <div className="text-lg md:text-2xl font-black tracking-tighter flex items-center gap-2">
          <DraggableSvg isDarkMode={isDarkMode} containerRef={containerRef} />
          <Text
            as="span"
            variant="heading3"
            className="text-lg md:text-2xl font-black tracking-tighter"
          >
            ANAND POPALWAR
          </Text>
        </div>
        <div className="flex gap-3 md:gap-4 items-center text-xs md:text-sm font-black tracking-tighter">
          <div className="hidden sm:flex gap-6 md:gap-8">
            <a
              href="#projects"
              className="hover:underline hover:underline-offset-4 transition-colors uppercase"
            >
              Projects
            </a>
          </div>
          <a
            href="#contact"
            className={`font-mono px-5 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-black tracking-tighter transition-all hover:scale-105 ${
              isDarkMode
                ? "bg-white text-black hover:bg-yellow-400"
                : "bg-black text-white hover:bg-blue-600"
            }`}
          >
            Say Hi 👋
          </a>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
