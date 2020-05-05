import React from 'react'

const Button = ({ children, ...rest }) => (
  <button
    {...rest}
    className="bg-green-darker hover:bg-green-darkest text-white rounded px-4 py-2"
  >
    {children}
  </button>
)

export default Button
