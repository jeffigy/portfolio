import SiteLogo from "assets/portfolio-logo.svg";
import { Image } from "@chakra-ui/react";
import { Link } from "react-scroll";

const Logo = () => {
  return (
    <Link to="hero" spy={true} smooth={true} offset={-56} duration={500}>
      <Image h={"40px"} src={SiteLogo} cursor={"pointer"} />
    </Link>
  );
};
export default Logo;
