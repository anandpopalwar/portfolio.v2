import { GitHub } from "@deemlol/next-icons";
import { Globe, Wifi } from "lucide-react";
import StackIcon from "tech-stack-icons";

export const skills = [
    {
        name: "Node.js",
        icon: <StackIcon name="nodejs" className="text-code" variant="dark" />,
        color: "text-[#339933] border-[#339933]/30 hover:shadow-[#339933]/30",
    },
    {
        name: "Next.js",
        icon: <StackIcon name="nextjs" className="text-code" variant="dark" />,
        color: "text-[#FF6C37] border-white/30 hover:shadow-white/30",
    },
    {
        name: "Express.js",
        icon: <StackIcon name="expressjs" className="text-code" variant="dark" />,
        color: "text-[#FF6C37] border-gray-400/30 hover:shadow-gray-400/30",
    },
    {
        name: "GSAP",
        icon: <StackIcon name="gsap" className="text-code" variant="dark" />,
        color: "text-[#FF6C37] border-gray-400/30 hover:shadow-gray-400/30",
    },

    {
        name: "React.js",
        icon: <StackIcon name="react" className="text-code" variant="dark" />,
        color: "text-[#61DAFB] border-[#61DAFB]/30 hover:shadow-[#61DAFB]/30",
    },
    {
        name: "TypeScript",
        icon: <StackIcon name="typescript" className="text-code" variant="dark" />,
        color: "text-[#3178C6] border-[#3178C6]/30 hover:shadow-[#3178C6]/30",
    },
    {
        name: "JavaScript",
        icon: <StackIcon name="js" className="text-code" variant="dark" />,
        color: "text-[#F7DF1E] border-[#F7DF1E]/30 hover:shadow-[#F7DF1E]/30",
    },
    {
        name: "MongoDB",
        icon: <StackIcon name="mongodb" className="text-code" variant="dark" />,
        color: "text-[#47A248] border-[#47A248]/30 hover:shadow-[#47A248]/30",
    },
    {
        name: "Git",
        icon: <StackIcon name="git" className="text-code" variant="dark" />,
        color: "text-[#F05032] border-[#F05032]/30 hover:shadow-[#F05032]/30",
    },
    {
        name: "Tailwind",
        icon: <StackIcon name="tailwindcss" className="text-code" variant="dark" />,
        color: "text-[#06B6D4] border-[#06B6D4]/30 hover:shadow-[#06B6D4]/30",
    },
    {
        name: "Socket.io",
        icon: <StackIcon name="socketio" className="text-code" variant="dark" />,
        color: "text-[#06B6D4] border-[#06B6D4]/30 hover:shadow-[#06B6D4]/30",
    },
    {
        name: "Docker",
        icon: <StackIcon name="docker" className="text-code" variant="dark" />,
        color: "text-[#2496ED] border-[#2496ED]/30 hover:shadow-[#2496ED]/30",
    },
    {
        name: "WebSockets",
        icon: <Wifi className="w-4 h-4" variant="dark" />,
        color: "text-purple-400 border-purple-400/30 hover:shadow-purple-400/30",
    },
    {
        name: "Redux",
        icon: <StackIcon name="redux" className="text-code" variant="dark" />,
        color: "text-[#764ABC] border-[#764ABC]/30 hover:shadow-[#764ABC]/30",
    },
    {
        name: "Github",
        icon: <GitHub name="github" className="w-4 h-4" variant="dark" />,
        color: "text-[#764ABC] border-[#764ABC]/30 hover:shadow-[#764ABC]/30",
    },
    {
        name: "REST APIs",
        icon: <Globe className="w-4 h-4" variant="dark" />,
        color: "text-[#FF6C37] border-[#FF6C37]/30 hover:shadow-[#FF6C37]/30",
    },
];
