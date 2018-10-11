/* global window */

import React, { Component } from "react";
import Link from "gatsby-link";
import Waypoint from "react-waypoint";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Navigation from "./Navigation";
import FooterBody from "./FooterBody";

import "./Footer.scss";
import Logo from "../assets/images/normative.svg";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialized: false,
      width: process.env.GATSBY_md
    };
  }

  componentDidMount() {
    this.updateWidth();

    window.addEventListener("resize", this.updateWidth);
  }

  componentDidUpdate() {
    if (this.state.initialized) {
      window.removeEventListener("resize", this.updateWidth);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  updateWidth = () => {
    if (!this.state.initialized) {
      this.setState({
        width: window.innerWidth
      });
    }
  };

  handleWaypointTopEnter = () => {
    const { isHome } = this.props;

    if (!isHome) {
      if (this.state.width >= process.env.GATSBY_md) {
        this.setState({
          initialized: true
        });
      }

      this.props.toggleBurger(false);
    }
  };

  handleWaypointTopLeave = () => {
    this.props.toggleBurger(true);
  };

  handleWaypointBottomEnter = () => {
    this.props.toggleDimming(true);
  };

  handleWaypointBottomLeave = () => {
    this.props.toggleDimming(false);
  };

  render() {
    const { isHome } = this.props;
    const { width } = this.state;

    let logo = null;
    let nav = null;

    if (
      !isHome &&
      (this.state.initialized || width < process.env.GATSBY_smMax)
    ) {
      logo = (
        <Link className="footer__logo" to={"/"}>
          <img src={Logo} alt="Normative" width={138} height={23} />
        </Link>
      );

      nav = (
        <nav className="footer__navigation">
          <Navigation />
        </nav>
      );
    }

    return (
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__top">
            <ReactCSSTransitionGroup
              transitionAppearTimeout={2000}
              transitionLeaveTimeout={2000}
              transitionEnterTimeout={2000}
              transitionName="footer-logo"
            >
              <div className="footer__burger__placeholder" />
              {logo}
            </ReactCSSTransitionGroup>
          </div>
          <ReactCSSTransitionGroup
            transitionAppearTimeout={2000}
            transitionLeaveTimeout={2000}
            transitionEnterTimeout={2000}
            transitionName="footer-nav"
          >
            {nav}
          </ReactCSSTransitionGroup>
          <span className="footer__waypoint-top">
            <Waypoint
              onEnter={() => this.handleWaypointTopEnter(this.props)}
              onLeave={() => this.handleWaypointTopLeave(this.props)}
            />
          </span>
          <span className="footer__waypoint-bottom">
            <Waypoint
              onEnter={() => this.handleWaypointBottomEnter(this.props)}
              onLeave={() => this.handleWaypointBottomLeave(this.props)}
            />
          </span>
        </div>
        <FooterBody />
      </footer>
    );
  }
}

export default Footer;
