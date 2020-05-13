import React from 'react';
import classnames from 'classnames';

const Button = ({ children, className, ...rest }) => (
  <button
    {...rest}
    className={classnames(
      'bg-primary text-base px-5 py-2 rounded-sm text-white leading-none whitespace-no-wrap',
      className
    )}
  >
    {children}
  </button>
);

export default Button;
