import { Lock, Map, MapPin, Printer, Wifi } from "lucide-react";
import StackIcon from "tech-stack-icons";
// Import project images
import gmr_dumper_truck from "../assets/project_imges/gmr_dumper_truck.png";
import gmr_plant_towers from "../assets/project_imges/gmr_plant_towers.png";
import energy_grid from "../assets/project_imges/energy_grid.png";
import glove from "../assets/project_imges/glove.png";
import camera from "../assets/project_imges/Camera.png";
import conveyor from "../assets/project_imges/conveyor.png";
import open_box from "../assets/project_imges/open_box.png";

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

export const SERVICES = [
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
            "Designed 4-level RBAC (User > Role > Module > Action) using custom React hooks.",
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
