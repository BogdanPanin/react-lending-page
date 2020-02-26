import React from "react";
import "./contact.scss";
import "./section.scss";
import H1 from "./H1";
import Paragraf from "./Paragraf";
import ContactFormBlock from "./ContactFormBlock";
import ContactSubscribeNow from "./ContactSubscribeNow";

function ContactContent(props) {
  return (
    <div className="contact-text">
      <div className="contact-text__header">
        <H1 title="GET IN TOUCH" />
      </div>
      <div className="contact-text__paragraf">
        <Paragraf title="I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you." />
      </div>
      <div className="contact-text__info">
        <Paragraf title="Tel: 123-456-7890  |  Email: info@mysite.com" />
      </div>
      <div className="contact-form__block">
        <ContactFormBlock />
      </div>
      <div className="contact-form__subscribe-now">
        <ContactSubscribeNow />
      </div>
    </div>
  );
}

export default ContactContent;
