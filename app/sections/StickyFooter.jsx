"use client";

// import { MapPin, Clock, FileDown, ArrowUpRight } from "lucide-react";
import { FunkySVG } from "../components/ui/DraggableSvg";
import Text from "../components/ui/Text";
import Dither from "../components/ui/Dither";

export default function StickyFooter() {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-50 z-0 bg-black py-8 px-6 md:px-16 flex flex-col items-center justify-center gap-4 overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-center space-y-4 text-center">
        {/* Avatar & Name */}
        <div className="flex flex-row items-center gap-4">
          <div className="w-16 h-16 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-zinc-800 flex items-center justify-center border border-zinc-700 p-2">
            <FunkySVG />
          </div>
          <Text
            variant="heading3"
            as="span"
            className="text-3xl sm:text-4xl font-black tracking-tighter text-zinc-100"
          >
            ANAND POPALWAR
          </Text>
        </div>

        {/* Subtitle */}
        <Text
          variant="body"
          as="p"
          className="text-zinc-100 text-sm md:text-base font-medium max-w-md"
        >
          Crafting premium digital experiences, enterprise dashboards, and
          real-time systems.
        </Text>
      </div>
    </footer>
  );
}
