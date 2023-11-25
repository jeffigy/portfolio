import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  ModalCloseButton,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import NavLink from "./NavLink";

type MobileNavProps = {
  NavLinks: { name: string; to: string }[];
};

const MobileNav: React.FC<MobileNavProps> = ({ NavLinks }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  return (
    <>
      {" "}
      <IconButton
        display={{ base: "block", md: "none" }}
        variant={"outline"}
        icon={<HamburgerIcon />}
        aria-label="menu-button"
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        blockScrollOnMount={true}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent bgColor={"white"}>
          <Flex
            w={"full"}
            h={"56px"}
            px={{ base: "20px", sm: "60px", md: "100px" }}
          >
            <ModalCloseButton
              color={"teal"}
              size={"lg"}
              display={"block"}
              position={"relative"}
              m={0}
            />
          </Flex>

          <DrawerBody>
            <Flex
              direction={"column"}
              align={"center"}
              justify={"center"}
              h={"100%"}
            >
              {NavLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.to}
                  name={link.name}
                  onClose={onClose}
                />
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default MobileNav;
