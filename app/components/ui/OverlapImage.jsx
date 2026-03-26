import Image from "next/image";

const OverlapImage = ({ imgs, isActive, accentColor = "#2563eb" }) => {
  if (!imgs || !Array.isArray(imgs) || imgs.length === 0) return null;

  return (
    <div className="relative w-full min-h-min flex items-center justify-center py-2">
      <style>
        {`
        .sticker-container {
          perspective: 1200px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .sticker {
          position: absolute;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.25),
                      filter 0.3s ease,
                      opacity 0.3s ease;
          cursor: pointer;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
          will-change: transform;
        }

        .sticker img {
          transition: all 0.5s ease;
        }

        .color-overlay {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.5s ease;
          mix-blend-mode: color;
          pointer-events: none;
        }

        .sticker.active .color-overlay {
          opacity: 1;
        }
        `}
      </style>

      <div className="sticker-container w-full max-w-sm h-full">
        {imgs.map((img, index) => {
          const middle = (imgs.length - 1) / 2;

          const spread = isActive ? 100 : 70;
          const rotation = (index - middle) * 15;
          const xOffset = (index - middle) * spread;

          // ✅ CENTER-OUT STAGGER DELAY
          const delay = Math.abs(index - middle) * 80;

          return (
            <div
              key={index}
              className={`sticker w-28 h-28 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-2xl overflow-hidden border-none ${isActive ? "active" : ""
                }`}
              style={{
                transform: `translateX(${xOffset}px)`,
                zIndex: index,
                transitionDelay: `${delay}ms`, // 👈 ONLY NEW LINE THAT MATTERS
              }}
            >
              <Image
                src={img}
                alt={`Sticker ${index + 1}`}
                className="w-full h-full object-contain grayscale opacity-70"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OverlapImage;