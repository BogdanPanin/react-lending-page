import React from "react";
import "./form.scss";

function FormInput(props) {
  return (
    <div className="form__flex">
      <button className="form__button" type="submit">
        <span className="form__button__span">{props.title}</span>
      </button>
    </div>
  );
}

export default FormInput;
