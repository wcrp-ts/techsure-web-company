import { Flex, Typography } from "antd"
import { CheckCircleOutlined } from "@ant-design/icons"

const { Text } = Typography

const benefits = [
  "12 days annual paid vacation",
  "Social Security Fund",
  "Flexible working hours",
  "Team Building",
  "Hybrid working policy / (Onsite 2 days per week)",
]

const BenefitsSection = () => (
  <div className="w-full max-w-[800px] grid grid-cols-1 lg:grid-cols-2 sm:gap-6 gap-4">
    {benefits.map((benefit, idx) => {
      const parts = benefit.split("/")
      return (
        <Flex key={idx} align="start" className="gap-3 text-left">
          <CheckCircleOutlined className="text-text-title text-xl flex-shrink-0 mt-1" />
          <div>
            {parts.map((line, i) => (
              <Text key={i} className="text-body-l text-text-title block">
                {line.trim()}
              </Text>
            ))}
          </div>
        </Flex>
      )
    })}
  </div>
)

export default BenefitsSection
