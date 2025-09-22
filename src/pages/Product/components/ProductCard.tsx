import { Flex, Typography } from "antd"
import { motion } from "framer-motion"
import { ArrowRightOutlined } from "@ant-design/icons"
import GradientButton from "../../../components/GradientButton"

const { Text } = Typography

export interface ProductCardProps {
  image: string
  title: string
  description: string
  tags: string[]
}

const ProductCard = ({ image, title, description, tags }: ProductCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="relative group cursor-pointer w-full max-w-[600px] mx-auto xl:mx-0"
  >
    {/* Image Container */}
    <div className="relative overflow-hidden rounded-2xl w-full">
      <motion.img
        src={image}
        alt={title}
        className="w-full h-[400px] sm:h-[500px] md:h-[580px] xl:h-[630px] object-cover rounded-2xl transition duration-500 group-hover:brightness-75"
      />

      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* <div className="bg-white/80 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-2 shadow-lg">
          <span className="text-white font-medium">Learn More</span>
          <ArrowRightOutlined className="text-text-title" />
        </div> */}
      </motion.div>
    </div>

    {/* Content */}
    <Flex vertical gap={4} className="mt-6 px-2 sm:px-4">
      <Text className="text-text-title font-bold text-heading-s">{title}</Text>
      <Text className="text-text-title text-label-s">{description}</Text>
      <Flex gap={2} wrap justify="start">
        {tags.map((tag, i) => (
          <GradientButton key={i} height="32px" padding="0 16px">
            {tag}
          </GradientButton>
        ))}
      </Flex>
    </Flex>
  </motion.div>
)

export default ProductCard
