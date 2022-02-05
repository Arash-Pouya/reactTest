import React from "react";
import "./App.css";
import Header from "../src/components/Header/Header";
import Intro from "../src/components/Intro/Intro";
import Customer from "./pages/Customer";
import Footer from "./components/Footer/footer";
const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Customer />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
