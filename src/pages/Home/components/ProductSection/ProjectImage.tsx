import { motion } from "framer-motion";

const ProjectImage = ({ project, direction }: { project: any; direction: number }) => {
  const imageVariants = {
    enter: (d: number) => ({
      x: d > 0 ? 200 : -200,
      opacity: 0,
      scale: 1.05,
      zIndex: 2,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 3,
      transition: {
        duration: 0.8,
        ease: "easeOut", // use a valid easing string
      },
    },
    exit: (d: number) => ({
      x: d > 0 ? -150 : 150,
      opacity: 0,
      scale: 0.85,
      zIndex: 1,
      transition: {
        duration: 0.8,
        ease: "easeIn", // use a valid easing string
      },
    }),
  }as any;

  return (
    <motion.img
      src={project.image}
      alt={project.title}
      custom={direction}
      variants={imageVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 w-full h-full object-cover rounded-l-2xl"
    />
  );
};

export default ProjectImage;
