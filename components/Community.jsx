import React from 'react';
import Container from 'components/Container';
import { H3 } from 'components/typography';
import Gallery from 'components/Gallery';

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
            imgUrl: '/images/communities/ruby.jpg',
            href: 'https://www.facebook.com/vietnam.ruby/'
          },
          {
            title: 'Golang Vietnam',
            imgUrl: '/images/communities/golang.jpg',
            href: 'https://www.facebook.com/golang.org.vn/'
          },
          {
            title: 'Rust Vietnam',
            imgUrl: '/images/communities/rust.jpg',
            href: 'https://www.facebook.com/vietnam.rust/'
          },
          {
            title: 'Android Cafein',
            imgUrl: '/images/communities/android.jpg',
            href: 'https://www.facebook.com/androidcafein/'
          },
          {
            title: 'Swift',
            imgUrl: '/images/communities/swift.jpg',
            href: 'https://www.facebook.com/swift.org.vn/'
          },
          {
            title: 'Elixir Vietnam',
            imgUrl: '/images/communities/elixir.jpg',
            href: 'https://www.facebook.com/elixirvn.org/'
          },
          {
            title: 'JavaScript Vietnam',
            imgUrl: '/images/communities/js.jpg',
            href: 'https://www.facebook.com/vietnamjs/'
          },
          {
            title: 'Geeky Weekend',
            imgUrl: '/images/communities/gdg.jpg',
            href: 'https://www.facebook.com/geekyweekend/'
          },
          {
            title: 'Google Developer Group Vietnam',
            imgUrl: '/images/communities/gdg.jpg',
            href: 'https://www.facebook.com/gdgviet/'
          },
          {
            title: 'Grokking',
            imgUrl: '/images/communities/grokking.jpg',
            href: 'https://www.facebook.com/grokking.vietnam'
          },
          {
            title: 'Kipacast',
            imgUrl: '/images/communities/kipacast.jpg',
            href: 'https://www.facebook.com/kipacast'
          },
          {
            title: 'Thefullsnack',
            imgUrl: '/images/communities/thefullsnack.jpg',
            href: 'https://www.facebook.com/thefullsnackblog'
          }
        ]}
      />
    </Container>
  </section>
);

export default CommunitySection;
