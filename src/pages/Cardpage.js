import React from "react";
import "../pages/Cardpage.css";
import Card from "../component/Card";
const Cardpage = (props) => {
  return (
    <React.Fragment>
      <div className="Cardpage">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </React.Fragment>
  );
};

export default Cardpage;
