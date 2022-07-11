import React from "react";
import Developer from "../Developer";

export default function Testimonial(props) {
  return (
    <section className="testimonial">
      <Developer link="https://avatars.githubusercontent.com/u/71549366?v=4" name="Arash pouya" skill="Front-End developer" bio="از سال 1399 همکاری خودش رو با شرکت آغاز کارده و مسئول ...." />
      <Developer link="https://avatars.githubusercontent.com/u/47086318?v=4" name="Ehsan Bikdeli" skill="Back-End developer" bio="از سال 1399 همکاری خودش رو با شرکت آغاز کارده و مسئول ...." />
    </section>
  );
}
