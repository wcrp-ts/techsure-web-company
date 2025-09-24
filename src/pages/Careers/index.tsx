import { Flex, Typography } from "antd"
import workingImage from "../../assets/ImageWorking.png" 
import JobCard from "./components/JobCard"
import bgPage from "../../assets/bgCareers.png"
import BenefitsSection from "./components/BenefitsSection"

const { Text } = Typography

const Careers = () => (
  <Flex
    vertical
    align="center"
    className="sm:py-[160px] py-[50px] px-6 gap-8 min-h-screen w-full bg-cover bg-center"
    style={{
      backgroundImage: `url(${bgPage})`,
      backgroundRepeat: "no-repeat",
    }}
  >

    {/* Explore Life Section */}
    <Flex vertical align="center" className="text-center max-w-[800px]">
      <Text className="sm:text-hero-l text-hero-m text-text-title font-bold">
        Explore Life at Techsure
      </Text>
      <Text className="text-body-l text-text-title sm:mt-4 mt-2">
        Intro to our services
      </Text>
    </Flex>

    {/* Image Section */}
    <div className="max-h-[420px] w-full flex justify-center items-center">
      <img src={workingImage} alt="Techsure" className="object-contain" />
    </div>
    
    {/* Why Work Section */}
    <Flex vertical align="center" className="text-center max-w-[800px] sm:mt-16 mt-2">
      <Text className="sm:text-hero-l text-hero-s text-text-title font-bold">
        Why Work at Techsure
      </Text>
      <Text className="text-body-l text-text-title sm:mt-4 mt-2">
        Intro to our services
      </Text>
    </Flex>

    {/* Benefits Section */}
    <Flex vertical align="center" className="text-center max-w-[700px] sm:gap-3">
      <BenefitsSection />

    </Flex>

    {/* Opening Position Section */}
    <Flex
      vertical
      className="w-full max-w-[800px] py-12 px-6 rounded-lg"
      style={{
        borderRadius: "var(--radius-m, 8px)",
        background: "rgba(54, 54, 54, 0.30)",
        boxShadow: "2px 4px 10px 0 rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(50px)"
      }}
    >
      <Text className="sm:text-hero-l text-hero-m text-text-title font-bold text-center mb-8">
        Opening Position
      </Text>
       <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 justify-start">
        <JobCard 
          title="Full-Stack Developer"
          level="Junior - Mid Level"
          image={workingImage}
        />
        <JobCard 
          title="UI/UX Designer"
          level="Mid Level"
          image={workingImage}
        />
        <JobCard 
          title="Project Manager"
          level="Senior"
          image={workingImage}
        />
      </div>
      </Flex>
  </Flex>
)

export default Careers
