import { useState } from "react";
import { NavLink } from "react-router-dom"; 
import { Row, Col, Space, Drawer, Grid } from "antd";
import techsureLogo from "../assets/Techsure_logo.svg"; 
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
      isActive
        ? "text-text-brand font-bold"
        : "text-text-brand-light hover:text-text-brand hover:font-bold"
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
        style={{ height: "100%", padding: screens.xl ? "0 160px" : "0 24px" }}
      >
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

            {/* Mobile hamburger/close button */}
            {!screens.xl && (
              <button
                type="button"
                aria-label="Toggle menu"
                onClick={() => setDrawerVisible((prev) => !prev)}
                className="flex flex-none items-center justify-center rounded-sm size-10 hover:bg-blue-100/10 active:bg-blue-100/10 lg:hidden"
              >
                <span className="relative h-3 w-4">
                  {/* Top line */}
                  <span
                    className={`absolute top-0 left-0 w-4 origin-top-left rounded-full transition-all duration-200 h-0.5 ${
                      drawerVisible
                        ? "left-[.2rem] rotate-45 bg-white"
                        : "bg-navy-900 dark:bg-white"
                    }`}
                  />
                  {/* Middle line */}
                  <span
                    className={`absolute left-0 w-4 origin-left rounded-full transition-all duration-200 top-[.325rem] h-0.5 ${
                      drawerVisible
                        ? "w-0 opacity-0"
                        : "bg-navy-900 dark:bg-white"
                    }`}
                  />
                  {/* Bottom line */}
                  <span
                    className={`absolute left-0 w-4 origin-bottom-left rounded-full transition-all duration-200 top-[.625rem] h-0.5 ${
                      drawerVisible
                        ? "left-[.2rem] translate-y-[.05rem] -rotate-45 bg-white"
                        : "bg-navy-900 dark:bg-white"
                    }`}
                  />
                </span>
              </button>
            )}
          </Space>
        </Col>
      </Row>

      {/* Drawer for smaller screens */}
    <Drawer
  placement="top"
  closable={false}
  open={drawerVisible}
  onClose={() => setDrawerVisible(false)}
  bodyStyle={{ padding: 0, paddingTop: 94, backgroundColor: "#00001A" }}
  headerStyle={{ display: "none" }}
    zIndex={40} 
>
  {/* Drawer Menu */}
  <div className="flex flex-col items-start px-6 space-y-4 gap-2">
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
