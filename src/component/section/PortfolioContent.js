import React from "react";
import "./portfolio.scss";
import PortfolioBlock from "./PortfolioBlock";

function PortfolioContent(props) {
  return (
    <section className="portfolio__section">
      <div className="portfolio__display-flex">
        <PortfolioBlock
          src="https://static.wixstatic.com/media/f61af8_2ef1fc57fdd849a19df076e8fb6e036f~mv2_d_2681_2546_s_4_2.jpg/v1/fill/w_404,h_869,al_c,q_80,usm_0.66_1.00_0.01/f61af8_2ef1fc57fdd849a19df076e8fb6e036f~mv2_d_2681_2546_s_4_2.webp"
          title="EDITORIAL"
          titleBtn="View"
        />
        <PortfolioBlock
          src="https://static.wixstatic.com/media/f61af8_0865ef003a1740f9b703014d3b57e3fa~mv2_d_4928_3264_s_4_2.jpg/v1/fill/w_374,h_869,al_c,q_80,usm_0.66_1.00_0.01/f61af8_0865ef003a1740f9b703014d3b57e3fa~mv2_d_4928_3264_s_4_2.webp"
          title="FOOD & SERVE"
          titleBtn="View"
        />
        <PortfolioBlock
          src="https://static.wixstatic.com/media/f61af8_0ecca2bc73f444c98e8de071bb2ce81c~mv2_d_1927_1272_s_2.jpg/v1/fill/w_375,h_869,al_c,q_80,usm_0.66_1.00_0.01/f61af8_0ecca2bc73f444c98e8de071bb2ce81c~mv2_d_1927_1272_s_2.webp"
          title="BAKED GOODS"
          titleBtn="View"
        />
      </div>
    </section>
  );
}

export default PortfolioContent;
