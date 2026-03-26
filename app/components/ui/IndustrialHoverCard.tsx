"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";

/**
 * IndustrialHoverCard Component
 * * Features:
 * - Next.js "use client" directive.
 * - Dynamic Mouse-following glow effect (Tilt removed).
 * - Staggered industrial asset "pop-out" animations.
 * - Full Tailwind CSS integration for a dark, high-tech aesthetic.
 */

interface IndustrialAsset {
  id: string;
  ref: string;
  src: string;
  alt: string;
  containerClass: string;
  hoverX: number;
  hoverY: number;
  rotation: number;
}

const assets: IndustrialAsset[] = [
  {
    id: "asset-1",
    ref: "GEAR-04",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc_s-tbXr9ZWOeiBMg3t1Ih3oUw5Wy5VJS7VjbMXxQ6f_TLnfHt35uT_6h348gFqtLWjVg8iTs9U3AI3al80KOxf1t4UWG4CbPrSr-sQm6VnYDBBJZGnfSn24uKZus7eDPWQeiPWwnAxXf4Dn-kbAQ7QW8t5OZzLNOE_DDWWB4c04di59B0J91udgAMhe3aAMai9QJm38rCHy8eqkUXI1-18vHnnCeomZ1zl2sG19TdP5d2Zk0vai-dudvsxtiBdt7qAlatNxf4g6q",
    alt: "Heavy-duty industrial gear assembly",
    containerClass: "left-[10%] top-[10%] -rotate-12 z-10",
    hoverX: -70,
    hoverY: -20,
    rotation: -15,
  },
  {
    id: "asset-2",
    ref: "ARM-X1",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTGrN4tYOQzaY_a9mYbOJLvMhLX04Olxt-OWeVT13aVT84pzfXTeBBtRJ2J53OIrxYjpEDMA_z09AjHeXszGhaVl2i0YR-ZFue_oAa901DfE8eQZCfSc-2WDhL82M8oTzAzQNb1KOBYH2a016DlFTTA4UcrvNdW7wgSZUUuNQdlk5rAAHQdwROe91lyecXB7gBPsIhQVKyeKF4AIgE1kTuA-jmmmUFAjJ0z9HhzjsYsBw0KWjjuG485EDbkVmnXCHeCfrzHNzEbaot",
    alt: "Modern industrial robot arm",
    containerClass: "left-[35%] top-[5%] rotate-[5deg] z-20",
    hoverX: 0,
    hoverY: -45,
    rotation: 5,
  },
  {
    id: "asset-3",
    ref: "CTRL-09",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdkZ2F6G-6jVnAFzBPxOQ4JYw54rXMCcXZ7iAXdKzUG0rxUJGJF_t6JEaS6dIHX3Ol_xmJQwAgC6jkLWg85PRlT9pcpg_bmfai-Q6pW6DTBEgybOoha1q3Z7olSgZvekwab9-GhtOutVCFpZZ0WXQZ34Cx4Ea3QT3VeQuM-A5IeNFo7fwKLCsWsQV5z4HLidpskPKy19FRq-U-8-yDTKaXB8zzpLzp3l_O5B6c1FRCMDcwJdrHOs_ij6yHL1z_o93J4P7WDpzlVnld",
    alt: "Futuristic industrial control panel",
    containerClass: "left-[60%] top-[15%] -rotate-[8deg] z-15",
    hoverX: 90,
    hoverY: -10,
    rotation: -10,
  },
];

const IndustrialHoverCard = () => {
  const [isGsapLoaded, setIsGsapLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const assetRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Load GSAP via CDN for Canvas compatibility
  useEffect(() => {
    if (window.gsap) {
      setIsGsapLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
    script.async = true;
    script.onload = () => setIsGsapLoaded(true);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Initialize Assets
  useEffect(() => {
    if (!isGsapLoaded) return;

    const gsap = window.gsap;
    assetRefs.current.forEach((el) => {
      if (!el) return;
      const img = el.querySelector("img");
      const span = el.querySelector("span");

      gsap.set(img, {
        opacity: 0,
        scale: 0.4,
        y: 150,
        filter: "grayscale(60%) brightness(0.6)",
      });
      gsap.set(span, { opacity: 0, y: 10 });
    });
  }, [isGsapLoaded]);

  const handleMouseEnter = useCallback(() => {
    if (!isGsapLoaded || !window.gsap) return;
    const gsap = window.gsap;

    const baseDelays = [0, 0.1, 0.2];
    const shuffledDelays = [...baseDelays].sort(() => Math.random() - 0.5);

    // Asset Pop-out
    assetRefs.current.forEach((el, i) => {
      if (!el) return;
      const img = el.querySelector("img");
      const span = el.querySelector("span");
      const asset = assets[i];

      gsap.to(el, {
        x: asset.hoverX,
        y: asset.hoverY,
        duration: 0.9,
        delay: shuffledDelays[i],
        ease: "back.out(1.4)",
      });

      gsap.to(img, {
        opacity: 1,
        scale: 1.2,
        y: 40,
        filter: "grayscale(0%) brightness(1.15)",
        duration: 0.9,
        delay: shuffledDelays[i],
        ease: "back.out(1.4)",
      });

      gsap.to(span, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: shuffledDelays[i] + 0.4,
        ease: "power2.out",
      });
    });
  }, [isGsapLoaded]);

  const handleMouseLeave = useCallback(() => {
    if (!isGsapLoaded || !window.gsap) return;
    const gsap = window.gsap;

    // Hide glow
    gsap.to(glowRef.current, { opacity: 0, duration: 0.3 });

    // Reset Card
    gsap.to(cardRef.current, {
      scale: 1,
      borderColor: "rgba(255, 255, 255, 0.05)",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      duration: 0.6,
      ease: "power2.inOut",
    });

    // Reset Assets
    assetRefs.current.forEach((el) => {
      if (!el) return;
      const img = el.querySelector("img");
      const span = el.querySelector("span");

      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "power2.inOut" });
      gsap.to(img, {
        opacity: 0,
        scale: 0.4,
        y: 150,
        filter: "grayscale(60%) brightness(0.6)",
        duration: 0.6,
      });
    });
  }, [isGsapLoaded]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-6 overflow-hidden selection:bg-sky-500/30">
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-2xl rounded-[3rem] p-12 overflow-hidden cursor-pointer border border-white/5 bg-gradient-to-br from-[#1a1a20] to-[#0e0e12] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-colors duration-500"
      >
        {!isGsapLoaded && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#0e0e12]">
            <div className="w-8 h-8 border-2 border-sky-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        <div className="relative min-h-[360px] mt-4 mb-8 pointer-events-none">
          {assets.map((asset, index) => (
            <div
              key={asset.id}
              ref={(el) => {
                assetRefs.current[index] = el;
              }}
              className={`absolute flex flex-col items-center ${asset.containerClass}`}
            >
              <img
                src={asset.src}
                alt={asset.alt}
                className="w-36 h-36 md:w-44 md:h-44 object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

declare global {
  interface Window {
    gsap: any;
  }
}

export default function App() {
  return <IndustrialHoverCard />;
}
