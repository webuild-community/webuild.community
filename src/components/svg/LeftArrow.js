import React from 'react'

const SvgComponent = props => (
  <svg width={60} height={120} {...props} viewBox="0 0 60 120">
    <title>Left Arrow</title>
    <g fill="#1D1D1D" fillRule="nonzero" opacity={0.1}>
      <path d="M60 120L0 70.708V46l60 49.292zM15 34.413L30.12 46 60 23.174V0z" />
    </g>
  </svg>
)

export default SvgComponent
