import React from 'react';
import Container from 'components/Container';
import LogoSymbol from 'assets/svg/logo-symbol.svg';

const HeroBannerSection = () => (
  <section id="hero" className="py-16 lg:py-24">
    <Container>
      <div className="flex flex-wrap -mx-4">
        <div className="px-4 w-1/2">
          <div className="font-bold text-xl text-black mb-3">
            WeBuild Community is a platform that connects developers in Vietnam,
            where they can share their knowledge and experience, while working,
            learning, and building cool stuffs together.
          </div>
          <p className="text-lg text-gray-800">
            We welcome all developers regardless of their stacks, experiences,
            and backgrounds to join our many activities.
          </p>
        </div>
        <div className="px-4 w-1/2 flex items-center justify-end">
          <LogoSymbol />
        </div>
      </div>
    </Container>
  </section>
);

export default HeroBannerSection;
