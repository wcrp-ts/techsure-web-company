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
        width: "100%",
        maxWidth: "860px",
        minHeight: "320px",
        display: "flex",
       background: "rgba(10, 38, 67, 0.49)", 
        borderRadius: "16px",
        border: "1px solid  #8F1BE8",
        backdropFilter: "blur(2px)", 
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        overflow: "hidden",
        scale,
        opacity,
        flexShrink: 0,
      }}
      className="flex flex-col md:flex-row p-3 md:p-6" 
    >
  
      <div className="w-full md:w-[360px] h-[200px] md:h-auto flex-shrink-0">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div className="flex-1 mt-4 md:mt-0 md:ml-6 flex flex-col justify-center">
        <Flex vertical className="gap-4 justify-center items-center md:items-start">
          <Text className="text-heading-s font-bold text-text-title text-center md:text-left">
            {title}
          </Text>
          <Text
            className="text-label-s text-text-title text-center md:text-left"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 4, 
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Text>
        </Flex>
      </div>
    </motion.div>
  );
};

export default CardItem;
