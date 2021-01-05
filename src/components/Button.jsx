import React from 'react';
import classnames from 'classnames';

const Button = ({
  children,
  className,
  bgClassName = 'bg-primary',
  textColorClassName = 'text-white',
  ...rest
}) => (
  <button
    {...rest}
    className={classnames(
      'text-base px-5 py-2 rounded-sm leading-none whitespace-nowrap font-medium',
      bgClassName,
      textColorClassName,
      className
    )}
  >
    {children}
  </button>
);

export default Button;
