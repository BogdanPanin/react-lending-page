import React from "react";
import FooterMenuItem from "./FooterMenuItem";
import PropTypes from "prop-types";
import "./footer.scss";

function FooterMenu(props) {
  return (
    <div className="footer__menu_div">
      <ul className="footer__menu_ul">
        {props.itemImg.map(img => {
          return <FooterMenuItem src={img.src} key={img.id} Href={img.Href} />;
        })}
      </ul>
    </div>
  );
}

FooterMenu.propTypes = {
  itemImg: PropTypes.array.isRequired
};
export default FooterMenu;
