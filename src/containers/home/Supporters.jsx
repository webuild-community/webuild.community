import React from 'react';
import { H3 } from 'components/typography';
import Container from 'components/Container';
import Gallery from 'components/Gallery';

// import notionImg from 'assets/images/sponsors/notion.jpg';

// import tikiImg from 'assets/images/sponsors/tiki.jpg';
// import lazadaImg from 'assets/images/sponsors/lazada.jpg';
// import shopeeImg from 'assets/images/sponsors/shopee.jpg';
// import chototImg from 'assets/images/sponsors/chotot.jpg';
// import grabImg from 'assets/images/sponsors/grab.jpg';

import googleImg from 'assets/images/sponsors/google.jpg';
// import microsoftImg from 'assets/images/sponsors/microsoft.jpg';
// import fptImg from 'assets/images/sponsors/fpt.jpg';
// import quoineImg from 'assets/images/sponsors/quoine.jpg';
import dwarvesImg from 'assets/images/sponsors/dwarves.jpg';
// import topdevImg from 'assets/images/sponsors/topdev.jpg';
// import codershoolImg from 'assets/images/sponsors/codershool.jpg';
import flodeskImg from 'assets/images/webuild-day/sponsors/flodesk.png';
import xImg from 'assets/images/webuild-day/sponsors/x.png';
import nfqImg from 'assets/images/webuild-day/sponsors/nfq.png';
import beImg from 'assets/images/webuild-day/sponsors/be.png';
import axieImg from 'assets/images/webuild-day/sponsors/axie.png';
import Button from 'components/Button';

const Supporters = () => (
  <section id="supporters" className="sm:mt-24 mt-5 sm:pt-0 pt-10 mb-10">
    <Container className="text-center">
      {/* <H3 className="mb-6">Special Sponsors</H3>
      <Gallery
        center
        items={[
          {
            title: 'Notion',
            imgUrl: notionImg,
            href: 'https://www.notion.so/'
          }
        ]}
      ></Gallery> */}

      {/* <H3 className="mb-6 sm:mt-12 mt-10">Sponsors</H3>
      <Gallery
        items={[
          {
            title: 'Tiki',
            imgUrl: tikiImg,
            href: 'https://www.tiki.vn/'
          },
          {
            title: 'Lazada',
            imgUrl: lazadaImg,
            href: 'https://www.lazada.vn/'
          },
          {
            title: 'Shopee',
            imgUrl: shopeeImg,
            href: 'https://shopee.vn/'
          },
          {
            title: 'Chotot',
            imgUrl: chototImg,
            href: 'https://www.chotot.com/'
          },
          {
            title: 'grab',
            imgUrl: grabImg,
            href: 'https://www.grab.com/'
          }
        ]}
      ></Gallery> */}

      <H3 className="mb-6 sm:mt-12 mt-10">Backers</H3>
      <Gallery
        items={[
          {
            title: 'Google',
            imgUrl: googleImg,
            href: 'https://www.google.com/'
          },
          {
            title: 'Dwarves Foundation',
            imgUrl: dwarvesImg,
            href: 'https://dwarves.foundation/'
          },
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
          },
          {
            title: 'nfq',
            imgUrl: nfqImg,
            href: 'https://www.nfq.asia'
          }
        ]}
      ></Gallery>

      {/* <H3 className="mb-6 sm:mt-12 mt-10">Supporters</H3>
      <div className="flex justify-center flex-wrap">
        {[
          {
            name: 'Name',
            link: '#',
            img: 'https://avatars3.githubusercontent.com/u/47828630?s=88&v=4'
          }
        ].map(({ name, link, img }, index) => (
          <a
            className="sm:w-24 sm:h-24 w-20 h-20 bg-center bg-no-repeat bg-contain block rounded-full mx-3 mb-6 border border border-gray-200"
            style={{ backgroundImage: `url(${img})` }}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            href={link}
            title={name}
          />
        ))}
      </div> */}

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
