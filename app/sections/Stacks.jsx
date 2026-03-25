import React, { useRef, useEffect, useCallback } from "react";
import Matter from "matter-js";

// ---------------------------------------------------------------------------
// Mock Data
// ---------------------------------------------------------------------------
const servicesData = [
  {
    title: "Digital Design",
    tags: ["Web Design", "UI/UX", "Wireframing", "Prototyping"],
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=600&auto=format&fit=crop",
    ],
  },
  {
    title: "Brand Identity",
    tags: ["Branding", "Logo Design", "Strategy", "Typography"],
    images: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=600&auto=format&fit=crop",
    ],
  },
];

// ---------------------------------------------------------------------------
// CSS
// ---------------------------------------------------------------------------
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=Instrument+Serif:ital@1&display=swap');

  .stk-services {
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    background-color: #0f0f0f;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    overflow-x: hidden;
    font-family: sans-serif;
  }

  .stk-row {
    position: relative;
    width: 100%;
    max-width: 900px;
    height: 100px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    cursor: pointer;
    transition: height 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .stk-row.stk-expanded {
    height: 400px;
  }

  .stk-title-wrap {
    position: relative;
    z-index: 10;
    width: 100%;
    display: flex;
    align-items: flex-end;
    padding-bottom: 0.5rem;
  }

  .stk-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 6rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -2px;
    line-height: 0.85;
    color: #ff0000;
    background-color: #0f0f0f;
    padding: 0 1rem;
    pointer-events: none;
    user-select: none;
    transition: color 0.4s ease;
  }

  .stk-row.stk-expanded .stk-title {
    color: #ffffff;
  }

  .stk-imgs {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 250px;
    height: 320px;
    overflow: hidden;
    z-index: 5;
    pointer-events: none;
  }

  .stk-img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 260px;
    border-radius: 12px;
    overflow: hidden;
    transform: translate(-50%, 150%);
    transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .stk-img:nth-child(1) {
    transform-origin: bottom left;
    transform: translate(-50%, 150%) rotate(-5deg);
    transition-delay: 0s;
  }
  .stk-img:nth-child(2) {
    transform-origin: bottom right;
    transform: translate(-50%, 150%) rotate(5deg);
    transition-delay: 0.06s;
  }
  .stk-img:nth-child(3) {
    transform: translate(-50%, 150%);
    transition-delay: 0.12s;
  }

  .stk-row.stk-expanded .stk-img:nth-child(1) {
    transform: translate(-50%, -50%) rotate(-5deg);
  }
  .stk-row.stk-expanded .stk-img:nth-child(2) {
    transform: translate(-50%, -50%) rotate(5deg);
  }
  .stk-row.stk-expanded .stk-img:nth-child(3) {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  .stk-tags-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    pointer-events: none;
    overflow: hidden;
  }

  .stk-tag {
    position: absolute;
    font-family: 'Instrument Serif', serif;
    font-style: italic;
    font-size: 1.2rem;
    color: #f0f0f0;
    background-color: #1a1a1a;
    border: 1px solid #333;
    padding: 0.5rem 1.2rem;
    border-radius: 50px;
    white-space: nowrap;
    opacity: 0;
    top: 0;
    left: 0;
    transition: opacity 0.25s ease;
  }

  .stk-tag.stk-visible {
    opacity: 1;
  }

  @media (max-width: 768px) {
    .stk-row { height: 80px; }
    .stk-row.stk-expanded { height: 250px; }
    .stk-title { font-size: 3.5rem; }
    .stk-imgs { width: 180px; height: 240px; }
    .stk-img { width: 140px; height: 190px; }
    .stk-tag { font-size: 1rem; padding: 0.4rem 1rem; }
  }
