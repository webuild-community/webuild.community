import React from 'react';
import Container from 'components/Container';
import BannerImage from 'assets/images/webuild-day/webuild-day-banner.png';

const HeroBanner = () => {
  return (
    <section className="pt-16 lg:pt-24 bg-primary text-gray-100 font-normal">
      <Container>
        <div className="pr-6 lg:pr-48 mb-6">
          <h1 className="text-3xl font-bold mb-6">WeBuild Day 2020</h1>
          <p className="text-2xl mb-6">
            WeBuild Community is a platform that connects developers in Vietnam,
            where they can share their knowledge and experience while working,
            learning, and building cool products together.
          </p>
          <p className="text-lg mb-6">
            We are planning to organize the first&nbsp;
            <span className="font-bold">WeBuild Day</span>, an offline full-day
            event for developers this&nbsp;
            <span className="font-bold">December 12th</span>.
          </p>

          <button className="text-primary bg-white font-medium px-4 py-1 rounded-sm">
            Register now
          </button>
        </div>
        <div>
          <img src={BannerImage} alt="banner webuild day" />
        </div>
      </Container>
    </section>
  );
};

export default HeroBanner;
