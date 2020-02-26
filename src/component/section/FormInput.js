import React from "react";
import "./form.scss";

const FormInput = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className="form__flex">
      <label className="form__label">{props.title}</label>
      <input
        className={"form__input" + (hasError ? "form__input" && "_error" : "")}
        {...input}
        {...props}
      />
    </div>
  );
};

export default FormInput;
