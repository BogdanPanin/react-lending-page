import React from "react";
import "./header.scss";

function MenuItem({ i }) {
  return (
    <li className="header__menu_li">
      <a href="#" className="header__menu_a">
        <div className="header__menu_div">
          <p className="header__menu_p">{i.title}</p>
        </div>
      </a>
    </li>
  );
}

export default MenuItem;
