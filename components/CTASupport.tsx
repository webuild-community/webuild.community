import React from 'react';
import Container from 'components/Container';
import Button from 'components/Button';

const CTASupport = () => {
  return (
    <section className="pb-16 lg:pb-24 pt-8 text-center">
      <Container>
        <p className="text-gray-800 text-2xl font-bold mb-6 sm:px-24 leading-tight">
          Interested in joining our roster of the best and brightest sponsors
          around? Drop us a line and we&apos;ll give you the scoop!
        </p>
        <a href="mailto:hello@webuild.community">
          <Button
            className="focus:outline-none"
            bgClassName="bg-primary"
            textColorClassName="text-white"
          >
            Support WeBuild
          </Button>
        </a>
      </Container>
    </section>
  );
};

export default CTASupport;
