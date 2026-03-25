import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface AnimatedHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function AnimatedHeading({
  title,
  subtitle,
  className = "",
}: AnimatedHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });

      // Character-by-character reveal for the title
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll(".anim-char");
        tl.fromTo(
          chars,
          { opacity: 0, y: 30, rotateX: -90 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.6,
            stagger: 0.04,
            ease: "back.out(1.7)",
          },
        );
      }

      // Slide and fade subtitle
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
          "-=0.4",
        );
      }
    }, el);

    return () => ctx.revert();
  }, [title, subtitle]);

  // Helper to split text into unstyled character spans
  const renderChars = (text: string) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="anim-char inline-block whitespace-pre"
        style={{ transformOrigin: "50% 100%" }}
      >
        {char}
      </span>
    ));
  };

  return (
    <div
      ref={containerRef}
      className={`mb-12 md:mb-16 ${className}`}
      style={{ perspective: "400px" }}
    >
      <h2
        ref={titleRef}
        className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-black uppercase tracking-tighter text-[#050505] leading-none mb-4"
      >
        {title.split(" ").map((word, index) => (
          <span key={index} className="inline-block">
            {renderChars(word)}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p
          ref={subtitleRef}
          className="text-[#2563eb] font-bold uppercase tracking-widest text-sm md:text-base border-l-4 border-[#2563eb] pl-4"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
