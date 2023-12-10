import { Card, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
type SkillProps = {
  techName: string;
  index: number;
};

const Skill: React.FC<SkillProps> = ({ techName, index }) => {
  const fadeInAnimationsVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
      },
    }),
  };
  return (
    <Card
      borderRadius={"full"}
      as={motion.li}
      whileHover={{ scale: 1.1 }}
      py={3}
      px={5}
      justify="center"
      align="center"
      variants={fadeInAnimationsVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <Flex direction="column" align="center">
        <Text>{techName}</Text>
      </Flex>
    </Card>
  );
};
export default Skill;
