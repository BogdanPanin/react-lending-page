import React from "react";
import "./book.scss";
import Paragraf from "./Paragraf";
import BookButton from "./BookButton";
import BookPrice from "./BookPrice";
import BookImg from "./BookImg";
import BookDollar from "./BookDollar";

function BookContent(props) {
  return (
    <section className="book__section">
      <div className="book__display-flex">
        <div className="book__block">
          <div className="book__fonts">
            <div className="book-bg__color">
              <div className="book-bg__div"></div>
            </div>
          </div>
          <div className="book-text">
            <div className="book__header">
              <h2 className="book__header2">{props.titleHeader}</h2>
            </div>
            <div className="book__paragraf">
              <Paragraf title={props.title} />
            </div>
            <div className="book__button">
              <BookButton titleButton={props.titleButton} />
            </div>
            <div className="book__price">
              <BookPrice titlePrice={props.titlePrice} />
            </div>
            <div className="book__photo">
              <BookImg src={props.src} />
            </div>
            <div className="book__dollar">
              <BookDollar currency={props.currency} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookContent;
