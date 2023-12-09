import About from "components/Sections/About";
import Contact from "components/Sections/Contact";
import Hero from "components/Sections/Hero";
import Projects from "components/Sections/Projects";
import Skills from "components/Sections/Skills";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};
export default LandingPage;
