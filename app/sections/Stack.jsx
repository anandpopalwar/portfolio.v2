import React, { useRef } from "react";
import { Layout, Server, Database, Wifi, Cloud, Zap, Code2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const toolkit = [
    { name: "Frontend Design", icon: Layout, desc: "React, Next.js, Tailwind, GSAP", span: "col-span-1 md:col-span-2 md:row-span-2", glow: "from-blue-500/40 to-cyan-500/10", iconColor: "text-cyan-500" },
    { name: "Backend Architecture", icon: Server, desc: "Node.js, Express.js", span: "col-span-1 md:col-span-1", glow: "from-green-500/40 to-emerald-500/10", iconColor: "text-emerald-500" },
    { name: "Database Systems", icon: Database, desc: "MongoDB, Redis", span: "col-span-1 md:col-span-1", glow: "from-teal-500/40 to-emerald-500/10", iconColor: "text-teal-500" },
    { name: "Real-time Operations", icon: Wifi, desc: "WebSockets, Socket.io", span: "col-span-1 md:col-span-1", glow: "from-orange-500/40 to-red-500/10", iconColor: "text-orange-500" },
    { name: "DevOps & Cloud", icon: Cloud, desc: "AWS, Docker, CI/CD", span: "col-span-1 md:col-span-1", glow: "from-purple-500/40 to-pink-500/10", iconColor: "text-purple-500" },
    { name: "API Integration", icon: Zap, desc: "RESTful, GraphQL APIs", span: "col-span-1 md:col-span-2", glow: "from-yellow-500/40 to-amber-500/10", iconColor: "text-amber-500" },
    { name: "TypeScript / Core", icon: Code2, desc: "Type-safe robust architecture", span: "col-span-1 md:col-span-2", glow: "from-indigo-500/40 to-blue-500/10", iconColor: "text-indigo-500" },
];

const Stack = ({ isDarkMode }) => {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useGSAP(() => {
        gsap.fromTo(cardsRef.current,
            {
                y: 100,
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.2)",
            });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="stack" className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
            <div className="mb-16 md:mb-24 text-left">
                <h2 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Toolkit</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-6"></div>
                <p className={`text-lg md:text-xl max-w-2xl leading-relaxed ${isDarkMode ? "text-white/60" : "text-black/60"}`}>
                    A comprehensive suite of technologies and architectural patterns I leverage to build robust, scalable platforms and enterprise dashboards.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[160px] md:auto-rows-[200px]">
                {toolkit.map((tool, index) => {
                    const Icon = tool.icon;
                    return (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className={`bento-card relative rounded-3xl p-6 md:p-8 flex flex-col justify-end overflow-hidden group border transition-all duration-500 cursor-default ${tool.span} ${isDarkMode ? "border-white/10 bg-white/5 hover:bg-white/10" : "border-black/10 bg-black/5 hover:bg-black/10 shadow-lg"}`}
                        >
                            {/* Subtle background glow that follows the theme of the card */}
                            <div className={`absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-bl ${tool.glow} blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full translate-x-8 -translate-y-8 pointer-events-none`}></div>

                            <div className="relative z-10">
                                <Icon className={`w-10 h-10 md:w-12 md:h-12 ${tool.iconColor} mb-4 group-hover:-translate-y-2 transition-all duration-500 ${isDarkMode ? "group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" : "group-hover:drop-shadow-[0_0_15px_rgba(0,0,0,0.15)]"}`} strokeWidth={2} />
                                <h3 className={`text-xl md:text-2xl font-bold mb-2 tracking-tight group-hover:translate-x-2 transition-transform duration-500 delay-75 ${isDarkMode ? "text-white" : "text-black"}`}>{tool.name}</h3>
                                <p className={`text-sm md:text-base font-medium group-hover:translate-x-2 transition-all duration-500 delay-100 ${isDarkMode ? "text-white/50 group-hover:text-white/80" : "text-black/60 group-hover:text-black/90"}`}>{tool.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Stack;
