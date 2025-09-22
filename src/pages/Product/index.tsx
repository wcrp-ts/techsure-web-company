import { Flex, Typography } from "antd"
import ProductCard from "./components/ProductCard"
import { projectData } from "./components/projectData"
import GradientButton from "../../components/GradientButton"
import { useState } from "react"

const { Text } = Typography

const Product = () => {
  const [selectedTag, setSelectedTag] = useState("All")

  const tagCount = projectData.reduce((acc: Record<string, number>, project) => {
    (project.tags || []).forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1
    })
    return acc
  }, {} as Record<string, number>)

  const allTags = ["All", ...Object.keys(tagCount)]

  const filteredProjects =
    selectedTag === "All"
      ? projectData
      : projectData.filter(p => p.tags?.includes(selectedTag))

  // Split projects for 2-column layout only
  const leftCol = filteredProjects.filter((_, idx) => idx % 2 === 0)
  const rightCol = filteredProjects.filter((_, idx) => idx % 2 !== 0)

  return (
    <div className="min-h-[80vh] px-[60px] py-[40px]">
      <Flex vertical align="center" justify="center" style={{ marginBottom: 40 }}>
        <Text className="sm:text-hero-xl text-hero-m text-text-title font-bold text-center">
          Our product <br /> showcase
        </Text>
        <Text className="text-body-l text-text-title mt-10 text-center">
          We committed to develop IoT technology, robots, artificial intelligence (AI),<br />
          and modern web systems to meet the needs of the industrial sector in Thailand.
        </Text>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {allTags.map((tag, idx) => {
            const count = tag === "All" ? projectData.length : tagCount[tag] || 0
            const isActive = selectedTag === tag
            return (
              <GradientButton
                key={idx}
                onClick={() => setSelectedTag(tag)}
                active={isActive} 
              >
                {tag} <sup>{count}</sup>
              </GradientButton>
            )
          })}
        </div>
      </Flex>

      {/* Responsive layout */}
      <div className="flex flex-col xl:flex-row justify-center gap-[40px] max-w-6xl mx-auto">
        {/* Single column for small screens */}
        <div className="flex flex-col gap-[100px] items-center xl:hidden">
          {filteredProjects.map((p, idx) => (
            <ProductCard key={idx} {...p} />
          ))}
        </div>

        {/* Two columns for xl screens and above */}
        <div className="hidden xl:flex flex-row gap-[40px] w-full">
          {/* Left column */}
          <div className="flex flex-col gap-[100px] flex-1 items-start">
            {leftCol.map((p, idx) => (
              <ProductCard key={idx} {...p} />
            ))}
          </div>

          {/* Right column with staggered margin */}
          <div className="flex flex-col gap-[100px] flex-1 mt-[300px] items-start">
            {rightCol.map((p, idx) => (
              <ProductCard key={idx} {...p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
