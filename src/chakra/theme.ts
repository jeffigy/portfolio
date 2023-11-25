import { extendTheme } from "@chakra-ui/react";
import { ButtonTheme } from "./components/ Button";

export const theme = extendTheme({
  components: {
    Button: ButtonTheme,
  },
  colors: {
    brand: {
      bg: "#F2F0EE",
      darkGrey: "#58595B",
    },
  },
});
