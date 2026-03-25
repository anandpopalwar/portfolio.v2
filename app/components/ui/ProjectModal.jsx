import { useEffect, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import TechChip from "./Techchip";
import { X } from "lucide-react";
import GlassSurface from "./GlassSurface";

const ProjectModal = ({ project, onClose }) => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const itemsRef = useRef([]);
  const cursorRef = useRef(null);
  const marqueeTweens = useRef([]);
  const containerRefs = useRef([]);
  const rowRefs = useRef([]);

  // Split tags into two rows for independent marquees
  const firstRowTags = project.tags;
  const secondRowTags = project.tags;

  const closeAnimation = () => {
    if (!gsap) {
      onClose();
      return;
    }

    const tl = gsap.timeline({
      onComplete: onClose,
    });

    tl.to(contentRef.current, {
      scale: 1.05,
      opacity: 0,
      duration: 0.3,
      ease: "power4.in",
    });

    tl.to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 0.25,
        ease: "power3.in",
      },
      "<0.1",
    );
  };

  useEffect(() => {
    // Custom cursor tracking for desktop close button
    if (!gsap || window.innerWidth < 768) return;
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Set initial position to bottom center of the view
    gsap.set(cursor, {
      x: window.innerWidth / 2,
      y: window.innerHeight - 120,
      xPercent: -50,
      yPercent: -50,
    });

    let xTo = gsap.quickTo(cursor, "x", {
      duration: 0.4,
      ease: "power3.out",
    });
    let yTo = gsap.quickTo(cursor, "y", {
      duration: 0.4,
      ease: "power3.out",
    });

    const onMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useEffect(() => {
    // Prevent body scroll structurally during modal view
    document.body.style.overflow = "hidden";

    // Animate In safely if GSAP is loaded
    if (gsap) {
      const tl = gsap.timeline();

      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power3.out",
      });

      tl.fromTo(
        contentRef.current,
        { y: 100, rotateX: 15, scale: 0.9, opacity: 0 },
        {
          y: 0,
          rotateX: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "expo.out",
        },
        "<0.1",
      );

      tl.fromTo(
        itemsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power3.out" },
        "<0.1",
      );
    } else {
      if (overlayRef.current) overlayRef.current.style.opacity = 1;
      if (contentRef.current) {
        contentRef.current.style.opacity = 1;
        contentRef.current.style.transform = "scale(1) translateY(0)";
      }
      itemsRef.current.forEach((item) => {
        if (item) {
          item.style.opacity = 1;
          item.style.transform = "translateY(0)";
        }
      });
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") closeAnimation();
    };
    window.addEventListener("keydown", handleEsc);

    contentRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useLayoutEffect(() => {
    const setupBoundedAnimation = (index) => {
      const container = containerRefs.current[index];
      const row = rowRefs.current[index];
      if (!container || !row) return;

      const containerWidth = container.offsetWidth;
      const contentWidth = row.scrollWidth;
      const maxTranslate = contentWidth - containerWidth;

      if (maxTranslate <= 0) return; // No animation needed if content fits

      const startX = -maxTranslate / 2; // Center content initially
      const isFirstRow = index === 0;
      const targetX = isFirstRow ? 0 : -maxTranslate;

      marqueeTweens.current[index] = gsap.fromTo(
        row,
        { x: startX },
        {
          x: targetX,
          duration: 20,
          ease: "none",
          repeat: -1,
          yoyo: true,
        },
      );
    };

    [0, 1].forEach(setupBoundedAnimation);

    return () => {
      marqueeTweens.current.forEach((tween) => tween?.kill());
    };
  }, [project]);

  if (!project) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-9999 flex items-end sm:items-center justify-center sm:p-6 bg-zinc-950/40 opacity-0 md:cursor-none"
      style={{ backdropFilter: "blur(8px)" }}
      onClick={closeAnimation}
    >
      {/* Custom Cursor Close Button (Desktop Only) */}
      {/* <div
        ref={cursorRef}
        className="hidden md:flex pointer-events-none fixed top-0 left-0 z-10000 w-16 h-16 bg-[#2563eb] rounded-full items-center justify-center text-white shadow-2xl will-change-transform scale-100"
      ></div> */}

      <div
        ref={cursorRef}
        className="hidden md:flex pointer-events-none fixed top-0 left-0 z-10000 w-24 h-24 rounded-full items-center justify-center text-blue-500 shadow-2xl will-change-transform scale-100"
      >
        <GlassSurface
          width={"w-24"}
          height={"h-24"}
          borderRadius={50}
          saturation={0.5}
          Displace={5}
          redOffset={50}
          greenOffset={50}
          Blur={"30px"}
        >
          <div className="w-16 h-16 flex flex-col items-center justify-center gap-1">
            <X className="w-16 h-16 stroke-3" />
          </div>
        </GlassSurface>
      </div>

      {/* Grainy Texture overlay on backdrop */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      ></div>

      <div
        ref={contentRef}
        tabIndex="-1"
        className="relative w-full sm:max-w-2xl lg:max-w-[700px] bg-[#ffffff] rounded-t-[40px] sm:rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[95vh] sm:max-h-[85vh] md:cursor-none focus:outline-none"
        onClick={(e) => {
          if (window.innerWidth < 768) {
            e.stopPropagation();
          }
        }}
        style={{ opacity: 0 }}
      >
        {/* Header container ensuring Close Button overlaps nothing */}
        <div className="w-full flex justify-end p-6 pb-0 shrink-0 hidden">
          <button
            onClick={closeAnimation}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-50 hover:bg-[#050505] border border-zinc-200 hover:border-[#050505] rounded-full flex items-center justify-center text-[#050505] hover:text-white transition-colors duration-300 shadow-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Content Section utilizing matching vertical stack layout */}
        <div className="px-8 pb-8 sm:px-12 sm:pb-12 pt-10 sm:pt-12 flex-1 overflow-y-auto custom-scrollbar">
          {/* Title */}
          <h3
            ref={(el) => (itemsRef.current[0] = el)}
            className="text-[clamp(2.5rem,7vw,5rem)] font-black uppercase tracking-tighter leading-[0.85] mb-4 text-black"
            style={{ fontFamily: "'Inter', sans-serif", opacity: 0 }}
          >
            {project.title}
          </h3>

          {/* Badge (Role) */}
          <div
            ref={(el) => (itemsRef.current[1] = el)}
            className="text-blue-600 font-bold uppercase tracking-widest text-sm md:text-base mb-4 block pl-2 md:pl-4"
            style={{ opacity: 0 }}
          >
            {project.role}
          </div>

          {/* Tech Chip Marquee */}
          <div
            ref={(el) => (itemsRef.current[2] = el)}
            className="flex flex-col overflow-hidden"
            style={{ opacity: 0 }}
          >
            {/* First Row Marquee */}
            <div
              ref={(el) => (containerRefs.current[0] = el)}
              className="marquee-row overflow-hidden h-fit p-2"
            >
              <div
                ref={(el) => (rowRefs.current[0] = el)}
                className="marquee-content flex flex-nowrap gap-2 sm:gap-3"
              >
                {firstRowTags.map((tag, idx) => (
                  <TechChip key={idx} tag={tag} />
                ))}
              </div>
            </div>
            {/* Second Row Marquee */}
            <div
              ref={(el) => (containerRefs.current[1] = el)}
              className="marquee-row overflow-hidden h-fit p-2"
            >
              <div
                ref={(el) => (rowRefs.current[1] = el)}
                className="marquee-content flex flex-nowrap gap-2 sm:gap-3"
              >
                {secondRowTags.map((tag, idx) => (
                  <TechChip key={idx} tag={tag} />
                ))}
              </div>
            </div>
          </div>

          {/* Bullet List */}
          <ul
            ref={(el) => (itemsRef.current[3] = el)}
            className="space-y-5 pl-5 list-outside border-t border-zinc-100 pt-8"
            style={{ opacity: 0 }}
          >
            {project.desc.map((d, idx) => (
              <li
                key={idx}
                className="text-sm sm:text-base text-[#050505] leading-relaxed relative flex items-start"
              >
                <span className="absolute -left-5 top-2 w-2 h-2 rounded-full bg-[#2563eb] shrink-0 shadow-sm"></span>
                <span className="font-medium">{d}</span>
              </li>
            ))}
          </ul>

          {/* Primary Buttons */}
          {/* Unified Modal Close Button */}
          <button
            ref={(el) => (itemsRef.current[4] = el)}
            onClick={closeAnimation}
            className="flex md:hidden mx-auto mt-12 mb-4 items-center justify-center gap-2 px-8 py-3 sm:px-10 sm:py-3.5 text-[#050505] hover:text-white bg-white hover:bg-[#050505] border border-zinc-200 hover:border-[#050505] rounded-full font-black uppercase tracking-widest text-[10px] sm:text-xs transition-colors duration-300 focus:outline-none shadow-[0_8px_30px_-5px_rgba(0,0,0,0.15)]"
            style={{ opacity: 0 }}
          >
            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            CLOSE
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ProjectModal;
