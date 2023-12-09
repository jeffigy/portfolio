import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Image,
  Text,
  Tag,
  HStack,
  Button,
} from "@chakra-ui/react";
import Perfil from "assets/projects/perfil-remastered.png";
type ProjectProps = {};

const Project: React.FC<ProjectProps> = () => (
  <Card as={motion.div} whileHover={{ scale: 1.02, zIndex: 2 }}>
    <CardBody>
      <Flex align="center">
        <Box w={"500px"} mr={"10px"}>
          <Image
            border={"1px solid #000"}
            src={Perfil}
            alt="Perfil"
            rounded="md"
            w={"100%"}
            style={{
              aspectRatio: "16/9",
            }}
          />
        </Box>
        <Flex h="full" direction={"column"}>
          <Text fontSize={"24px"} color={"gray.500"} fontWeight={"bold"}>
            This is the title
          </Text>
          <Text maxW={"container.sm"} colorScheme="teal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
            scelerisque arcu. Curabitur dapibus pellentesque tellus, consequat
            pellentesque risus viverra id. Sed laoreet posuere augue, at gravida
            neque finibus et. Nulla facilisi. Vivamus at mi ante. Donec non
            facilisis metus. Vivamus nec nisl commodo, sagittis nisi nec,
            fermentum lectus. Aenean.
          </Text>
          <HStack>
            <Tag
              size={"lg"}
              borderRadius="full"
              variant="subtle"
              colorScheme="teal"
            >
              Tag 1
            </Tag>
            <Tag
              size={"lg"}
              borderRadius="full"
              variant="subtle"
              colorScheme="teal"
            >
              Tag 2
            </Tag>
            <Tag
              size={"lg"}
              borderRadius="full"
              variant="subtle"
              colorScheme="teal"
            >
              Tag 3
            </Tag>
          </HStack>
          <Flex>
            <Button variant={"ghost"}>Source Code</Button>
            <Button mr={2}>Demo</Button>
          </Flex>
        </Flex>
      </Flex>
    </CardBody>
  </Card>
);
export default Project;
