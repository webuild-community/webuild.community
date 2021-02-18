import React, { useEffect } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import ContentfulService, {
  PostDetailResponse,
  BlogPost,
  PostViewMode
} from '../../apis/contentful';
import {
  documentToReactComponents,
  Options
} from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import NotFoundPage from '../../components/NotFoundPage';
import { NextSeo } from 'next-seo';
import DefaultLayout from '../../components/DefaultLayout';
import Container from '../../components/Container';
import PostInfo from 'components/PostInfo';
import PostShare from 'components/PostShare';
import FacebookLikeButton from 'components/FacebookLikeButton';
import { useRouter } from 'next/router';
import { ORIGIN } from 'constants/url';

export const getServerSideProps: GetServerSideProps = async context => {
  const {
    query: { postSlug, viewMode }
  } = context;
  const slug = typeof postSlug === 'string' ? postSlug : '';

  let prevPost: BlogPost | null = null;
  let nextPost: BlogPost | null = null;

  try {
    const data = await ContentfulService.getPostBySlug(
      slug,
      viewMode as PostViewMode
    );

    return {
      props: { data, prevPost, nextPost }
    };
  } catch (error) {
    return {
      props: { data: {}, error: error.message, prePost: {}, nextPost: {} }
    };
  }
};

const richTextOptions: Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { title, description, file } = node.data.target.fields;
      const mimeType = file.contentType;
      const [mimeGroup] = mimeType.split('/');

      switch (mimeGroup) {
        case 'image':
          return (
            <figure>
              <img
                title={title ? title : null}
                alt={description ? description : null}
                src={file.url}
              />
              {description && <figcaption>{description}</figcaption>}
            </figure>
          );
        default:
          return null;
      }
    }
  }
};

const Post: NextPage<{
  data: PostDetailResponse;
  error: string;
}> = ({ data, error }) => {
  const { asPath } = useRouter();
  if (error) {
    return <NotFoundPage />;
  }

  const seoImages: any[] = [];

  if (data.heroImage) {
    seoImages.push({
      url: data.heroImage,
      width: 1200,
      height: 628,
      alt: data.title
    });
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.crossOrigin = 'anonymous';
    script.src = `https://connect.facebook.net/en_US/sdk.js#xfbml=1&autoLogAppEvents=1&version=v7.0&appId=${process.env.FACEBOOK_APP_ID}`;
    script.async = true;
    const fbRoot = document.getElementById('fb-root');
    fbRoot?.appendChild(script);
  });

  return (
    <>
      <NextSeo
        title={`${data.title} | WeBuild`}
        description={data.metaDescription || data.excerpt}
        openGraph={{
          title: `${data.title} | WeBuild`,
          description: data.metaDescription || data.excerpt,
          type: 'article',
          article: {
            publishedTime: data.meta.datePublished,
            modifiedTime: data.meta.dateModified,
            tags: data.tags.map(({ name }) => name)
          },
          images: seoImages
        }}
      />
      <DefaultLayout>
        <Container className="py-6 sm:py-10">
          <div id="fb-root" />

          <div className="max-w-xl mx-auto mb-8">
            <h1 className="text-3xl font-bold sm:text-4xl">{data.title}</h1>
            <PostInfo createdAt={data.meta.datePublished} tags={data.tags} />
          </div>
          <article className="prose max-w-xl mx-auto">
            {documentToReactComponents(data.content, richTextOptions)}
          </article>
          <div className="flex flex-col items-center justify-center mt-14 mb-5 space-y-2">
            <FacebookLikeButton href={`${ORIGIN}${asPath}`} />
            <PostShare title={data.title} href={`${ORIGIN}${asPath}`} />
          </div>
        </Container>
      </DefaultLayout>
    </>
  );
};

export default Post;
