import React from "react";
import CustomSection from "../CustomSection";
import { SimpleGrid } from "@chakra-ui/react";

import TechCard from "./TechCard";
type SkillsProps = {};

const Skills: React.FC<SkillsProps> = () => {
  const techs = [
    "ChakraUI",
    "Firebase",
    "NextJS",
    "Postgres",
    "ReactJS",
    "Typescript",
  ];
  return (
    <CustomSection sectionTitle="Skills" sectionName="skills">
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={3}>
        {techs.map((tech, index) => (
          <TechCard index={index} key={index} techName={tech} />
        ))}
      </SimpleGrid>
    </CustomSection>
  );
};
export default Skills;
