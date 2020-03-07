import React from "react";
import "./book.scss";

function BookImg(props) {
  return (
    <div className="book-img media">
      <div className="book-img__div media">
        <img className="book-img__img media" src={props.src} alt=""></img>
      </div>
    </div>
  );
}

export default BookImg;
