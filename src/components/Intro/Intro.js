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
      <span>{props.number}</span>
      <div>
        <h1>یک تغییر فوق العاده</h1>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشت.</p>
      </div>
    </div>
  );
};

export default Intro;
