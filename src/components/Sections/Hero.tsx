import {
  Flex,
  Image,
  Stack,
  Button,
  Heading,
  Icon,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import CustomSection from "components/Sections/CustomSection";
import ProfilePicture from "assets/profile.webp";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { TiMessage } from "react-icons/ti";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "lib/hooks";
import { useActiveSectionContext } from "context/active-section-context";
const Hero = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const socialLinks = [
    {
      link: "https://www.linkedin.com/in/jeffy-evangelista/",
      icon: <Icon as={BsLinkedin} boxSize={6} />,
      label: "LinkedIn",
    },
    {
      link: "https://github.com/jeffigy",
      icon: <Icon as={FaGithubSquare} boxSize={6} />,
      label: "Github",
    },
  ];

  return (
    <section id="home" ref={ref}>
      <CustomSection sectionName="home" minH="calc(100vh - 56px)">
        <Flex
          maxW={"1000px"}
          alignItems={"center"}
          justify={"center"}
          direction={"column"}
        >
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
              mb={{ base: "15px", md: "30px" }}
              as={LazyLoadImage}
              borderRadius={"full"}
              boxSize={{
                base: "170px",
                sm: "180px",
                md: "190px",
                lg: "200px",
                xl: "210px",
              }}
              alt="cover-photo"
              src={ProfilePicture}
            />
          </motion.div>
          <Flex
            align={"center"}
            direction={"column"}
            pb={{ base: "20px", md: "0px" }}
          >
            <Heading
              as={motion.h1}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              zIndex={1}
              lineHeight={"0.9"}
              textAlign={{ base: "center", md: "start" }}
              fontSize={{ base: "35px", sm: "40px", md: "45px", lg: "50px" }}
              color={"gray.600"}
            >
              Hi, I'm Jeffy 👋
            </Heading>
            <Heading
              as={motion.h2}
              fontWeight={"regular"}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              zIndex={1}
              mb={"30px"}
              variant={"heading"}
              textAlign={{ base: "center", md: "start" }}
              fontSize={{ base: "20px", sm: "25px", md: "30px", lg: "35px" }}
              color={"gray.400"}
            >
              a Web Developer
            </Heading>

            <Stack
              justify={{ base: "center", md: "start" }}
              direction={{ base: "column", md: "row" }}
              gap={{ base: 3, md: 5 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, zIndex: 2 }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Button
                  onClick={() => {
                    setActiveSection("Contact");
                    setTimeOfLastClick(Date.now());
                  }}
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
                  w={"full"}
                  colorScheme="white"
                  bgColor={"white"}
                  color={"teal"}
                  rightIcon={<Icon as={HiDownload} boxSize={6} />}
                >
                  Download CV
                </Button>
              </motion.div>
              <HStack justify={"center"} gap={{ base: 3, md: 5 }}>
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, zIndex: 2 }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <IconButton
                      isRound
                      onClick={() => window.open(link.link, "_blank")}
                      aria-label={link.label}
                      size={"lg"}
                      colorScheme="white"
                      bgColor={"white"}
                      color={"teal"}
                      icon={link.icon}
                    />
                  </motion.div>
                ))}
              </HStack>
            </Stack>
          </Flex>
        </Flex>
      </CustomSection>
    </section>
  );
};

export default Hero;
