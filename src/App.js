import React from "react";
import SectionHome from "./component/section/SectionHome";
import SectionPortfolio from "./component/section/SectionPortfolio";
import SectionAbout from "./component/section/SectionAbout";
import SectionBook from "./component/section/SectionBook";
import SectionContact from "./component/section/SectionContact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./component/header/header.scss";
import "./component/mediaHeader.scss";
import Logo from "./component/header/Logo";
import DropRight from "./component/header/DropRight";
import book1 from "./img/book1.png";
import book2 from "./img/book2.png";
import book3 from "./img/book3.png";
import Footer from "./component/footer/Footer";

function App() {
  const itemBook = [
    {
      id: 1,
      src: { book1 },
    },
    {
      id: 2,
      src: { book2 },
    },
    {
      id: 3,
      src: { book3 },
    },
  ];

  return (
    <Router>
      <div>
        <header className="header">
          <DropRight />
          <div className="header__content">
            <div className="header__div">
              <Logo />
            </div>
            <div className="header__menu">
              <nav className="header__menu_nav">
                <ul className="header__menu_ul">
                  <li className="header__menu_li">
                    <Link to="/react-lending-page/" className="header__menu_a">
                      <div className="header__menu_div">
                        <p className="header__menu_p active">Home</p>
                      </div>
                    </Link>
                  </li>
                  <li className="header__menu_li">
                    <Link
                      to="/react-lending-page/portfolio"
                      className="header__menu_a"
                    >
                      <div className="header__menu_div">
                        <p className="header__menu_p">Portfolio</p>
                      </div>
                    </Link>
                  </li>
                  <li className="header__menu_li">
                    <Link
                      to="/react-lending-page/about"
                      className="header__menu_a"
                    >
                      <div className="header__menu_div">
                        <p className="header__menu_p">About</p>
                      </div>
                    </Link>
                  </li>
                  <li className="header__menu_li">
                    <Link
                      to="/react-lending-page/book"
                      className="header__menu_a"
                    >
                      <div className="header__menu_div">
                        <p className="header__menu_p">Book</p>
                      </div>
                    </Link>
                  </li>
                  <li className="header__menu_li">
                    <Link
                      to="/react-lending-page/contact"
                      className="header__menu_a"
                    >
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
        <Route exact path="/react-lending-page/">
          <SectionHome />
        </Route>
        <Route path="/react-lending-page/portfolio">
          <SectionPortfolio />
        </Route>
        <Route path="/react-lending-page/about">
          <SectionAbout />
        </Route>
        <Route path="/react-lending-page/book">
          <SectionBook book={itemBook} />
        </Route>
        <Route path="/react-lending-page/contact">
          <SectionContact />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
