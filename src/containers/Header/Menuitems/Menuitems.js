import React from "react";
import "./Menuitems.css";
import Menuitem from "./Menuitem/Menuitem";
const Menuitems = () => {
  return (
    <ul className="menuitems">
      <Menuitem link="/" active>
        صفحه اصلی
      </Menuitem>
      {/* <Menuitem link={{ pathname: "/sigin" }}>تب دوم</Menuitem> */}
      {/* <Menuitem link={{ pathname: "/!!" }}>تب سوم</Menuitem> */}
    </ul>
  );
};
export default Menuitems;
