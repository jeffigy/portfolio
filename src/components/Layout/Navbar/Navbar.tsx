import { Flex, HStack, Spacer } from "@chakra-ui/react";
import NavLink from "./NavLink";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { Links } from "lib/data";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <header>
      <Flex
        as={motion.nav}
        bgColor={"brand.bg"}
        h={"56px"}
        zIndex={3}
        top={0}
        position={"fixed"}
        align={"center"}
        w={"full"}
        px={{ base: "5px", sm: "50px", md: "100px", lg: "150px" }}
        mx="auto"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Logo />
        <Spacer />
        <HStack
          spacing={{ base: "0px", lg: "30px" }}
          display={{ base: "none", md: "block" }}
        >
          {Links.map((link, index) => (
            <NavLink key={index} name={link.name} to={link.hash} />
          ))}
        </HStack>
        <MobileNav NavLinks={Links} />
      </Flex>
    </header>
  );
};
export default Navbar;
