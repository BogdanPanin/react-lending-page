import React from "react";
import "./book.scss";
import { Link } from "react-router-dom";

function BookButton(props) {
  return (
    <Link to="/" className="book-button__link">
      <span className="book-button__span">{props.titleButton}</span>
    </Link>
  );
}

export default BookButton;
