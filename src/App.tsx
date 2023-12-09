import React, { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { Flex } from "@chakra-ui/react";
const LazyPage = React.lazy(() => import("pages/Landing/index"));

const App = () => {
  useEffect(() => {
    async function getLoader() {
      const { quantum } = await import("ldrs");
      quantum.register();
    }
    getLoader();
  }, []);

  return (
    <React.Suspense
      fallback={
        <Flex
          bgColor={"brand.bg"}
          w={"100%"}
          h={"100vh"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <l-quantum color="teal" speed="1.75" size="100"></l-quantum>
        </Flex>
      }
    >
      <Layout>
        <LazyPage />
      </Layout>
    </React.Suspense>
  );
};
export default App;
