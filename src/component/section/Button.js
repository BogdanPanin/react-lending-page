import React from "react";
import "./section.scss";

function Button(props) {
  return (
    <div className="section__button home">
      <a href="" className="section__button_a">
        <span className="section__button_span ">{props.title}</span>
      </a>
    </div>
  );
}

export default Button;
