import React from 'react';
import DefaultLayout from 'components/DefaultLayout';
import SEO from 'components/seo';
import HeroBanner from './HeroBanner';
import WhatWeDo from './WhatWeDo';
import Events from './Events';
import Jobs from './Jobs';
import Sponsors from 'components/Sponsors';
import Community from 'components/Community';
import CTASupport from 'components/CTASupport';

const Home = () => (
  <DefaultLayout>
    <SEO />
    <HeroBanner />
    <WhatWeDo />
    <Events />
    <Jobs />
    <div className="bg-white border-t border-gray-200 pb-px">
      <Sponsors />
      <Community />
      <CTASupport />
    </div>
  </DefaultLayout>
);

export default Home;
