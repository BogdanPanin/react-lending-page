import React from "react";
import "./portfolio.scss";
import { Link } from "react-router-dom";

function PortfolioButton(props) {
  return (
    <Link to="/" className="portfolio-button">
      <span className="portfolio-button__span">{props.titleBtn}</span>
    </Link>
  );
}

export default PortfolioButton;
