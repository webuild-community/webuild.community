import React from 'react';
import DownArrow from 'components/svg/DownArrow';

const CustomSelect = ({ options, onChange, value, name, ...rest }) => (
  <div {...rest} className="w-full relative flex items-center">
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full appearance-none bg-white pr-8"
    >
      {options.map(({ text, value }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
    <div className="pointer-events-none h-full absolute pin-y pin-r flex items-center">
      <DownArrow />
    </div>
  </div>
);

export default CustomSelect;
