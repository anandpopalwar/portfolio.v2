"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import ProjectModal from "../components/ui/ProjectModal";
import OverlapImage from "../components/ui/OverlapImage";
import Sectioncontainer from "../components/ui/Sectioncontainer";
import { SERVICES } from "../contents/projectcontent";

export default function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRefs = useRef<HTMLHeadingElement[]>([]);
  const rowRefs = useRef<(HTMLElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [selectedProject, setSelectedProject] = useState<
    (typeof SERVICES)[number] | null
  >(null);

  useEffect(() => {
    if (!gsap) return;

    const handleMouseMoveRow = (e: MouseEvent, index: number) => {
      const title = titleRefs.current[index];
      const row = rowRefs.current[index];
      if (!title || !row || selectedProject) return;

      const rect = title.getBoundingClientRect();
      const titleCenterX = rect.left + rect.width / 2;
      const titleCenterY = rect.top + rect.height / 2;

      const distanceX = e.clientX - titleCenterX;
      const distanceY = e.clientY - titleCenterY;

      const pullX = distanceX * 0.05;
      const pullY = distanceY * 0.1;

      gsap.to(title, {
        x: pullX,
        y: pullY,
        duration: 0.8,
        ease: "power3.out",
        overwrite: true,
      });
    };

    const handleMouseLeaveRow = (index: number) => {
      const title = titleRefs.current[index];
      if (!title) return;
      gsap.to(title, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        overwrite: true,
      });
    };

    const listeners: {
      row: HTMLElement;
      move: (e: MouseEvent) => void;
      leave: () => void;
    }[] = [];

    rowRefs.current.forEach((row, i) => {
      if (!row) return;
      const move = (e: MouseEvent) => handleMouseMoveRow(e, i);
      const leave = () => handleMouseLeaveRow(i);
      row.addEventListener("mousemove", move);
      row.addEventListener("mouseleave", leave);
      listeners.push({ row, move, leave });
    });

    return () => {
      listeners.forEach(
        ({
          row,
          move,
          leave,
        }: {
          row: HTMLElement;
          move: (e: MouseEvent) => void;
          leave: () => void;
        }) => {
          row.removeEventListener("mousemove", move);
          row.removeEventListener("mouseleave", leave);
        },
      );
    };
  }, [selectedProject]);

  // Handlers
  const handleRowEnter = useCallback((i: number) => {
    setActiveIndex(i);
  }, []);

  const handleRowLeave = useCallback(() => {
    setActiveIndex(-1);
  }, []);

  const handleRowTap = useCallback((i: number) => {
    setActiveIndex(-1); // Clear active visual index so scrolling states pause cleanly
    setSelectedProject(SERVICES[i]); // Opens the unified modal
  }, []);

  return (
    <Sectioncontainer
      containerRef={containerRef}
      title="Projects"
      sectionId="projects"
    >
      {/* Project Rows */}
      <div
        className="max-w-7xl mx-auto relative z-10"
        onMouseLeave={handleRowLeave}
      >
        {SERVICES.map((project, i) => {
          const isActive = activeIndex === i && !selectedProject;
          const isDimmed = activeIndex >= 0 && !isActive && !selectedProject;

          return (
            <article
              key={project.id}
              ref={(el) => {
                if (el) rowRefs.current[i] = el;
              }}
              className={`border-b border-neutral-200 transition-all duration-500 hover:border-neutral-300 cursor-pointer`}
              onMouseEnter={() => handleRowEnter(i)}
              onClick={() => handleRowTap(i)}
              role="button"
            >
              {/* Row Header */}
              <div
                className={`group grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-8 py-8 md:py-14 transition-all duration-500 ${
                  isDimmed ? "opacity-20 grayscale" : "opacity-100"
                } ${isActive ? "-mx-4 px-4 rounded-[32px]" : ""}`}
              >
                {/* Title and Content Area (2 columns) */}
                <div className="md:col-span-2 flex flex-col gap-2 md:gap-3 justify-center min-w-0">
                  <h3
                    ref={(el) => {
                      if (el) titleRefs.current[i] = el;
                    }}
                    className={`${isActive ? "text-blue-600" : "text-neutral-900"} text-2xl sm:text-2xl md:text-3xl lg:text-[3.4rem] font-semibold tracking-tighter transition-colors duration-500 select-none truncate leading-relaxed`}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {project.title}
                  </h3>

                  <div className="font-normal tracking-normal transition-colors duration-500">
                    <div className="text-[10px] sm:text-xs md:text-sm w-fit pointer-events-none flex items-center gap-2 border border-neutral-400  text-neutral-700 px-3 py-0.5 sm:px-4 sm:py-1 font-bold transition-colors rounded-full cursor-default select-none whitespace-nowrap group ">
                      <span
                        // className="leading-[1.7] mt-[-1px]"
                        style={{ fontFamily: "'Google Sans Code', monospace" }}
                      >
                        {project.role}
                      </span>
                    </div>
                  </div>
                  {/* Description Highlights */}
                  <p className="w-3/4 mt-2 space-y-1 md:space-y-1.5 transition-opacity duration-500 text-xs md:text-sm text-neutral-500 tracking-tight font-medium line-clamp-2">
                    {project?.tldr}
                  </p>
                </div>
                {/* OverlapImage Area (1 column) */}
                <div
                  className={`hidden md:flex md:col-span-1 items-center justify-center w-full transition-all duration-500 transform ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`}
                >
                  <OverlapImage
                    imgs={project.overlapImgs}
                    isActive={isActive}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* ── Unified Detail Modal ── */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Sectioncontainer>
  );
}
