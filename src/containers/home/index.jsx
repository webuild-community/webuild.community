import React from 'react';
import DefaultLayout from 'components/DefaultLayout';
import SEO from 'components/seo';
import HeroBanner from './HeroBanner';
import WhatWeDo from './WhatWeDo';
import Events from './Events';
import Jobs from './Jobs';
import Supporters from './Supporters';
import Community from './Community';

const Home = () => (
  <DefaultLayout>
    <SEO />
    <HeroBanner />
    <WhatWeDo />
    <Events />
    <Jobs />
    <div className="bg-white border-t border-gray-200 pb-px">
      <Supporters />
      <Community />
    </div>
  </DefaultLayout>
);

export default Home;
