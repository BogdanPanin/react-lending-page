import React from "react";
import "./book.scss";

function BookPrice(props) {
  return (
    <p className="book__price__p">
      <span className="book__price__span">{props.titlePrice}</span>
    </p>
  );
}

export default BookPrice;
