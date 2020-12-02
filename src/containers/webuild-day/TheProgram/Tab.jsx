import React from 'react';

export const Tab = ({ index, label, selected, onClick }) => {
  return (
    <button
      tabIndex={selected ? '0' : '-1'}
      key={`tab-${index}`}
      onClick={() => onClick(index)}
      className={`block mr-12 focus:outline-none ${
        selected ? 'border-b-2 font-bold border-white' : ''
      }`}
    >
      {label}
    </button>
  );
};

export const TabPanel = ({ selected, children }) => {
  return <div className={selected ? 'block' : 'hidden'}>{children}</div>;
};
