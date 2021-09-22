import React from "react";
import "./Menuitems.css";
import Menuitem from "./Menuitem/Menuitem";
const Menuitems = () => {
  return (
    <ul className="menuitems">
      <Menuitem link={{ pathname: "/" }} active></Menuitem>
      {/* <Menuitem link={{ pathname: "/!!" }}>تب سوم</Menuitem> */}
    </ul>
  );
};
export default Menuitems;
