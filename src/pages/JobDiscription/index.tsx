import { useLocation } from "react-router-dom"
import { Button, Flex, Typography } from "antd"
import { jobs } from "./components/jobData"
import JobDetailCard from "./components/JobDetailCard"
import bgPage from "../../assets/bgJobDetail.png"
import { RightOutlined } from "@ant-design/icons"


const { Title, Text } = Typography

interface LocationState {
  title: string
  level: string
}

const JobDescription = () => {
  const location = useLocation()
  const state = location.state as LocationState

  // Find job by title and level
  const job = jobs.find(
    (j) => j.title === state.title && j.level === state.level
  )

  if (!job) return <Text>Job not found</Text>

  return (
    <Flex
    vertical
    align="center"
    className="py-[40px] px-6  min-h-screen w-full bg-cover bg-center"
    style={{
      backgroundImage: `url(${bgPage})`,
      backgroundRepeat: "no-repeat",
    }}
  >
      <Title
        level={1}
        className="text-4xl font-bold text-center"
        style={{
          background: "linear-gradient(90deg, #8F1BE8 0%, #72F5FD 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {job.title}
      </Title>
      <Text className="text-center text-lg text-text-title mb-6">{job.level}</Text>
       <JobDetailCard
        responsibility={job.responsibility}
        qualification={job.qualification}
        benefits={job.benefits}
      />

       <Button
        type="primary"
        className="mt-6 px-6 py-6 rounded-lg text-label-m  flex items-center gap-2"
        onClick={() => alert(`Apply for ${job.title}`)} 
      >
        Apply Now <RightOutlined  />
      </Button>
    </Flex>
  )
}

export default JobDescription
