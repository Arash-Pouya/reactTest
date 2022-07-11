import React, { useRef } from "react";
import OrderTracking from "./OrderTracking";
import Blog from "./Blog";
import Features from "./Features/Features";
import Testimonial from "./Testimonial/Testimonial";
import Header from "../Header";
import Intro from "./Testimonial/Intro";
export default function Main(props) {
  const inputRef = useRef("");
  function inputfocus() {
    inputRef.current.focus();
  }
  return (
    <main>
      <Header click={inputfocus} />
      <Intro />
      <Features />
      <Blog />
      <Testimonial />
      <OrderTracking inputRef={inputRef} />
    </main>
  );
}
