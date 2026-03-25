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
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.25);
                    cursor: pointer;
                    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
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
          const rotation = (index - (imgs.length - 1) / 2) * 15;
          const xOffset = (index - (imgs.length - 1) / 2) * 45;
          return (
            <div
              key={index}
              className={`sticker w-28 h-28 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-2xl overflow-hidden border-none ${isActive ? "active" : ""}`}
              style={{
                transform: `rotate(${rotation}deg) translateX(${xOffset}px)`,
                zIndex: index,
              }}
            >
              <Image
                src={img}
                alt={`Sticker ${index + 1}`}
                className={`w-full h-full object-contain grayscale opacity-70`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OverlapImage;
