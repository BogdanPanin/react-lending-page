import React from "react";
import "./formSubcribe.scss";
import ReduxFormSubcribeNow from "./FormSubcribeNow";

function ContactSubscribeNow(props) {
  const onSubmit = formData => {
    alert(JSON.stringify(formData, null, "\t"));
    let completed = document.querySelector(".form__completed__spaan");
    completed.style.visibility = "visible";
  };
  return (
    <div className="form__block">
      <div className="form__subscribe-now">
        <ReduxFormSubcribeNow onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default ContactSubscribeNow;
