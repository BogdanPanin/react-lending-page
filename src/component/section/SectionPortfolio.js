import React from "react";
import "./section.scss";
import SectionHeader from "./SectionHeader";
import PortfolioContent from "./PortfolioContent";
import "../mediaHeader.scss";
import "../mediaFooter.scss";
import "../mediaPortfolio.scss";

class SectionPortfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const titleHeader = "PORTFOLIO";
    return (
      <div>
        <section className="section">
          <div className="section__div">
            <SectionHeader title={titleHeader} />
            <PortfolioContent />
          </div>
        </section>
      </div>
    );
  }
}

export default SectionPortfolio;
