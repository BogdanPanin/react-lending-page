import React from "react";
import "./book.scss";
import "../mediaBook.scss";
import "../mediaBook.scss";
import Paragraf from "./Paragraf";
import BookButton from "./BookButton";
import BookPrice from "./BookPrice";
import BookImg from "./BookImg";
import BookDollar from "./BookDollar";

function BookContent(props) {
  return (
    <section className="book__section media">
      <div className="book__display-flex media">
        <div className="book__block media">
          <div className="book__fonts">
            <div className="book-bg__color media">
              <div className="book-bg__div"></div>
            </div>
          </div>
          <div className="book-text media">
            <div className="book__header media">
              <h2 className="book__header2 media">{props.titleHeader}</h2>
            </div>
            <div className="book__paragraf media">
              <Paragraf title={props.title} />
            </div>
            <div className="book__button media">
              <BookButton titleButton={props.titleButton} />
            </div>
            <div className="book__price media">
              <BookPrice titlePrice={props.titlePrice} />
            </div>
            <div className="book__photo media">
              <BookImg src={props.src} />
            </div>
            <div className="book__dollar media">
              <BookDollar currency={props.currency} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookContent;
