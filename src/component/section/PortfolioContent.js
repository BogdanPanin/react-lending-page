import React from "react";
import "./portfolio.scss";
import PortfolioBlock from "./PortfolioBlock";
import portfolio1 from "../../img/portfolio1.png";
import portfolio2 from "../../img/portfolio2.png";
import portfolio3 from "../../img/PORTFOLIO3.png";

function PortfolioContent(props) {
  return (
    <section className="portfolio__section">
      <div className="portfolio__display-flex">
        <PortfolioBlock src={portfolio1} title="EDITORIAL" titleBtn="View" />
        <PortfolioBlock src={portfolio2} title="FOOD & SERVE" titleBtn="View" />
        <PortfolioBlock src={portfolio3} title="BAKED GOODS" titleBtn="View" />
      </div>
    </section>
  );
}

export default PortfolioContent;
