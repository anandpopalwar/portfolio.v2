import React, { useRef } from "react";
import { gsap } from "gsap";
import Text from "./Text";

export interface Tag {
  name: string;
  icon?: React.ReactNode;
}

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: Tag[];
  link?: string;
  className?: string;
}

export default function ProjectCard({
  image,
  title,
  description,
  tags,
  link,
  className = "",
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = () => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      y: -15,
      scale: 1.02,
      boxShadow: "0 20px 40px -10px rgba(0,0,0,0.2)",
      duration: 0.4,
      ease: "power3.out",
    });

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.08,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      y: 0,
      scale: 1,
      boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
      duration: 0.5,
      ease: "power3.out",
    });

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group flex flex-col bg-white border border-zinc-200 rounded-[32px] overflow-hidden transition-colors shadow-sm ${className}`}
    >
      <div className="w-full h-56 sm:h-64 bg-zinc-100 relative overflow-hidden">
        {image && image !== "PLACEHOLDER" ? (
          <img
            ref={imageRef}
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-bold tracking-widest bg-zinc-200/50">
            IMAGE PLACEHOLDER
          </div>
        )}
      </div>

      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <Text variant="heading3" as="h3" className="text-[#050505] mb-3 uppercase">
          {title}
        </Text>
        <Text variant="body" className="text-zinc-600 text-sm mb-6 flex-1">
          {description}
        </Text>

        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, i) => (
            <Text
              as="span"
              variant="monoBody"
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-100 text-[#050505] text-[10px] font-bold uppercase tracking-widest rounded-full"
            >
              {tag.icon && (
                <span className="w-3.5 h-3.5 flex shrink-0 items-center justify-center">
                  {tag.icon}
                </span>
              )}
              {tag.name}
            </Text>
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-auto text-[#2563eb] font-bold uppercase text-xs tracking-widest hover:text-[#050505] transition-colors"
          >
            View Project
            <span className="transform group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </a>
        )}
      </div>
    </div>
  );
}
