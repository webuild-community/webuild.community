import React from 'react';
import { H3 } from 'components/typography';
import Container from 'components/Container';

const Supporters = () => (
  <section id="supporters" className="mt-24">
    <Container className="text-center">
      <H3 className="mb-7">Special Sponsors</H3>
      <div className="row flex flex-wrap">
        <div className="col sm:w-1/4 w-1/2 mb-20">
          <a href="https://tiki.vn/" target="_blank" rel="noopener noreferrer">
            <img
              alt="tiki.vn"
              className="bw-hover"
              width="116"
              src="/images/tiki.png"
              srcSet="/images/tiki@2x.png 2x"
            />
          </a>
        </div>
        <div className="col sm:w-1/4 w-1/2 mb-20">
          <a
            href="https://www.chotot.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="chotot.com"
              className="bw-hover"
              width="149"
              src="/images/chotot.png"
              srcSet="/images/chotot@2x.png 2x"
            />
          </a>
        </div>
        <div className="col sm:w-1/4 w-1/2 mb-20 text-center">
          <a
            href="https://dwarves.foundation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="dwarves.foundation"
              className="bw-hover"
              width="199"
              src="/images/dwarves.png"
              srcSet="/images/dwarves@2x.png 2x"
            />
          </a>
        </div>
        <div className="col sm:w-1/4 w-1/2 mb-20 sm:text-right text-center">
          <a
            href="https://envato.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="envato.com"
              className="bw-hover"
              width="173"
              src="/images/envato.png"
              srcSet="/images/envato@2x.png 2x"
            />
          </a>
        </div>
      </div>
    </Container>
  </section>
);

export default Supporters;
