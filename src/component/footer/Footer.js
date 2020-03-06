import React from "react";
import "./footer.scss";
import FooterMenu from "./FooterMenu";
import FooterText from "./FooterText";
import "../mediaFooter.scss";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let winda = window.innerWidth;
    let maxWinda = 1002;
    const result = winda > maxWinda ? this.props.style : this.props.styleMedia;
    return (
      <footer className="footer" style={result}>
        <div className="footer__div">
          <div className="footer__grid">
            <FooterMenu />
            <FooterText />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
