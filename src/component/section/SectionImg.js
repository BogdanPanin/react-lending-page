import React from "react";
import "./section.scss";
import BackgroundImg from "./BackgroundImg";
import homePng from "../../img/home.png";

function SectionImg() {
  return (
    <div className="section-img__div media">
      <img className="section-img__img" src={homePng} alt=""></img>
      <BackgroundImg />
    </div>
  );
}

export default SectionImg;
