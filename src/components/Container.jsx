import React from 'react';
import classnames from 'classnames';

const Container = ({ className, children }) => {
  return (
    <div className={classnames(className, 'px-4 max-w-container mx-auto')}>
      {children}
    </div>
  );
};

export default Container;
