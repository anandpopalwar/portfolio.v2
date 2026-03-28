"use client"

import { ArrowUpRight } from "lucide-react";

const DownloadBtn = () => {
    return (
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
    );
};

export default DownloadBtn;
