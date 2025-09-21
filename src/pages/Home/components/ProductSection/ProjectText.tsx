import { Flex, Typography } from "antd";
import { motion } from "framer-motion";

const { Text } = Typography;

const ProjectText = ({ project }: { project: any }) => {
  return (
    <motion.div
      className="absolute max-w-[350px]" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
    <Flex vertical>
      <Text className="text-heading-xl font-bold text-text-title">{project.title}</Text>
      <Text className="text-body-m text-text-title mt-2">{project.description}</Text>
    </Flex>
    </motion.div>
  );
};

export default ProjectText;
