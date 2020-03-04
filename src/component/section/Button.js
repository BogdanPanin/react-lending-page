import React from "react";
import "./section.scss";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <div className="section__button home">
      <Link to={props.Href} className="section__button_a">
        <span className="section__button_span ">{props.title}</span>
      </Link>
    </div>
  );
}

export default Button;
