import CustomSection from "./CustomSection";
import { SimpleGrid } from "@chakra-ui/react";
import { SkillsData } from "lib/data";
import Skill from "./Skill";

const Skills = () => {
  return (
    <CustomSection sectionTitle="Skills" sectionName="skills" minH="500px">
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={3}>
        {SkillsData.map((tech, index) => (
          <Skill index={index} key={index} techName={tech} />
        ))}
      </SimpleGrid>
    </CustomSection>
  );
};
export default Skills;
