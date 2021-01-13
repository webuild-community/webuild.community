import React, { useEffect } from 'react';
import Container from 'components/Container';

const Skeleton = () => (
  <div className="p-10 space-y-10">
    <div className="h-4 w-16 bg-gray-100" />
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="h-4 w-full bg-gray-100" />
        <div className="h-4 w-2/3 bg-gray-100" />
      </div>
      <div className="space-y-3">
        <div className="h-4 w-3/5 bg-gray-100" />
        <div className="h-4 w-1/3 bg-gray-100" />
      </div>
      <div className="space-y-3">
        <div className="h-4 w-full bg-gray-100" />
        <div className="h-4 w-2/3 bg-gray-100" />
      </div>
    </div>
  </div>
);

const TwitterSection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    document.getElementsByClassName('twitter-embed')[0].appendChild(script);
  }, []);

  return (
    <section id="hero" className="py-16 sm:py-16 lg:py-24">
      <Container>
        <div className="twitter-embed bg-white border-gray-200 border overflow-hidden max-w-sm mx-auto">
          {/* below html servers as placeholder, they will be replaced once Twitter's script loaded */}
          <a
            className="twitter-timeline"
            data-height={600}
            href="https://twitter.com/nntruonghan/lists/webuild-community-19282?ref_src=twsrc%5Etfw"
          >
            <Skeleton />
          </a>{' '}
        </div>
      </Container>
    </section>
  );
};

export default TwitterSection;
