import mowerImage from "../../../assets/project/mower.png";
import dcimImage from "../../../assets/project/dcim.png";
import air304Image from "../../../assets/project/air304.png";
import water304Image from "../../../assets/project/water304.png";
import trafficDashboard from "../../../assets/project/traffic-dashboard.png";
import cameraPlatform from "../../../assets/project/camera-platform.png";
import workforce from "../../../assets/project/workforce.png";
import inspection from "../../../assets/project/inspection.png"
import multispectral from "../../../assets/project/multispectral.png";
import iomt from "../../../assets/project/iomt.png";
import ecg from "../../../assets/project/ecg.png"


export interface Project {
  image: string
  title: string
  description: string
  tags: string[]
}

export const projectData: Project[] = [
  {
    image: dcimImage,
    title: "DCIM (Data Center Infrastructure Management)",
    description:
      "A complete solution for managing data centers with 3D digital twin visualization, asset tracking, and infrastructure monitoring to optimize performance and reduce downtime.",
    tags: ["Web", "IoT"],
  },
  {
    image: mowerImage,
    title: "AGV (Mover)",
    description:
      "An autonomous ground vehicle with an intelligent mower, visual inspection software, and multispectral imaging for advanced agricultural and industrial automation.",
    tags: ["AI", "IoT", "Robotic", "Web"],
  },
  {
    image: air304Image,
    title: "Air Quality Monitoring System",
    description:
      "Monitors gases in real time, sends alerts when thresholds are exceeded, tracks gas distribution patterns, and provides forecasts for air quality across regions.",
    tags: ["AI", "IoT", "Web"],
  },
  {
    image: water304Image,
    title: "WQI Water Quality Monitoring System",
    description:
      "Collects data from monitoring stations, analyzes water quality using WQI standards, and automatically generates reports for each site.",
    tags: ["IoT", "Web"],
  },
  {
    image: trafficDashboard,
    title: "Traffic Dashboard Web",
    description:
      "A web-based platform that visualizes traffic data, providing insights for traffic management and smart city planning.",
    tags: ["IoT", "Web"],
  },
  {
    image: cameraPlatform,
    title: "Intelligence Camera Management Platform",
    description:
      "A centralized platform for AI-powered video analytics, real-time monitoring, and camera management in smart security systems.",
    tags: ["AI", "IoT", "Web"],
  },
  {
    image: workforce,
    title: "Workforce Temperature & Time Attendance",
    description:
      "A smart workforce solution with AI-powered temperature detection, attendance tracking, and real-time reporting for workplace safety.",
    tags: ["AI", "IoT", "Web"],
  },
  {
    image: inspection,
    title: "Inspection Visual Box Software",
    description:
      "A testing platform for vehicles equipped with gas, sound, smoke, RPM, and light sensors, ensuring accurate and efficient inspection.",
    tags: ["AI", "IoT", "Web"],
  },
  {
    image: multispectral,
    title: "Auto Multispectral Imaging",
    description:
      "A system for analyzing rice quality and nutrient levels using advanced multispectral imaging technology.",
    tags: ["AI", "IoT", "Web"],
  },
  {
    image: iomt,
    title: "Internet of Medical Things (IoMT)",
    description:
      "A connected healthcare ecosystem integrating medical devices with IoT for real-time monitoring and improved patient outcomes.",
    tags: ["IoT", "Web"],
  },
  {
    image: ecg,
    title: "Emma ECG Reader",
    description:
      "A digital ECG reader application that enables accurate heart monitoring and data analysis for medical professionals.",
    tags: ["IoT", "Web"],
  },
]
