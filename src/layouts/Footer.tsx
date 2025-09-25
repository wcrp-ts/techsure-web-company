import { PhoneOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Space, Typography, Divider, Flex } from "antd";
import PATH from "../routes/path"; 
import techsureLogo from "../assets/Techsure_logo.svg";

const { Text } = Typography;

const AppFooter = () => {
  return (
    <Flex vertical
      style={{ 
        backgroundColor: "#0e0e23", 
        color: "#00001A", 
        padding: "24px 48px",
        zIndex: 99, 
        position: "relative"  
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column", marginBottom: 12 }}>
          <div className="logo">
            <img src={techsureLogo} alt="Techsure Logo" style={{ height: 100 }} />
          </div>
          <Flex vertical gap={4}>
          <Text className="text-heading-xs font-bold text-text-title mt-4">
            Anything is possible at Techsure
          </Text>
          <Space>
            <PhoneOutlined style={{ color: "#fff" }} />
            <Text className="text-label-m text-text-title">0639542989</Text>
          </Space>
          <Space>
            <PhoneOutlined style={{ color: "#fff" }} />
            <Text className="text-label-m text-text-title">0633658989</Text>
          </Space>
          <Space>
            <a 
            href="https://www.linkedin.com/company/techsure" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: "#fff", textDecoration: "none" }}
          >
            <Space>
              <LinkedinOutlined style={{ color: "#fff" }} />
              <Text className="text-label-m text-text-title">Techsure</Text>
            </Space>
          </a>
          </Space>
          </Flex>
        </div>

        <div className="footer-links">
           <Link to={PATH.home} style={{ color: "#fff" }}>Home</Link>
          <Link to={PATH.product} style={{ color: "#fff" }}>Product</Link>
          {/* <Link to={PATH.service} style={{ color: "#fff" }}>Service</Link>
          <Link to={PATH.achievement} style={{ color: "#fff" }}>Achievement</Link> */}
          <Link to={PATH.careers} style={{ color: "#fff" }}>Careers</Link>
          <Link to={PATH.contact} style={{ color: "#fff" }}>Contact</Link>
        </div>
      </div>

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

      {/* Inline responsive styles */}
      <style>
        {`
          .footer-links {
            display: flex;
            gap: 24px;
            font-weight: bold;
            flex-wrap: wrap;
          }

          @media (max-width: 768px) {
            .footer-links {
              flex-direction: column;
              gap: 12px;
              margin-top: 16px;
            }
          }
        `}
      </style>
    </Flex>
  );
};

export default AppFooter;
