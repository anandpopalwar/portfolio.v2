import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function FloatingWrapper({
  children,
  floatRange = 15, // How high it drifts (px)
  speed = 4,       // How fast it moves (seconds per cycle)
  delay = 0,       // Stagger delay
  containerClassName = "", // Applied to outer floating layer
  className = "",          // Applied to inner glass layer
  glassmorphism = true,    // Toggle default glass styling
}) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const floatTweensRef = useRef([]);

  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;

    // Use gsap.context for easy cleanup
    const ctx = gsap.context(() => {
      // Y-axis slow sine wave oscillation
      const yTween = gsap.to(outer, {
        y: floatRange,
        duration: speed,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: delay,
      });

      // X-axis slight drift (different duration for organic feel)
      const xTween = gsap.to(outer, {
        x: floatRange * 0.4,
        duration: speed * 1.3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: delay + 0.5,
      });

      // Z-axis subtle random rotation
      const rotTween = gsap.to(outer, {
        rotation: 3,
        duration: speed * 1.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: delay + 0.2,
      });

      // Store tweens to manipulate timeScale on hover
      floatTweensRef.current = [yTween, xTween, rotTween];
    }, outer);

    return () => ctx.revert();
  }, [floatRange, speed, delay]);

  const handleMouseEnter = () => {
    // 1. Slow down the anti-gravity float effect
    if (floatTweensRef.current.length) {
      gsap.to(floatTweensRef.current, { timeScale: 0.2, duration: 0.5 });
    }
    
    // 2. Scale up slightly
    gsap.to(innerRef.current, {
      scale: 1.05,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMouseMove = (e) => {
    const inner = innerRef.current;
    if (!inner) return;

    // Calculate mouse position relative to center of component
    const rect = inner.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Push away from cursor slightly with 3D rotation
    gsap.to(inner, {
      x: -distanceX * 0.1,
      y: -distanceY * 0.1,
      rotationX: distanceY * 0.05,
      rotationY: -distanceX * 0.05,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    // 1. Resume normal float speed
    if (floatTweensRef.current.length) {
      gsap.to(floatTweensRef.current, { timeScale: 1, duration: 0.5 });
    }
    
    // 2. Snap inner wrapper back to origin and base scale
    gsap.to(innerRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      rotationX: 0,
      rotationY: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
  };

  const glassClasses = glassmorphism
    ? "bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]"
    : "";

  return (
    <div
      ref={outerRef}
      className={`relative inline-block ${containerClassName}`}
      style={{ perspective: 1000 }} // Enable 3D perspective
    >
      <div
        ref={innerRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`w-full h-full rounded-2xl p-6 transition-colors duration-300 ${glassClasses} ${className}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </div>
  );
}
