import { Typography, Row, Col, Card, Flex } from "antd";

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

const ValuesSection = () => (
  <div style={{ padding: "60px 20px", textAlign: "center" }}>
    <Row justify="center">
      {cardData.map((card, index) => (
        <Col key={index}>
          <Card
            hoverable
            style={{
              width: 340,
              height: 320,
              borderRadius: 24,
              backgroundColor: "rgba(10, 38, 67, 0.2)", 
              color: "#fff",
              border: "none",
              transition: "all 0.3s ease",
              padding: "16px",
              textAlign: "left",
              overflow: "hidden",
              marginTop: index * 280,
              marginLeft: index * -30,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(10, 38, 67, 0.8)";
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
              e.currentTarget.style.backgroundColor = "rgba(10, 38, 67, 0.2)"; 
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
            <Flex vertical align="start" justify="center">
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
              <Text className="text-body-m text-text-title">
                {card.title}
              </Text>
            </Flex>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default ValuesSection;
