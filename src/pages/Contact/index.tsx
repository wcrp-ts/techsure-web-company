import { Row, Col, Typography, Flex } from "antd";
import FormForContact from "./components/FormForContact";
import ShowOffice from "./components/ShowOffice";
import MovingCircle from "../../components/Animation/MovingCircle";

const {  Text } = Typography;

const Contact = () => {
  return (
   <div className="px-6 md:px-12 lg:px-[50px] mx-auto">
      {/* Moving Circle */}
      <MovingCircle />

     <Row
        gutter={[32, 32]}
        style={{ marginTop: "50px", position: "relative", zIndex: 30 }}
      >
        <Col sm={24} md={24} xl={12}>
          <Flex vertical className="gap-8 justify-center items-center">
            <Text className="text-label-l text-text-title text-center">Let’s work together</Text>
            <Text className="sm:text-hero-xl text-hero-s text-text-title font-bold text-center">
              We’re ready to <br /> hear from you!
            </Text>
            <Text className=" sm:text-body-l text-body-m text-text-title text-center sm:w-[450px] w-full">
              Helping to unfold next-level performance through 
              a data-driven, digital native, engineering-inspired 
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
        style={{ marginTop: "50px", position: "relative", zIndex: 30 }}
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
