import React from "react";
import "./section.scss";
import BackgroundImg from "./BackgroundImg";

function SectionImg() {
  return (
    <div className="section-img__div">
      <img
        className="section-img__img"
        src="https://static.wixstatic.com/media/f61af8_97a68d95c3584eee8952b7b3184f5f80~mv2_d_6924_3840_s_4_2.jpg/v1/fill/w_1289,h_900,al_c,q_85,usm_0.66_1.00_0.01/f61af8_97a68d95c3584eee8952b7b3184f5f80~mv2_d_6924_3840_s_4_2.webp"
        alt=""
      ></img>
      <BackgroundImg />
    </div>
  );
}

export default SectionImg;
