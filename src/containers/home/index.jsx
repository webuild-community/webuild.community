import React from 'react';
import DefaultLayout from 'components/DefaultLayout';
import SEO from 'components/SEO';
import HeroBanner from './HeroBanner';
import WhatWeDo from './WhatWeDo';
import Jobs from './Jobs';
import Community from './Community';
import Supporters from './Supporters';

const Home = () => (
  <DefaultLayout>
    <SEO keywords={[`WeBuild`]} title="Home" />
    <HeroBanner />
    <WhatWeDo />
    <Jobs />
    <Community />
    <Supporters />
  </DefaultLayout>
);

export default Home;
