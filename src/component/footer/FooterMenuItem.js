import React from "react";
import "./footer.scss";
import pinterest from "../../img/pinterest.png";
import facebook from "../../img/facebook.png";
import twitter from "../../img/twiter.png";
import instagram from "../../img/instagram.png";

function FooterMenuItem(props, src) {
  return (
    <div>
      <li className="footer__menu_li">
        <a href="https://www.pinterest.com/" className="footer__menu_a">
          <img src={pinterest} alt="" className="footer__menu_img"></img>
        </a>
      </li>
      <li className="footer__menu_li">
        <a href="https://www.facebook.com/" className="footer__menu_a">
          <img src={facebook} alt="" className="footer__menu_img"></img>
        </a>
      </li>
      <li className="footer__menu_li">
        <a href="https://twitter.com/" className="footer__menu_a">
          <img src={twitter} alt="" className="footer__menu_img"></img>
        </a>
      </li>
      <li className="footer__menu_li">
        <a
          href="https://www.instagram.com/ateist_01/"
          className="footer__menu_a"
        >
          <img src={instagram} alt="" className="footer__menu_img"></img>
        </a>
      </li>
    </div>
  );
}

export default FooterMenuItem;
