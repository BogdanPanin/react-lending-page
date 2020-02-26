import React from "react";
import "./contact.scss";

function ContactImg(props) {
  return (
    <div className="contact-img">
      <div className="contact-img__div">
        <img className="contact-img__img" src={props.Src} alt=""></img>
      </div>
    </div>
  );
}

export default ContactImg;
