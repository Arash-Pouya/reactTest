import React from "react";
import "./Header.css";
import wall1 from "../../assets/images/wallpaper4.jpg";
const Header = () => {
  return (
    <header className="header">
      <img src={wall1} />
      <p>متخصصین ما در شرکت رایانه پندار آپادانا با تخصص و تجربه خود ، مشتری را در دنیای پیچیده و به سرعت در حال تغییر امروزی همراهی کرده و با شناسایی نیازهای این عزیزان ، بهترین راه حل ها را ارائه خواهند داد</p>
    </header>
  );
};

export default Header;
