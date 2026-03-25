import StackIcon from "tech-stack-icons";
import SocialIcon from "../components/ui/SocialIcon";
import { ArrowUpRight, FileDown } from "lucide-react";
import { GitHub, LinkedIn, Mail } from "@deemlol/next-icons";

const socials = [
  {
    Icon: <LinkedIn size={128} className="w-5 h-5" strokeWidth={1.5} />,

    // <StackIcon name="linkedin"  variant="dark" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anandpopalwar",
    hoverClass: "hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white",
  },
  {
    Icon: <Mail size={128} className="w-5 h-5" strokeWidth={1.5} />,
    label: "Email",
    href: "mailto:anandpopalwar444@gmail.com",
    // hoverClass: "hover:bg-white hover:border-black hover:text-black",
  },
  {
    Icon: <GitHub size={128} className="w-5 h-5" strokeWidth={1.5} />,
    label: "GitHub",
    href: "https://github.com/anandpopalwar",
    hoverClass: "hover:bg-[#333333] hover:border-[#333333] hover:text-white",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 bg-[#ffffff] text-[#050505] py-20 lg:py-32 overflow-hidden border-t border-zinc-100 font-sans"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* MASSIVE TYPOGRAPHY HEADLINE */}
        {/* {"OPEN TO WORK".split(" ").map((word) => (
          <AnimatedHeading
            title={word}
            className="mb-4 lg:mb-8 w-full flex flex-col items-center lg:items-start text-center lg:text-left"
          />
        ))} */}

        <h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-black uppercase tracking-tighter leading-none text-[#050505] underline underline-offset-8 mb-12 lg:mb-16 w-full text-center"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          open to work
        </h1>
        <div className="flex flex-col items-center w-full max-w-md mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#050505] text-center w-full">
            Let's Connect
          </h2>
          {/* Social Icons Grid */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-[280px] sm:max-w-none justify-items-center">
            {socials.map(({ Icon, label, href, hoverClass }) => (
              <SocialIcon
                key={label}
                href={href}
                ariaLabel={label}
                icon={Icon}
                lightMode={true}
                className={`w-16 h-16 sm:w-20 sm:h-20 ${hoverClass}`}
              />
            ))}
          </div>

          {/* Download Resume Button */}
          <button
            onClick={() =>
              window.open("https://www.github.com/anandpopalwar", "_blank")
            }
            className="group mt-2 flex items-center gap-3 px-10 py-4 rounded-full bg-[#050505] text-white text-base font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-white hover:text-[#050505] border-2 border-[#050505] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:scale-105 cursor-pointer"
          >
            <FileDown className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span>Grab Resume</span>
            <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
          </button>
        </div>
      </div>
    </section>
  );
}
