import React from "react";
import FooterMenuItem from "./FooterMenuItem";
import "./footer.scss";

function FooterMenu(props) {
  return (
    <div className="footer__menu_div">
      <ul className="footer__menu_ul">
        {props.itemImg.map(i => {
          return <FooterMenuItem i={i} key={i.id} />;
        })}
      </ul>
    </div>
  );
}

export default FooterMenu;
