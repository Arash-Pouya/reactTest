import React from "react";
import OrderTracking from "./OrderTracking";
import Blog from "./Blog";
import Features from "./Features/Features";
import Testimonial from "./Testimonial/Testimonial";
import Intro from "./Testimonial/Intro";
export default function Main() {
  return (
    <main>
      <Intro />
      <Features />
      <Blog />
      <Testimonial />
      <OrderTracking />
    </main>
  );
}
