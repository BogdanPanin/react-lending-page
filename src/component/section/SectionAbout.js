import React from "react";
import "./section.scss";
import "./contact.scss";
import ContactImg from "./ContactImg";
import AboutContent from "./AboutContent";
import Footer from "../footer/Footer";
import aboutImeg from "../../img/about.png";

function SectionAbout(props) {
  const bGColor = { backgroundColor: "#f0f3f6" };
  const style = { bottom: "-383px" };
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
                  <ContactImg src={aboutImeg} />
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
              <AboutContent />
            </div>
          </div>
        </div>
      </section>
      <Footer style={style} />
    </div>
  );
}

export default SectionAbout;
