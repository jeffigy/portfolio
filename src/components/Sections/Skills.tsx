import CustomSection from "./CustomSection";
import { Flex } from "@chakra-ui/react";
import { SkillsData } from "lib/data";
import Skill from "./Skill";

const Skills = () => {
  return (
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
  );
};
export default Skills;
