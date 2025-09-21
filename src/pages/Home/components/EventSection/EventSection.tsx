import { useState } from "react";
import { Typography, Button, Flex } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import image1 from "../../../../assets/project/air304.png";
import image2 from "../../../../assets/project/dcim.png";
import image3 from "../../../../assets/project/mower.png";
import image4 from "../../../../assets/project/water304.png";
import "./EventSection.css";

const { Text } = Typography;

const cardData = [
  { img: image1, title: "Be curious.", description: "We believe that progress starts with curiosity..." },
  { img: image2, title: "Growth by doing.", description: "Most of our team consists of people born and bred..." },
  { img: image3, title: "Take responsibility.", description: "This requires trust in ourselves and in cooperation..." },
  { img: image4, title: "Make others successful.", description: "Growing together is the ultimate compliment..." },
];

const EventSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    if (currentIndex < cardData.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const variants = {
  enter: (direction: number) => {
    return {
      x: direction === 1 ? 300 : -300,
      scale: 0.5,
      opacity: 0,
    };
  },
  center: {
    x: 0,
    scale: 1,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction === 1 ? -300 : 300,
      scale: 0.5,
      opacity: 0,
    };
  },
};


  return (
    <div className="event-section-container pl-80 mb-40">
      <div className="columns">

        <div className="left-column">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              className="left-wrapper"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <img
                src={cardData[currentIndex].img}
                alt={cardData[currentIndex].title}
                className="main-image"
              />
              <Flex vertical className="active-text">
                <Text className="text-text-title text-heading-s font-bold">
                  {cardData[currentIndex].title}
                </Text>
                <Text className="text-text-title text-label-xs">
                  {cardData[currentIndex].description}
                </Text>
              </Flex>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Right column: Next preview */}
       <div className="right-column">
        <div className="preview-wrapper">
          {currentIndex < cardData.length - 1 && (
            <motion.img
              key={currentIndex + 1}
              src={cardData[currentIndex + 1].img}
              alt={cardData[currentIndex + 1].title}
              className="preview-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ duration: 0.4 }}
            />
          )}
        </div>

        {/* Buttons stay at bottom */}
        <div className="button-wrapper">
          <Flex className="gap-2">
            <Button
              shape="circle"
              icon={<LeftOutlined />}
              onClick={handlePrev}
              disabled={currentIndex === 0}
            />
            <Button
              shape="circle"
              icon={<RightOutlined />}
              onClick={handleNext}
              disabled={currentIndex === cardData.length - 1}
            />
          </Flex>
        </div>
      </div>

      </div>
    </div>
  );
};

export default EventSection;
