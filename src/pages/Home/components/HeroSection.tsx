import { Typography, Button, Flex } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Text } = Typography;

const HeroSection = () => (
  <div style={{ textAlign: "center", minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
    <Text className="text-hero-xl text-text-title font-bold">
        Anything is <br /> possible
    </Text>

    <Text className="text-body-l text-text-title mt-10">
      We committed to develop IoT technology, robots, artificial intelligence (AI), <br />
      and modern web systems to meet the needs of the industrial sector in Thailand.
    </Text>

    <Flex vertical align="center" justify="center" className="mt-28">
      <Text className="text-body-l text-text-title">Scroll to learn more</Text>
       <Button type="link" size="large" icon={<DownOutlined />} />
    </Flex>
  </div>
);

export default HeroSection;
