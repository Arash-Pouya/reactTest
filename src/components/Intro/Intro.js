/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Intro.css";
import Wall1 from "../../assets/images/one.jpg";
import Wall2 from "../../assets/images/two.jpg";
import Wall3 from "../../assets/images/three.jpg";
const Intro = (props) => {
  return (
    <>
      <div className="intro">
        <img src={Wall1} />
        {/* <span>01</span> */}
        <div>
          <h1>طراحی اختصاصی و منحصر بفرد</h1>
        </div>
      </div>
      <div className="introleft">
        <img src={Wall2} />
        {/* <span>02</span> */}
        <div>
          <h1>استفاده از فناوری های روز در توسعه وب</h1>
        </div>
      </div>
      <div className="intro">
        <img src={Wall3} />
        {/* <span>03</span> */}
        <div>
          <h1>رعایت اصول سئو و بازاریابی دیجیتال</h1>
        </div>
      </div>
    </>
  );
};

export default Intro;
