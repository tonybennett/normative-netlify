/* eslint-disable no-underscore-dangle */

import React, { Component } from "react";
import Waypoint from "react-waypoint";
import MediaQuery from "react-responsive";

import VideoWebm1080vp9 from "../assets/videos/splash-1080-vp9.webm";
import VideoWebm1080vp8 from "../assets/videos/splash-1080-vp8.webm";
import VideoWebm720vp9 from "../assets/videos/splash-720-vp9.webm";
import VideoWebm720vp8 from "../assets/videos/splash-720-vp8.webm";
import VideoMp41080 from "../assets/videos/splash-1080.mp4";
import VideoMp4720 from "../assets/videos/splash-720.mp4";
import Poster from "../assets/images/splash.jpg";
import Poster720 from "../assets/images/splash-720.jpg";

import "./Splash.scss";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
  }

  componentDidMount() {
    const { isHome } = this.props;

    if (isHome) {
      this.playVideo();
    }

    // eslint-disable-next-line
    this.setState({
      mounted: true
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isHome && nextProps.isHome) {
      this.playVideo();
    } else if (this.props.isHome !== nextProps.isHome) {
      this.pauseVideo();
    }
  }

  handleWaypointEnter = () => {
    const { isHome } = this.props;
    const { mounted } = this.state;

    if (!isHome) {
      // Timeout workaround for react-waypoint issue, where it triggers before dom is mounted on short pages
      const timeout = mounted ? 0 : 1000;

      this.playVideo(timeout);
    }
  };

  handleWaypointLeave = waypoint => {
    const { isHome } = this.props;

    if (!isHome && waypoint.currentPosition === "below") {
      this.pauseVideo();
    }
  };

  playVideo = (timeout = 0) => {
    setTimeout(() => {
      this.video.play();
    }, timeout);
  };

  pauseVideo = (timeout = 0) => {
    setTimeout(() => {
      this.video.pause();
    }, timeout);
  };

  render() {
    const { isHome, children } = this.props;

    return (
      <div className="splash">
        <span className="splash__waypoint">
          <Waypoint
            onEnter={() => this.handleWaypointEnter(this.props)}
            onLeave={() => this.handleWaypointLeave(this.props)}
          />
        </span>
        <div className="splash-video">
          {/* eslint-disable max-len */}
          <MediaQuery maxWidth={process.env.GATSBY_mdMax}>
            <video
              key="splash-video"
              ref={c => (this.video = c)}
              preload="auto"
              autoPlay={isHome}
              poster={Poster720}
              loop
              muted
              playsInline
              role="presentation"
            >
              <source
                src={VideoWebm720vp9}
                type="video/webm; codecs=vp9,vorbis"
              />
              <source
                src={VideoWebm720vp8}
                type="video/webm; codecs=vp8,vorbis"
              />
              <source src={VideoMp4720} type="video/mp4" />
            </video>
          </MediaQuery>
          <MediaQuery
            minWidth={process.env.GATSBY_lg}
            values={{ width: process.env.GATSBY_lg }}
          >
            <video
              key="splash-video"
              ref={c => (this.video = c)}
              preload="auto"
              autoPlay={isHome}
              poster={Poster}
              loop
              muted
              playsInline
              role="presentation"
            >
              <source
                src={VideoWebm1080vp9}
                type="video/webm; codecs=vp9,vorbis"
              />
              <source
                src={VideoWebm1080vp8}
                type="video/webm; codecs=vp8,vorbis"
              />
              <source src={VideoMp41080} type="video/mp4" />
            </video>
          </MediaQuery>
          {/* eslint-enable max-len */}
        </div>
        {children}
      </div>
    );
  }
}

Splash.defaultProps = {
  isHome: true
};

export default Splash;
