"use client";

import Image from "next/image";
import React, { useState, useCallback, useRef, useEffect } from "react";

/**
 * PopupImages Component
 * * Features:
 * - Next.js "use client" directive.
 * - Dynamic Mouse-following glow effect (Tilt removed).
 * - Staggered industrial asset "pop-out" animations.
 * - Full Tailwind CSS integration for a dark, high-tech aesthetic.
 * - Accepts an array of exactly 3 image strings via props.
 */

interface PopupImagesProps {
  images: string[];
  isActive?: boolean;
  className?: string;
}

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

const ASSET_CONFIGS = [
  {
    id: "asset-1",
    ref: "IMG-01",
    containerClass: "left-[5%] top-[10%] -rotate-12 z-10",
    hoverX: -100,
    hoverY: -40,
    rotation: -15,
  },
  {
    id: "asset-2",
    ref: "IMG-02",
    containerClass: "left-[35%] top-[0%] rotate-[5deg] z-20",
    hoverX: 0,
    hoverY: -110,
    rotation: 5,
  },
  {
    id: "asset-3",
    ref: "IMG-03",
    containerClass: "left-[65%] top-[15%] -rotate-[8deg] z-15",
    hoverX: 110,
    hoverY: -30,
    rotation: -10,
  },
];

const PopupImages: React.FC<PopupImagesProps> = ({
  images,
  isActive,
  className,
}) => {
  const [isGsapLoaded, setIsGsapLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const assetRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Map incoming image URLs to our industrial asset structure (limit to 3)
  const assets: IndustrialAsset[] = ASSET_CONFIGS.map((config, i) => ({
    ...config,
    src: images[i] || "",
    alt: `Project Showcase Image ${i + 1}`,
  }));

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

  const animateIn = useCallback(() => {
    if (!isGsapLoaded || !window.gsap) return;
    const gsap = window.gsap;

    const baseDelays = [0, 0.1, 0.2];
    const shuffledDelays = [...baseDelays].sort(() => Math.random() - 0.5);

    assetRefs.current.forEach((el, i) => {
      if (!el) return;
      const img = el.querySelector("img");
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
    });
  }, [isGsapLoaded, assets]);

  const animateOut = useCallback(() => {
    if (!isGsapLoaded || !window.gsap) return;
    const gsap = window.gsap;

    assetRefs.current.forEach((el) => {
      if (!el) return;
      const img = el.querySelector("img");

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

  // Handle external trigger (e.g. from row hover)
  useEffect(() => {
    if (isActive) {
      animateIn();
    } else {
      animateOut();
    }
  }, [isActive, animateIn, animateOut]);

  // Initial state setup
  useEffect(() => {
    if (!isGsapLoaded) return;
    const gsap = window.gsap;
    assetRefs.current.forEach((el) => {
      if (!el) return;
      const img = el.querySelector("img");
      gsap.set(img, {
        opacity: 0,
        scale: 0.4,
        y: 150,
        filter: "grayscale(60%) brightness(0.6)",
      });
    });
  }, [isGsapLoaded]);

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden selection:bg-sky-500/30 w-full h-full min-h-[360px] ${className}`}
    >
           <style>
        {`
                .sticker-container {
                    perspective: 1200px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }
                .sticker {
                    position: absolute;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.25);
                    cursor: pointer;
                    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
                }
                .sticker img {
                    transition: all 0.5s ease;
                }
                .color-overlay {
                    position: absolute;
                    inset: 0;
                    opacity: 0;
                    transition: opacity 0.5s ease;
                    mix-blend-mode: color;
                    pointer-events: none;
                }
                .sticker.active .color-overlay {
                    opacity: 1;
                }
                `}
      </style>
      <div
        ref={cardRef}
        onMouseEnter={animateIn}
        onMouseLeave={animateOut}
        className="relative w-full h-full rounded-[3rem] p-4 transition-all duration-500 overflow-visible group"
      >
        <div className="relative h-full flex items-center justify-center pointer-events-none">
          {assets.map((asset, index) => {
            const rotation = (index - (assets.length - 1) / 2) * 15;
            const xOffset = (index - (assets.length - 1) / 2) * 45;
            return (
              <div
                key={asset.id}
                ref={(el) => {
                  assetRefs.current[index] = el;
                }}
                style={{
                  transform: `rotate(${rotation}deg) translateX(${xOffset}px)`,
                  zIndex: index,
                }}
                className={`absolute flex flex-col items-center justify-center ${asset.containerClass} sticker w-28 h-28 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-2xl overflow-hidden border-none ${isActive ? "active" : ""}`}
              >
                <Image
                  src={asset.src}
                  alt={asset.alt}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                />
              </div>
            );
          })}
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

export default PopupImages;
