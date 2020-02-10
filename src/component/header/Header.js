import React from "react";
import Logo from "./Logo";
import "./header.scss";
import Menu from "./Menu";

function Header() {
  const itemText = [
    {
      id: 1,
      title: "Home"
    },
    {
      id: 2,
      title: "Portfolio"
    },
    {
      id: 3,
      title: "About"
    },
    {
      id: 4,
      title: "Book"
    },
    {
      id: 5,
      title: "Contact"
    }
  ];
  return (
    <header className="header">
      <div className="header__content">
        <Logo />
        <Menu itemText={itemText} />
      </div>
    </header>
  );
}

export default Header;
