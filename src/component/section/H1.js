import React from "react";
import "../base.scss";

function H1(props) {
  return (
    <h1 className="header1">
      <span className="header1__span">{props.title}</span>
    </h1>
  );
}

export default H1;
