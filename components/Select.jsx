import React from 'react';
import classnames from 'classnames';
import { ReactComponent as DownArrow } from '../assets/svg/down-arrow.svg';

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
    style={{ maxWidth: 150 }}
    className={classnames(
      'relative flex items-center justify-between w-full',
      className
    )}
  >
    <div className="pr-6 w-full">
      <span style={{ maxWidth: 135 }} className="truncate w-full block">
        {options.filter(o => o.value === value)[0].text}
      </span>
    </div>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="absolute inset-0 appearance-none bg-transparent pr-8 outline-none inline-block font-medium opacity-0 w-full"
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
