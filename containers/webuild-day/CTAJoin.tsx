import React from 'react';
import Container from 'components/Container';
import Button from 'components/Button';

const CTAJoin = () => {
  return (
    <section className="py-12 bg-gray-800 text-center">
      <Container>
        <div className="px-10 flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center">
          <p className="text-white text-4xl font-bold font-semibold w-full md:w-auto mb-6 md:mb-0 leading-tight">
            Join the Conference
          </p>
          <a
            className="w-full md:w-auto"
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
      </Container>
    </section>
  );
};

export default CTAJoin;
