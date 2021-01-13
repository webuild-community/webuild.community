import React from 'react';

interface TabProps {
  index: number;
  label: string;
  selected: boolean;
  onClick: (v: number) => void;
}

interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  selected: boolean;
}

export const Tab = ({ index, label, selected, onClick }: TabProps) => {
  return (
    <button
      tabIndex={selected ? 0 : -1}
      key={`tab-${index}`}
      onClick={() => onClick(index)}
      className={`block mr-12 focus:outline-none ${
        selected ? 'border-b-2 font-bold border-white' : 'text-subprimary'
      }`}
    >
      {label}
    </button>
  );
};

export const TabPanel = ({ selected, children }: TabPanelProps) => {
  return <div className={selected ? 'block' : 'hidden'}>{children}</div>;
};