`;

// ---------------------------------------------------------------------------
// Helper – measure a tag's rendered size
// ---------------------------------------------------------------------------
function getTagDimensions(text) {
  const el = document.createElement("div");
  el.className = "stk-tag";
  el.style.position = "absolute";
  el.style.visibility = "hidden";
  el.style.opacity = "1";
  el.innerText = text;
  document.body.appendChild(el);
  const { offsetWidth: w, offsetHeight: h } = el;
  document.body.removeChild(el);
  return { w, h };
}

// ---------------------------------------------------------------------------
// ServiceRow
// ---------------------------------------------------------------------------
function ServiceRow({ service }) {
  const rowRef = useRef(null);
  const tagsAreaRef = useRef(null);

  // Mutable physics refs
  const engineRef = useRef(null);
  const tagElementsRef = useRef([]);
  const tagBodiesRef = useRef([]);
  const rafIdRef = useRef(null);
  const isHoveredRef = useRef(false);
  const spawnTimerRef = useRef(null);

  // -----------------------------------------------------------------------
  // Cleanup physics
  // -----------------------------------------------------------------------
  const cleanup = useCallback(() => {
    if (spawnTimerRef.current) {
      clearTimeout(spawnTimerRef.current);
      spawnTimerRef.current = null;
    }
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }

    // Fade out + remove tag elements
    tagElementsRef.current.forEach((el) => {
      if (el) el.classList.remove("stk-visible");
    });

    setTimeout(() => {
      tagElementsRef.current.forEach((el) => el?.remove());
      tagElementsRef.current = [];
      tagBodiesRef.current = [];

      if (engineRef.current) {
        Matter.Composite.clear(engineRef.current.world, false);
        Matter.Engine.clear(engineRef.current);
        engineRef.current = null;
      }
    }, 300);
  }, []);

  // -----------------------------------------------------------------------
  // Spawn Matter.js tags
  // -----------------------------------------------------------------------
  const spawnTags = useCallback(
    (containerHeight) => {
      const area = tagsAreaRef.current;
      if (!area) return;

      const areaW = area.offsetWidth;

      const engine = Matter.Engine.create({ gravity: { x: 0, y: 1.5 } });
      engineRef.current = engine;

      // Boundaries
      const t = 60;
      Matter.Composite.add(engine.world, [
        Matter.Bodies.rectangle(areaW / 2, containerHeight + t / 2, areaW * 2, t, { isStatic: true }),
        Matter.Bodies.rectangle(-t / 2, containerHeight / 2, t, containerHeight * 3, { isStatic: true }),
        Matter.Bodies.rectangle(areaW + t / 2, containerHeight / 2, t, containerHeight * 3, { isStatic: true }),
      ]);

      service.tags.forEach((text, i) => {
        const { w, h } = getTagDimensions(text);

        const body = Matter.Bodies.rectangle(
          Math.random() * (areaW - w) + w / 2,
          -(Math.random() * 80 + 40 + i * 35),
          w,
          h,
          {
            chamfer: { radius: h / 2 },
            restitution: 0.35,
            friction: 0.4,
            density: 0.002,
            angle: (Math.random() - 0.5) * 0.4,
          }
        );
        Matter.Composite.add(engine.world, body);
        tagBodiesRef.current.push(body);

        const el = document.createElement("div");
        el.className = "stk-tag";
        el.innerText = text;
        area.appendChild(el);
        // Trigger visibility after a frame so CSS transition kicks in
        requestAnimationFrame(() => el.classList.add("stk-visible"));
        tagElementsRef.current.push(el);
      });

      // Physics sync loop
      const tick = () => {
        Matter.Engine.update(engine, 1000 / 60);
        tagBodiesRef.current.forEach((body, i) => {
          const el = tagElementsRef.current[i];
          if (!el) return;
          const x = body.position.x - el.offsetWidth / 2;
          const y = body.position.y - el.offsetHeight / 2;
          el.style.transform = `translate(${x}px, ${y}px) rotate(${body.angle}rad)`;
        });
        rafIdRef.current = requestAnimationFrame(tick);
      };
      rafIdRef.current = requestAnimationFrame(tick);
    },
    [service.tags]
  );

  // -----------------------------------------------------------------------
  // Hover handlers
  // -----------------------------------------------------------------------
  const handleEnter = useCallback(() => {
    isHoveredRef.current = true;
    rowRef.current?.classList.add("stk-expanded");

    const isMobile = window.innerWidth <= 768;
    const targetH = isMobile ? 250 : 400;

    spawnTimerRef.current = setTimeout(() => {
      if (isHoveredRef.current) spawnTags(targetH);
    }, 300);
  }, [spawnTags]);

  const handleLeave = useCallback(() => {
    isHoveredRef.current = false;
    rowRef.current?.classList.remove("stk-expanded");
    cleanup();
  }, [cleanup]);

  // Unmount
  useEffect(() => {
    return () => cleanup();
  }, [cleanup]);

  return (
    <div
      ref={rowRef}
      className="stk-row"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Images */}
      <div className="stk-imgs">
        {service.images.map((src, i) => (
          <div key={i} className="stk-img">
            <img
              src={src}
              alt={service.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Title */}
      <div className="stk-title-wrap">
        <h1 className="stk-title">{service.title}</h1>
      </div>

      {/* Tags container */}
      <div ref={tagsAreaRef} className="stk-tags-area" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Export
// ---------------------------------------------------------------------------
export default function Stacks() {
  return (
    <>
      <style>{globalStyles}</style>
      <section className="stk-services">
        {servicesData.map((service, i) => (
          <ServiceRow key={i} service={service} />
        ))}
      </section>
    </>
  );
}
