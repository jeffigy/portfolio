import {
  Flex,
  Image,
  Stack,
  Text,
  Button,
  useColorMode,
  Heading,
} from "@chakra-ui/react";
import CustomSection from "components/Sections/CustomSection";
import ProfilePicture from "assets/profile.jpg";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
function Hero() {
  const { colorMode } = useColorMode();
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
            color={colorMode === "dark" ? "teal.200" : "teal"}
          >
            Hello, I am
          </Text>
          <Heading
            zIndex={1}
            lineHeight={"0.9"}
            as={"h1"}
            textAlign={{ base: "center", md: "start" }}
            fontSize={{ base: "30px", sm: "38px", md: "40px", lg: "72px" }}
            color={colorMode === "dark" ? "gray.100" : "gray.600"}
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
            color={colorMode === "dark" ? "gray.200" : "gray.500"}
          >
            Web Developer
          </Heading>
          {/* <Text
            px={{ base: "25px", sm: "50px", md: "0px" }}
            fontSize={{ base: "14px", md: "16px" }}
            mb={"30px"}
            textAlign={{ base: "center", md: "start" }}
          >
            Driven by thirst for learning and profound fascination on how
            technology works. I am a web developer who is passionate about
            building software solutions. Welcome to my developer portfolio!
          </Text> */}
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
