import React from 'react';
import Container from 'components/Container';
import { H3 } from 'components/typography';
import Gallery from 'components/Gallery';

import rubyImg from 'assets/images/communities/ruby.png';
import rustImg from 'assets/images/communities/rust.png';
import golangImg from 'assets/images/communities/golang.png';
import androidImg from 'assets/images/communities/android.png';
import elixirImg from 'assets/images/communities/elixir.png';
import geekyImg from 'assets/images/communities/geeky.png';
import javascriptImg from 'assets/images/communities/js.png';
import gdgVietnamImg from 'assets/images/communities/gdg-vietnam.png';

const CommunitySection = () => (
  <section id="community" className="pt-12 pb-8">
    <Container>
      <div className="text-center">
        <H3 className="mb-1">Community</H3>
        <p className="text-gray-700 text-lg">
          We started as many different meetup groups
        </p>
      </div>

      <Gallery
        items={[
          {
            title: 'Ruby Vietnam',
            imgUrl: rubyImg,
            href: 'https://www.facebook.com/vietnam.ruby/'
          },
          {
            title: 'Rust Vietnam',
            imgUrl: rustImg,
            href: 'https://www.facebook.com/vietnam.ruby/'
          },
          {
            title: 'Golang Vietnam',
            imgUrl: golangImg,
            href: 'https://www.facebook.com/golang.org.vn/'
          },
          {
            title: 'Android Cafein',
            imgUrl: androidImg,
            href: 'https://www.facebook.com/androidcafein/'
          },
          {
            title: 'Elixir Vietnam',
            imgUrl: elixirImg,
            href: 'https://www.facebook.com/elixirvn.org/'
          },
          {
            title: 'Geeky Weekend',
            imgUrl: geekyImg,
            href: 'https://www.facebook.com/geekyweekend/'
          },
          {
            title: 'JavaScript Vietnam',
            imgUrl: javascriptImg,
            href: 'https://www.facebook.com/vietnamjs/'
          },
          {
            title: 'Google Developer Group Vietnam',
            imgUrl: gdgVietnamImg,
            href: 'https://www.facebook.com/gdgviet/'
          }
        ]}
      />
    </Container>
  </section>
);

export default CommunitySection;
