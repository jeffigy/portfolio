import CustomSection from "./CustomSection";
import { Flex } from "@chakra-ui/react";
import { SkillsData } from "lib/data";
import Skill from "./Skill";
import { useSectionInView } from "lib/hooks";

const Skills = () => {
  const { ref } = useSectionInView("Skills");
  return (
    <section id="skills" ref={ref}>
      <CustomSection sectionTitle="Skills" sectionName="skills" minH="500px">
        <Flex
          as={"ul"}
          gap={2}
          flexWrap={"wrap"}
          maxW={"700px"}
          justify={"center"}
        >
          {SkillsData.map((tech, index) => (
            <Skill index={index} key={index} techName={tech} />
          ))}
        </Flex>
      </CustomSection>
    </section>
  );
};
export default Skills;
