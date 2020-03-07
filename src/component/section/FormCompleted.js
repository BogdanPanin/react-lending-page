import React from "react";
import "./form.scss";

function FormInput(props, styles) {
  return (
    <div className="form__flex completed">
      <p className="form-completed__p media">
        <span className="form-completed__span media">{props.title}</span>
      </p>
    </div>
  );
}

export default FormInput;
