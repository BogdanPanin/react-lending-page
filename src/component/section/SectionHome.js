import React from "react";
import SectionImg from "./SectionImg";
import "./section.scss";
import BanerTitle from "./BanerTitle";
import BanerSubTitle from "./BanerSubTitle";
import Button from "./Button";

import "../mediaHome.scss";

class SectionHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <section className="section">
          <div className="section__div">
            <SectionImg />
            <BanerTitle />
            <BanerSubTitle />
            <Button title="View More" Href="/react-lending-page/portfolio" />
          </div>
        </section>
      </div>
    );
  }
}

export default SectionHome;
