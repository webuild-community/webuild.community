import React from 'react';
import Container from 'components/Container';
import { H3, H5 } from 'components/typography';

const items = [
  {
    img: 'slack',
    title: 'Slack Channel',
    desc:
      'Discuss all topics related to software development and life of a developer.',
    linkText: 'Visit our Slack',
    link: 'https://chat.webuild.community/'
  },
  {
    img: 'events',
    title: 'Events',
    desc:
      'Join our wide ranges of offline events, from meetups to workshop and Hackathon.',
    linkText: 'Look up coming events',
    link: '#'
  },
  {
    img: 'jobs',
    title: 'Awesome Jobs',
    desc: 'Check out our job posting board that encourages good HR practices.',
    linkText: 'Post a job',
    link: 'https://github.com/awesome-jobs/vietnam/issues'
  }
];

const WhatWeDoSection = () => (
  <section id="what-we-do" className="pt-12">
    <Container>
      <H3 className="mb-6">What we do</H3>
      <div className="-mx-3 flex flex-wrap">
        {items.map(({ img, title, desc, linkText, link }) => (
          <div className="w-full sm:w-1/3 mb-10 text-center px-3" key={title}>
            <img
              src={`/images/${img}.png`}
              srcSet={`/images/${img}@2x.png 2x`}
            />
            <div className="border border-gray-200">
              <div
                className="lg:px-10 px-6 lg:py-8 py-6"
                style={{ minHeight: '220px' }}
              >
                <H5 className="mb-1">{title}</H5>
                <p className="mb-2 text-gray-700">{desc}</p>
                <a
                  className="text-primary underline font-bold text-base"
                  href={link}
                >
                  {linkText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default WhatWeDoSection;
