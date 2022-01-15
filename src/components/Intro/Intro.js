import React from "react";
import "./Intro.css";
import Paris from "../../assets/images/paris.jpg";
const Intro = (props) => {
  let classes = ["intro"];
  switch (props.type) {
    case "introright":
      classes.push("intro");
      break;
    case "introleft":
      classes.push("introleft");
      break;
    default:
      break;
  }
  return (
    <div className={classes.join(" ")}>
      <img src={Paris} />
      <div>
        <h1>WEB DESIGN & BRAND IDENTITY</h1>
        <p>You understand your customers better than anyone. We know that, and we can help you turn that knowledge into results. We’ll help you refine an online brand experience that showcases the power of your business.</p>
      </div>
    </div>
  );
};

export default Intro;
