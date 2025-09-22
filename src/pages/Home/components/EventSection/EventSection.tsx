import { useState, useEffect } from "react";
import { Typography, Flex } from "antd";
import CardItem from "./CardItem";
import DEMISIoT from "../../../../assets/event/DEMIS_IoT.jpg";
import SmartBin from "../../../../assets/event/smartBin.jpg";
import image3 from "../../../../assets/project/mower.png";
import image4 from "../../../../assets/project/water304.png";

const { Text } = Typography;

const cardData = [
  {
    img: DEMISIoT,
    title: "DEMIS IoT",
    description:
      "At the SCI Power for Future Thailand, we proudly presented the Boxing Dummy, an innovation that combines engineering, sensors, and sports science. It's not just a punching bag, but a smart sparring partner equipped with impact sensors and real-time data analysis. This is the future of training, helping to build athletes with sustainable potential.",
  },
  {
    img: SmartBin,
    title: "Smart Bin",
    description:
      "At the KMITL Smart Campus event, we are proud to introduce our Smart Bin, an innovative solution that combines artificial intelligence (AI) with IoT technology to revolutionize waste separation. This system uses a camera and an integrated AI model to automatically identify and sort waste ",
  },
  { img: image3, title: "Take responsibility.", description: "This requires trust in ourselves and in cooperation..." },
  { img: image4, title: "Make others successful.", description: "Growing together is the ultimate compliment..." },
];

const CARD_WIDTH = 860;
const CARD_GAP = 16;
const AUTO_SLIDE_INTERVAL = 3000; 

const EventSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length); 
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="event-section-container py-48">
      <Flex vertical align="center" justify="center">
        <Text className="text-hero-xs font-bold text-text-title text-center">Our Achievement and Event</Text>
      </Flex>
  
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          marginTop: "48px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: `${CARD_GAP}px`,
            transition: "transform 0.3s ease",
            transform: `translateX(calc(-${currentIndex * (CARD_WIDTH + CARD_GAP)}px + 50% - ${CARD_WIDTH / 2}px))`,
          }}
        >
          {cardData.map((data, index) => (
            <CardItem
              key={index}
              {...data}
              scale={index === currentIndex ? 1 : 0.8}
              opacity={index === currentIndex ? 1 : 0.4}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSection;
