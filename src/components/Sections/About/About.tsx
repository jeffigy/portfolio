import React from "react";
import CustomSection from "../CustomSection";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <CustomSection sectionTitle="About" sectionName="about">
      Have a good coding
    </CustomSection>
  );
};
export default About;
