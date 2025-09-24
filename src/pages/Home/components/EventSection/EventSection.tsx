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

const CARD_GAP = 16;
const AUTO_SLIDE_INTERVAL = 3000;

const EventSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(860); 


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 640) {
        setCardWidth(screenWidth * 0.9); 
      } else if (screenWidth < 1024) {
        setCardWidth(600); 
      } else {
        setCardWidth(860); 
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="event-section-container py-48">
      <Flex vertical align="center" justify="center">
        <Text className="text-hero-xs font-bold text-text-title text-center">
          Our Achievement and Event
        </Text>
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
            transform: `translateX(calc(-${currentIndex * (cardWidth + CARD_GAP)}px + 50% - ${cardWidth / 2}px))`,
          }}
        >
          {cardData.map((data, index) => (
            <div key={index} style={{ flex: "0 0 auto", width: cardWidth }}>
              <CardItem
                {...data}
                scale={index === currentIndex ? 1 : 0.8}
                opacity={index === currentIndex ? 1 : 0.4}
              />
            </div>
          ))}
        </div>
      </div>

  
      <div className="flex justify-center mt-6 gap-3">
        {cardData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: "40px",
              height: "5px",
              borderRadius: "2px",
              backgroundColor: index === currentIndex ? "#FFF" : "#114D8C",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default EventSection;
