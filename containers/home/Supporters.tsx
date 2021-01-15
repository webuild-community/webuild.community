import React from 'react';
import { H3 } from 'components/typography';
import Container from 'components/Container';
import Gallery from 'components/Gallery';

import Button from 'components/Button';

const Supporters = () => (
  <section id="supporters" className="sm:mt-24 mt-5 sm:pt-0 pt-10 mb-10">
    <Container className="text-center">
      <H3 className="mb-6 sm:mt-12 mt-10">Backers</H3>
      <Gallery
        items={[
          {
            title: 'Dwarves Foundation',
            imgUrl: '/images/sponsors/dwarves.jpg',
            href: 'https://dwarves.foundation/'
          },
          {
            title: 'flodesk',
            imgUrl: '/images/webuild-day/sponsors/flodesk.png',
            href: 'https://flodesk.com'
          },
          {
            title: 'be',
            imgUrl: '/images/webuild-day/sponsors/be.png',
            href: 'https://be.com.vn'
          },
          {
            title: 'axie',
            imgUrl: '/images/webuild-day/sponsors/axie.png',
            href: 'https://axieinfinity.com'
          },
          {
            title: 'codelink',
            imgUrl: '/images/webuild-day/sponsors/x.png',
            href: 'https://www.codelink.io'
          },
          {
            title: 'nfq',
            imgUrl: '/images/webuild-day/sponsors/nfq.png',
            href: 'https://www.nfq.asia'
          }
        ]}
      ></Gallery>

      <div className="sm:mt-16 mt-10">
        <a
          href="mailto:hello@webuild.community"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Support WeBuild</Button>
        </a>
      </div>
    </Container>
  </section>
);

export default Supporters;
