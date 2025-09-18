import { Flex, Typography } from "antd"

const { Title, Text } = Typography

const Service = () => (
  <Flex vertical align="center" justify="center" style={{ minHeight: "80vh" }}>
    <Title level={2}>Service Page</Title>
    <Text>Learn more about our services.</Text>
  </Flex>
)

export default Service
