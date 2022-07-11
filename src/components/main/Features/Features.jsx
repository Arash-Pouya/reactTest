import React from "react";
import Item from "./Item";
import IMAGE1 from "../../../assets/images/one.jpg";
import IMAGE2 from "../../../assets/images/two.jpg";
import IMAGE3 from "../../../assets/images/three.jpg";
export default function Features() {
  return (
    <section className="features">
      <Item src={IMAGE1} header="طراحی اختصاصی و منحصر بفرد" />
      <Item src={IMAGE2} header="استفاده از فناوری های روز توسعه وب" />
      <Item src={IMAGE3} header="رعایت اصول سئو و بازاریابی دیجیتال" />
    </section>
  );
}
