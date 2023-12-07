import { Card, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
type TechCardProps = {
  techName: string;
  index: number;
};

const TechCard: React.FC<TechCardProps> = ({ techName, index }) => {
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
      as={motion.div}
      whileHover={{ scale: 1.1 }}
      p={5}
      justify="center"
      align="center"
      sx={{
        "@media screen and (max-width: 768px)": {
          boxSize: "120px",
        },
      }}
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
export default TechCard;
