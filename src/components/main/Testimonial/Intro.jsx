import React from "react";
import Headerimg from "../../../assets/images/c3765b39-0651-4ffd-82f9-291a69aabedb-removebg-preview.png";

export default function Intro(props) {
  return (
    <section className="intro">
      <div className="intro-img">
        <img src={Headerimg} alt="illustration-intro" />
      </div>
      <div className="intro-content">
        <h1>R.P APADANA</h1>
        <h3 className="lg-p mt-2">متخصصین ما در شرکت رایانه پندار آپادانا با تخصص و تجربه خود ، مشتری را در دنیای پیچیده و به سرعت در حال تغییر امروزی همراهی کرده و با شناسایی نیازهای این عزیزان ، بهترین راه حل ها را ارائه خواهند داد</h3>
      </div>
    </section>
  );
}
