import React from "react";
import SectionHome from "./component/section/SectionHome";
import SectionPortfolio from "./component/section/SectionPortfolio";
import SectionAbout from "./component/section/SectionAbout";
import SectionBook from "./component/section/SectionBook";
import SectionContact from "./component/section/SectionContact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./component/header/header.scss";
import Logo from "./component/header/Logo";

function App() {
  const itemImg = [
    {
      id: 1,
      Href: "https://www.pinterest.com/",
      src:
        "https://static.wixstatic.com/media/8f6f59264a094af0b46e9f6c77dff83e.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01/8f6f59264a094af0b46e9f6c77dff83e.webp"
    },
    {
      id: 2,
      Href: "https://www.facebook.com/",
      src:
        "https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01/0fdef751204647a3bbd7eaa2827ed4f9.webp"
    },
    {
      id: 3,
      Href: "https://twitter.com/",
      src:
        "https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01/c7d035ba85f6486680c2facedecdcf4d.webp"
    },
    {
      id: 4,
      Href: "https://www.instagram.com/",
      src:
        "https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.webp"
    }
  ];
  return (
    <Router>
      <div>
        <header className="header">
          <div className="header__content">
            <Logo />
            <div className="header__menu">
              <nav className="header__menu_nav">
                <ul className="header__menu_ul">
                  <li className="header__menu_li">
                    <Link to="/" className="header__menu_a">
                      <div className="header__menu_div">
                        <p className="header__menu_p active">Home</p>
                      </div>
                    </Link>
                  </li>
                  <li className="header__menu_li">
                    <Link to="/portfolio" className="header__menu_a">
                      <div className="header__menu_div">
                        <p className="header__menu_p">Portfolio</p>
                      </div>
                    </Link>
                  </li>
                  <li className="header__menu_li">
                    <Link to="/about" className="header__menu_a">
                      <div className="header__menu_div">
                        <p className="header__menu_p">About</p>
                      </div>
                    </Link>
                  </li>
                  <li className="header__menu_li">
                    <Link to="/book" className="header__menu_a">
                      <div className="header__menu_div">
                        <p className="header__menu_p">Book</p>
                      </div>
                    </Link>
                  </li>
                  <li className="header__menu_li">
                    <Link to="/contact" className="header__menu_a">
                      <div className="header__menu_div">
                        <p className="header__menu_p">Contact</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <Route exact path="/">
          <SectionHome itemImg={itemImg} />
        </Route>
        <Route path="/portfolio">
          <SectionPortfolio itemImg={itemImg} />
        </Route>
        <Route path="/about">
          <SectionAbout itemImg={itemImg} />
        </Route>
        <Route path="/book">
          <SectionBook itemImg={itemImg} />
        </Route>
        <Route path="/contact">
          <SectionContact itemImg={itemImg} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
