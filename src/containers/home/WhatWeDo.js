// External
import React from 'react'

// Internal
const cards = [
  {
    img: 'slack',
    title: 'Slack Channel',
    desc:
      'Discuss all topics related to software development and life of a developer.',
    linkText: 'Visit our Slack',
    link: 'https://chat.webuild.community/',
  },
  {
    img: 'events',
    title: 'Events',
    desc:
      'Join our wide ranges of offline events, from meetups to workshop and Hackathon.',
    linkText: 'Look up coming events',
    link: '#',
  },
  {
    img: 'jobs',
    title: 'Awesome Jobs',
    desc: 'Check out our job posting board that encourages good HR practices.',
    linkText: 'Go to Awesome Jobs',
    link: 'https://github.com/awesome-jobs/vietnam/issues',
  },
]

const WhatWeDoSection = () => (
  <section id="what-we-do" className="pt-24">
    <div className="container">
      <div className="row">
        <div className="col">
          <h4 className="uppercase mb-10 sm:text-left text-center">
            What we do
          </h4>
        </div>
      </div>
      <div className="row flex flex-wrap">
        {cards.map(({ img, title, desc, linkText, link }) => (
          <div className="col sm:w-1/3 mb-10 text-center" key={title}>
            <div className="shadow">
              <img
                src={`/images/${img}.png`}
                srcSet={`/images/${img}@2x.png 2x`}
              />
              <div
                className="lg:px-10 px-6 lg:py-8 py-6 flex flex-col items-center justify-between"
                style={{ minHeight: '220px' }}
              >
                <div className="mb-4">
                  <h5 className="text-xl">{title}</h5>
                  <p className="text-grey-darker mt-3">{desc}</p>
                </div>

                <a className="text-primary font-medium" href={link}>
                  {linkText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default WhatWeDoSection
