import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/homepage";
import Toolbar from "./containers/Header/Toolbar/Toolbar";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Toolbar />
      <div>
        <Route path="/" exact component={Homepage} />
      </div>
    </BrowserRouter>
  );
};

export default App;
