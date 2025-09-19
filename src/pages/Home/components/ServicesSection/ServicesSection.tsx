import { Typography, Flex } from "antd";

import softwareIcon from "../../../../assets/Icons/CodeBlock.png";
import hardwareIcon from "../../../../assets/Icons/GearSix.png";
import aiIcon from "../../../../assets/Icons/HeadCircuit.png";
import solutionIcon from "../../../../assets/Icons/IconTint.png";

import softwareImage from "../../../../assets/elament/software.png";
import hardwareImage from "../../../../assets/elament/hardware.png";
import aiImage from "../../../../assets/elament/ai.png";
import solutionImage from "../../../../assets/elament/solution.png";

import SvgCard from "./SvgCard";
import type { SvgCardProps } from "./SvgCard";

const { Text } = Typography;

const serviceCards: SvgCardProps[] = [
  {
    title: "Software",
    description: "Web and App dev/workflow automation/API integration",
    icon: <img src={softwareIcon} alt="Software" style={{ width: 36 }} />,
    image: softwareImage,
    svgPath: "M16.2568 0.769531L467.438 8.25C475.632 8.3859 482.303 14.8761 482.666 23.0625L494.784 296.829C495.166 305.46 488.418 312.737 479.783 313.007L16.4844 327.484C7.73851 327.758 0.5 320.742 0.5 311.992V16.2676C0.5 7.60668 7.59714 0.62602 16.2568 0.769531Z",
    fillColor: "rgba(120,221,235,0.1)",
    strokeColor: "#72F5FD",
    descriptionColor: "#ABF1F5",
  },
  {
    title: "Hardware",
    description: "Robots/IoT/Legacy system integration/Custom hardware",
    icon: <img src={hardwareIcon} alt="Hardware" style={{ width: 36 }} />,
    image: hardwareImage,
    svgPath: "M479.66 0.754883C488.351 0.619469 495.454 7.65529 495.401 16.3467L493.599 315.104C493.546 323.812 486.333 330.767 477.63 330.504L14.8809 316.496C6.18474 316.233 -0.591572 308.864 -0.12793 300.177L14.7031 22.4385C15.1376 14.3041 21.7945 7.89458 29.9395 7.76758L479.66 0.754883Z",
    fillColor: "rgba(132,152,255,0.1)",
    strokeColor: "#8498FF",
    descriptionColor: "#CAD2FD",
  },
  {
    title: "AI & Data Solution",
    description: "AI vision/Defect detection/report & Dashboards/Data migration & analysis",
    icon: <img src={aiIcon} alt="AI" style={{ width: 36 }} />,
    image: aiImage,
    svgPath: "M26.9531 1.0127L478.121 15.5059C486.435 15.7731 493.057 22.5566 493.123 30.875L495.371 312.844C495.44 321.464 488.462 328.485 479.841 328.468L16.5137 327.533C7.76193 327.516 0.759395 320.261 1.05273 311.514L10.9639 15.9854C11.2505 7.43829 18.4057 0.738129 26.9531 1.0127Z",
    fillColor: "rgba(143,27,232,0.15)",
    strokeColor: "#8F1BE8",
    descriptionColor: "#DAB5F6",
  },
  {
    title: "Customize Solution",
    description: "Tailored solution that precisely/addresses your unique business/challenges and goals.",
    icon: <img src={solutionIcon} alt="Solution" style={{ width: 36 }} />,
    image: solutionImage,
    svgPath: "M469.375 1.41504C477.986 1.19332 485.126 8.03632 485.271 16.6494L490.226 310.739C490.371 319.4 483.391 326.5 474.729 326.5H16C7.43959 326.5 0.5 319.56 0.5 311V28.5938C0.5 20.1889 7.19858 13.3152 15.6006 13.0986L469.375 1.41504Z",
    fillColor: "rgba(255,204,132,0.15)",
    strokeColor: "#FFCC84",
    descriptionColor: "#FFE3BB",
  },
];

const ServicesSection = () => {
  return (
    <div style={{ padding: "60px 20px", textAlign: "center" }}>
      <Flex vertical>
        <Text className="text-hero-xs font-bold text-text-title">Services</Text>
        <Text className="text-body-l text-text-title mt-5">
          Our focus is on building innovative and practical tools for our industrial partners.
        </Text>
      </Flex>

      <Flex
        wrap="wrap"
        gap={52}
        className="justify-center mt-6"
      >
        {serviceCards.map((card, idx) => (
          <div
            key={idx}
            style={{
              flex: "1 1 100%", 
              maxWidth: 550,
            }}
          >
            <SvgCard {...card} />
          </div>
        ))}
      </Flex>

    </div>
  );
};

export default ServicesSection;
