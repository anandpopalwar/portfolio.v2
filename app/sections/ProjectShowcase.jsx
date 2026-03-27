"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { Map, MapPin, Printer, Lock, Wifi } from "lucide-react";
import StackIcon from "tech-stack-icons";
import ProjectModal from "../components/ui/ProjectModal";

// Import project images
import gmr_dumper_truck from "../assets/project_imges/gmr_dumper_truck.png";
import gmr_plant_towers from "../assets/project_imges/gmr_plant_towers.png";
import energy_grid from "../assets/project_imges/energy_grid.png";
import glove from "../assets/project_imges/glove.png";
import camera from "../assets/project_imges/Camera.png";
import conveyor from "../assets/project_imges/conveyor.png";
import open_box from "../assets/project_imges/open_box.png";
import OverlapImage from "../components/ui/OverlapImage";
import Sectioncontainer from "./Sectioncontainer";
// import TechChip from "../components/ui/Techchip";

const LucideIcon = ({ name }) => {
  switch (name) {
    case "react":
      return (
        <StackIcon
          name="react"
          className="w-4 h-4 sm:w-5 sm:h-5 grayscale-0 rounded-full bg-neutral-50"
        />
      );
    case "typescript":
      return <StackIcon name="typescript" className="w-4 h-4 sm:w-5 sm:h-5" />;
    case "js":
      return <StackIcon name="js" className="w-4 h-4 sm:w-5 sm:h-5" />;
    case "sass":
      return <StackIcon name="sass" className="w-4 h-4 sm:w-5 sm:h-5" />;
    case "socketio":
      return (
        <StackIcon
          name="socketio"
          className="w-4 h-4 sm:w-5 sm:h-5 bg-neutral-50 rounded-full"
        />
      );
    case "docker":
      return <StackIcon name="docker" className="w-4 h-4 sm:w-5 sm:h-5" />;
    default:
      return (
        <StackIcon
          name="git"
          className="w-4 h-4 sm:w-5 sm:h-5 bg-neutral-50 rounded-full"
        />
      );
  }
};

const SERVICES = [
  {
    id: "gmr_warora",
    title: "GMR Warora",
    role: "Frontend Lead Developer",
    tags: [
      { name: "React.js", icon: <LucideIcon name="react" /> },
      { name: "TypeScript", icon: <LucideIcon name="typescript" /> },
      { name: "JavaScript", icon: <LucideIcon name="js" /> },
      { name: "SCSS", icon: <LucideIcon name="sass" /> },
      { name: "WebSocket", icon: <Wifi size={14} /> },
      { name: "socket.io", icon: <LucideIcon name="socketio" /> },
      // { name: "Axios", icon: <AxiosIcon size={14} /> },
      { name: "Protomaps", icon: <Map size={14} /> },
      { name: "Leaflet", icon: <MapPin size={14} /> },
      { name: "print-js", icon: <Printer size={14} /> },
      // { name: "chart.js", icon: <ChartjsIcon size={14} /> },
      { name: "Docker", icon: <LucideIcon name="docker" /> },
      { name: "RBAC", icon: <Lock size={14} /> },
    ],
    desc: [
      "Led development of enterprise-scale real-time vehicle tracking system.",
      "Implemented multi-language support (EN/HIN/GUJ/MAR) without any third party packages.",
      "Integrated Offline interactive maps.",
      "Designed 4-level RBAC ( User > Role > Module > Action ) using custom React hooks.",
      "Built reusable component library (20+ modules) with lazy loading and code splitting.",
      "Integrated weighbridge, GRN workflows, Form 15, and audit logging for full traceability.",
    ],
    tldr: "Led development of an enterprise-scale real-time vehicle tracking system with multi-language support, offline maps, custom RBAC, reusable components, and integrated workflows with full audit traceability.",
    overlapImgs: [gmr_dumper_truck, gmr_plant_towers, energy_grid],
    shape: "rounded-[80px_20px_100px_40px]",
    image: "GMR_LOGO_PLACEHOLDER",
  },
  {
    id: "mahindra",
    title: "Mahindra Logistics",
    role: "Frontend Developer",
    tags: [
      { name: "React.js", icon: <LucideIcon name="react" /> },
      { name: "TypeScript", icon: <LucideIcon name="typescript" /> },
      { name: "JavaScript", icon: <LucideIcon name="js" /> },
      { name: "SCSS", icon: <LucideIcon name="sass" /> },
      { name: "socket.io", icon: <LucideIcon name="socketio" /> },
      // { name: "Axios", icon: <AxiosIcon size={14} /> },
      // { name: "chart.js", icon: <ChartjsIcon size={14} /> },
      { name: "Docker", icon: <LucideIcon name="docker" /> },
    ],
    desc: [
      "Visualized AI box detection outputs with server-side pagination and reusable components.",
      "Implemented secure API flows and centralized async state management.",
    ],

    tldr: "Visualized AI box detection with server-side pagination and reusable components, while implementing secure APIs and centralized async state management.",
    overlapImgs: [camera, open_box, conveyor],

    image: "MAHINDRA_LOGO_PLACEHOLDER",
  },
  {
    id: "dpl",
    title: "DPL Dashboard",
    role: "Frontend Developer",
    tags: [
      { name: "React.js", icon: <LucideIcon name="react" /> },
      { name: "TypeScript", icon: <LucideIcon name="typescript" /> },
      { name: "JavaScript", icon: <LucideIcon name="js" /> },
      { name: "SCSS", icon: <LucideIcon name="sass" /> },
      { name: "socket.io", icon: <LucideIcon name="socketio" /> },
      // { name: "Axios", icon: <AxiosIcon size={14} /> },
      // { name: "chart.js", icon: <ChartjsIcon size={14} /> },
      { name: "Docker", icon: <LucideIcon name="docker" /> },
    ],
    desc: [
      "Built real-time glove production monitoring with AI-powered defect detection.",
      "Enabled live updates, notifications, and file downloads with low-latency UX.",
    ],
    tldr: "Built a real-time glove production monitoring system with AI-powered defect detection, enabling low-latency live updates, notifications, and file downloads.",
    overlapImgs: [camera, glove, conveyor],
    image: "DPL_LOGO_PLACEHOLDER",
  },
];

