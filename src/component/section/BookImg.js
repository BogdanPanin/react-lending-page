import React from "react";
import "./book.scss";

function BookImg(props) {
  return (
    <div className="book-img">
      <div className="book-img__div">
        <img className="book-img__img" src={props.src} alt=""></img>
      </div>
    </div>
  );
}

export default BookImg;
