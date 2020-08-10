import React from "react";
import "./contact.scss";
import "./section.scss";
import "../mediaContact.scss";
import ContactImg from "./ContactImg";
import ContactContent from "./ContactContent";
import contactImeg from "../../img/contact.png";

class SectionContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const bGColor = { backgroundColor: "#f0f3f6" };
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
                    <ContactImg src={contactImeg} />
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
      </div>
    );
  }
}
export default SectionContact;
