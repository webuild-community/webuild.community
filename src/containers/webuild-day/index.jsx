import React from 'react';
import DefaultLayout from 'components/DefaultLayout';
import HeroBanner from './HeroBanner';
import Goals from './Goals';
import TheProgram from './TheProgram';
import Schedule from './Schedule';
import Sponsors from './Sponsors';
import CTASupport from './CTASupport';

const WebuildDay = () => (
  <DefaultLayout headerVariant="primary">
    <HeroBanner />
    <Goals />
    <TheProgram />
    <Schedule />
    <Sponsors />
    <CTASupport />
  </DefaultLayout>
);

export default WebuildDay;
