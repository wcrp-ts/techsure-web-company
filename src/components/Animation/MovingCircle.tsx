import { useEffect,  useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

interface MovingCircleProps {
  hideOnRef?: React.RefObject<HTMLDivElement | null>;
  threshold?: number; 
}

const MovingCircle= ({ hideOnRef, threshold = 0.2 }:MovingCircleProps) => {
  const mouseX = useMotionValue(window.innerWidth / 2);
  const mouseY = useMotionValue(window.innerHeight / 2);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const [showCircle, setShowCircle] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    let observer: IntersectionObserver;

    if (hideOnRef?.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setShowCircle(!entry.isIntersecting);
          });
        },
        { threshold }
      );

      observer.observe(hideOnRef.current);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (observer && hideOnRef?.current) observer.unobserve(hideOnRef.current);
    };
  }, [mouseX, mouseY, hideOnRef, threshold]);

  return (
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
            zIndex: 30,
          }}
        />
      )}
    </AnimatePresence>
  );
};

export default MovingCircle;
