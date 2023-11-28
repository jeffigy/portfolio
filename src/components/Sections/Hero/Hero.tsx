import { Flex, Image, Stack, Text, Button, Heading } from "@chakra-ui/react";
import CustomSection from "components/Sections/CustomSection";
import ProfilePicture from "assets/profile.jpg";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Hero() {
  return (
    <CustomSection sectionName="hero">
      <Flex
        maxW={"1000px"}
        alignItems={"center"}
        justify={"center"}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          direction={"column"}
          mr={{ base: "0", md: "30px" }}
          pb={{ base: "20px", md: "0px" }}
        >
          <Text
            zIndex={1}
            textAlign={{ base: "center", md: "start" }}
            fontSize={"16px"}
            color={"teal"}
          >
            Hello, I am
          </Text>
          <Heading
            zIndex={1}
            lineHeight={"0.9"}
            as={"h1"}
            textAlign={{ base: "center", md: "start" }}
            fontSize={{ base: "30px", sm: "38px", md: "40px", lg: "72px" }}
            color={"gray.600"}
          >
            Jeffy Evangelista
          </Heading>
          <Heading
            zIndex={1}
            mb={"30px"}
            as={"h2"}
            variant={"heading"}
            textAlign={{ base: "center", md: "start" }}
            fontSize={{ base: "24px", sm: "25px", md: "34px", lg: "48px" }}
            color={"gray.500"}
          >
            Web Developer
          </Heading>
          <Stack
            justify={{ base: "center", md: "start" }}
            direction={{ base: "column", md: "row" }}
            gap={{ base: 1, md: 5 }}
          >
            <motion.a whileHover={{ scale: 1.1, zIndex: 2 }}>
              <Button
                w={"full"}
                as={Link}
                to={"contact"}
                spy={true}
                smooth={true}
                offset={-56}
                duration={500}
              >
                Get in Touch
              </Button>
            </motion.a>
            <motion.a whileHover={{ scale: 1.1, zIndex: 2 }}>
              <Button
                w={"full"}
                as={Link}
                to={"projects"}
                spy={true}
                smooth={true}
                offset={-56}
                duration={500}
                variant={"ghost"}
              >
                Explore Projects{" "}
              </Button>
            </motion.a>
          </Stack>
        </Flex>
        <Image
          zIndex={1}
          borderRadius={"full"}
          boxSize={{ base: "230px", md: "250px", lg: "300px" }}
          alt="cover-photo"
          src={ProfilePicture}
        />
      </Flex>
    </CustomSection>
  );
}

export default Hero;
