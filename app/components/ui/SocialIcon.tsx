"use client"

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
  className?: string;
  ariaLabel?: string;
  lightMode?: boolean; // Toggle for adapting glassmorphism to light/dark styles
}

export default function SocialIcon({
  icon,
  href,
  className = "",
  ariaLabel,
  lightMode = false,
}: SocialIconProps) {
  const iconRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = iconRef.current;
    if (!el) return;

    // quickTo for highly performant tracking to the mouse directly
    const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      // Distance from center of component
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);

      // Magnetic pull scaling down the intensity to 40%
      xTo(relX * 0.4);
      yTo(relY * 0.4);
    };

    const handleMouseLeave = () => {
      // Snap back firmly
      xTo(0);
      yTo(0);
      gsap.to(el, { scale: 1, duration: 0.5, ease: "elastic.out(1, 0.4)" });
    };

    const handleMouseEnter = () => {
      gsap.to(el, { scale: 1.15, duration: 0.3, ease: "power2.out" });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  const themeClasses = lightMode
    ? "bg-zinc-200/50 border-zinc-300 text-zinc-800 hover:text-[#2563eb] hover:border-[#2563eb]"
    : "bg-white/10 border-white/20 text-white hover:text-[#2563eb] hover:bg-white/20 hover:border-white/30";

  return (
    <a
      ref={iconRef}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={`relative flex items-center justify-center rounded-full backdrop-blur-md border transition-all shadow-sm ${themeClasses} ${className}`}
    >
      <span className="w-[45%] h-[45%] flex items-center justify-center pointer-events-none">
        {icon}
      </span>
    </a>
  );
}

export const AxiosIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    width={14}
    height={14}
    {...props}
  >
    <path
      fill="#5a29e4"
      d="m3.719 4.81 2.995-2.506.004 10.007-1.019.847-.017-8.322zm6.886 4.194L7.61 11.51 7.606 1.503l1.02-.847.017 8.322z"
    />
  </svg>
);
export const ChartjsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
    width={14}
    height={14}
    {...props}
  >
    <desc>{"Chartjs Streamline Icon: https://streamlinehq.com"}</desc>
    <path
      fill="#36a2eb"
      d="M12.592 7.048c-1.916 0.038 -1.517 1.251 -2.868 1.558 -1.372 0.312 -1.589 -3.351 -2.96 -3.351s-1.676 3.558 -3.394 6l-0.049 0.069L7.004 13.45l5.588 -3.226z"
    />
    <path
      fill="#ffce56"
      d="M12.592 6.937c-0.642 -0.823 -1.077 -1.77 -2.013 -1.77 -1.657 0 -1.221 2.703 -3.052 2.703S5.504 4.963 3.429 7.696c-0.661 0.871 -1.193 1.842 -1.611 2.76l5.186 2.994 5.588 -3.226z"
    />
    <path
      fill="#fe6184"
      d="M1.416 8.057c0.629 -1.741 0.9 -3.151 2.1 -3.151 1.831 0 2.267 5.144 3.837 4.621 1.569 -0.523 1.395 -3.313 3.836 -3.313 0.465 0 0.939 0.285 1.403 0.745v3.266L7.004 13.45 1.416 10.224z"
      opacity={0.8}
    />
    <path
      fill="#e7e9ed"
      d="M7 13.854 1.063 10.427v-6.854L7 0.146l5.937 3.427v6.854zM1.761 10.025 7 13.049l5.239 -3.025V3.976L7 0.951l-5.239 3.025z"
    />
  </svg>
);
