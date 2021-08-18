import React from "react";
import "./Menuitem.css";
import { NavLink } from "react-router-dom";
const Menuitem = (props) => {
  return (
    <li className="menuitem">
      <NavLink to={props.link} exact>
        {props.children}
      </NavLink>
    </li>
  );
};
export default Menuitem;
