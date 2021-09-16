import React from "react";
import "./Toolbar.css";
import Menuitems from "../Menuitems/Menuitems";

const Toolbar = (props) => {
  return (
    <header className="Toolbar">
      <nav>
        <Menuitems />
      </nav>
    </header>
  );
};

export default Toolbar;
