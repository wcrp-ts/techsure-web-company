import { Layout } from "antd"
import { Outlet } from "react-router-dom"
import AppHeader from "./AppHeader"
import AppFooter from "./Footer"

const { Content } = Layout

const AppLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }} className="bg-background-default">
      <AppHeader />

      <Content >
        <Outlet />
      </Content>

      <AppFooter />
    </Layout>
  )
}

export default AppLayout
