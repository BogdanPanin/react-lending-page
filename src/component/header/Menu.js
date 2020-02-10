import React from "react";
import "./header.scss";
import MenuItem from "./MenuItem";

function Menu(props) {
  return (
    <div className="header__menu">
      <nav className="header__menu_nav">
        <ul className="header__menu_ul">
          {props.itemText.map(i => {
            return <MenuItem i={i} key={i.id} />;
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
