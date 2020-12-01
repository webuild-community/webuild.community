import React from 'react';
import Container from 'components/Container';
import Gallery from 'components/Gallery';
import flodeskImg from 'assets/images/webuild-day/sponsors/flodesk.png';
import xImg from 'assets/images/webuild-day/sponsors/x.png';
import nfqImg from 'assets/images/webuild-day/sponsors/nfq.png';

const listGoldSponsors = [
  {
    title: 'flodesk',
    imgUrl: flodeskImg,
    href: ''
  }
];

const listSilverSponsors = [
  {
    title: 'x',
    imgUrl: xImg,
    href: ''
  },
  {
    title: 'nfq',
    imgUrl: nfqImg,
    href: ''
  }
];

const Sponsors = () => {
  return (
    <section className="py-16 lg:py-24 text-gray-800 text-center font-normal">
      <Container>
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-10">Sponsors</h1>
          <div className="mb-10">
            <p className="text-2xl font-bold mb-10">Gold</p>
            <Gallery center items={listGoldSponsors} />
          </div>
          <div>
            <p className="text-2xl font-bold mb-10">Silver</p>
            <Gallery center items={listSilverSponsors} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Sponsors;
