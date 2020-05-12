import React from 'react';
import DefaultLayout from 'components/DefaultLayout';
import SEO from 'components/SEO';
import HeroBanner from './HeroBanner';
import WhatWeDo from './WhatWeDo';
import Jobs from './Jobs';
import Community from './Community';
import Supporters from './Supporters';
import Events from './Events';

const Home = () => (
  <DefaultLayout>
    <SEO keywords={[`WeBuild`]} title="Home" />
    <HeroBanner />
    <WhatWeDo />
    <Events />
    <Jobs />
    <Supporters />
    <Community />
  </DefaultLayout>
);

export default Home;
