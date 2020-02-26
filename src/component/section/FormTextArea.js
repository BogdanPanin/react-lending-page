import React from "react";
import "./form.scss";

const FormTextArea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className="form__flex">
      <label className="form__label">{props.title}</label>
      <textarea
        className={
          "form__textarea" + (hasError ? "form__textarea" && "_error" : "")
        }
        {...input}
        {...props}
      />
    </div>
  );
};

export default FormTextArea;
