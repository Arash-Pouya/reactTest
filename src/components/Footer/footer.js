/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./footer.css";
import Card from "./Card";
import javascript from "../../assets/images/javascript.png";
import react from "../../assets/images/react.png";
import python from "../../assets/images/python.png";
import django from "../../assets/images/django.png";
const Footer = (props) => {
  return (
    <div className="footer">
      <Card name="arash pouya" about="FrontEnd developrt" lang1="JavaScript" lang2="React" linklink="www.linkedin.com/in/arash-pouya" gitlink="https://github.com/Arash-Pouya" />
      {/* <div className="img">
        <img src={javascript} />
        <img src={react} />
        <img src={python} />
        <img src={django} />
      </div> */}
      <Card name="ehsan bikdeli" about="BackEnd developrt" lang1="Python" lang2="Django" linklink="" gitlink="" />
    </div>
  );
};

export default Footer;
