import React from "react";
import "./footer.scss";
import FooterMenu from "./FooterMenu";
import FooterText from "./FooterText";

function Footer() {
  const itemImg = [
    {
      id: 1,
      src: "../../../public/picture.webp"
    },
    {
      id: 2,
      src: "../../../public/facebook.webp"
    },
    {
      id: 3,
      src: "../../../public/twitter.webp"
    },
    {
      id: 4,
      src: "../../../public/instagram.webp"
    }
  ];
  return (
    <footer className="footer">
      <div className="footer__div">
        <FooterMenu itemImg={itemImg} />
        <FooterText />
      </div>
    </footer>
  );
}

export default Footer;
