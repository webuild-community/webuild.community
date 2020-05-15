import React from 'react';
import classnames from 'classnames';

export const H3 = ({ className, children }) => {
  return (
    <h3
      className={classnames(
        'text-30px font-extrabold text-black leading-tight',
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
    <h6 className={classnames('text-lg font-bold text-black', className)}>
      {children}
    </h6>
  );
};
