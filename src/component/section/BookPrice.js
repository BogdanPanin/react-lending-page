import React from "react";
import "./book.scss";

function BookPrice(props) {
  return (
    <p className="book__price__p media">
      <span className="book__price__span media">{props.titlePrice}</span>
    </p>
  );
}

export default BookPrice;
