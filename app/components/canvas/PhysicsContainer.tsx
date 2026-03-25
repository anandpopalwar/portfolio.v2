"use client";

import { useEffect, useMemo, useRef } from "react";
import { Bodies, Body, Engine, Events, Runner, World } from "matter-js";
import StackIcon from "tech-stack-icons";
import gsap from "gsap";
import { useSafeGSAP } from "../../hooks/useSafeGSAP";

type TechTag = {
  label: string;
  icon: Parameters<typeof StackIcon>[0]["name"];
  color: string;
};

const TAGS: TechTag[] = [
  { label: "TypeScript", icon: "typescript", color: "#3178c6" },
  { label: "Next.js", icon: "next", color: "#f8fafc" },
  { label: "React", icon: "react", color: "#61dafb" },
  { label: "GSAP", icon: "gsap", color: "#8ac926" },
  { label: "Three.js", icon: "threejs", color: "#d4d4d8" },
  { label: "Matter.js", icon: "matterjs", color: "#fb7185" },
  { label: "Tailwind", icon: "tailwindcss", color: "#38bdf8" },
];

const WALL_SIZE = 120;

export default function PhysicsContainer() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tagRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tagBodies = useRef<Body[]>([]);

  const tags = useMemo(() => TAGS, []);

  useSafeGSAP(
    () => {
      gsap.fromTo(
        ".tech-tag",
        { y: 42, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.06,
          duration: 0.8,
          ease: "power3.out",
        },
      );
    },
    { scope: containerRef },
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const engine = Engine.create({
      gravity: { x: 0, y: -0.05, scale: 0.0016 },
    });
    const runner = Runner.create();

    const walls = [
      Bodies.rectangle(width / 2, -WALL_SIZE / 2, width + WALL_SIZE * 2, WALL_SIZE, {
        isStatic: true,
      }),
      Bodies.rectangle(width / 2, height + WALL_SIZE / 2, width + WALL_SIZE * 2, WALL_SIZE, {
        isStatic: true,
      }),
      Bodies.rectangle(-WALL_SIZE / 2, height / 2, WALL_SIZE, height + WALL_SIZE * 2, {
        isStatic: true,
      }),
      Bodies.rectangle(width + WALL_SIZE / 2, height / 2, WALL_SIZE, height + WALL_SIZE * 2, {
        isStatic: true,
      }),
    ];
    World.add(engine.world, walls);

    tagBodies.current = tags.map((_, index) => {
      const body = Bodies.circle(
        80 + Math.random() * (width - 160),
        80 + Math.random() * (height - 160),
        36 + (index % 2) * 6,
        {
          restitution: 0.95,
          friction: 0.001,
          frictionAir: 0.02,
          density: 0.001,
          chamfer: { radius: 20 },
        },
      );

      Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 3,
        y: (Math.random() - 0.5) * 3,
      });

      return body;
    });

    World.add(engine.world, tagBodies.current);
    Runner.run(runner, engine);

    let rafId = 0;
    const syncDom = () => {
      for (let i = 0; i < tagBodies.current.length; i += 1) {
        const body = tagBodies.current[i];
        const el = tagRefs.current[i];
        if (!el) continue;
        el.style.transform = `translate3d(${body.position.x}px, ${body.position.y}px, 0) rotate(${body.angle}rad)`;
      }
      rafId = requestAnimationFrame(syncDom);
    };

    rafId = requestAnimationFrame(syncDom);

    const updateGravityFromMouse = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const x = (event.clientX - cx) / rect.width;
      const y = (event.clientY - cy) / rect.height;

      gsap.to(engine.world.gravity, {
        x: x * 0.8,
        y: y * 0.8 - 0.1,
        duration: 0.35,
        overwrite: true,
      });
    };

    const resetGravity = () => {
      gsap.to(engine.world.gravity, {
        x: 0,
        y: -0.05,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    container.addEventListener("mousemove", updateGravityFromMouse);
    container.addEventListener("mouseleave", resetGravity);

    const resizeHandler = () => {
      const nextWidth = container.clientWidth;
      const nextHeight = container.clientHeight;
      Body.setPosition(walls[0], { x: nextWidth / 2, y: -WALL_SIZE / 2 });
      Body.setPosition(walls[1], { x: nextWidth / 2, y: nextHeight + WALL_SIZE / 2 });
      Body.setPosition(walls[2], { x: -WALL_SIZE / 2, y: nextHeight / 2 });
      Body.setPosition(walls[3], { x: nextWidth + WALL_SIZE / 2, y: nextHeight / 2 });
    };

    window.addEventListener("resize", resizeHandler);
    Events.on(runner, "afterTick", () => {
      // Keeps the engine active in inactive tabs while preserving smoothness.
    });

    return () => {
      window.removeEventListener("resize", resizeHandler);
      container.removeEventListener("mousemove", updateGravityFromMouse);
      container.removeEventListener("mouseleave", resetGravity);
      cancelAnimationFrame(rafId);

      Runner.stop(runner);
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [tags]);

  return (
    <div
      ref={containerRef}
      className="relative h-[65vh] min-h-[440px] w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_65%)]" />
      {tags.map((tag, index) => (
        <div
          key={tag.label}
          ref={(el) => {
            tagRefs.current[index] = el;
          }}
          className="tech-tag pointer-events-none absolute left-0 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-white/15 bg-black/55 px-3 py-2 text-xs font-medium text-white backdrop-blur-sm"
        >
          <StackIcon name={tag.icon} className="h-4 w-4" />
          <span style={{ color: tag.color }}>{tag.label}</span>
        </div>
      ))}
    </div>
  );
}
