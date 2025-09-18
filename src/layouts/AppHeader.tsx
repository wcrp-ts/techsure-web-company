import { Menu, Button } from "antd"
import { Link, useLocation } from "react-router-dom"
import techsureLogo from "../assets/Techsure_logo.png"
import PATH from "../routes/path"
import "./AppHeader.css"

const AppHeader = () => {
  const location = useLocation()

  const menuItems = [
    { key: PATH.home, label: <Link to={PATH.home}>Home</Link> },
    { key: PATH.product, label: <Link to={PATH.product}>Product</Link> },
    { key: PATH.service, label: <Link to={PATH.service}>Service</Link> },
    { key: PATH.achievement, label: <Link to={PATH.achievement}>Achievement</Link> },
    { key: PATH.careers, label: <Link to={PATH.careers}>Careers</Link> },
  ]

  return (
    <header className="app-header">
      {/* Logo left */}
      <div className="logo">
        <img src={techsureLogo} alt="Techsure Logo" style={{ height: 40 }} />
      </div>

      {/* Menu centered */}
      <Menu
        className="custom-menu text-text-brand-light"
        selectedKeys={[location.pathname]}
        items={menuItems}
      />

      {/* Contact button right */}
      <div className="contact-button">
        <Link to={PATH.contact}>
          <Button className="gradient-border-btn">
            <span>Contact</span>
          </Button>
        </Link>
      </div>


    </header>
  )
}

export default AppHeader
