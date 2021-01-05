import React from 'react';

const LeftSide = () => {
  return (
    <div className="w-full sm:w-1/3">
      <h3 className="text-30px font-extrabold text-foreground leading-tight">
        Details
      </h3>
      <div className="mt-8 text-base leading-tight">
        <div className="font-bold">Location</div>
        <p className="mt-1">Block 71 Saigon</p>
        <div className="font-bold mt-2">Date</div>
        <p className="mt-1">December 12th, 2020</p>
        <div className="font-bold mt-2">Time</div>
        <p className="mt-1">Morning Session: 9am - 12.30pm</p>
        <p className="mt-1">Evening Session: 2.30pm - 6pm</p>
      </div>
    </div>
  );
};

export default LeftSide;
