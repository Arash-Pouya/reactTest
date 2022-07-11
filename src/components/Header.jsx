import React from "react";

export default function Header(props) {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <a href="#">وبلاگ</a>
        </li>
        <li>
          <p onClick={props.click}>پیگیری سفارش</p>
        </li>
      </ul>
    </nav>
  );
}
