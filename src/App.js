import React from "react";
import "./App.css";
import Header from "../src/components/Header/Header";
import Intro from "../src/components/Intro/Intro";
import Homepageone from "./pages/Homepageone";
const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Intro type="introleft" />
      <Homepageone />
      {/* <Homepagetwo /> */}
    </div>
  );
};

export default App;
