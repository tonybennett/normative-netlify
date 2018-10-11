/* global window, document */
import React, { Component } from "react"; // eslint-disable-line
import classNames from "classnames";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import "../global/markdown-styles.css";
import "../global/app.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Splash from "../components/Splash";
import Tagline from "../components/Tagline";

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBurger: true,
      mounted: false,
      showMenu: false,
      scrollPosition: 0,
      dimPage: false
    };
  }

  componentDidMount() {
    // eslint-disable-next-line
    this.setState({
      mounted: true
    });
  }

  componentWillReceiveProps(nextProps) {
    const { showMenu } = this.state;

    if (showMenu) {
      this.toggleMenu(false);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.showMenu && prevState.showMenu) {
      window.scrollTo(0, prevState.scrollPosition);
    }
  }

  toggleMenu = (restorePosition = true) => {
    const showMenu = !this.state.showMenu;
    const doc = document.documentElement;
    const scrollPosition = !restorePosition
      ? 0
      : (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    const newState = {
      showMenu
    };

    if (showMenu) {
      newState.scrollPosition = scrollPosition;
    }

    this.setState(newState);
  };

  toggleBurger = showBurger => {
    this.setState({
      showBurger
    });
  };

  toggleDimming = dimPage => {
    this.setState({
      dimPage
    });
  };

  render() {
    const { children, includeFooter } = this.props;
    const { mounted, showMenu, dimPage } = this.state;

    const isHome = false;
    const isContent = true;

    return (
      <div
        className={classNames(
          "normative",
          "inspiren",
          isHome ? "is-home" : "not-home",
          mounted ? "is-mounted" : "not-mounted",
          this.state.showBurger ? "show-burger" : "hide-burger",
          "not-loading",
          {
            "lock-scrolling": isHome || showMenu,
            "show-menu": showMenu,
            "dim-page": dimPage
          }
        )}
      >
        {children}
        {includeFooter && (
          <Splash isHome={isHome}>
            <Footer
              isHome={isHome}
              toggleBurger={this.toggleBurger}
              toggleDimming={this.toggleDimming}
            />
          </Splash>
        )}
        <Tagline />
        <Header toggleMenu={this.toggleMenu} />
      </div>
    );
  }
}

Template.defaultProps = {
  includeFooter: false
};

export default Template;
