import { withPrefix } from 'gatsby';
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
import ticketImg from 'assets/images/webuild-day/ticket.svg';
import SEO from 'components/seo';

const WebuildDay = () => (
  <DefaultLayout headerVariant="primary">
    <SEO
      title="WeBuild Day 2020"
      description="WeBuild Day is a post-COVID-19 initiative to restore the activities among the developer community in Vietnam."
      keywords={[
        'WeBuild',
        'WeBuild Day 2020',
        'commutity',
        'connect',
        'developer',
        'Vietnam'
      ]}
      ogImagePath={withPrefix(`/img/webuild-day-og.png`)}
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
        <img src={ticketImg} alt="ticket" />
      </a>
    </div>
  </DefaultLayout>
);

export default WebuildDay;
