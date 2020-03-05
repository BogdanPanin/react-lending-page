import React, { Component } from "react";
import "../mediaHeader.scss";
import { Link } from "react-router-dom";
import Logo from "./Logo";

class DropRight extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
  }
  toggleState() {
    this.setState({ isOpened: !this.state.isOpened });
  }
  render() {
    const span = ["header__btn__span"];
    console.log(this.state.isOpened);
    let dropRihgt;
    if (this.state.isOpened) {
      span.push("active");
      dropRihgt = (
        <div className="header-media__drop-right">
          <div className="header-media__drop-right-bg"></div>
          <div className="header-media__drop-right__div">
            <div className="header-media__drop-right__div-bg__div">
              <div
                className="header-media__drop-right__div-bg"
                onClick={this.toggleState.bind(this)}
              >
                <div className="header-media__drop-right__div-bg__block"></div>
              </div>
            </div>
            <div className="header-media__drop-right__block">
              <div className="header-media__drop-right__block_margin">
                <div className="header-media__drop-right__gridWrapper">
                  <div className="header-media__drop-right__gridContainer">
                    <nav className="header-media__drop-right__nav">
                      <ul className="header-media__drop-right__ul">
                        <li className="header-media__drop-right__li">
                          <div className="header-media__drop-right__itemWrapper">
                            <span className="header-media__drop-right__labelWrapper">
                              <Link
                                to="/"
                                className="header-media__drop-right__a active"
                              >
                                Home
                              </Link>
                            </span>
                          </div>
                        </li>
                        <li className="header-media__drop-right__li">
                          <div className="header-media__drop-right__itemWrapper">
                            <span className="header-media__drop-right__labelWrapper">
                              <Link
                                to="/portfolio"
                                className="header-media__drop-right__a"
                              >
                                Portfolio
                              </Link>
                            </span>
                          </div>
                        </li>
                        <li className="header-media__drop-right__li">
                          <div className="header-media__drop-right__itemWrapper">
                            <span className="header-media__drop-right__labelWrapper">
                              <Link
                                to="/about"
                                className="header-media__drop-right__a"
                              >
                                About
                              </Link>
                            </span>
                          </div>
                        </li>
                        <li className="header-media__drop-right__li">
                          <div className="header-media__drop-right__itemWrapper">
                            <span className="header-media__drop-right__labelWrapper">
                              <Link
                                to="/book"
                                className="header-media__drop-right__a"
                              >
                                Books
                              </Link>
                            </span>
                          </div>
                        </li>
                        <li className="header-media__drop-right__li">
                          <div className="header-media__drop-right__itemWrapper">
                            <span className="header-media__drop-right__labelWrapper">
                              <Link
                                to="/contact"
                                className="header-media__drop-right__a"
                              >
                                Contact
                              </Link>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="header__content-media">
        <div className="header-media__menu">
          {dropRihgt}
          <div className="header-media__wrapper">
            <div className="header-media__wrapper-content">
              <div className="header-media__wrapper-content__div">
                <Logo />
              </div>
              <div className="header-media__wrapper-content__div__button">
                <div
                  className="header__btn__div"
                  onClick={this.toggleState.bind(this)}
                >
                  <div className="header__btn">
                    <span className={span.join(" ")}></span>
                    <span className={span.join(" ")}></span>
                    <span className={span.join(" ")}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DropRight;
