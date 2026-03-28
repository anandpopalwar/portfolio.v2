"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable, ScrollTrigger } from "gsap/all";
import FunkySVG from "./FunkySVG";

gsap.registerPlugin(useGSAP, Draggable, ScrollTrigger);


export default function DraggableSvg({ containerRef }) {
  const elementRef = useRef(null);
  const svgRef = useRef(null);

  useGSAP(
    () => {
      const el = elementRef.current;

      // Enable normal Draggable behavior
      Draggable.create(el, {
        type: "x,y",
        zIndexBoost: true,
        onClick: function () {
          gsap.to(svgRef.current, {
            rotation: `+=${360 * 3}`,
            duration: 2.5,
            ease: "power2.out",
          });
        },
        onDragEnd: function () {
          gsap.to(this.target, {
            x: 0,
            y: 0,
            duration: 1,
            ease: "elastic.out(0.5, 0.5)",
          });
        },
      });

      // Scroll-driven spin
      gsap.to(el, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
        rotation: "+=720",
        ease: "none",
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={elementRef}
      className="w-6 h-6 md:w-8 md:h-8 cursor-grab active:cursor-grabbing inline-block shrink-0 relative"
      style={{ touchAction: "none" }}
    >
      <div
        ref={svgRef}
        className="w-full h-full flex justify-center items-center origin-center"
      >
        <FunkySVG />
      </div>
    </div>
  );
}
