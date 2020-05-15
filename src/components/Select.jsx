import React from 'react';
import classnames from 'classnames';
import DownArrow from 'assets/svg/down-arrow.svg';

const CustomSelect = ({
  options,
  onChange,
  value,
  name,
  className,
  ...rest
}) => (
  <div
    {...rest}
    className={classnames(
      'relative flex items-center justify-between',
      className
    )}
  >
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="appearance-none bg-transparent pr-8 outline-none inline-block font-medium"
    >
      {options.map(({ text, value }) => (
        <option key={value} value={value} className="truncate">
          {text}
        </option>
      ))}
    </select>
    <div className="pointer-events-none h-full absolute inset-y right-0 flex items-center">
      <DownArrow />
    </div>
  </div>
);

export default CustomSelect;
