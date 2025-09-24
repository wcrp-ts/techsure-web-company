import { useEffect, useState } from "react"
import { Flex, Layout } from "antd"
import { Outlet } from "react-router-dom"
import AppHeader from "./AppHeader"
import AppFooter from "./Footer"

const { Content } = Layout

const AppLayout = () => {
  const [hideHeader, setHideHeader] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > lastScroll && currentScroll > 40) {
        // scrolling down → hide
        setHideHeader(true)
      } else if (currentScroll < lastScroll) {
        // scrolling up → show
        setHideHeader(false)
      }

      setLastScroll(currentScroll)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScroll])

  return (
    <Layout className="w-screen min-h-screen flex flex-col overflow-hidden bg-background-default">
      {/* Header (auto-hide on scroll, semi-transparent background) */}
      <Flex
        className={`w-full fixed top-0 left-0 z-[100] transition-all duration-500 ease-in-out 
        bg-background-default/40 backdrop-blur-md
        ${hideHeader ? "-translate-y-10 opacity-0" : "translate-y-0 opacity-100"}`}
      >
        <AppHeader />
      </Flex>

      {/* Content (add padding to avoid overlap) */}
      <Content className="flex-1 flex justify-center pt-[64px] z-30">
        <div className="w-full max-w-screen overflow-hidden">
          <Outlet />
        </div>
      </Content>

      <AppFooter />
    </Layout>
  )
}

export default AppLayout
