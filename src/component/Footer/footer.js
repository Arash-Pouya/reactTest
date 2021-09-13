/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Grid from "@material-ui/core/Grid";
import "./footer.css";
import javascript from "../../assets/images/javascript.png";
import react from "../../assets/images/react.png";
import python from "../../assets/images/python.png";
import django from "../../assets/images/django.png";
const Footer = () => {
  return (
    <div className="footer">
      <h1>Rayaneh Pendar Apadana {"\u00A9"}</h1>
      <Grid container spacing={0}>
        <Grid item xs className="grid">
          <div>
            <p>Front End developer</p>
            <p>JavaScript</p>
            <p>React.js</p>
            <p>Html & Css</p>
          </div>
        </Grid>
        <Grid item xs className="imggrid">
          <div className="img">
            <img src={javascript} />
            <img src={python} />
            <img src={django} />
            <img src={react} />
          </div>
        </Grid>
        <Grid item xs className="grid">
          <div>
            <p>Back End developer</p>
            <p>Python</p>
            <p>Django</p>
            <p>Data Scince</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
