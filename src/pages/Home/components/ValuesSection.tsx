import { Typography, Row, Col, Card, Flex } from "antd";
import { useState, useEffect } from "react";

const { Text } = Typography;

const cardData = [
  {
    head: "Values",
    title:
      "Our core values center on sustainable innovation, creating solutions that not only boost efficiency and reduce costs for your business but also minimize environmental impact.",
  },
  {
    head: "Expertise",
    title:
      "Our expertise is built on four core technological pillars that we seamlessly integrate to build powerful, custom solutions.",
  },
  {
    head: "Specialize",
    title:
      "Our specialization is in providing dedicated solutions for the industrial sector. Our strength lies in our ability to integrate diverse technologies—blending IoT, AI, and robotics—to create a unified, powerful solution that is more than the sum of its parts.",
  },
];

const ValuesSection = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isLarge = windowWidth >= 992; 

  return (
     <Flex vertical align="center" justify="center" className="py-[160px] px-6" >
      <Row
        justify="center"
        gutter={[24, 24]} 
      >
        {cardData.map((card, index) => (
          <Col
            key={index}
            xs={24}
            sm={24}
            md={24}
            lg={8}
            style={
              isLarge
                ? {
                    marginTop: index * 300,
                    marginLeft: index * -40,
                  }
                : {}
            }
          >
            <Card
              hoverable
              style={{
                width: "100%",
                height: 360,
                borderRadius: 24,
                backgroundColor: "rgba(10, 38, 67, 0.2)",
                color: "#fff",
                border: "none",
                transition: "all 0.3s ease",
                padding: "16px",
                textAlign: "left",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(10, 38, 67, 0.8)";
                e.currentTarget.style.transform = "scale(1.05)";
                const headEl = e.currentTarget.querySelector(
                  ".card-head-text"
                ) as HTMLElement;
                if (headEl) {
                  headEl.style.background =
                    "linear-gradient(90deg, #F087FE 0%, #8733D7 76.08%)";
                  headEl.style.webkitBackgroundClip = "text";
                  headEl.style.backgroundClip = "text";
                  headEl.style.webkitTextFillColor = "transparent";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(10, 38, 67, 0.2)";
                e.currentTarget.style.transform = "scale(1)";
                const headEl = e.currentTarget.querySelector(
                  ".card-head-text"
                ) as HTMLElement;
                if (headEl) {
                  headEl.style.background =
                    "linear-gradient(90deg, #1F99F1 0%, #1844B5 86.83%)";
                  headEl.style.backgroundClip = "text";
                  headEl.style.webkitTextFillColor = "transparent";
                }
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <Text
                  className="text-hero-s card-head-text"
                  style={{
                    background:
                      "linear-gradient(90deg, #1F99F1 0%, #1844B5 86.83%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  {card.head}
                </Text>
                <Text className="text-body-m text-text-title">{card.title}</Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Flex>
  );
};

export default ValuesSection;
