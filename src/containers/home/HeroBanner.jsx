import React from 'react';
import Container from 'components/Container';
import LogoSymbol from 'assets/svg/logo-symbol.svg';

const HeroBannerSection = () => (
  <section id="hero" className="py-14 pb-16 sm:py-16 lg:py-24">
    <Container>
      <div className="flex flex-wrap sm:flex-row flex-col-reverse text-center sm:text-left -mx-4">
        <div className="px-4 w-full sm:w-1/2 mt-10 sm-mt-0">
          <div className="font-bold sm:text-xl text-lg text-black mb-3">
            WeBuild Community is a platform that connects developers in Vietnam,
            where they can share their knowledge and experience, while working,
            learning, and building cool stuffs together.
          </div>
          <p className="text-lg text-base text-gray-800">
            We welcome all developers regardless of their stacks, experiences,
            and backgrounds to join our many activities.
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
