import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Text from "./ui/Text";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Layout({ children, isDarkMode }) {
  const mainRef = useRef(null);
  const footerRef = useRef(null);
  const triggerRef = useRef(null);

  useLayoutEffect(() => {
    // Initial state: footer is hidden below
    gsap.set(footerRef.current, { yPercent: 100 });

    // Create ScrollTrigger animation
    triggerRef.current = ScrollTrigger.create({
      trigger: mainRef.current,
      start: "bottom bottom",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (self.getVelocity() > 0) {
          // Scrolling down
          gsap.to(footerRef.current, {
            yPercent: 0,
            duration: 0.55,
            ease: "power3.out",
          });
        } else {
          // Scrolling up
          gsap.to(footerRef.current, {
            yPercent: 100,
            duration: 0.55,
            ease: "power3.out",
          });
        }
      },
    });

    // Cleanup
    return () => {
      triggerRef.current?.kill();
    };
  }, []);

  return (
    <>
      {/* Main content area - sits on top, hides footer */}
      <main
        ref={mainRef}
        className={`relative z-10 min-h-screen px-0 ${
          isDarkMode ? "bg-zinc-900" : "bg-white"
        }`}
      >
        {children}
      </main>

      {/* Sticky animated footer - revealed on scroll */}
      <footer
        ref={footerRef}
        className="sticky bottom-0 z-0 w-full bg-black text-white py-8 px-6 md:px-16"
        style={{ transform: "translateY(100%)" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-zinc-100 uppercase tracking-widest text-center md:text-left">
          <Text variant="monoBody" as="span" className="text-white">
            © {new Date().getFullYear()} Anand Popalwar
          </Text>
          <Text variant="monoBody" as="span" className="text-white">
            Gen Z × Millennial Aesthetics
          </Text>
        </div>
      </footer>
    </>
  );
}
