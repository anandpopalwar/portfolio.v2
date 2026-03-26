// ---------------------------------------------------------------------------
// Helpers & Data
// ---------------------------------------------------------------------------
const TechChip = ({ tag }) => (
  <div className="text-[10px] sm:text-xs md:text-sm w-fit pointer-events-none flex items-center gap-2 border border-neutral-400 bg-neutral-50 text-neutral-600 px-3 py-0.5 sm:px-4 sm:py-1 font-bold transition-colors rounded-full cursor-default select-none whitespace-nowrap group ">
    {/* {tag?.icon && (
      <span className="w-4 h-4 flex items-center justify-center shrink-0 text-neutral-800 transition-all">
        {tag?.icon}
      </span>
    )} */}
    <span
      className="leading-none mt-[2px]"
      style={{ fontFamily: "'Google Sans Code', monospace" }}
    >
      {tag.name}
    </span>
  </div>
);

export default TechChip;
