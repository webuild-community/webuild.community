import React from 'react';
import './agenda.css';

const Agenda = () => {
  return (
    <div className="agenda mt-12 text-xs sm:text-base">
      <ol>
        <li>
          <span>Agenda</span>
        </li>
        <li>
          <span>Full-day keynote speakers (8 topics)</span>
        </li>
        <li>
          <span>Technical Workshops</span>
        </li>
        <li>
          <span>Fun games for developers</span>
        </li>
      </ol>
    </div>
  );
};

export default Agenda;
