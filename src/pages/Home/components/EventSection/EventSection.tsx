import { useEffect, useState, useRef } from "react";
import { Typography, Button, Flex } from "antd";
import { motion, useAnimation } from "framer-motion";
import "./EventSection.css";
import imageSlide from "../../../../assets/image.png";

const { Text } = Typography;

const cardData = [
  {
    img: imageSlide,
    title: "AI Solutions",
    description: "Innovative AI software that enhances hardware capabilities and drives new solutions.",
  },
  {
    img: imageSlide,
    title: "Hardware Optimization",
    description: "Cutting-edge hardware design that maximizes performance and efficiency.",
  },
  {
    img: imageSlide,
    title: "Software Development",
    description: "Custom software tailored for enterprise solutions and AI integration.",
  },
  {
    img: imageSlide,
    title: "Tech Innovations",
    description: "Combining software, AI, and hardware to create futuristic solutions.",
  },
];

const CARD_WIDTH = 760;
const GAP = 24;

const EventSection = () => {
  const controls = useAnimation();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Function to center the active card
  const centerCard = (index: number) => {
    if (!sliderRef.current) return;
    const containerWidth = sliderRef.current.offsetWidth;
    const totalCardWidth = CARD_WIDTH + GAP;
    const newX = containerWidth / 1 - totalCardWidth * index - CARD_WIDTH / 1;
    controls.start({ x: newX, transition: { duration: 0.8, ease: "easeInOut" } });
  };

  // Center first card on mount
  useEffect(() => {
    centerCard(activeIndex);
  }, []);

  // Auto-slide
  useEffect(() => {
    let currentIndex = activeIndex;
    const interval = setInterval(() => {
      if (!paused) {
        currentIndex = (currentIndex + 1) % cardData.length;
        setActiveIndex(currentIndex);
        centerCard(currentIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <Flex vertical className="justify-center items-center mb-40 mt-52">
      <Text className="text-heading-xl text-text-title font-bold">
        Our Achievement and Event
      </Text>

      <div
        className="slider-container"
        ref={sliderRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div className="card-slider" animate={controls}>
          {cardData.map((card, i) => {
            const isActive = i === activeIndex;
            return (
              <motion.div
                key={i}
                className="card"
                animate={{ scale: isActive ? 1 : 0.85, opacity: isActive ? 1 : 0.6 }}
                transition={{ duration: 0.5 }}
              >
                <img src={card.img} alt={card.title} className="card-image" />

                <Flex vertical className="max-w-[440px] justify-center items-center gap-4">
                  <Text className="text-heading-m font-bold text-text-title">{card.title}</Text>
                  <Text className="text-body-s text-text-title">{card.description}</Text>
                  <Flex className="contact-button mt-6 justify-center">
                    <Button className="gradient-border-btn">
                      <span>Read More</span>
                    </Button>
                  </Flex>
                </Flex>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Flex>
  );
};

export default EventSection;
