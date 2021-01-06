import React from 'react';
import DefaultLayout from 'components/DefaultLayout';
import HeroBanner from './HeroBanner';
import Goals from './Goals';
import TheProgram from './TheProgram';
import CTAJoin from './CTAJoin';
import Schedule from './Schedule';
import Sponsors from './Sponsors';
import Community from 'components/Community';
import CTASupport from 'components/CTASupport';
import { ReactComponent as TicketImg } from '../../assets/svg/ticket.svg';
import { NextSeo } from 'next-seo';

const WebuildDay = () => (
  <DefaultLayout headerVariant="primary">
    <NextSeo
      title="WeBuild Day 2020"
      openGraph={{
        title: 'WeBuild Day 2020',
        description:
          'WeBuild Day is a post-COVID-19 initiative to restore the activities among the developer community in Vietnam.',
        images: [
          {
            url: '/webuild-day-og.png',
            width: 1200,
            height: 630
          }
        ]
      }}
    />
    <HeroBanner />
    <Goals />
    <TheProgram />
    <Schedule />
    <CTAJoin />
    <Sponsors />
    <Community />
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
        <TicketImg />
      </a>
    </div>
  </DefaultLayout>
);

export default WebuildDay;
