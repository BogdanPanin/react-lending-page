import React from "react";
import "./formSubcribe.scss";
import FormInput from "./FormInput";
import Paragraf from "./Paragraf";
import FormButton from "./FormButton";
import FormCompleted from "./FormCompleted";
import { reduxForm, Field } from "redux-form";
import { requiredField, email } from "../../utils/validators/validators";

function FormSubcribe(props) {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <div className="form__gridContainer">
        <div className="form__p">
          <Paragraf title="Stay Up-To-Date with New Posts" />
        </div>
        <div className="form-email">
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
        <div className="form-submiting">
          <FormButton title="Subscribe Now" />
        </div>
        <div className="form__completed">
          <p className="form__completed__p">
            <span className="form__completed__spaan">
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
