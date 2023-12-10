import { projectsData } from "lib/data";
import CustomSection from "./CustomSection";
import Project from "./Project";
import { useSectionInView } from "lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} id="projects">
      <CustomSection
        sectionTitle="Projects"
        sectionName="projects"
        minH="1200px"
      >
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </CustomSection>
    </section>
  );
};
export default Projects;
