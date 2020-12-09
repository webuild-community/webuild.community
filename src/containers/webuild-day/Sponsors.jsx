import React from 'react';
import Container from 'components/Container';
import Gallery from 'components/Gallery';
import flodeskImg from 'assets/images/webuild-day/sponsors/flodesk.png';
import xImg from 'assets/images/webuild-day/sponsors/x.png';
import nfqImg from 'assets/images/webuild-day/sponsors/nfq.png';
import beImg from 'assets/images/webuild-day/sponsors/be.png';
import axieImg from 'assets/images/webuild-day/sponsors/axie.png';
import dwarvesImg from 'assets/images/webuild-day/sponsors/dwarves.png';

const listGoldSponsors = [
  {
    title: 'flodesk',
    imgUrl: flodeskImg,
    href: 'https://flodesk.com'
  },
  {
    title: 'be',
    imgUrl: beImg,
    href: 'https://be.com.vn'
  },
  {
    title: 'axie',
    imgUrl: axieImg,
    href: 'https://axieinfinity.com'
  },
  {
    title: 'codelink',
    imgUrl: xImg,
    href: 'https://www.codelink.io'
  }
];

const listSilverSponsors = [
  {
    title: 'nfq',
    imgUrl: nfqImg,
    href: 'https://www.nfq.asia'
  },
  {
    title: 'dwarves',
    imgUrl: dwarvesImg,
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
