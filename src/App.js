import React from "react";
import Homepage from "./pages/homepage";
import Toolbar from "./containers/Header/Toolbar/Toolbar";
import { BrowserRouter, Route } from "react-router-dom";
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
