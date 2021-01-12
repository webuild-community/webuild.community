import React from 'react';
import DefaultLayout from 'components/DefaultLayout';
// import SEO from 'components/seo';
import HeroBanner from './HeroBanner';
import WhatWeDo from './WhatWeDo';
import Events from './Events';
import Jobs from './Jobs';
import Community from 'components/Community';
import Supporters from './Supporters';
import { BlogPostResponse } from 'apis/contentful';
import { Event } from 'apis/types/blog';

interface Props {
  events: Event[];
  news: BlogPostResponse;
}

const Home = ({ events, news }: Props) => (
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
