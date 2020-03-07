import React from "react";
import "./section.scss";
import "../mediaBook.scss";
import Footer from "../footer/Footer";
import SectionHeader from "./SectionHeader";
import BookContent from "./BookContent";

class SectionBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const style = { bottom: "-1600px" };
    const styleMedia = { bottom: "-1850px" };
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
              src={this.props.book["0"].src["book1"]}
              currency="$"
            />
            <BookContent
              titleHeader="SUGAR & SPICE"
              title="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
              titleButton="Buy Now"
              titlePrice="34"
              src={this.props.book["1"].src["book2"]}
              currency="$"
            />
            <BookContent
              titleHeader="HOLIDAY SEASON SPECIALS"
              title="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
              titleButton="Buy Now"
              titlePrice="25"
              src={this.props.book["2"].src["book3"]}
              currency="$"
            />
          </div>
        </section>
        <Footer style={style} styleMedia={styleMedia} />
      </div>
    );
  }
}

export default SectionBook;
