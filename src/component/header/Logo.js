import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/react-lending-page/" className="header__div_a">
      <span className="header__div_logo">J . A L I S S A</span>
    </Link>
  );
}

export default Logo;
