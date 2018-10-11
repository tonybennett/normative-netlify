/* eslint-disable react/no-danger */

import React from "react";
import MediaQuery from "react-responsive";

import "./ImageResponsive.scss";

function ImageResponsive(props) {
  function defaultImage() {
    return {
      __html:
        "<img src=" + props.imageMd + ' width="1366" alt=' + props.alt + ">"
    };
  }

  return (
    <div className={`image-responsive ${props.ratio}`}>
      <MediaQuery maxWidth={process.env.GATSBY_smMax}>
        <img src={props.imageSm} width="768" height="432" alt={props.alt} />
      </MediaQuery>
      <MediaQuery
        minWidth={process.env.GATSBY_md}
        maxWidth={process.env.GATSBY_lgMax}
      >
        <img src={props.imageMd} width="1366" height="768" alt={props.alt} />
      </MediaQuery>
      <MediaQuery minWidth={process.env.GATSBY_xl}>
        <img src={props.imageLg} width="2000" height="1125" alt={props.alt} />
      </MediaQuery>
      <noscript dangerouslySetInnerHTML={defaultImage()} />
    </div>
  );
}

ImageResponsive.defaultProps = {
  ratio: "16x9",
  imageSm: false,
  imageMd: false,
  imageLg: false
};

export default ImageResponsive;
