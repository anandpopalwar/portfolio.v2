import { useState, useRef, useEffect } from "react";
import { GMRLogo, MahindraLogiLogo } from "./Drops";
import DPL from "../assets/dpl.jpeg";
import StackIcon from "tech-stack-icons";
import {
    Globe,
    Wifi,
    Lock,
    Printer,
    BarChart3,
    Map,
    MapPin,
} from "lucide-react";

/**
 * Note: We are using a script-injected version of GSAP to ensure
 * compatibility in this preview environment.
 */

const Drops2 = () => {
    const [hoveredService, setHoveredService] = useState(null);
    const [gsapLoaded, setGsapLoaded] = useState(false);

    // Inject GSAP via CDN since local imports are failing
    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
        script.async = true;
        script.onload = () => setGsapLoaded(true);
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const services = [
        {
            id: "gmr_warora",
            title: "GMR Warora",
            role: "Frontend Lead",

            tags: [
                {
                    name: "React.js",
                    icon: <StackIcon name="react" variant="dark" className="w-4 h-4" />,
                },
                {
                    name: "TypeScript",
                    icon: (
                        <StackIcon name="typescript" variant="dark" className="w-4 h-4" />
                    ),
                },
                {
                    name: "JavaScript",
                    icon: <StackIcon name="js" variant="dark" className="w-4 h-4" />,
                },
                {
                    name: "SCSS",
                    icon: <StackIcon name="sass" variant="dark" className="w-4 h-4" />,
                },
                {
                    name: "WebSocket",
                    icon: <Wifi variant="dark" className="w-4 h-4" />,
                },
                {
                    name: "socket.io",
                    icon: (
                        <StackIcon name="socketio" variant="dark" className="w-4 h-4" />
                    ),
                },
                { name: "Axios", icon: <Globe variant="dark" className="w-4 h-4" /> },
                { name: "Protomaps", icon: <Map variant="dark" className="w-4 h-4" /> },
                {
                    name: "Leaflet",
                    icon: <MapPin variant="dark" className="w-4 h-4" />,
                },
                {
                    name: "print-js",
                    icon: <Printer variant="dark" className="w-4 h-4" />,
                },
                {
                    name: "chart.js",
                    icon: <BarChart3 variant="dark" className="w-4 h-4" />,
                },
                {
                    name: "Docker",
                    icon: <StackIcon name="docker" variant="dark" className="w-4 h-4" />,
                },
                { name: "RBAC", icon: <Lock variant="dark" className="w-4 h-4" /> },
            ],
            desc: [
                "Led development of enterprise-scale real-time vehicle tracking system.",
                "Implemented multi-language support (EN/HIN/GUJ/MAR) without any third party packages.",
                "Integrated Offline interactive maps.",
                "Designed 4-level RBAC ( User > Role > Module > Action ) using custom React hooks.",
                "Built reusable component library (20+ modules) with lazy loading and code splitting.",
                "Integrated weighbridge, GRN workflows, Form 15, and audit logging for full traceability.",
            ],
            shape: "rounded-[80px_20px_100px_40px]",
            image: <GMRLogo variant="dark" className="w-12 h-6 md:w-16 md:h-8" />,
        },
        {
            id: "mahindra",
            title: "Mahindra Logistics",
            role: "Frontend Dev",
            tags: [
                {
                    name: "React.js",
                    icon: <StackIcon name="react" variant="dark" className="w-4 h-4" />,
                },
                {
                    name: "TypeScript",
                    icon: (
                        <StackIcon name="typescript" variant="dark" className="w-4 h-4" />
                    ),
                },
                {
                    name: "JavaScript",
                    icon: <StackIcon name="js" variant="dark" className="w-4 h-4" />,
                },
                {
                    name: "SCSS",
                    icon: <StackIcon name="sass" variant="dark" className="w-4 h-4" />,
                },
                {
                    name: "socket.io",
                    icon: (
                        <StackIcon name="socketio" variant="dark" className="w-4 h-4" />
                    ),
                },
                { name: "Axios", icon: <Globe className="w-4 h-4" /> },
                { name: "chart.js", icon: <BarChart3 className="w-4 h-4" /> },
                {
                    name: "Docker",
                    icon: <StackIcon name="docker" variant="dark" className="w-4 h-4" />,
                },
            ],
            desc: [
                "Built real-time glove production monitoring with AI-powered defect detection.",
                "Enabled live updates, notifications, and file downloads with low-latency UX.",
            ],
            image: (
                <MahindraLogiLogo variant="dark" className="w-8 h-10 md:w-10 md:h-12" />
            ),
        },
        {
            id: "dpl",
            title: "DPL Dashboard",
            role: "Frontend Dev",
            tags: [
                {
                    name: "React.js",
                    icon: <StackIcon name="react" variant="dark" className="w-4 h-4" />,
                },
                {
                    name: "TypeScript",
                    icon: (
                        <StackIcon name="typescript" variant="dark" className="w-4 h-4" />
                    ),
                },
                {
                    name: "JavaScript",
                    icon: <StackIcon name="js" variant="dark" className="w-4 h-4" />,
                },
                {
                    name: "SCSS",
                    icon: <StackIcon name="sass" variant="dark" className="w-4 h-4" />,
                },
                {
                    name: "socket.io",
                    icon: (
                        <StackIcon name="socketio" variant="dark" className="w-4 h-4" />
                    ),
                },
                { name: "Axios", icon: <Globe className="w-4 h-4" /> },
                { name: "chart.js", icon: <BarChart3 className="w-4 h-4" /> },
                {
                    name: "Docker",
                    icon: <StackIcon name="docker" variant="dark" className="w-4 h-4" />,
                },
            ],
            desc: [
                "Visualized AI box detection outputs with server-side pagination and reusable components.",
                "Implemented secure API flows and centralized async state management.",
            ],
            image: (
                <img
                    src={DPL}
                    alt="DPL Logo"
                    className="w-16 h-8 md:w-20 md:h-10 object-contain"
                />
            ),
        },
    ];

    if (!gsapLoaded) {
        return (
            <div className="min-h-screen  flex items-center justify-center">
                <div className="text-blue-600 animate-pulse text-xl font-serif italic">
                    Loading Animation Engine...
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen  flex flex-col items-center justify-center font-sans overflow-hidden selection:bg-blue-600 px-4">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-5xl font-serif italic mb-1">
                    I know what am good at!
                </h2>
            </div>

            {/* Services List */}
            <div className="flex flex-col items-center w-full max-w-4xl gap-6 md:gap-10 pb-16 md:pb-24">
                {services.map((service) => (
                    <ServiceItem
                        key={service.id}
                        service={service}
                        isAnyHovered={hoveredService !== null}
                        isThisHovered={hoveredService === service.id}
                        onHover={() => setHoveredService(service.id)}
                        onLeave={() => setHoveredService(null)}
                    />
                ))}
            </div>
        </div>
    );
};

const ServiceItem = ({
    service,
    isAnyHovered,
    isThisHovered,
    onHover,
    onLeave,
}) => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const revealRef = useRef(null);
    const tagsRef = useRef([]);
    const imageRef = useRef(null);
    const learnMoreRef = useRef(null);

    const [isMobile, setIsMobile] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const closePopup = () => {
        setIsClosing(true);
        setTimeout(() => {
            setShowPopup(false);
            setIsClosing(false);
        }, 280);
    };

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const gsap = window.gsap;
        if (!gsap) return;

        if (isThisHovered) {
            // Kill any running tweens to prevent conflicts on rapid hover
            gsap.killTweensOf(imageRef.current);
            gsap.killTweensOf(revealRef.current);
            tagsRef.current.forEach((t) => t && gsap.killTweensOf(t));
            gsap.killTweensOf(learnMoreRef.current);

            // HOVER ON ANIMATION
            const tl = gsap.timeline({
                defaults: { ease: "power4.out", duration: 0.7 },
            });

            // Show both containers
            gsap.set(imageRef.current, { opacity: 1, visibility: "visible" });
            gsap.set(revealRef.current, { opacity: 1, visibility: "visible" });

            const imgScale = isMobile ? 0.75 : 1;
            const radiusMult = isMobile ? 0.65 : 1.1;

            // Animate image in (the inner child div of imageRef)
            const imgChild = imageRef.current.querySelector("div");
            tl.fromTo(
                imgChild,
                { y: -30, opacity: 0, scale: 0.6 * imgScale, rotate: -5 },
                { y: 0, opacity: 1, scale: imgScale, rotate: 0 },
            );

            const totalTags = service.tags.length;
            tagsRef.current.forEach((tag, i) => {
                if (!tag) return;

                const angle = (i / totalTags) * Math.PI * 2;
                const radiusX = (160 + Math.random() * 80) * radiusMult;
                const radiusY = (100 + Math.random() * 60) * radiusMult;

                const x = Math.cos(angle) * radiusX;
                const y = Math.sin(angle) * radiusY;
                const rotate = (Math.random() - 0.5) * 40;

                tl.fromTo(
                    tag,
                    { x: 0, y: 0, opacity: 0, scale: 0.2 },
                    { x, y, opacity: 1, scale: 1, rotation: rotate, duration: 0.6 },
                    "-=0.5",
                );
            });

            tl.fromTo(
                learnMoreRef.current,
                { y: 15, opacity: 0 },
                { y: 0, opacity: 1 },
                "-=0.4",
            );

            gsap.to(titleRef.current, {
                color: "#2563eb",
                opacity: 1,
                scale: 1.05,
                duration: 0.4,
            });
        } else {
            // Kill any running tweens
            gsap.killTweensOf(imageRef.current);
            gsap.killTweensOf(revealRef.current);
            tagsRef.current.forEach((t) => t && gsap.killTweensOf(t));
            gsap.killTweensOf(learnMoreRef.current);

            // HOVER OFF ANIMATION
            const tlOut = gsap.timeline({
                defaults: { ease: "power4.in", duration: 0.4 },
                onComplete: () => {
                    gsap.set(imageRef.current, { visibility: "hidden" });
                    gsap.set(revealRef.current, { visibility: "hidden" });
                },
            });

            // Animate tags back
            tagsRef.current.forEach((tag) => {
                if (!tag) return;
                tlOut.to(tag, { x: 0, y: 0, opacity: 0, scale: 0.2, rotation: 0 }, 0);
            });

            // Animate image out
            const imgChild = imageRef.current.querySelector("div");
            tlOut.to(imgChild, { y: -30, opacity: 0, scale: 0.6, rotate: -5 }, 0);

            // Fade out Learn More
            tlOut.to(learnMoreRef.current, { opacity: 0, y: 10 }, 0);

            // Reset Title
            gsap.to(titleRef.current, {
                color: isAnyHovered ? "#222" : "#2563eb",
                opacity: isAnyHovered ? 0.3 : 1,
                scale: 1,
                duration: 0.3,
            });
        }
    }, [isThisHovered, isAnyHovered, service.tags.length, isMobile]);

    const handleClick = () => {
        if (isMobile) {
            if (isThisHovered) onLeave();
            else onHover();
        }
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full py-4 md:py-10 cursor-pointer flex flex-col items-center justify-center transition-all"
            onMouseEnter={!isMobile ? onHover : undefined}
            onMouseLeave={!isMobile ? onLeave : undefined}
            onClick={handleClick}
        >
            {/* Image layer — z-20, independent sibling */}
            <div
                ref={imageRef}
                className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center invisible"
            >
                <div className="w-56 h-36 md:w-80 md:h-48 rounded-lg md:rounded-xl overflow-hidden shadow-2xl border border-white/20">
                    <div className="w-full h-full p-4 flex items-center justify-center bg-white *:w-full! *:h-full! [&_img]:object-contain [&_svg]:object-contain">
                        {service.image}
                    </div>
                </div>
            </div>

            {/* Tags layer — z-30, separate sibling */}
            <div
                ref={revealRef}
                className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center invisible"
            >
                {service.tags.map((tag, idx) => (
                    <span
                        key={idx}
                        ref={(el) => (tagsRef.current[idx] = el)}
                        className="absolute flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-[#1a1a1a] text-[#f0f0f0] text-lg md:text-xl whitespace-nowrap shadow-xl select-none"
                    >
                        <span className="w-5 h-5 shrink-0">{tag.icon}</span>
                        <span className="italic">{tag.name}</span>
                    </span>
                ))}
            </div>

            <h2
                ref={titleRef}
                className="text-[10vw] md:text-9xl font-bold tracking-tighter text-center select-none z-10 leading-none transition-all duration-300 uppercase text-blue-500"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
                {service.title.split(" ").map((word, i) => (
                    <span key={i}>
                        {i > 0 && <br />}
                        {word}
                    </span>
                ))}
            </h2>

            <div ref={learnMoreRef} className="mt-2 md:mt-4 z-30 opacity-0">
                <button
                    className="text-black border-b border-black pb-0.5 text-[10px] md:text-sm font-bold uppercase tracking-widest italic cursor-pointer pointer-events-auto bg-transparent"
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowPopup(true);
                    }}
                >
                    view contribution
                </button>
            </div>

            {/* Popup Modal */}
            {showPopup && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${isClosing
                            ? "animate-[backdropOut_0.3s_ease_forwards]"
                            : "animate-[backdropIn_0.3s_ease_forwards]"
                        }`}
                    style={{ backgroundColor: isClosing ? undefined : undefined }}
                    onClick={closePopup}
                >
                    <div
                        className={`relative bg-[#111] border border-white/10 rounded-2xl shadow-2xl max-w-lg w-full p-6 md:p-8 max-h-[80vh] overflow-y-auto ${isClosing
                                ? "animate-[modalOut_0.28s_ease_forwards]"
                                : "animate-[modalIn_0.35s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-3 right-4 text-white/50 hover:text-white text-2xl leading-none cursor-pointer transition-colors"
                            onClick={closePopup}
                        >
                            &times;
                        </button>

                        <div className="mb-5">
                            <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                                {service.title}
                            </h3>
                            <span className="text-blue-600 text-xs md:text-sm font-bold uppercase tracking-widest">
                                {service.role}
                            </span>
                        </div>

                        <ul className="space-y-3">
                            {service.desc.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-start gap-3 text-white/80 text-sm md:text-base leading-relaxed"
                                >
                                    <span className="mt-1.5 w-2 h-2 rounded-full text-blue-600 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {service.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="flex items-center gap-1.5 bg-white/10 text-white/70 px-3 py-1 rounded-full text-xs font-semibold"
                                >
                                    <span className="shrink-0 w-3.5 h-3.5">{tag.icon}</span>
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Modal animation keyframes */}
            <style>{`
                @keyframes backdropIn {
                    from { background-color: rgba(0,0,0,0); backdrop-filter: blur(0px); }
                    to   { background-color: rgba(0,0,0,0.6); backdrop-filter: blur(4px); }
                }
                @keyframes backdropOut {
                    from { background-color: rgba(0,0,0,0.6); backdrop-filter: blur(4px); }
                    to   { background-color: rgba(0,0,0,0); backdrop-filter: blur(0px); }
                }
                @keyframes modalIn {
                    from { opacity: 0; transform: scale(0.9) translateY(20px); }
                    to   { opacity: 1; transform: scale(1) translateY(0); }
                }
                @keyframes modalOut {
                    from { opacity: 1; transform: scale(1) translateY(0); }
                    to   { opacity: 0; transform: scale(0.95) translateY(10px); }
                }
            `}</style>
        </div>
    );
};

export default Drops2;
