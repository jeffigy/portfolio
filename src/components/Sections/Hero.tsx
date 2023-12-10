import {
  Flex,
  Image,
  Stack,
  Text,
  Button,
  Heading,
  Icon,
} from "@chakra-ui/react";
import CustomSection from "components/Sections/CustomSection";
import ProfilePicture from "assets/profile.webp";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { TiMessage } from "react-icons/ti";
import { FaCode } from "react-icons/fa";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import { useSectionInView } from "lib/hooks";
// import { useActiveSectionContext } from "context/active-section-context";
const Hero = () => {
  // const { ref } = useSectionInView("Home", 0.5);
  // const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <CustomSection sectionName="home" minH="calc(100vh - 56px)">
      <Flex
        maxW={"1000px"}
        alignItems={"center"}
        justify={"center"}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          direction={"column"}
          // align={{ base: "center", md: "start" }}
          mr={{ base: "0", md: "30px" }}
          pb={{ base: "20px", md: "0px" }}
        >
          <Text
            as={motion.p}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            zIndex={1}
            textAlign={{ base: "center", md: "start" }}
            fontSize={"16px"}
            color={"teal"}
          >
            Hello, I am
          </Text>
          <Heading
            as={motion.h1}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            zIndex={1}
            lineHeight={"0.9"}
            textAlign={{ base: "center", md: "start" }}
            fontSize={{ base: "30px", sm: "38px", md: "40px", lg: "72px" }}
            color={"gray.600"}
          >
            Jeffy Evangelista
          </Heading>
          <Heading
            as={motion.h2}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            zIndex={1}
            mb={"30px"}
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
            <motion.div
              whileHover={{ scale: 1.1, zIndex: 2 }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Button
                as={Link}
                size={"lg"}
                borderRadius={"full"}
                href="contact"
                w={"full"}
                to={"contact"}
                spy={true}
                smooth={true}
                offset={-56}
                duration={1000}
                rightIcon={<Icon as={TiMessage} boxSize={8} />}
              >
                Get in Touch
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, zIndex: 2 }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Button
                size={"lg"}
                borderRadius={"full"}
                href="projects"
                w={"full"}
                as={Link}
                to={"projects"}
                spy={true}
                smooth={true}
                offset={-56}
                duration={1000}
                variant={"outline"}
                rightIcon={<Icon as={FaCode} boxSize={6} />}
              >
                Explore Projects{" "}
              </Button>
            </motion.div>
          </Stack>
        </Flex>
        <motion.div
          style={{ zIndex: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: "0.2",
          }}
        >
          <Image
            borderRadius={"full"}
            boxSize={{
              base: "200px",
              sm: "205px",
              md: "210px",
              lg: "225px",
              xl: "230px",
            }}
            alt="cover-photo"
            src={ProfilePicture}
          />
        </motion.div>
      </Flex>
    </CustomSection>
  );
};

export default Hero;
