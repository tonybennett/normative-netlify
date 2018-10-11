import React from "react";
import Link from "gatsby-link";

import FooterBody from "./FooterBody";
import Navigation from "./Navigation";

import "./Header.scss";

function Header(props) {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__top">
          <div className="header__burger">
            <div className="header__burger__icon robots-nocontent">
              <button onClick={props.toggleMenu}>
                <span className="line1" />
                <span className="line2" />
                Menu
              </button>
            </div>
          </div>
          <Link className="header__logo" activeClassName="active" to={"/"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 20">
              {/* eslint-disable max-len */}
              <path d="M11.4 19.7l-7-10.8v10.8H0V1.2h4.3l7 10.8V1.2h4.4v18.5h-4.3zm19.1-6c0 3.6-2.4 6.3-6.7 6.3s-6.7-2.7-6.7-6.3v-1.8c0-3.6 2.4-6.3 6.7-6.3s6.7 2.7 6.7 6.3v1.8zM23.8 9c-1.7 0-2.4 1.2-2.4 2.6v2.3c0 1.4.7 2.6 2.4 2.6s2.4-1.2 2.4-2.6v-2.3c0-1.4-.7-2.6-2.4-2.6zM40 10.1h-.6c-2.1 0-3.2.8-3.2 3.3v6.3h-4.4V5.8H36v2.4c.4-2.1 1.8-2.5 3.8-2.5h.2v4.4zm14.6 1.4v8.2h-4.4v-8.2c0-1.3-.6-2.1-1.9-2.1-1.1 0-2 .6-2 2.1v8.2h-4.4V5.8H46v1.6c.5-1.2 2-1.9 3.7-1.9 1.9 0 3.2.7 4 1.9 1-1.2 2.3-2 4.4-2 3.2 0 4.9 2 4.9 5.2v8.9h-4.4v-8.2c0-1.3-.6-2.1-1.9-2.1-1.2.2-2.1.8-2.1 2.3zm19 8.2v-1.2c-.8.9-2.3 1.5-4.1 1.5-3.2 0-5.1-1.8-5.1-4.4 0-2.9 2.1-4.3 5.4-4.3 1.7 0 2.9.5 3.6 1v-1.6c0-1-.7-1.8-1.9-1.8-.9 0-1.6.3-2 1h-4c.6-2.8 2.9-4.4 6.2-4.4 3.9 0 6.2 2.1 6.2 5.5v8.6l-4.3.1zm-.2-4.1c0-.9-1-1.6-2.4-1.6-1.5 0-2.5.5-2.5 1.6s1 1.6 2.4 1.6 2.5-.7 2.5-1.6zM85.1 2.1v3.7h2.7v3.4h-2.7v5.9c0 .6.3.9 1 .9h1.5v3.6h-2.9c-2.6 0-4-1.6-4-4.1V9.3h-1.8V5.8h1.8V2.1h4.4zM91.8 0c1.5 0 2.5.9 2.5 2.3s-1 2.3-2.5 2.3-2.5-.9-2.5-2.3S90.4 0 91.8 0zm-2.2 19.7V5.8H94v13.8l-4.4.1zm10.3 0L95.2 5.8h4.4l2.5 9.3 2.5-9.3h4.4l-4.7 13.8-4.4.1zm13.2-5.5v.3c0 1.4.8 2.4 2.4 2.4 1.2 0 2-.6 2.2-1.3h3.9c-.5 2.6-3 4.4-6.2 4.4-4 0-6.7-2.3-6.7-6.3V12c0-3.9 2.3-6.5 6.6-6.5 4.2 0 6.3 2.8 6.3 6.1v2.5l-8.5.1zm0-2.6h4.5v-.5c0-1.4-.7-2.4-2.2-2.4-1.6 0-2.3 1-2.3 2.6v.3z" />
              {/* eslint-enable max-len */}
            </svg>
          </Link>
        </div>
        <nav className="header__navigation">
          <Navigation />
        </nav>
      </div>
      <FooterBody />
      {/* eslint-disable jsx-a11y/no-static-element-interactions */}
      <span className="header__mask" onClick={props.toggleMenu} />
    </header>
  );
}

export default Header;
