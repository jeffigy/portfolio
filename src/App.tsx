import React from "react";
import Layout from "./components/Layout/Layout";
import LandingPage from "./pages/Landing";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <Layout>
      <LandingPage />
    </Layout>
  );
};
export default App;
