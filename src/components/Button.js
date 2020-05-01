import React from 'react'

const Button = ({ children, ...rest }) => (
  <button
    {...rest}
    className="bg-teal-darker hover:bg-teal-darkest text-white rounded px-4 py-2"
  >
    {children}
  </button>
)

export default Button
