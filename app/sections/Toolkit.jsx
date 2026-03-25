// import React, { useRef, useState } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { Layers, Globe, Wifi, Github } from "lucide-react";
// import StackIcon from "tech-stack-icons";

// gsap.registerPlugin(useGSAP);

// export const skills = [
//   {
//     name: "Node.js",
//     icon: <StackIcon name="nodejs" className="w-5 h-5" variant="dark" />,
//     color: "text-[#339933] border-[#339933]/30 hover:shadow-[#339933]/30",
//   },
//   {
//     name: "Next.js",
//     icon: <StackIcon name="nextjs" className="w-5 h-5" variant="dark" />,
//     color: "text-[#FF6C37] border-white/30 hover:shadow-white/30",
//   },
//   {
//     name: "Express.js",
//     icon: <StackIcon name="expressjs" className="w-5 h-5" variant="dark" />,
//     color: "text-[#FF6C37] border-gray-400/30 hover:shadow-gray-400/30",
//   },
//   {
//     name: "GSAP",
//     icon: <StackIcon name="gsap" className="w-5 h-5" variant="dark" />,
//     color: "text-[#FF6C37] border-gray-400/30 hover:shadow-gray-400/30",
//   },

//   {
//     name: "React.js",
//     icon: <StackIcon name="react" className="w-5 h-5" variant="dark" />,
//     color: "text-[#61DAFB] border-[#61DAFB]/30 hover:shadow-[#61DAFB]/30",
//   },
//   {
//     name: "TypeScript",
//     icon: <StackIcon name="typescript" className="w-5 h-5" variant="dark" />,
//     color: "text-[#3178C6] border-[#3178C6]/30 hover:shadow-[#3178C6]/30",
//   },
//   {
//     name: "JavaScript",
//     icon: <StackIcon name="js" className="w-5 h-5" variant="dark" />,
//     color: "text-[#F7DF1E] border-[#F7DF1E]/30 hover:shadow-[#F7DF1E]/30",
//   },
//   {
//     name: "MongoDB",
//     icon: <StackIcon name="mongodb" className="w-5 h-5" variant="dark" />,
//     color: "text-[#47A248] border-[#47A248]/30 hover:shadow-[#47A248]/30",
//   },
//   {
//     name: "Git",
//     icon: <StackIcon name="git" className="w-5 h-5" variant="dark" />,
//     color: "text-[#F05032] border-[#F05032]/30 hover:shadow-[#F05032]/30",
//   },
//   {
//     name: "Tailwind",
//     icon: <StackIcon name="tailwindcss" className="w-5 h-5" variant="dark" />,
//     color: "text-[#06B6D4] border-[#06B6D4]/30 hover:shadow-[#06B6D4]/30",
//   },
//   {
//     name: "Socket.io",
//     icon: <StackIcon name="socketio" className="w-5 h-5" variant="dark" />,
//     color: "text-[#06B6D4] border-[#06B6D4]/30 hover:shadow-[#06B6D4]/30",
//   },
//   {
//     name: "Docker",
//     icon: <StackIcon name="docker" className="w-5 h-5" variant="dark" />,
//     color: "text-[#2496ED] border-[#2496ED]/30 hover:shadow-[#2496ED]/30",
//   },
//   {
//     name: "REST APIs",
//     icon: <Globe className="w-5 h-5" variant="dark" />,
//     color: "text-[#FF6C37] border-[#FF6C37]/30 hover:shadow-[#FF6C37]/30",
//   },
//   {
//     name: "WebSockets",
//     icon: <Wifi className="w-5 h-5" variant="dark" />,
//     color: "text-purple-400 border-purple-400/30 hover:shadow-purple-400/30",
//   },
//   {
//     name: "Redux",
//     icon: <StackIcon name="redux" className="w-5 h-5" variant="dark" />,
//     color: "text-[#764ABC] border-[#764ABC]/30 hover:shadow-[#764ABC]/30",
//   },
//   {
//     name: "Github",
//     icon: <Github className="w-5 h-5" />,
//     color: "text-[#764ABC] border-[#764ABC]/30 hover:shadow-[#764ABC]/30",
//   },
// ];

// export default function Toolkit({ isDarkMode }) {
//   const containerRef = useRef(null);
//   const pillsRef = useRef([]);

//   useGSAP(
//     () => {
//       // Gravity Drop Animation triggered on Scroll
//       gsap.from(pillsRef.current, {
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 100%", // Triggers when the section is prominently visible on screen
//           toggleActions: "play none none reverse", // Plays on enter, reverses on leave back to top
//         },
//         y: -800,
//         opacity: 0,
//         scale: 0.8,
//         rotation: () => Math.random() * 20 - 10,
//         duration: 0.5,
//         ease: "elastic.out(1, 0.4)", // Bouncy spring physics
//         stagger: {
//           each: 0.04,
//           from: "random", // Random order for natural cascade
//         },
//         clearProps: "all", // Cleans up inline styles after the animation finishes
//       });
//     },
//     { scope: containerRef },
//   );

//   return (
//     <section
//       id="toolkit"
//       className="py-6 md:py-10 max-w-7xl mx-auto px-4 md:px-6 z-10 relative"
//     >
//       <h2 className="text-3xl md:text-6xl font-black uppercase mb-10 md:mb-16 italic flex items-center gap-4 md:gap-6">
//         <div className="w-10 md:w-16 h-2 md:h-3 bg-yellow-400 rounded-full" />{" "}
//         Core Stack
//       </h2>

//       <div
//         ref={containerRef}
//         className={`relative w-full min-h-[400px] md:min-h-[500px] rounded-[3rem] md:rounded-[4rem] border overflow-hidden transition-all duration-700 shadow-2xl flex flex-col items-center justify-center p-8 md:p-12 group ${isDarkMode
//           ? "bg-white/5 border-white/10"
//           : "bg-black/5 border-black/10"
//           }`}
//       >
//         {/* Grid Container for Pills to settle into */}
//         <div className="flex flex-wrap justify-center content-center gap-1.5 md:gap-2 w-full h-full relative z-10 max-w-4xl">
//           {skills.map((skill, i) => (
//             <div
//               key={i}
//               ref={(el) => (pillsRef.current[i] = el)}
//               className={`
//                 flex items-center gap-1.5
//                 px-4 md:px-5 py-2.5 rounded-full border shadow-xl
//                 font-black uppercase text-xs tracking-widest cursor-default
//                 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:scale-105
//                 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md
//                 ${isDarkMode ? "text-white" : "text-black bg-black/5"}
//                 ${skill.color}
//               `}
//             >
//               <span className="opacity-100">{skill.icon}</span>
//               <span className="pt-px">{skill.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
