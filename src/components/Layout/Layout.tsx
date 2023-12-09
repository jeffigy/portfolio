import React from "react";
import Navbar from "./Navbar/Navbar";
import { Flex } from "@chakra-ui/react";
import ParticleEffect from "../ParticleEffect";
import ActiveSectionContextProvider from "context/active-section-context";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ActiveSectionContextProvider>
      <ParticleEffect />
      <Navbar />
      <Flex
        mt={"56px"}
        w={"full"}
        direction={"column"}
        px={{ base: "5px", md: "100px", lg: "150px" }}
        bgColor={"brand.bg"}
      >
        {children}
      </Flex>
    </ActiveSectionContextProvider>
  );
};
export default Layout;
