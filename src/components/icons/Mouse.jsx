import React from "react";

const SvgComponent = () => (
  <svg width={42} height={75}>
    <g fillRule="nonzero" fill="none">
      <rect
        stroke="#FFF"
        strokeWidth={2}
        x={1}
        y={1}
        width={40}
        height={73}
        rx={20}
      />
      <circle fill="#FFF" cx={20.5} cy={18.5} r={3.5} />
    </g>
  </svg>
);

export default SvgComponent;
