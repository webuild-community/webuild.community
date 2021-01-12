import React from 'react';
import Container from 'components/Container';
import { ReactComponent as LogoSymbol } from '../../assets/svg/logo-symbol.svg';
import { H3 } from 'components/typography';
import Link from 'next/link';

interface Props {
  news: any;
}

const HeroBannerSection = ({ news }: Props) => (
  <section id="hero" className="pb-16 pt-4 sm:py-16 lg:pb-24 lg:pt-20">
    <Container>
      <div className="flex mb-20 sm:mb-32">
        <ul className="list-inside" style={{ listStyleType: 'square' }}>
          {news.entries.map(post => (
            <li className="py-1" key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <a className="text-base font-medium mb-1 hover:text-primary underline">
                  {post.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col-reverse text-center sm:text-left -mx-4">
        <div className="px-4 w-full sm:w-1/2 mt-10 sm-mt-0">
          <H3 className="mb-3">WeBuild Community</H3>
          <p className="text-base text-gray-800">
            A platform that connects developers in Vietnam, where they can share
            their knowledge and experience, while working, learning, and
            building cool stuffs together.
          </p>
        </div>
        <div className="px-4 w-full sm:w-1/2 flex items-center justify-center sm:justify-end">
          <LogoSymbol />
        </div>
      </div>
    </Container>
  </section>
);

export default HeroBannerSection;
