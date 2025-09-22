import { Row, Col, Typography, Flex } from "antd";
import FormForContact from "./components/FormForContact";
import ShowOffice from "./components/ShowOffice";
import MovingCircle from "../../components/Animation/MovingCircle";

const {  Text } = Typography;

const Contact = () => {
  return (
    <div style={{ padding: "50px", margin: "0 auto" }}>
      {/* Moving Circle */}
      <MovingCircle />

     <Row
        gutter={[32, 32]}
        style={{ marginTop: "50px", position: "relative", zIndex: 50 }}
      >
        <Col sm={24} md={24} xl={12}>
          <Flex vertical className="gap-4 justify-center items-center">
            <Text className="text-label-l text-text-title">Let’s work together</Text>
            <Text className="text-hero-l text-text-title font-bold">
              We’re ready to <br /> hear from you!
            </Text>
            <Text className="text-body-l text-text-title">
              Helping to unfold next-level performance through <br />
              a data-driven, digital native, engineering-inspired <br />
              approach. Come and chat with us, we're all ears.
            </Text>
          </Flex>
        </Col>

        <Col sm={24} md={24} xl={12}>
          <FormForContact />
        </Col>
      </Row>

      <Row
        gutter={[32, 32]}
        style={{ marginTop: "50px", position: "relative", zIndex: 50 }}
      >
        <Col sm={24} md={12} xl={12}>
          <div style={{ width: "100%", height: "300px", borderRadius: "8px" }}></div>
        </Col>

        <Col sm={24} md={12} xl={12}>
          <ShowOffice />
        </Col>
      </Row>

    </div>
  );
};

export default Contact;
