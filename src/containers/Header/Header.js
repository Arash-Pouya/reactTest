/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";
import Wallpaper from "../../assets/images/wallpaper2.png";
const Header = () => {
  return (
    <div className="Header">
      <img src={Wallpaper} />
    </div>
  );
};
export default Header;
