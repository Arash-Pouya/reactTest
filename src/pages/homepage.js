import React from "react";
import "./homepage.css";
import Header from "../containers/Header/Header";
import Card from "../pages/Card";
const Homepage = (props) => {
  return (
    <React.Fragment>
      <Header />
      <div className="cards">
        <Card name="پایتون" text="پایتون" />
        <Card name="جاوااسکریپت" text="جاوااسکریپت" />
      </div>
    </React.Fragment>
  );
};

export default Homepage;
