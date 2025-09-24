import { Typography, Button, Flex } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Text } = Typography;

const HeroSection = () => (
  <Flex vertical className="sm:py-[160px] py-[50px] px-6" >
    <Flex vertical align="center" justify="center">
     <Text className="sm:text-hero-xl text-hero-l text-text-title font-bold text-center">
        Anything is <br /> possible
      </Text>

      <Text className="text-body-l text-text-title mt-10 text-center">
        We committed to develop IoT technology, robots, artificial intelligence (AI), <br />
        and modern web systems to meet the needs of the industrial sector in Thailand.
      </Text>

    </Flex>

    <Flex vertical align="center" justify="center" className="mt-28">
      <Text className="text-body-l text-text-title">Scroll to learn more</Text>
       <Button type="link" size="large" className="animate-floatUpDown text-text-title" icon={<DownOutlined />} />
    </Flex>
  </Flex>
);

export default HeroSection;
