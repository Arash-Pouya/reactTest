import React from "react";

export default function Developer(props) {
  return (
    <div className="testimonial-item">
      <div className="testimonial-item-text">
        <p>{props.bio}</p>
      </div>
      <div className="testimonial-item-reviewer">
        <div className="testimonial-item-reviewer-img">
          <img src={props.link} alt="" />
        </div>
        <div className="ml-1 testimonial-item-reviewer-text">
          <h4>{props.name}</h4>
          <p>{props.skill}</p>
        </div>
      </div>
    </div>
  );
}
