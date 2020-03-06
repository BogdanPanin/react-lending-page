import React from "react";
import "./section-header.scss";
import "../base.scss";

function SectionHeader(props) {
  return (
    <section className="section-header">
      <div className="section-header__block">
        <div className="section-header__div">
          <div className="section-header__gridContainer">
            <div className="section-header__margin">
              <h1 className="section-header__h1">
                <span className="section-header__span">{props.title}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHeader;
