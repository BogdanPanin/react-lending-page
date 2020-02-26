import React from "react";
import "./contact.scss";
import "./section.scss";
import ContactImg from "./ContactImg";
import ContactContent from "./ContactContent";
import Footer from "../footer/Footer";

function SectionContact(props) {
  const bGColor = { backgroundColor: "#f0f3f6" };
  const style = { bottom: "-298px" };
  return (
    <div>
      <section className="section">
        <div className="section__div">
          <div className="contact__flex">
            <div className="contact">
              <div className="contact__block">
                <div className="contact-fonts">
                  <div className="contact-bg__div">
                    <div className="contact-bg__color"></div>
                  </div>
                  <ContactImg Src="https://static.wixstatic.com/media/f61af8_bed971a2eea0451d8a185669c2cbe5c7~mv2.jpg/v1/fill/w_571,h_1021,al_c,q_85,usm_0.66_1.00_0.01/f61af8_bed971a2eea0451d8a185669c2cbe5c7~mv2.webp" />
                </div>
              </div>
            </div>
            <div className="contact two">
              <div className="contact__block">
                <div className="contact-fonts">
                  <div className="contact-bg__div">
                    <div className="contact-bg__color" style={bGColor}></div>
                  </div>
                </div>
              </div>
              <ContactContent />
            </div>
          </div>
        </div>
      </section>
      <Footer itemImg={props.itemImg} style={style} />
    </div>
  );
}

export default SectionContact;
