import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Entry animation: Fade-in + Slide-up when the section comes into view
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%", // Triggers when top of section hits 85% of viewport height
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id={id} ref={sectionRef} className={`py-20 w-full ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">{children}</div>
    </section>
  );
}
