import { Card, Typography, Button } from "antd"
import { useNavigate } from "react-router-dom"

const { Text } = Typography

export interface JobCardProps {
  title: string
  level: string
  image: string
}

const JobCard = ({ title, level, image }: JobCardProps) => {
  const navigate = useNavigate()

  return (
    <Card
      bordered={false} 
      className="w-full rounded-2xl overflow-hidden bg-[#212122] shadow-md justify-center text-center"
    >
      <div className="flex flex-col items-start text-center">
        <Text className="text-label-l font-bold text-text-title">
          {title}
        </Text>

        <Text className="text-label-m font-bold text-text-title">
          {level}
        </Text>

        {/* Job Image */}
        <img
          src={image}
          alt={title}
          className="h-[150px] w-full object-cover mx-auto py-6"
        />
      </div>

        {/* Button */}
      <Button
        type="text"
        className="mt-3 text-label-s font-bold text-text-title border border-text-title rounded-lg hover:!text-text-brand hover:!border-text-brand"
        onClick={() =>
          navigate("/jobDiscription", {
            state: { title, level },
          })
        }
      >
        View Job Description
      </Button>
    </Card>
  )
}

export default JobCard
