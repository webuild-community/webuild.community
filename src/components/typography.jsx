import React from 'react';
import classnames from 'classnames';

export const H3 = ({ className, children }) => {
  return (
    <h3
      className={classnames(
        'text-2xl sm:text-28px font-bold text-black leading-tight',
        className
      )}
    >
      {children}
    </h3>
  );
};

export const H5 = ({ className, children }) => {
  return (
    <h6 className={classnames('text-lg font-bold text-black', className)}>
      {children}
    </h6>
  );
};

export const H6 = ({ className, children }) => {
  return (
    <h6 className={classnames('text-base font-bold text-black', className)}>
      {children}
    </h6>
  );
};
