import React from 'react';
import Container from 'components/Container';
import Button from 'components/Button';

const HeroBanner = () => {
  return (
    <section className="pt-16 lg:pt-24 bg-primary text-gray-100 font-normal">
      <Container>
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-6">WeBuild Day 2020</h1>
          <p className="text-2xl mb-6">
            WeBuild Day is a post-COVID-19 initiative to restore the activities
            among the developer community in Vietnam.
          </p>
          <p className="text-lg mb-6">
            We are planning to organize the first&nbsp;
            <strong>WeBuild Day</strong>, an offline full-day event for
            developers this&nbsp;
            <strong>December 12th</strong>.
          </p>
          <a
            href="https://ticketbox.vn/event/webuild-day-121220-81060"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="focus:outline-none"
              bgClassName="bg-white"
              textColorClassName="text-primary"
            >
              Register now
            </Button>
          </a>
        </div>
        <div>
          <img
            src="/images/webuild-day/webuild-day-banner.png"
            alt="banner webuild day"
          />
        </div>
      </Container>
    </section>
  );
};

export default HeroBanner;
