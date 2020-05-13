import React from 'react';
import Container from 'components/Container';
import { H3 } from 'components/typography';
import Gallery from 'components/Gallery';

import rubyImg from 'assets/images/communities/ruby.jpg';
import rustImg from 'assets/images/communities/rust.jpg';
import golangImg from 'assets/images/communities/golang.jpg';
import androidImg from 'assets/images/communities/android.jpg';
import swiftImg from 'assets/images/communities/swift.jpg';
import elixirImg from 'assets/images/communities/elixir.jpg';
import geekyImg from 'assets/images/communities/geeky.jpg';
import javascriptImg from 'assets/images/communities/js.jpg';
import gdgVietnamImg from 'assets/images/communities/gdg.jpg';

const CommunitySection = () => (
  <section id="community" className="pt-24 pb-24 mb-24">
    <Container>
      <div className="text-center mb-10">
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
            title: 'Golang Vietnam',
            imgUrl: golangImg,
            href: 'https://www.facebook.com/golang.org.vn/'
          },
          {
            title: 'Rust Vietnam',
            imgUrl: rustImg,
            href: 'https://www.facebook.com/vietnam.ruby/'
          },
          {
            title: 'Android Cafein',
            imgUrl: androidImg,
            href: 'https://www.facebook.com/androidcafein/'
          },
          {
            title: 'Swift',
            imgUrl: swiftImg,
            href: 'https://www.facebook.com/swift/'
          },
          {
            title: 'Elixir Vietnam',
            imgUrl: elixirImg,
            href: 'https://www.facebook.com/elixirvn.org/'
          },
          {
            title: 'JavaScript Vietnam',
            imgUrl: javascriptImg,
            href: 'https://www.facebook.com/vietnamjs/'
          },
          {
            title: 'Geeky Weekend',
            imgUrl: geekyImg,
            href: 'https://www.facebook.com/geekyweekend/'
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
