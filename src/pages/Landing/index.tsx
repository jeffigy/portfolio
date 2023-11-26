import About from "components/Sections/About/About";
import Contact from "components/Sections/Contact/Contact";
import Hero from "components/Sections/Hero/Hero";
import Projects from "components/Sections/Projects/Projects";
import Skills from "components/Sections/Skills/Skills";
import React from "react";

type LandingPageProps = {};

const LandingPage: React.FC<LandingPageProps> = () => {
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
