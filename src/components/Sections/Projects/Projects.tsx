import React from "react";
import CustomSection from "../CustomSection";
import Project from "./Project";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <CustomSection sectionTitle="Projects" sectionName="projects">
      <Project />
    </CustomSection>
  );
};
export default Projects;
