import { Flex, Typography } from "antd";
import { motion } from "framer-motion";

const { Text } = Typography;

interface CardItemProps {
  img: string;
  title: string;
  description: string;
  scale?: number;
  opacity?: number;
}

const CardItem = ({ img, title, description, scale = 1, opacity = 1 }: CardItemProps) => {
  return (
    <motion.div
      style={{
        width: "860px",
        height: "400px",
        padding: "24px",
        display: "flex",
        background: "#0A2643",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        overflow: "hidden",
        scale,
        opacity,
        flexShrink: 0,
      }}
    >
      {/* Left image */}
      <div style={{ width: "360px", height: "100%", flexShrink: 0 }}>
        <img
          src={img}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
        />
      </div>

      {/* Right text */}
      <div
        style={{
          flex: 1,
          marginLeft: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Flex vertical className="gap-4 justify-center items-center">
            <Text className="text-heading-s font-bold text-text-title">
            {title}
            </Text>
            <Text className="text-label-s text-text-title text-center">{description}</Text>
        </Flex>
      </div>
    </motion.div>
  );
};

export default CardItem;
