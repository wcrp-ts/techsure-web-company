import { Flex, Typography } from "antd"

const { Title, Text } = Typography

const Home = () => {
  return (
    <Flex vertical align="center" justify="center" style={{ minHeight: "80vh" }}>
      <Title level={1}>Welcome to My App</Title>
      <Text type="secondary">This is the Home page 🚀</Text>
    </Flex>
  )
}

export default Home
