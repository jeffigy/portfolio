import { Flex, HStack, Spacer } from "@chakra-ui/react";
import React from "react";

import NavLink from "./NavLink";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const NavLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <Flex
      bgColor={"brand.bg"}
      h={"56px"}
      zIndex={3}
      top={0}
      position={"fixed"}
      align={"center"}
      //   mx={"auto"}
      w={"full"}
      px={{ base: "5px", sm: "50px", md: "100px", lg: "150px" }}
    >
      <MobileNav NavLinks={NavLinks} />
      <Spacer display={{ base: "block", md: "none" }} />
      <Logo />
      <Spacer />
      <HStack
        spacing={{ base: "0px", lg: "30px" }}
        display={{ base: "none", md: "block" }}
      >
        {NavLinks.map((link, index) => (
          <NavLink key={index} name={link.name} to={link.to} />
        ))}
      </HStack>
    </Flex>
  );
};
export default Navbar;
