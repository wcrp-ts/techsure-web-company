import { Typography, Button, Flex } from "antd";
import mowerImage from "../../../assets/mower.png";
import "../../../layouts/AppHeader.css"; 

const { Text } = Typography;

const ProductSection = () => {
  return (
    <Flex vertical className="mt-52">
        <Flex className="justify-between">
        <Flex vertical className="gap-2 max-w-[500px] ml-52">
            <Text className="text-heading-xl text-text-title font-bold">Mower</Text>
            <Text className="text-body-m text-text-title">
            Our focus is on building innovative and practical tools that address the
            unique challenges of our industrial partners.
            </Text>
        </Flex>

      <div style={{ flex: "1 1 400px", maxWidth: "800px" }}>
        <img
          src={mowerImage}
          alt="Mower"
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
            borderTopLeftRadius: "24px",
            borderBottomLeftRadius: "24px",
          }}
        />
      </div>
      </Flex>

       <Flex className="contact-button mt-6 justify-end mr-24">
          <Button className="gradient-border-btn" >
            <span>See all projects</span>
          </Button>
        </Flex>

    </Flex>
  );
};

export default ProductSection;
