import { Button, useBreakpointValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-scroll";
type NavLinkProps = {
  name: string;
  to: string;
  onClose?: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ name, to, onClose }) => {
  const isMdScreen = useBreakpointValue({ base: false, md: true });
  const handleClick = () => {
    if (onClose) {
      onClose();
    }
  };
  useEffect(() => {
    if (isMdScreen && onClose) {
      onClose();
    }
  }, [isMdScreen, onClose]);
  return (
    <Button
      as={Link}
      to={to}
      offset={-56}
      spy={true}
      smooth={true}
      duration={100}
      variant={"ghost"}
      onClick={handleClick}
      mb={{ base: "20px", md: "0px" }}
      fontSize={{ base: "22px", md: "16px" }}
    >
      {name}
    </Button>
  );
};
export default NavLink;
