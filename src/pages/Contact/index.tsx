import { Flex, Typography } from "antd"

const { Title, Text } = Typography

const Contact = () => (
  <Flex vertical align="center" justify="center" style={{ minHeight: "80vh" }}>
    <Title level={2}>Contact Page</Title>
    <Text>Get in touch with us.</Text>
  </Flex>
)

export default Contact
