import Link from 'next/link';
import React from 'react';
import ContentfulService, { BlogPostResponse } from '../../apis/contentful';
import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import DefaultLayout from 'components/DefaultLayout';
import Container from 'components/Container';

const POST_PER_PAGE = 10;

export const getServerSideProps: GetServerSideProps = async context => {
  const {
    query: { page }
  } = context;
  const skip =
    (typeof page === 'string' && !isNaN(Number(page)) ? Number(page) - 1 : 0) *
    POST_PER_PAGE;
  try {
    const blogPostResponse = await ContentfulService.getBlogPostEntries({
      skip,
      limit: POST_PER_PAGE
    });

    return {
      props: { blogPostResponse }
    };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};

const Blog: NextPage<{
  blogPostResponse: BlogPostResponse;
  blogFeaturedPostResponse: BlogPostResponse;
}> = ({ blogPostResponse }) => {
  const { entries, limit, skip, total } = blogPostResponse;
  return (
    <>
      <NextSeo title="Blog | WeBuild" />

      <DefaultLayout>
        <Container className="py-6 sm:py-10">
          <div className="max-w-xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Blog</h1>
            <p className="mb-5 font-normal">
              Learned by engineers. Experimented by engineers. Experienced by
              engineers.
            </p>
            <div className="divide-y divide-gray-200">
              {entries.map(post => (
                <div className="py-5" key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>
                    <a className="text-2xl font-bold mb-2 hover:text-primary underline">
                      {post.title}
                    </a>
                  </Link>
                  <p className="mt-4 font-normal">{post.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </DefaultLayout>
    </>
  );
};

export default Blog;
