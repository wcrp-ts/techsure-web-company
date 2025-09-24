"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Imported images
import mowerImage from "../../../assets/project/mower.png";
import dcimImage from "../../../assets/project/dcim.png";
import air304Image from "../../../assets/project/air304.png";
import water304Image from "../../../assets/project/water304.png";

const images: string[] = [mowerImage, dcimImage, air304Image, water304Image];

export default function ScrollSliderSection() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isLocked = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const inView = rect.top <= 0 && rect.bottom > window.innerHeight;

      if (inView) {
        // Lock page scroll
        e.preventDefault();

        if (!isLocked.current) {
          if (e.deltaY > 0 && index < images.length - 1) {
            isLocked.current = true;
            setIndex((prev) => prev + 1);
            setTimeout(() => (isLocked.current = false), 700); // prevent overscroll
          } else if (e.deltaY < 0 && index > 0) {
            isLocked.current = true;
            setIndex((prev) => prev - 1);
            setTimeout(() => (isLocked.current = false), 700);
          }
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [index]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Sticky wrapper so the section holds while scrolling */}
      <div className="sticky top-0 h-screen w-full">
        <AnimatePresence mode="wait" custom={index}>
          <motion.img
            key={index}
            src={images[index]}
            alt={`Slide ${index + 1}`}
            className="absolute inset-0 h-full w-full object-contain"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>

        {/* Dots indicator */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}