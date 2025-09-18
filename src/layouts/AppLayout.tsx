import { Layout } from "antd"
import { Outlet } from "react-router-dom"
import AppHeader from "./AppHeader"

const { Content, Footer } = Layout

const AppLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }} className="bg-background-default">
      <AppHeader />

      <Content style={{ padding: "24px" }}>
        <Outlet />
      </Content>

      <Footer style={{ textAlign: "center" }}>
        © {new Date().getFullYear()} My App
      </Footer>
    </Layout>
  )
}

export default AppLayout
