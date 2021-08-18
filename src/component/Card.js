import React from "react";
import "./Card.css";
import img from "../assets/images/paris.jpg";
const Cardpage = (props) => {
  return (
    <div className="card">
      <img src={img} />
      <div className="card-body">
        <h2>{}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <h5>{}</h5>
      </div>
      <button className="buy" onClick={() => alert("go to order page")}>
        Buy
      </button>
    </div>
  );
};

export default Cardpage;
