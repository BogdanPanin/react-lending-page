import React from "react";
import SectionImg from "./SectionImg";
import "./section.scss";
import BanerTitle from "./BanerTitle";
import BanerSubTitle from "./BanerSubTitle";
import Button from "./Button";
import Footer from "../footer/Footer";

function SectionHome(props) {
  const style = { bottom: "-177px" };
  return (
    <div>
      <section className="section">
        <div className="section__div">
          <SectionImg />
          <BanerTitle />
          <BanerSubTitle />
          <Button title="View More" />
        </div>
      </section>
      <Footer itemImg={props.itemImg} style={style} />
    </div>
  );
}

export default SectionHome;
