import React from 'react'

const SvgComponent = props => (
  <svg width={173} height={47} {...props}>
    <title>Logo</title>
    <g fill="none" fillRule="evenodd">
      <text
        fontFamily="AvenirNext-Bold, Avenir Next"
        fontSize={18}
        fontWeight="bold"
        fill="#1D1D1D"
      >
        <tspan x={54.9} y={20}>
          WEBUILD
        </tspan>
        <tspan x={54.9} y={40.7}>
          COMMUNITY
        </tspan>
      </text>
      <path
        d="M40.596.55c0-.298-.25-.55-.546-.55H.546A.555.555 0 0 0 0 .55v39.79c0 .297.25.55.546.55h29.38l10.056 5.837c.273.183.637 0 .637-.32L40.596.549zM2.956 2.975H37.64V37.89H2.957V2.976z"
        fill="#1D1D1D"
        fillRule="nonzero"
      />
      <g fillRule="nonzero">
        <path fill="#1D1D1D" d="M18.323 31.72l-11.54-9.16v-4.592l11.54 9.16z" />
        <path fill="#000" d="M6.807 17.99l-.023.024v4.591l2.919-2.319z" />
        <path
          fill="#1D1D1D"
          d="M9.703 15.695l2.896 2.296 5.724-4.523V8.876zM22.806 31.72l11.563-9.16v-4.592l-11.563 9.16z"
        />
        <g>
          <path fill="#000" d="M34.323 17.99l.046.024v4.591l-2.943-2.319z" />
          <path
            fill="#1D1D1D"
            d="M31.426 15.695L28.53 17.99l-5.724-4.523V8.876z"
          />
        </g>
      </g>
    </g>
  </svg>
)

export default SvgComponent
