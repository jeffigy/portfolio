import About from "components/Sections/About/About";
import Contact from "components/Sections/Contact/Contact";
import Hero from "components/Sections/Hero/Hero";
import Projects from "components/Sections/Projects/Projects";
import Skills from "components/Sections/Skills/Skills";
import { useInView } from "react-intersection-observer";

const LandingPage = () => {
  const {
    ref: myRef,
    // inView: elementIsVisible,
    // entry
  } = useInView();

  return (
    <>
      {/* apply useInView  */}

      <div ref={myRef}>
        <Hero />
      </div>
      <div ref={myRef}>
        <About />
      </div>
      <div ref={myRef}>
        <Skills />
      </div>
      <div ref={myRef}>
        <Projects />
      </div>
      <div ref={myRef}>
        <Contact />
      </div>
    </>
  );
};
export default LandingPage;
