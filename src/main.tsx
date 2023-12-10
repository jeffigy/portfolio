import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chakra/theme.ts";
import ActiveSectionContextProvider from "context/active-section-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ActiveSectionContextProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </ActiveSectionContextProvider>
  </React.StrictMode>
);
