import React from "react";
import "./form.scss";

function FormInput(props, styles) {
  return (
    <div className="form__flex">
      <p className="form-completed__p">
        <span className="form-completed__span">{props.title}</span>
      </p>
    </div>
  );
}

export default FormInput;
