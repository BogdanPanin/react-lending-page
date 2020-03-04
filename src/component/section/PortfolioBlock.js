import React from "react";
import "./portfolio.scss";
import PortfolioButton from "./PortfolioButton";

function PortfolioBlock(props) {
  return (
    <div className="portfolio__block">
      <div className="portfolio__fonts">
        <div className="portfolio-bg">
          <div className="portfolio-bg__color"></div>
        </div>
        <div className="portfolio-img">
          <div className="portfolio-img__div">
            <img className="portfolio-img__img" src={props.src} alt="" />
          </div>
        </div>
      </div>
      <div className="portfolio-text">
        <div className="portfolio-text__grid">
          <div className="portfolio__title">
            <h2 className="portfolio__header">
              <span className="portfolio__span">{props.title}</span>
            </h2>
          </div>
          <div className="portfolio__btn">
            <PortfolioButton titleBtn={props.titleBtn} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioBlock;
