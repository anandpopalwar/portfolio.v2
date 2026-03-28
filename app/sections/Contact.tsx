import SocialIcon from "../components/ui/SocialIcon";
import { GitHub, LinkedIn, Mail } from "@deemlol/next-icons";
import Sectioncontainer from "../components/ui/Sectioncontainer";
import DownloadBtn from "../components/ui/DownloadBtn";

const socials = [
  {
    Icon: <LinkedIn size={128} className="w-5 h-5" strokeWidth={1.5} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anandpopalwar",
    hoverClass:
      "hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-neutral-50",
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
    hoverClass:
      "hover:bg-[#333333] hover:border-[#333333] hover:text-neutral-50",
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
        <span className="text-sm sm:text-base font-medium text-code tracking-tight text-neutral-600 text-center">
          Reach me
        </span>

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
        <DownloadBtn />
      </div>
    </Sectioncontainer>
  );
}
