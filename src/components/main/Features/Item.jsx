import React from "react";

export default function Item(props) {
  return (
    <div className="features-item">
      <div className="features-item-head">
        <img src={props.src} alt="" />
      </div>
      <div className="features-item-body mt-2">
        <h5>{props.header}</h5>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
