import React from "react";
import "./footer.scss";
import pinterest from "../../img/pinterest.png";
import facebook from "../../img/facebook.png";
import twitter from "../../img/twiter.png";
import instagram from "../../img/instagram.png";

function FooterMenuItem(props, src) {
  const itemImg = [
    {
      id: 1,
      Href: "https://www.pinterest.com/"
    },
    {
      id: 2,
      Href: "https://www.facebook.com/"
    },
    {
      id: 3,
      Href: "https://twitter.com/"
    },
    {
      id: 4,
      Href: "https://www.instagram.com/"
    }
  ];
  return (
    <div>
      <li className="footer__menu_li">
        <a href={itemImg.Href} className="footer__menu_a">
          <img src={pinterest} alt="" className="footer__menu_img"></img>
        </a>
      </li>
      <li className="footer__menu_li">
        <a href={itemImg.Href} className="footer__menu_a">
          <img src={facebook} alt="" className="footer__menu_img"></img>
        </a>
      </li>
      <li className="footer__menu_li">
        <a href={itemImg.Href} className="footer__menu_a">
          <img src={twitter} alt="" className="footer__menu_img"></img>
        </a>
      </li>
      <li className="footer__menu_li">
        <a href={twitter} className="footer__menu_a">
          <img src={instagram} alt="" className="footer__menu_img"></img>
        </a>
      </li>
    </div>
  );
}

export default FooterMenuItem;
