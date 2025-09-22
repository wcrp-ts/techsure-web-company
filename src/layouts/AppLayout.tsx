import { Layout } from "antd"
import { Outlet } from "react-router-dom"
import AppHeader from "./AppHeader"
import AppFooter from "./Footer"

const { Content } = Layout

const AppLayout = () => {
  return (
    <Layout className="w-screen min-h-screen bg-background-default flex flex-col overflow-x-hidden">
      {/* Header */}
      <AppHeader />

      {/* Main content area */}
      <Content className="flex-1 flex justify-center py-6">
        <div className="w-full max-w-screen overflow-hidden">
          <Outlet />
        </div>
      </Content>

      {/* Footer */}
      <AppFooter />
    </Layout>
  )
}

export default AppLayout
