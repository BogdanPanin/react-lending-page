import React from "react";
import "./footer.scss";

function FooterMenuItem(i) {
  return (
    <li className="footer__menu_li">
      <a href="#" className="footer__menu_a">
        <img src={i.src} className="footer__menu_img"></img>
      </a>
    </li>
  );
}

export default FooterMenuItem;
