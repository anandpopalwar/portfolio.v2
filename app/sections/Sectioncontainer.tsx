import React from "react";

type HeaderAlignment = "start" | "center" | "end";  

interface SectioncontainerProps {
  children: React.ReactNode;
  containerRef?: React.RefObject<HTMLDivElement>;
  title: string;
  sectionId?: string;
  extraClassName?: string;
  border:boolean
  headerAlignment:HeaderAlignment
}

const Sectioncontainer = ({
  containerRef,
  children,
  title,
  sectionId,
  extraClassName = "",
  border=true,
  headerAlignment="start"
}: SectioncontainerProps) => {
  return (
    <section
      ref={containerRef}
      id={sectionId}
      className={`relative w-full pt-16 pb-8 md:pt-28 md:pb-14 px-4 md:px-8 lg:px-16 bg-white ${extraClassName}`}
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-4 md:mb-6">
        <div
          className={`flex items-center justify-${headerAlignment} ${border ? "border-b-2" : ""} border-neutral-50 pb-2`}
        >
          <h2
            className="text-2xl sm:text-2xl md:text-3xl lg:text-[3rem] font-black uppercase tracking-tighter leading-none text-neutral-900 underline underline-offset-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {title}
          </h2>
        </div>
      </div>

      {children}
    </section>
  );
};

export default Sectioncontainer;
