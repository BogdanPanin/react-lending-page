import React from "react";
import "./book.scss";

function BookDollar(props) {
  return (
    <p className="book__dollar__p">
      <span className="book__dollar__span">
        <span className="book__dollar__currency">{props.currency}</span>
      </span>
    </p>
  );
}

export default BookDollar;
