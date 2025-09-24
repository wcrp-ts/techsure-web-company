import { Flex, Typography } from "antd"

const { Text } = Typography

export interface JobDetailCardProps {
  responsibility: string[]
  qualification: string[]
  benefits: string[]
}

const JobDetailCard = ({ responsibility, qualification, benefits }: JobDetailCardProps) => {
  return (
    <Flex
      vertical
      className="w-full max-w-[800px] p-8 rounded-lg gap-6"
      style={{
        borderRadius: "var(--radius-m, 8px)",
        background: "rgba(54, 54, 54, 0.45)",
        boxShadow: "2px 4px 10px 0 rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(50px)",
      }}
    >
      {/* Responsibility */}
       <Flex vertical>
        <Text className="text-body-l font-bold text-text-title mb-1">Responsibility</Text>
        <Text  className="text-body-m  text-text-title">Detail:</Text>
        <ul className="list-disc list-inside space-y-2  text-body-m text-text-title ml-2">
          {responsibility.map((r, idx) => (
            <li key={idx}>{r}</li>
          ))}
        </ul>
      </Flex>

      {/* Qualification */}
      <Flex vertical>
        <Text className="text-body-l font-bold text-text-title mb-1">Qualification</Text>
        <Text  className="text-body-m  text-text-title">Skills:</Text>
        <ul className="list-disc list-inside space-y-2  text-body-m text-text-title ml-2">
          {qualification.map((q, idx) => (
            <li key={idx}>{q}</li>
          ))}
        </ul>
    </Flex>

      {/* Benefits */}
      <Flex vertical>
        <Text className="text-body-l font-bold text-text-title mb-1">Benefits</Text>
        <Text className="text-body-m  text-text-title">Detail: </Text>
        <ul className="list-disc list-inside space-y-2 text-body-m text-text-title ml-2">
          {benefits.map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>
      </Flex>
    </Flex>
  )
}

export default JobDetailCard
