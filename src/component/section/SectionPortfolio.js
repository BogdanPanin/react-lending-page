import React from "react";
import "./section.scss";
import Footer from "../footer/Footer";
import SectionHeader from "./SectionHeader";
import PortfolioContent from "./PortfolioContent";

function SectionPortfolio(props) {
  const style = { bottom: "-309px" };
  const titleHeader = "PORTFOLIO";
  return (
    <div>
      <section className="section">
        <div className="section__div">
          <SectionHeader title={titleHeader} />
          <PortfolioContent />
        </div>
      </section>
      <Footer itemImg={props.itemImg} style={style} />
    </div>
  );
}

export default SectionPortfolio;
