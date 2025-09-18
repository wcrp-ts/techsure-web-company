import { Flex, Typography } from "antd"

const { Title, Text } = Typography

const Product = () => (
  <Flex vertical align="center" justify="center" style={{ minHeight: "80vh" }}>
    <Title level={2}>Product Page</Title>
    <Text>Explore our products here.</Text>
  </Flex>
)

export default Product
