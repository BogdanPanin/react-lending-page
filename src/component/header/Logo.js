import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="header__div">
      <Link to="/" className="header__div_a">
        <span className="header__div_logo">J . A L I S S A</span>
      </Link>
    </div>
  );
}

export default Logo;
