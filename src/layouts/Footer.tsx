import { PhoneOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Space, Typography, Divider, Flex } from "antd";
import PATH from "../routes/path"; 
import techsureLogo from "../assets/Techsure_logo.png";

const { Text } = Typography;

const AppFooter = () => {
  return (
    <footer 
    style={{ backgroundColor: "#0e0e23", 
        color: "#00001A", 
        padding: "24px 48px",
        zIndex: 99, 
        position: "relative"  }}>
      
   
   
      <Space 
        style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", width: "100%" }}
        align="start"
      >


        <Flex vertical>
          <div className="logo">
            <img src={techsureLogo} alt="Techsure Logo" style={{ height: 100 }} />
          </div>
          <Text className="text-heading-xs font-bold text-text-title">Anything is possible at Techsure</Text>
          <Space>
            <PhoneOutlined style={{ color: "#fff" }} />
            <Text className="text-label-m text-text-title">+660 - 000 - 0000</Text>
          </Space>
          <Space>
            <LinkedinOutlined style={{ color: "#fff" }} />
            <Text  className="text-label-m text-text-title">Techsure</Text>
          </Space>
        </Flex>

   
   
        <Flex gap={24} className="mt-24 font-bold">
          <Link to={PATH.product} style={{ color: "#fff" }}>Product</Link>
          <Link to={PATH.service} style={{ color: "#fff" }}>Service</Link>
          <Link to={PATH.achievement} style={{ color: "#fff" }}>Achievement</Link>
          <Link to={PATH.careers} style={{ color: "#fff" }}>Careers</Link>
          <Link to={PATH.contact} style={{ color: "#fff" }}>Contact</Link>
        </Flex>
      </Space>



      <Divider 
        style={{ 
          border: 0, 
          height: 2, 
          margin: "30px 0", 
          background: "linear-gradient(90deg, #8F1BE8, #72F5FD, #8F1BE8)" 
        }} 
      />

     
     
      <Text style={{ display: "block", textAlign: "center", fontSize: 12, color: "#999" }}>
        Copyright, All rights reserved © {new Date().getFullYear()}
      </Text>
    </footer>
  );
};

export default AppFooter;
