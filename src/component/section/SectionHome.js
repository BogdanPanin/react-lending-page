import React from "react";
import SectionImg from "./SectionImg";
import "./section.scss";
import BanerTitle from "./BanerTitle";
import BanerSubTitle from "./BanerSubTitle";
import Button from "./Button";
import Footer from "../footer/Footer";
import "../mediaHome.scss";

class SectionHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const style = { bottom: "-262px" };
    const styleMedia = { bottom: "-60px" };
    return (
      <div>
        <section className="section">
          <div className="section__div">
            <SectionImg />
            <BanerTitle />
            <BanerSubTitle />
            <Button title="View More" Href="/portfolio" />
          </div>
        </section>
        <Footer
          itemImg={this.props.itemImg}
          style={style}
          styleMedia={styleMedia}
        />
      </div>
    );
  }
}

export default SectionHome;
