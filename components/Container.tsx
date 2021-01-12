import React from 'react';
import classnames from 'classnames';

interface Props {
  className?: string;
  children?: any;
}

const Container = ({ className, children }: Props) => {
  return (
    <div
      className={classnames(className, 'px-5 sm:px-6 max-w-container mx-auto')}
    >
      {children}
    </div>
  );
};

export default Container;
