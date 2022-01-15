import React from "react";
import "./App.css";
import Intro from "./components/Intro/Intro";
import Header from "./components/Header/Header";
import Order from "./components/Order/Order";
import Search from "./components/Search/Search";
const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Intro type="introleft" />
      <Order />
      <Order />
      <Search />
    </div>
  );
};

export default App;
