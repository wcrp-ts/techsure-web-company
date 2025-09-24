import { useEffect, useRef, useState } from "react";
import mowerImage from "../../../../assets/project/mower.png";
import dcimImage from "../../../../assets/project/dcim.png";
import air304Image from "../../../../assets/project/air304.png";
import water304Image from "../../../../assets/project/water304.png";
import "./ProductSection.css";

const images = [mowerImage, dcimImage, air304Image, water304Image];

const ProductSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [scrollDirection, setScrollDirection] = useState<"down" | "up" | null>(null);
  const isThrottled = useRef(false);
  const lastScrollY = useRef(0);

  const isInSection = (rect: DOMRect) => rect.top < window.innerHeight && rect.bottom > 0;

  const handleWheel = (event: WheelEvent) => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    if (!isInSection(rect)) {
      // setScrollDirection(null);
      return;
    }

    const sectionHeight = rect.height;
    const scrollingDown = window.scrollY > lastScrollY.current;
    lastScrollY.current = window.scrollY;

    // Update scroll direction (debug)
    // setScrollDirection(scrollingDown ? "down" : "up");

    // Scroll progress for both directions
    const scrollProgressDown = (window.innerHeight - rect.top) / sectionHeight;
    const scrollProgressUp = rect.bottom / sectionHeight;

    // Thresholds
    const downStart = 0.8;
    // const downStop = 1;
    const upStart = 0.8;
    // const upStop = 0;

    /** Debug lines (hidden) */
    // const downStartLine = section.querySelector<HTMLDivElement>(".debug-down-start");
    // const downStopLine = section.querySelector<HTMLDivElement>(".debug-down-stop");
    // const upStartLine = section.querySelector<HTMLDivElement>(".debug-up-start");
    // const upStopLine = section.querySelector<HTMLDivElement>(".debug-up-stop");
    // const dirLine = section.querySelector<HTMLDivElement>(".debug-direction");

    // if (downStartLine) downStartLine.style.top = `${downStart * 100}%`;
    // if (downStopLine) downStopLine.style.top = `${downStop * 100}%`;
    // if (upStartLine) upStartLine.style.top = `${upStart * 100}%`;
    // if (upStopLine) upStopLine.style.top = `${upStop * 100}%`;
    // if (dirLine) dirLine.textContent = scrollingDown ? "Scrolling Down" : "Scrolling Up";

    // Lock scroll until threshold
    if (scrollingDown && scrollProgressDown < downStart) return;
    if (!scrollingDown && scrollProgressUp < upStart) return;

    // Change slide index
    if ((event.deltaY > 0 && currentIndex < images.length - 1) ||
        (event.deltaY < 0 && currentIndex > 0)) {
      event.preventDefault();
      if (isThrottled.current) return;

      setCurrentIndex(prev => (event.deltaY > 0 ? prev + 1 : prev - 1));
      isThrottled.current = true;
      setTimeout(() => (isThrottled.current = false), 150);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentIndex]);

  return (
    <div className="product-section-container bg-background-brand" ref={sectionRef}>
      {/** Debug lines hidden */}
      <div className="debug-down-start" />
      <div className="debug-down-stop" />
      <div className="debug-up-start" />
      <div className="debug-up-stop" />
      <div className="debug-direction" />

      <div className="product-section-inner">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`product-${index}`}
            className={`product-image ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
