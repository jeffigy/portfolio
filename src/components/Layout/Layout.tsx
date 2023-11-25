import React from "react";
import Navbar from "./Navbar/Navbar";
import { Flex } from "@chakra-ui/react";
import ParticleEffect from "../ParticleEffect";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <ParticleEffect />
      <Navbar />
      <Flex mt={"56px"} w={"full"}>
        {children}
      </Flex>
    </>
  );
};
export default Layout;
