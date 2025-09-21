import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import HeroSection from "./components/HeroSection";
import TrustedBy from "./components/TrustedBy";
import ValuesSection from "./components/ValuesSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import ProductSection from "./components/ProductSection/ProductSection";
import EventSection from "./components/EventSection/EventSection";

const Home = () => {
  const mouseX = useMotionValue(window.innerWidth / 2);
  const mouseY = useMotionValue(window.innerHeight / 2);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const [showCircle, setShowCircle] = useState(true);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Observe ServicesSection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowCircle(false); // hide when ServicesSection is visible
          } else {
            setShowCircle(true); // show again when leaving
          }
        });
      },
      { threshold: 0.2 } // adjust sensitivity
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (servicesRef.current) observer.unobserve(servicesRef.current);
    };
  }, [mouseX, mouseY]);

  return (
    <div>
      {/* Moving Circle with fade */}
      <AnimatePresence>
        {showCircle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              position: "fixed",
              top: springY,
              left: springX,
              width: "654px",
              height: "654px",
              borderRadius: "50%",
              background: "linear-gradient(90deg, #8F1BE8 0%, #72F5FD 100%)",
              filter: "blur(150px)",
              pointerEvents: "none",
              translateX: "-50%",
              translateY: "-50%",
              zIndex: 10,
            }}
          />
        )}
      </AnimatePresence>

      <div style={{ position: "relative", zIndex: 50}}>
        <HeroSection />
        <TrustedBy />
        <ValuesSection />
        
        {/* Add ref here */}
        <div ref={servicesRef}>
          <ServicesSection />
          <ProductSection />
          <EventSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
