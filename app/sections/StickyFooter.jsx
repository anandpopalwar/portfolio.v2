"use client";

// import { MapPin, Clock, FileDown, ArrowUpRight } from "lucide-react";
import { FunkySVG } from "../components/ui/DraggableSvg";
import Text from "../components/ui/Text";
import Dither from "../components/ui/Dither";

export default function StickyFooter() {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-48 z-0 bg-black py-8 px-6 md:px-16 flex flex-col items-center justify-center gap-4 overflow-hidden">
      {/* Dither Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.1}
          colorNum={12.2}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col items-center space-y-3 text-center select-none">
        {/* Avatar & Name */}
        <div className="flex flex-row items-center gap-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-neutral-700 flex items-center justify-center border border-neutral-700 p-2">
            <FunkySVG />
          </div>
          <Text
            variant="heading3"
            as="span"
            className="text-2xl sm:text-3xl font-black tracking-tighter text-neutral-50"
          >
            ANAND POPALWAR
          </Text>
        </div>

        {/* Subtitle */}
        <Text
          variant="body"
          as="p"
          className="text-neutral-50 text-xs sm:text-sm md:text-base font-medium max-w-[280px] sm:max-w-md"
        >
          Crafting premium digital experiences, enterprise dashboards, and
          real-time systems.
        </Text>
      </div>
    </footer>
  );
}
