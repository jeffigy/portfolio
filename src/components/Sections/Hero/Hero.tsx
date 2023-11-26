import React from "react";
import CustomSection from "../CustomSection";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <CustomSection sectionTitle="Hero" sectionName="hero">
      Have a good coding
    </CustomSection>
  );
};
export default Hero;
