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
import grokkingImg from 'assets/images/communities/grokking.jpg';

const CommunitySection = () => (
  <section id="community" className="sm:py-12 py-10 lg:py-24 lg:mb-24 mb-8">
    <Container>
      <div className="text-center mb-10">
        <H3 className="mb-2">Community</H3>
        <p className="text-gray-700 sm:text-lg px-3">
          With support from different groups
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
            href: 'https://www.facebook.com/vietnam.rust/'
          },
          {
            title: 'Android Cafein',
            imgUrl: androidImg,
            href: 'https://www.facebook.com/androidcafein/'
          },
          {
            title: 'Swift',
            imgUrl: swiftImg,
            href: 'https://www.facebook.com/swift.org.vn/'
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
          },
          {
            title: 'Grokking',
            imgUrl: grokkingImg,
            href: 'https://www.facebook.com/grokking.vietnam'
          }
        ]}
      />
    </Container>
  </section>
);

export default CommunitySection;
