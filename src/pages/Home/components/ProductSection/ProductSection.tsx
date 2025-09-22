import  { useEffect, useRef, useState } from "react";
import { Button} from "antd";
import { AnimatePresence } from "framer-motion";
import { projects } from "./projectsData";
import ProjectText from "./ProjectText";
import ProjectImage from "./ProjectImage";
import { Link } from "react-router-dom";
import PATH from "../../../../routes/path"


export default function ProductSection() {
  const [index, setIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [released, setReleased] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const lastWheelTimeRef = useRef<number>(0);
  const directionRef = useRef<number>(1);

  // IntersectionObserver
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        setReleased(false);
      },
      { threshold: 0.8}
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Prevent body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (isInView && !released) document.body.style.overflow = "hidden";
    else document.body.style.overflow = prev || "";
    return () => { document.body.style.overflow = prev || ""; };
  }, [isInView, released]);

  // Wheel event
  useEffect(() => {
    const threshold = 40;
    const cooldown = 500;

    const onWheel = (e: WheelEvent) => {
      if (!isInView || released) return;
      const now = Date.now();
      if (now - lastWheelTimeRef.current < cooldown) return;

      if (e.deltaY > threshold) {
        if (index < projects.length - 1) {
          e.preventDefault();
          directionRef.current = 1;
          setIndex((i) => i + 1);
        } else {
          setReleased(true);
        }
        lastWheelTimeRef.current = now;
      } else if (e.deltaY < -threshold) {
        if (index > 0) {
          e.preventDefault();
          directionRef.current = -1;
          setIndex((i) => i - 1);
        } else {
          setReleased(true);
        }
        lastWheelTimeRef.current = now;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel as any);
  }, [isInView, released, index]);


  return (
   <section
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <div className="flex w-full items-start justify-between">
        <div className="flex-1 flex flex-col gap-4 pl-44">
          <ProjectText project={projects[index]} />
        </div>
        <div className="flex-1 flex justify-end items-start">
          <div className="w-[820px] h-[520px] relative overflow-hidden rounded-l-2xl">
            <AnimatePresence initial={false} custom={directionRef.current}>
              <ProjectImage
                key={`${projects[index].title}-${index}`}
                project={projects[index]}
                direction={directionRef.current}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="contact-button absolute bottom-16 right-32">
      <Link to={PATH.product}>
          <Button className="gradient-border-btn">
            <span>See all project</span>
          </Button>
        </Link>
    </div>

    </section>

  );
}
