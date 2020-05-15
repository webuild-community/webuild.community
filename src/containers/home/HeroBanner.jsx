import React from 'react';
import Container from 'components/Container';
import LogoSymbol from 'assets/svg/logo-symbol.svg';
import { H3 } from 'components/typography';

const HeroBannerSection = () => (
  <section id="hero" className="py-16 sm:py-16 lg:py-24">
    <Container>
      <div className="flex flex-wrap sm:flex-row flex-col-reverse text-center sm:text-left -mx-4">
        <div className="px-4 w-full sm:w-1/2 mt-10 sm-mt-0">
          <H3 className="mb-3">WeBuild Community</H3>
          <p className="text-base text-gray-800">
            A platform that connects developers in Vietnam, where they can share
            their knowledge and experience, while working, learning, and
            building cool stuffs together.
          </p>
        </div>
        <div className="px-4 w-full sm:w-1/2 flex items-center justify-center sm:justify-end">
          <LogoSymbol />
        </div>
      </div>
    </Container>
  </section>
);

export default HeroBannerSection;
