import React from 'react';
import DefaultLayout from 'components/DefaultLayout';
// import SEO from 'components/seo';
import HeroBanner from './HeroBanner';
import WhatWeDo from './WhatWeDo';
import Events from './Events';
import Jobs from './Jobs';
import Community from 'components/Community';
import Supporters from './Supporters';

const Home = ({ events, news }) => (
  <DefaultLayout>
    {/* <SEO /> */}
    <HeroBanner news={news} />
    <WhatWeDo />
    <Events events={events} />
    <Jobs />
    <div className="bg-white border-t border-gray-200 pb-px">
      <Supporters />
      <Community />
    </div>
  </DefaultLayout>
);

export default Home;
