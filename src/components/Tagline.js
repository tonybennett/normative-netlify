import React from "react";

import "./Tagline.scss";

function Tagline(props) {
  return (
    <div className="tagline">
      <h1 className="tagline__headling">{process.env.GATSBY_tagline}.</h1>
      <p className="tagline__description">
        Being an innovation leader means having to make difficult decisions
        every day with imperfect information. You imagine new possibilities, but
        they are obscured by the complexity of a world that never stops moving.
      </p>
    </div>
  );
}

export default Tagline;
