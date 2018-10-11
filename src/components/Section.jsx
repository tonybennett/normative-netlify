import React from "react";
import classNames from "classnames";

import "./Section.scss";

function Section(props) {
  const { backgroundImage, children, color, fullScreen, image } = props;

  let sectionStyles = {};

  if (backgroundImage) {
    sectionStyles = Object.assign(sectionStyles, {
      backgroundImage: `url('${backgroundImage}')`
    });
  }

  return (
    <section
      className={classNames("section", "section--" + color, {
        "section--fullscreen": fullScreen
      })}
      style={sectionStyles}
    >
      {image && (
        <div className="section__photo">
          <img src={image} alt="Normative" width={1364} height={767} />
        </div>
      )}
      {!image && <div className="section__content">{children}</div>}
    </section>
  );
}

Section.defaultProps = {
  color: "transparent",
  fullScreen: false
};

export default Section;
