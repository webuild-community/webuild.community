import React from 'react';
import WebuildDay from 'containers/webuild-day';
import { NextSeo } from 'next-seo';

function WebuildDayPage() {
  return (
    <>
      <NextSeo
        title="WeBuild Day 2020"
        description="WeBuild Day is a post-COVID-19 initiative to restore the activities among the developer community in Vietnam."
        openGraph={{
          title: 'WeBuild Day 2020',
          description:
            'WeBuild Day is a post-COVID-19 initiative to restore the activities among the developer community in Vietnam.',
          images: [
            {
              url: '/webuild-day-og.jpg',
              width: 1200,
              height: 630
            }
          ]
        }}
      />
      <WebuildDay />
    </>
  );
}

export default WebuildDayPage;
