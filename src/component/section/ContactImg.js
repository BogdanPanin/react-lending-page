import React from "react";
import "./contact.scss";

function ContactImg(props) {
  console.log(props);
  return (
    <div className="contact-img">
      <div className="contact-img__div">
        <img className="contact-img__img" src={props.src} alt=""></img>
      </div>
    </div>
  );
}

export default ContactImg;