const ACCENT = "#2563eb";

export default function ProjectShowcase() {
  const containerRef = useRef(null);
  const titleRefs = useRef([]);
  const rowRefs = useRef([]);

  const [activeIndex, setActiveIndex] = useState(-1);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!gsap) return;

    const handleMouseMoveRow = (e, index) => {
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

    const handleMouseLeaveRow = (index) => {
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

    const listeners = [];

    rowRefs.current.forEach((row, i) => {
      if (!row) return;
      const move = (e) => handleMouseMoveRow(e, i);
      const leave = () => handleMouseLeaveRow(i);
      row.addEventListener("mousemove", move);
      row.addEventListener("mouseleave", leave);
      listeners.push({ row, move, leave });
    });

    return () => {
      listeners.forEach(({ row, move, leave }) => {
        row.removeEventListener("mousemove", move);
        row.removeEventListener("mouseleave", leave);
      });
    };
  }, [selectedProject]);

  // Handlers
  const handleRowEnter = useCallback((i) => {
    setActiveIndex(i);
  }, []);

  const handleRowLeave = useCallback(() => {
    setActiveIndex(-1);
  }, []);

  const handleRowTap = useCallback((i) => {
    setActiveIndex(-1); // Clear active visual index so scrolling states pause cleanly
    setSelectedProject(SERVICES[i]); // Opens the unified modal
  }, []);

  return (
    <Sectioncontainer
      containerRef={containerRef}
      title="Projects"
      id="projects"
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
            <div
              key={project.id}
              ref={(el) => (rowRefs.current[i] = el)}
              className={`border-b border-zinc-200 transition-all duration-500 hover:border-zinc-300 cursor-pointer`}
              onMouseEnter={() => handleRowEnter(i)}
              onClick={() => handleRowTap(i)}
            >
              {/* Row Header */}
              <div
                className={`group grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-8 py-8 md:py-14 transition-all duration-500 ${isDimmed ? "opacity-20 grayscale" : "opacity-100"
                  } ${isActive ? "bg-zinc-50/80 -mx-4 px-4 rounded-[32px]" : ""}`}
              >
                {/* Title and Content Area (2 columns) */}
                <div className="md:col-span-2 flex flex-col gap-2 md:gap-3 justify-center min-w-0">
                  <h3
                    ref={(el) => (titleRefs.current[i] = el)}
                    className="text-2xl sm:text-2xl md:text-3xl lg:text-[3.4rem] font-semibold tracking-tighter transition-colors duration-500 select-none truncate leading-relaxed"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: isActive ? ACCENT : "#050505",
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
                  <span className="w-3/4 mt-2 space-y-1 md:space-y-1.5 transition-opacity duration-500 text-xs md:text-sm text-neutral-500 tracking-tight font-medium line-clamp-2">
                    {project?.tldr}
                  </span>
                </div>
                {/* OverlapImage Area (1 column) */}
                <div
                  className={`hidden md:flex md:col-span-1 items-center justify-center w-full transition-all duration-500 transform opacity-100 scale-100 pointer-events-none `}
                >
                  <OverlapImage
                    imgs={project.overlapImgs}
                    isActive={isActive}
                  />
                </div>
              </div>
            </div>
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
// {/* OverlapImage for the project */ }
// <div className="absolute right-0 w-w-1/2 md:w-1/2 lg:w-1/2 min-h-min flex items-center justify-left">
//   <OverlapImage imgs={project.overlapImgs} />
// </div>
