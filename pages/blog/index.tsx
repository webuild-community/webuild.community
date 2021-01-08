import React from 'react';
import ContentfulService, { BlogPostResponse } from '../../apis/contentful';
import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import DefaultLayout from 'components/DefaultLayout';
import Container from 'components/Container';
import PostList from 'components/PostList';

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
  return (
    <>
      <NextSeo title="Blog | WeBuild" />

      <DefaultLayout>
        <Container className="py-6 sm:py-10">
          <div className="max-w-xl mx-auto">
            <PostList {...blogPostResponse} />
          </div>
        </Container>
      </DefaultLayout>
    </>
  );
};

export default Blog;
