import React from "react";
import "./section.scss";
import "./contact.scss";
import "../mediaContact.scss";
import "../mediaAbout.scss";
import ContactImg from "./ContactImg";
import AboutContent from "./AboutContent";
import Footer from "../footer/Footer";
import aboutImeg from "../../img/about.png";

class SectionAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const bGColor = { backgroundColor: "#f0f3f6" };
    const style = { bottom: "-383px" };
    const styleMedia = { bottom: "-830px" };
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
        <Footer style={style} styleMedia={styleMedia} />
      </div>
    );
  }
}

export default SectionAbout;
