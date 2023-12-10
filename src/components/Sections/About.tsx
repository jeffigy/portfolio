import CustomSection from "./CustomSection";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useSectionInView } from "lib/hooks";
const About = () => {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      style={{ marginLeft: "auto", marginRight: "auto" }}
    >
      <CustomSection sectionTitle="About" sectionName="about" minH="600px">
        <Text zIndex={1} maxW={"container.md"} mx={"10px"} bgColor={"brand.bg"}>
          Hello, I’m Jeffy Evangelista, a passionate web developer with a thirst
          for learning and a profound fascination with technology. From a young
          age, I've been captivated by the inner workings of software that
          enable us to connect and innovate.
        </Text>
        <Text zIndex={1} maxW={"container.md"} mx={"10px"} bgColor={"brand.bg"}>
          Learning is a never-ending journey, and I embrace every opportunity to
          expand my knowledge and skills. In this ever-evolving landscape, I
          always stay up-to-date on the latest developments, whether it's new
          programming languages or other tools for software development.
        </Text>
        <Text zIndex={1} maxW={"container.md"} mx={"10px"} bgColor={"brand.bg"}>
          {" "}
          When I’m not engrossed in coding, you can often find me indulging in
          my favorite pastimes. I'm an avid anime enthusiast, a dedicated gamer,
          and I also prioritize regular exercise to maintain a healthy body and
          mind.
        </Text>
      </CustomSection>
    </motion.section>
  );
};
export default About;
