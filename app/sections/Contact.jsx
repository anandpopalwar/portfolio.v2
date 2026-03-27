import SocialIcon from "../components/ui/SocialIcon";
import { ArrowUpRight, FileDown } from "lucide-react";
import { GitHub, LinkedIn, Mail } from "@deemlol/next-icons";
import Sectioncontainer from "./Sectioncontainer";

const socials = [
  {
    Icon: <LinkedIn size={128} className="w-5 h-5" strokeWidth={1.5} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anandpopalwar",
    hoverClass: "hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white",
  },
  {
    Icon: <Mail size={128} className="w-5 h-5" strokeWidth={1.5} />,
    label: "Email",
    href: "mailto:anandpopalwar444@gmail.com",
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
    <Sectioncontainer
      title="Taking on Work"
      sectionId="contact"
      extraClassName="mx-auto"
      border={false}
      headerAlignment="center"
    >
      <div className="max-w-7xl mx-auto  z-10 flex flex-col gap-4 pb-8">
        {/* <span className="text-sm sm:text-base font-medium text-code tracking-tight text-neutral-600 text-center">
          Open for Collaboration
        </span> */}

        {/* Social Icons Grid */}
        <div className="flex gap-4 sm:gap-6 w-full justify-center">
          {socials.map(({ Icon, label, href, hoverClass }) => (
            <SocialIcon
              key={label}
              href={href}
              ariaLabel={label}
              icon={Icon}
              lightMode={true}
              className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 ${hoverClass}`}
            />
          ))}
        </div>

        {/* Download Resume Button */}
        <button
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/1qkHG5Kzpz5E76onUnKOnKLS1pVfMrRWYGhwy32CoPac/edit?usp=sharing",
              "_blank",
            )
          }
          className="w-fit mx-auto group mt-2 flex justify-center items-center gap-1.5 px-2.5 py-1 sm:px-8 sm:py-3 rounded-full bg-neutral-900 text-neutral-50 text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-neutral-50 hover:text-neutral-900 border-2 border-neutral-900 hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:scale-105 cursor-pointer "
        >
          <ArrowUpRight className="w-3 h-3 md:w-5 md:h-5 transition-all duration-300 opacity-100" />
          <span className="mt-0 md:mt-1">Download Resume</span>
        </button>
      </div>
    </Sectioncontainer>
  );
}
{
  /* <section
  id="contact"
  className="relative z-10  text-neutral-900 py-20 lg:py-32 overflow-hidden border-t border-zinc-100 font-sans"
>
  <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
    <div className="flex flex-col items-start w-full space-y-8">
      <div className="max-w-7xl mb-4 md:mb-6">
        <div className="flex justify-start border-b-2 border-zinc-100 pb-2">
          <h2
            className="text-2xl sm:text-2xl md:text-3xl lg:text-[3rem] font-black uppercase tracking-tighter leading-none text-neutral-900 underline underline-offset-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Let's connect
          </h2>
        </div>
      </div>

    </div>
  </div>
</section> */
}
