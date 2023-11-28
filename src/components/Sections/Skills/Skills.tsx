import React from "react";
import CustomSection from "../CustomSection";
import { SimpleGrid } from "@chakra-ui/react";
import ChakraUI from "assets/icons/chakra-ui.png";
import Firebase from "assets/icons/firebase.png";
import NextJS from "assets/icons/nextjs.png";
import Postgres from "assets/icons/postgres.png";
import ReactJS from "assets/icons/reactjs.png";
import Typescript from "assets/icons/typescript.png";
import TechCard from "./TechCard";
type SkillsProps = {};

const Skills: React.FC<SkillsProps> = () => {
  const techs = [
    { techName: "ChakraUI", techLogo: ChakraUI },
    { techName: "Firebase", techLogo: Firebase },
    { techName: "NextJS", techLogo: NextJS },
    { techName: "Postgres", techLogo: Postgres },
    { techName: "ReactJS", techLogo: ReactJS },
    { techName: "Typescript", techLogo: Typescript },
  ];
  return (
    <CustomSection sectionTitle="Skills" sectionName="skills">
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={3}>
        {techs.map((tech, index) => (
          <TechCard
            index={index}
            key={index}
            techName={tech.techName}
            techLogo={tech.techLogo}
          />
        ))}
      </SimpleGrid>
    </CustomSection>
  );
};
export default Skills;
