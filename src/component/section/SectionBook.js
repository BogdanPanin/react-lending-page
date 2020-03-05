import React from "react";
import "./section.scss";
import Footer from "../footer/Footer";
import SectionHeader from "./SectionHeader";
import BookContent from "./BookContent";

function SectionBook(props) {
  const style = { bottom: "-1579px" };
  const titleHeader = "BOOKS";
  return (
    <div>
      <section className="section">
        <div className="section__div">
          <SectionHeader title={titleHeader} />
          <BookContent
            titleHeader="BREAKFASTS"
            title="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
            titleButton="Buy Now"
            titlePrice="40"
            src="https://static.wixstatic.com/media/f61af8_0541e64c3f484138a15c42a0dc363911~mv2_d_5182_3780_s_4_2.png/v1/fill/w_600,h_438,al_c,q_85,usm_0.66_1.00_0.01/f61af8_0541e64c3f484138a15c42a0dc363911~mv2_d_5182_3780_s_4_2.webp"
            currency="$"
          />
          <BookContent
            titleHeader="SUGAR & SPICE"
            title="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
            titleButton="Buy Now"
            titlePrice="34"
            src="https://static.wixstatic.com/media/f61af8_44e0a04431f84ab8ac9d22b2f77c9acf~mv2_d_5182_3780_s_4_2.png/v1/fill/w_600,h_438,al_c,q_85,usm_0.66_1.00_0.01/f61af8_44e0a04431f84ab8ac9d22b2f77c9acf~mv2_d_5182_3780_s_4_2.webp"
            currency="$"
          />
          <BookContent
            titleHeader="HOLIDAY SEASON SPECIALS"
            title="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
            titleButton="Buy Now"
            titlePrice="25"
            src="https://static.wixstatic.com/media/f61af8_b6a9b3e151b44cb48f58651b716bee98~mv2_d_5182_3780_s_4_2.png/v1/fill/w_600,h_438,al_c,q_85,usm_0.66_1.00_0.01/f61af8_b6a9b3e151b44cb48f58651b716bee98~mv2_d_5182_3780_s_4_2.webp"
            currency="$"
          />
        </div>
      </section>
      <Footer itemImg={props.itemImg} style={style} />
    </div>
  );
}

export default SectionBook;
