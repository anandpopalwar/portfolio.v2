"use client";

import Image from "next/image";

const OverlapImage = ({ imgs, isActive, accentColor = "#2563eb" }) => {
  if (!imgs || !Array.isArray(imgs) || imgs.length === 0) return null;

  return (
    <div className="relative w-full h-min min-h-min flex items-center justify-center py-0 bg-transparent transition-colors duration-500">
      <div className="sticker-container h-min">
        {imgs.map((img, index) => {
          const middle = (imgs.length - 1) / 2;

          const spread = 100;
          const xOffset = (index - middle) * spread;

          // Now controlled by external isActive prop
          const yOffset = isActive ? 70 : 150;
          const rotation = (index - middle) * 6;

          const calculateDelay = () => {
            if (!isActive) return 0;
            const step = 0.1;
            if (index === middle) return 0;
            if (index < middle) return (middle - index) * step;
            const leftSideItems = Math.ceil(middle);
            return (index - middle) * step + leftSideItems * step;
          };

          const delay = calculateDelay();

          return (
            <div
              key={index}
              className={`sticker w-28 h-28 sm:w-28 sm:h-28 md:w-40 md:h-40 overflow-hidden`}
              style={{
                "--delay": `${delay}s`,
                transform: `translateX(${xOffset}px) translateY(${yOffset}px) rotate(${rotation}deg)`,
                zIndex: 10 + Math.round(10 - Math.abs(index - middle)),
                willChange: isActive ? "transform" : "auto",
              }}
            >
              <Image
                width={"100%"}
                height={"100%"}
                src={img}
                alt={`Sticker ${index + 1}`}
                className={`w-full h-full object-contain grayscale  ${isActive ? "scale-105" : "scale-100"}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OverlapImage;
