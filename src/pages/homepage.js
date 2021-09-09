import React from "react";
import "./homepage.css";
import Header from "../containers/Header/Header";
import Card from "../pages/Card";
import python from "../assets/images/python.png";
import javascript from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
const Homepage = (props) => {
  return (
    <React.Fragment>
      <Header />
      <div className="cards">
        {" "}
        <div>
          <Card images={javascript} name="پایتون" text="پایتون" />
        </div>
        <div>
          <Card name="جنگو" text="جنگو" />
        </div>
        <div>
          <Card images={javascript} name="جااواسکریپت" text="جاوااسکریپت" />
        </div>
        <div>
          <Card images={react} name="ری اکت" text="ری اکت" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
