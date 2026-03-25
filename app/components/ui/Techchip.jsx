// ---------------------------------------------------------------------------
// Helpers & Data
// ---------------------------------------------------------------------------
const TechChip = ({ tag }) => (
  <div className="w-fit pointer-events-none flex items-center gap-2 border border-zinc-400 bg-white text-zinc-500 px-4 py-1 font-bold text-sm md:text-base uppercase transition-colors rounded-full cursor-default select-none whitespace-nowrap group ">
    {tag?.icon && (
      <span className="w-4 h-4 flex items-center justify-center shrink-0 text-black transition-all">
        {tag?.icon}
      </span>
    )}
    <span
      className="leading-none mt-[2px]"
      style={{ fontFamily: "'Google Sans Code', monospace" }}
    >
      {tag.name}
    </span>
  </div>
);

export default TechChip;
