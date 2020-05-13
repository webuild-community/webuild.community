import React from 'react';
import { H3 } from 'components/typography';
import Container from 'components/Container';
import Gallery from 'components/Gallery';

import notionImg from 'assets/images/sponsors/notion.jpg';

import tikiImg from 'assets/images/sponsors/tiki.jpg';
import lazadaImg from 'assets/images/sponsors/lazada.jpg';
import shopeeImg from 'assets/images/sponsors/shopee.jpg';
import chototImg from 'assets/images/sponsors/chotot.jpg';
import grabImg from 'assets/images/sponsors/grab.jpg';

import googleImg from 'assets/images/sponsors/google.jpg';
import microsoftImg from 'assets/images/sponsors/microsoft.jpg';
import fptImg from 'assets/images/sponsors/fpt.jpg';
import quoineImg from 'assets/images/sponsors/quoine.jpg';
import dwarvesImg from 'assets/images/sponsors/dwarves.jpg';
import topdevImg from 'assets/images/sponsors/topdev.jpg';
import codershoolImg from 'assets/images/sponsors/codershool.jpg';
import Button from 'components/Button';

const Supporters = () => (
  <section
    id="supporters"
    className="sm:mt-24 mt-5 sm:pt-0 pt-10 mb-10 sm:border-none border-t border-gray-200"
  >
    <Container className="text-center">
      <H3 className="mb-6">Special Sponsors</H3>
      <Gallery
        center
        items={[
          {
            title: 'Notion',
            imgUrl: notionImg,
            href: 'https://www.notion.so/'
          }
        ]}
      ></Gallery>

      <H3 className="mb-6 sm:mt-12 mt-10">Sponsors</H3>
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
      ></Gallery>

      <H3 className="mb-6 sm:mt-12 mt-10">Backers</H3>
      <Gallery
        items={[
          {
            title: 'Google',
            imgUrl: googleImg,
            href: 'https://www.google.com/'
          },
          {
            title: 'Microsoft',
            imgUrl: microsoftImg,
            href: 'https://www.microsoft.com/'
          },
          {
            title: 'fpt',
            imgUrl: fptImg,
            href: 'https://www.fpt.vn/'
          },
          {
            title: 'Quoine',
            imgUrl: quoineImg,
            href: 'https://www.liquid.com/'
          },
          {
            title: 'Dwarves Foundation',
            imgUrl: dwarvesImg,
            href: 'https://dwarves.foundation/'
          },
          {
            title: 'TopDev',
            imgUrl: topdevImg,
            href: 'https://topdev.vn/'
          },
          {
            title: 'Codershool',
            imgUrl: codershoolImg,
            href: 'https://www.coderschool.vn/'
          }
        ]}
      ></Gallery>

      <div className="sm:mt-16 mt-10">
        <Button>Support WeBuild</Button>
      </div>
    </Container>
  </section>
);

export default Supporters;
