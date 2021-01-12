import React from 'react';
import ContentfulService, { BlogPostResponse } from '../../apis/contentful';
import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import DefaultLayout from 'components/DefaultLayout';
import Container from 'components/Container';
import PostList from 'components/PostList';
import NotFoundPage from 'components/NotFoundPage';
import Link from 'next/link';

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
  } catch (error) {
    return { props: { error: error.message } };
  }
};

const Blog: NextPage<{
  blogPostResponse: BlogPostResponse;
  error: string;
}> = ({ blogPostResponse, error }) => {
  if (error) {
    return <NotFoundPage />;
  }

  const { entries, skip, total } = blogPostResponse;

  return (
    <>
      <NextSeo title="Blog | WeBuild" />

      <DefaultLayout>
        <Container className="py-6 sm:py-10">
          <div className="max-w-xl mx-auto">
            <PostList {...blogPostResponse} />
          </div>
          {total > 0 && (
            <nav>
              <ul className="list-reset flex justify-center">
                {skip > 0 && (
                  <li key="first" className="inline-block flex-none mx-1">
                    <Link href="?page=1">
                      <a className="no-underline text-primary hover:text-black">
                        « First
                      </a>
                    </Link>
                  </li>
                )}
                {skip > 0 && (
                  <li key="prev" className="inline-block flex-none mx-1">
                    <Link href={`?page=${skip - 1}`}>
                      <a className="no-underline text-primary hover:text-black">
                        ‹ Prev
                      </a>
                    </Link>
                  </li>
                )}
                {entries.map((_, i) => (
                  <li key={i} className="inline-block flex-none mx-1">
                    {i + 1 !== skip ? (
                      <Link href={`?page=${skip}`}>
                        <a className="no-underline text-primary hover:text-black">
                          {i + 1}
                        </a>
                      </Link>
                    ) : (
                      i + 1
                    )}
                  </li>
                ))}
                {skip < entries.length && (
                  <li key="next" className="inline-block flex-none mx-1">
                    <Link href={`?page=${skip + 1}`}>
                      <a className="no-underline text-primary hover:text-black">
                        Next ›
                      </a>
                    </Link>
                  </li>
                )}
                {skip < entries.length && (
                  <li key="last" className="inline-block flex-none mx-1">
                    <Link href={`?page=${total}`}>
                      <a className="no-underline text-primary hover:text-black">
                        Last »
                      </a>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </Container>
      </DefaultLayout>
    </>
  );
};

export default Blog;
