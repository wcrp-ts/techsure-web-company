export interface JobData {
  title: string
  level: string
  responsibility: string[]
  qualification: string[]
  benefits: string[]
}

export const jobs: JobData[] = [
  {
    title: "Full-Stack Developer",
    level: "Junior - Mid Level",
    responsibility: [
      "Design and develop new systems or services in the Techsure ecosystem.",
      "Deliver quality and efficient software - easy to maintain, testable and reusable.",
      "Work with the product team and design team to provide the best experience for users on Web applications.",
      "Improve web performance by minimizing file size, improving code maintainability, and team productivity.",
    ],
    qualification: [
      "Experience in React and NestJS framework.",
      "Passionate about writing clean, well organized, and production-ready code.",
      "Understanding of Web Technology and Responsive Design.",
      "Critical thinker, problem-solving skills, and time-management skills.",
      "Strong understanding of the software development cycle and programming techniques and tools.",
      "Great to have: Experience in DevOps Practices and CI/CD Pipelines.",
      "Knowledge of one or more of the following: Nginx and RabbitMQ.",
      "Working experience with Containers and Dockerization. K8S is a plus.",
    ],
    benefits: [
      "Competitive salary and benefits package.",
      "Opportunities for professional growth and development.",
      "A collaborative and supportive work environment.",
    ],
  },
  {
    title: "UI/UX Designer",
    level: "Mid Level",
    responsibility: [
      "Design intuitive and visually appealing user interfaces for web and mobile applications.",
      "Collaborate with product and development teams to implement design solutions.",
      "Conduct user research and usability testing to improve user experience.",
      "Maintain design systems and ensure consistency across products.",
    ],
    qualification: [
      "Experience with Figma, Adobe XD, or similar design tools.",
      "Strong understanding of user-centered design principles.",
      "Ability to create wireframes, prototypes, and high-fidelity mockups.",
      "Knowledge of HTML/CSS is a plus.",
      "Critical thinker with strong problem-solving skills.",
    ],
    benefits: [
      "Competitive salary and benefits package.",
      "Opportunities for professional growth and development.",
      "A collaborative and supportive work environment.",
    ],
  },
  {
    title: "Project Manager",
    level: "Senior",
    responsibility: [
      "Lead project planning, execution, and delivery within time and budget.",
      "Coordinate cross-functional teams and manage stakeholder communications.",
      "Identify and mitigate project risks to ensure successful outcomes.",
      "Monitor project progress and provide regular status reports.",
    ],
    qualification: [
      "Proven experience in project management in software or IT projects.",
      "Strong leadership and communication skills.",
      "Proficiency in project management tools (e.g., Jira, Trello, MS Project).",
      "Ability to manage multiple projects simultaneously.",
      "Problem-solving and decision-making skills.",
    ],
    benefits: [
      "Competitive salary and benefits package.",
      "Opportunities for professional growth and development.",
      "A collaborative and supportive work environment.",
    ],
  },
]
