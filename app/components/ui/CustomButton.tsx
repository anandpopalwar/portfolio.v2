import React, { useRef, useState } from "react";
import { gsap } from "gsap";

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export default function CustomButton({
  variant = "primary",
  children,
  className = "",
  ...props
}: CustomButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  
  const [isHovered, setIsHovered] = useState(false);
  const isPrimary = variant === "primary";

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsHovered(true);
    if (!fillRef.current || !btnRef.current) return;

    // Calculate dynamic origin for the liquid fill
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.set(fillRef.current, {
      left: x,
      top: y,
      width: 0,
      height: 0,
    });

    gsap.to(fillRef.current, {
      width: 400,
      height: 400,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(textRef.current, {
      y: -2,
      scale: 1.05,
      duration: 0.3,
      ease: "back.out(2)",
    });

    gsap.to(btnRef.current, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!fillRef.current || !btnRef.current) return;

    // Disappear organically
    gsap.to(fillRef.current, {
      width: 0,
      height: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.to(textRef.current, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(btnRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const baseClasses =
    "relative overflow-hidden inline-flex items-center justify-center px-10 py-4 md:py-5 rounded-full font-black uppercase tracking-[0.2em] text-xs transition-colors shadow-[0_8px_30px_-5px_rgba(0,0,0,0.15)]";
    
  // Modern Primary: solid blue fill, text white
  const primaryClasses = "bg-[#2563eb] text-white border border-[#2563eb]";
  const primaryFillClass = "bg-[#050505]";

  const secondaryClasses = "bg-transparent text-[#050505] border-2 border-[#050505]";
  // 1b) Secondary Liquid Fill
  const secondaryFillClass = "bg-[#2563eb]";   // Blue liquid filling dark outlined button

  const currentClass = isPrimary ? primaryClasses : secondaryClasses;
  const fillClass = isPrimary ? primaryFillClass : secondaryFillClass;

  const textColorStyle = !isPrimary && isHovered ? { color: "#ffffff" } : {};

  return (
    <button
      ref={btnRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${baseClasses} ${currentClass} ${className}`}
      {...props}
    >
      <div
        ref={fillRef}
        className={`absolute rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 will-change-transform ${fillClass}`}
      />
      <span
        ref={textRef}
        className="relative z-10 block pointer-events-none transition-colors duration-300"
        style={textColorStyle}
      >
        {children}
      </span>
    </button>
  );
}
