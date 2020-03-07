import React from "react";
import "./formSubcribe.scss";
import FormInput from "./FormInput";
import Paragraf from "./Paragraf";
import FormButton from "./FormButton";
import { reduxForm, Field } from "redux-form";
import { requiredField, email } from "../../utils/validators/validators";

function FormSubcribe(props) {
  return (
    <form className="form media" onSubmit={props.handleSubmit}>
      <div className="form__gridContainer media">
        <div className="form__p media">
          <Paragraf title="Stay Up-To-Date with New Posts" />
        </div>
        <div className="form-email media">
          <Field
            title="Enter your email here"
            type="email"
            placeholder="Email"
            name="email"
            required
            maxheight="250"
            component={FormInput}
            validate={[requiredField, email]}
          />
        </div>
        <div className="form-submiting media">
          <FormButton title="Subscribe Now" />
        </div>
        <div className="form__completed media">
          <p className="form__completed__p media">
            <span className="form__completed__spaan media">
              Thanks for submitting!
            </span>
          </p>
        </div>
      </div>
    </form>
  );
}

const ReduxFormSubcribe = reduxForm({
  form: "subcribe"
})(FormSubcribe);

export default ReduxFormSubcribe;
