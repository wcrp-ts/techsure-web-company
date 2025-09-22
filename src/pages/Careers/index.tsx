import { Flex, Typography } from "antd"

const {  Text } = Typography

const Careers = () => (
  <Flex vertical align="center" justify="center" style={{ minHeight: "80vh" }}>
    <Flex vertical className="gap-4 justify-center items-center">
      <Text className="text-hero-l text-text-title font-bold">
        Explore Life at Techsure
      </Text>
      <Text className="text-body-l text-text-title">
        Intro to our services
      </Text>
    </Flex>
  </Flex>
)

export default Careers
