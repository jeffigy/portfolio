import { Card, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
type TechCardProps = {
  techName: string;
  techLogo?: string;
  index: number;
};

const TechCard: React.FC<TechCardProps> = ({ techName, techLogo, index }) => {
  const fadeInAnimationsVariants = {
    initial: {
      opacity: 0,
      y: 300,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * index,
      },
    }),
  };
  return (
    <Card
      as={motion.div}
      whileHover={{ scale: 1.1 }}
      boxSize="160px"
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
        <motion.div whileHover={{ scale: 1.2 }}>
          <Image
            src={techLogo}
            alt="Tech Logo"
            w={{ base: "65px", md: "100px" }}
            h={{ base: "65px", md: "100px" }}
          />
        </motion.div>
        <motion.p whileHover={{ scale: 1.2 }}>{techName}</motion.p>
      </Flex>
    </Card>
  );
};
export default TechCard;
