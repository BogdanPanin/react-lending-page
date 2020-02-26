import React from "react";
import "./footer.scss";
import FooterMenu from "./FooterMenu";
import FooterText from "./FooterText";
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer className="footer" style={props.style}>
      <div className="footer__div">
        <FooterMenu itemImg={props.itemImg} />
        <FooterText />
      </div>
    </footer>
  );
}

Footer.propTypes = {
  itemImg: PropTypes.array.isRequired
};
export default Footer;
