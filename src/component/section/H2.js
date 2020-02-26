import React from "react";
import "../base.scss";

function H2(props) {
  return (
    <h2 className="header2">
      <span className="header2__span">{props.title}</span>
    </h2>
  );
}

export default H2;
