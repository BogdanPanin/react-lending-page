import React from "react";
import "./form.scss";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import FormButton from "./FormButton";
import FormCompleted from "./FormCompleted";
import { reduxForm, Field } from "redux-form";
import { requiredField, email } from "../../utils/validators/validators";

function FormMessage(props) {
  return (
    <form className="form media" onSubmit={props.handleSubmit}>
      <div className="form-name media">
        <Field
          title="Enter Your Name"
          type="text"
          placeholder="Name"
          name="name"
          required
          maxheight="100"
          component={FormInput}
          validate={[requiredField]}
        />
      </div>
      <div className="form-emails media">
        <Field
          title="Enter Your Email"
          type="email"
          placeholder="Email"
          name="email"
          required
          maxheight="250"
          component={FormInput}
          validate={[requiredField, email]}
        />
      </div>
      <div className="form-subject media">
        <Field
          title="Enter Your Subject"
          type="text"
          placeholder="Subject"
          name="subject"
          required
          component={FormInput}
          validate={[requiredField]}
        />
      </div>
      <div className="form-message media">
        <Field
          title="Enter Your Message Here"
          placeholder="Message"
          component={FormTextArea}
          name="message"
          validate={[requiredField]}
        />
      </div>
      <div className="form-submit media">
        <FormButton title="Submit" />
      </div>
      <div className="form-completed media">
        <FormCompleted title="Thanks for submitting!" />
      </div>
    </form>
  );
}

const ReduxFormMessage = reduxForm({
  form: "message"
})(FormMessage);

export default ReduxFormMessage;
