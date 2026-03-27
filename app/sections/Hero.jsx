"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
// import self from "../assets/anand_crop.png";
import self from "../assets/me.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const parallaxRef = useRef(null);

  useGSAP(() => {
    gsap.to(parallaxRef.current, {
      y: -100, // Negative value moves it in the opposite direction (upwards) as you scroll
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: window.innerHeight,
        scrub: 1, // Adds a 1-second smoothing delay for buttery smoothness
      },
    });
  });
  return (
    <>
      <section className="min-h-[100vh] flex flex-col justify-end md:justify-center max-w-7xl mx-auto pt-20 md:pt-24 pb-24 md:pb-12 px-4 md:px-6 relative overflow-hidden">
        {/* Background Image Area (Absolute) */}
        <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none lg:justify-start lg:pl-[10%] xl:pl-[15%]">
          {/* Visual background glow */}
          {/* <div className="absolute inset-0 bg-blue-500/10 md:bg-blue-500/20 blur-[80px] md:blur-[120px] rounded-full mix-blend-screen opacity-50 animate-pulse"></div> */}

          <div
            ref={parallaxRef}
            className="w-full max-w-[500px] md:max-w-[700px]"
          >
            <Image
              src={self}
              alt="Anand Popalwar"
              draggable={false}
              className={`w-full object-contain transition-all scale-[1.7] md:scale-[1.5] origin-center md:origin-right opacity-30 md:opacity-60 lg:opacity-80 select-none pointer-events-none`}
            />
          </div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 w-full flex flex-col items-start md:items-end text-left md:text-right space-y-6 md:space-y-8 mt-16 md:mt-0">
          <div className="flex flex-col items-start md:items-end max-w-3xl w-full">
            {/* Massive Responsive Typography */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-bold leading-[0.85] tracking-tighter mb-4 md:mb-5 select-none text-neutral-900">
              MERN Dev
            </h1>

            {/* Tagline */}

            <span className="w-3/4 transition-opacity duration-500 text-[16px] text-neutral-700 tracking-normal font-medium leading-[1.65] line-clamp-2 mb-8 md:mb-10 mt-6 md:mt-6">
              Specialized in building enterprise analytics dashboards and
              scalable web platforms. Led development of real-time vehicle
              tracking systems
            </span>
            {/* <Text
              variant="body"
              as="p"
              className="text-base md:text-xl font-medium md:w-2/3 text-neutral-600 opacity-90 mb-8 md:mb-10"
            >
              Specialized in building enterprise analytics dashboards and
              scalable web platforms.
            </Text> */}

            {/* CTA Buttons */}
            <div className="flex w-full flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6 mb-8 md:mb-10">
              <a
                href="#contact"
                className=" relative flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 py-3 font-bold transition-all duration-300 text-neutral-900 hover:underline hover:underline-offset-4 md:px-8 md:py-4 backdrop-blur-md sm:flex"
              >
                <span className="flex items-center gap-2 transition-transform duration-300  ">
                  Say Hi 👋
                </span>
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 hover:scale-105 text-neutral-50 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold transition-all "
              >
                View Projects{" "}
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-neutral-50" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
