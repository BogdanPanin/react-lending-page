import React from "react";
import "./contact.scss";
import "./form.scss";
import ReduxFormMessage from "./FormMessage";

function ContactFormBlock(props) {
  const onSubmit = formData => {
    alert(JSON.stringify(formData, null, "\t"));
    let span = document.querySelector(".form-completed__span");
    span.style.visibility = "visible";
  };
  return (
    <div className="form__div">
      <ReduxFormMessage onSubmit={onSubmit} />
    </div>
  );
}

export default ContactFormBlock;
