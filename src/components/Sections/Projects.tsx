import { projectsData } from "lib/data";
import CustomSection from "./CustomSection";
import Project from "./Project";

const Projects = () => {
  return (
    <CustomSection sectionTitle="Projects" sectionName="projects" minH="100vh">
      {projectsData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </CustomSection>
  );
};
export default Projects;
