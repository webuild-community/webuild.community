import React from 'react';
import Container from 'components/Container';
import Gallery from 'components/Gallery';

const listGoldSponsors = [
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
  }
];

const listSilverSponsors = [
  {
    title: 'nfq',
    imgUrl: '/images/webuild-day/sponsors/nfq.png',
    href: 'https://www.nfq.asia'
  },
  {
    title: 'dwarves',
    imgUrl: '/images/webuild-day/sponsors/dwarves.png',
    href: 'https://dwarves.foundation'
  }
];

const Sponsors = () => {
  return (
    <section className="pt-16 lg:pt-24 text-gray-800 text-center font-normal">
      <Container>
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-10">Sponsors</h1>
          <div className="mb-10">
            <p className="text-2xl font-bold mb-10">Gold</p>
            <Gallery aClassName="bg-white" center items={listGoldSponsors} />
          </div>
          <div>
            <p className="text-2xl font-bold mb-10">Silver</p>
            <Gallery aClassName="bg-white" center items={listSilverSponsors} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Sponsors;
