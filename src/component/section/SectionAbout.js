import React from "react";
import "./section.scss";
import "./contact.scss";
import ContactImg from "./ContactImg";
import AboutContent from "./AboutContent";
import Footer from "../footer/Footer";

function SectionAbout(props) {
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
                  <ContactImg Src="https://static.wixstatic.com/media/f61af8_97627769e7bd41538ecbf417234e55d9~mv2_d_4912_7360_s_4_2.jpg/v1/fill/w_573,h_884,al_b,q_85,usm_0.66_1.00_0.01/f61af8_97627769e7bd41538ecbf417234e55d9~mv2_d_4912_7360_s_4_2.webp" />
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
      <Footer itemImg={props.itemImg} style={style} />
    </div>
  );
}

export default SectionAbout;
