import React from "react";
import "./footer.scss";
import PropTypes from "prop-types";

function FooterMenuItem(src) {
  return (
    <li className="footer__menu_li">
      <a href={src.Href} className="footer__menu_a">
        <img src={src.src} alt="" className="footer__menu_img"></img>
      </a>
    </li>
  );
}
FooterMenuItem.propTypes = {
  src: PropTypes.string.isRequired
};

export default FooterMenuItem;
