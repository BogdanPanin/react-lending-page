import React from "react";
import "./section.scss";
import Footer from "../footer/Footer";
import SectionHeader from "./SectionHeader";

function SectionBook(props) {
  const style = { bottom: "-177px" };
  const titleHeader = "BOOKS";
  return (
    <div>
      <section className="section">
        <div className="section__div">
          <SectionHeader title={titleHeader} />
        </div>
      </section>
      <Footer itemImg={props.itemImg} style={style} />
    </div>
  );
}

export default SectionBook;
