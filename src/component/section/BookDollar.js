import React from "react";
import "./book.scss";

function BookDollar(props) {
  return (
    <p className="book__dollar__p media">
      <span className="book__dollar__span media">
        <span className="book__dollar__currency media">{props.currency}</span>
      </span>
    </p>
  );
}

export default BookDollar;
