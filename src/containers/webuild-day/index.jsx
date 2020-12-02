import React from 'react';
import DefaultLayout from 'components/DefaultLayout';
import HeroBanner from './HeroBanner';
import Goals from './Goals';
import TheProgram from './TheProgram';
import Schedule from './Schedule';
import Sponsors from './Sponsors';
import CTASupport from './CTASupport';
import ticketImg from 'assets/images/webuild-day/ticket.svg';

const WebuildDay = () => (
  <DefaultLayout headerVariant="primary">
    <HeroBanner />
    <Goals />
    <TheProgram />
    <Schedule />
    <Sponsors />
    <CTASupport />
    <div
      className="fixed bottom-0 right-0 z-50"
      style={{ bottom: '5%', right: '5%' }}
    >
      <a
        className="cursor-pointer focus:outline-none"
        href="https://ticketbox.vn/event/webuild-day-121220-81060"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={ticketImg} alt="ticket" />
      </a>
    </div>
  </DefaultLayout>
);

export default WebuildDay;
