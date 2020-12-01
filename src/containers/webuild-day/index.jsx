import React from 'react';
import DefaultLayout from 'components/DefaultLayout';
import HeroBanner from './HeroBanner';
import Goals from './Goals';
import TheProgram from './TheProgram';
import Sponsors from './Sponsors';

const WebuildDay = () => (
  <DefaultLayout>
    <HeroBanner />
    <Goals />
    <TheProgram />
    <Sponsors />
  </DefaultLayout>
);

export default WebuildDay;
