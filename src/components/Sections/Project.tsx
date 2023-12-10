import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, Flex, Image, Text, Tag, Button, Stack } from "@chakra-ui/react";
import { projectsData } from "lib/data";
type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <Card maxW={"700px"} direction={"row"} overflow={"hidden"}>
        <Image
          display={{
            base: "none",
            md: "block",
          }}
          border={"1px"}
          position={"relative"}
          left={"-70px"}
          top={"50px"}
          src={imageUrl}
          alt="project-image"
          rounded="md"
          maxW={"350px"}
        />

        <Stack h="full" gap={"15px"} m={"10px"}>
          <Text fontSize={"24px"} color={"gray.500"} fontWeight={"bold"}>
            {title}
          </Text>
          <Text maxW={"container.sm"} colorScheme="teal">
            {description}
          </Text>
          <Flex flexWrap={"wrap"}>
            {tags.map((tag, index) => (
              <Tag
                key={index}
                mr={2}
                mt={2}
                rounded={"full"}
                colorScheme="blue"
              >
                {tag}
              </Tag>
            ))}
          </Flex>
          <Flex justify={"center"}>
            <Button mr={2}>Demo</Button>
            <Button variant={"ghost"}>Source Code</Button>
          </Flex>
        </Stack>
      </Card>
    </motion.div>
  );
}
