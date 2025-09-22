import { useState } from "react";
import { NavLink } from "react-router-dom"; 
import { Row, Col, Space, Button, Drawer, Grid } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import techsureLogo from "../assets/Techsure_logo.png"; 
import PATH from "../routes/path";
import GradientButton from "../components/GradientButton";

const { useBreakpoint } = Grid;

const menuItems = [
  { key: PATH.home, label: "Home" },
  { key: PATH.product, label: "Product" },
  { key: PATH.careers, label: "Careers" },
];

const Header = () => {
  const screens = useBreakpoint(); 
  const [drawerVisible, setDrawerVisible] = useState(false);


  const menuItemClass = ({ isActive }: { isActive: boolean }) =>
    `text-body-m cursor-pointer ${
      isActive ? "text-text-brand font-bold" : "text-text-brand-light hover:text-text-brand hover:font-bold"
    }`;

  return (
    <header
      style={{
        height: 64,
        zIndex: 50,
        width: "100%",
        borderBottom: "1px solid",
        borderImage: "linear-gradient(90deg, #8F1BE8, #72F5FD, #8F1BE8) 1",
      }}
    >
      <Row 
      align="middle" 
      justify="space-between" 
      style={{ height: "100%", padding: screens.xl ? "0 160px" : "0 24px" }}>
        {/* Logo */}
        <Col>
          <NavLink to={PATH.home}>
            <img src={techsureLogo} alt="Techsure Logo" style={{ height: 40 }} />
          </NavLink>
        </Col>

        {/* Menu for xl screens */}
        {screens.xl && (
          <Col>
            <Space size="large">
              {menuItems.map((item) => (
                <NavLink key={item.key} to={item.key} className={menuItemClass}>
                  <span className="menu-item gap-4">{item.label}</span>
                </NavLink>
              ))}
            </Space>
          </Col>
        )}

        {/* Right side */}
        <Col>
          <Space size="middle">
            <NavLink to={PATH.contact}>
                  <GradientButton height="40px" padding="0 24px">
                    Contact
                  </GradientButton>
            </NavLink>
            {!screens.xl && (
              <Button
                icon={<MenuOutlined className="text-text-title" />}
                type="text"
                onClick={() => setDrawerVisible(true)}
              />
            )}
          </Space>
        </Col>
      </Row>

      {/* Drawer for smaller screens */}
      <Drawer
        placement="right"
        closable={false} 
        open={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        width="100%" 
        bodyStyle={{ padding: 0, backgroundColor: "#00001A" }} 
        headerStyle={{ display: "none" }} 
      >
        <div
          className="flex items-center justify-between px-6 py-4"
        >
          <img src={techsureLogo} alt="Techsure Logo" style={{ height: 50 }} />

          <Button
            type="text"
            onClick={() => setDrawerVisible(false)}
            style={{ fontSize: 40, color: "#fff" }}
          >
            ×
          </Button>
        </div>

        {/* Drawer Menu */}
        <div className="flex flex-col items-start px-6 pt-8 space-y-6 gap-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.key}
              onClick={() => setDrawerVisible(false)}
              className={menuItemClass}
            >
              <span style={{ fontSize: 20 }}>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </Drawer>

    </header>
  );
};

export default Header;
