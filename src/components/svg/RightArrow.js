import React from 'react';

const SvgComponent = props => (
  <svg width={60} height={120} {...props} viewBox="0 0 60 120">
    <title>Right Arrow</title>
    <g fill="#1D1D1D" fillRule="nonzero" opacity={0.1}>
      <path d="M0 119l60-48.626V46L0 94.626zM45 34.413L29.88 46 0 23.174V0z" />
    </g>
  </svg>
);

export default SvgComponent;
