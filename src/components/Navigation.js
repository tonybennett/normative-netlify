import React from "react";
import Link from "gatsby-link";

function Navigation(props) {
  return (
    <nav
      className="navigation"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      <ul>
        <li>
          <Link
            className="what-we-do"
            to={"/what-we-do"}
            activeClassName="active"
          >
            What we do
          </Link>
        </li>
        <li>
          <Link className="about-us" to={"/about-us"} activeClassName="active">
            About us
          </Link>
        </li>
        <li>
          <Link className="careers" to={"/careers"} activeClassName="active">
            Careers
          </Link>
        </li>
        <li>
          <a className="news" href="https://ratsnest.io">
            News & Views
          </a>
        </li>
        <li>
          <Link
            className="contact-us"
            to={"/contact-us/"}
            activeClassName="active"
          >
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
