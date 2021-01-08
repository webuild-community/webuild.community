import { createClient, ContentfulClientApi } from 'contentful';
import { Tag, Post } from './types/blog';

export const CONTENT_TYPE_BLOGPOST = 'post';
export const CONTENT_TYPE_TAG = 'tag';

const space = process.env.CONTENTFUL_SPACE || '';
const accessToken = process.env.CONTENTFUL_TOKEN || '';
const previewAccessToken = process.env.CONTENTFUL_PREVIEW_TOKEN || '';
const environment = 'master';
let previewClient: ContentfulClientApi | null = null;

const client = createClient({
  space,
  accessToken,
  environment
});

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt?: string;
  heroImage?: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  tags: Tag['fields'][];
}

export interface BlogPostResponse {
  entries: BlogPost[];
  total: number;
  limit: number;
  skip: number;
}

async function getTagBySlug(slug: string) {
  try {
    const contents = await client.getEntries<Tag['fields']>({
      content_type: CONTENT_TYPE_TAG,
      'fields.slug': slug
    });

    const [{ sys, fields }] = contents.items;

    return {
      id: sys.id,
      slug: fields.slug,
      name: fields.name
    } as BlogTag;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function getBlogPostEntries({
  limit = 5,
  skip = 0,
  tagSlug = ''
}: {
  limit?: number;
  skip?: number;
  tagSlug?: string;
} = {}) {
  let tag = {} as BlogTag;

  if (tagSlug) {
    tag = await getTagBySlug(tagSlug);
  }

  try {
    const contents = await client.getEntries<Post>({
      include: 1,
      limit,
      skip,
      'fields.category.sys.id': tag.id || '',
      content_type: CONTENT_TYPE_BLOGPOST
    });
    const entries = contents.items.map(({ sys, fields }) => ({
      id: sys.id,
      title: fields.title,
      excerpt: fields.excerpt,
      createdAt: sys.createdAt,
      updatedAt: sys.updatedAt,
      slug: fields.slug,
      tags: (fields?.tags || []).map(({ fields: { name, slug } }) => ({
        name,
        slug
      }))
    }));

    const { total } = contents;

    return {
      entries,
      total,
      limit,
      skip
    } as BlogPostResponse;
  } catch (error) {
    return Promise.reject(error);
  }
}

export interface PostDetailResponse {
  id: string;
  slug: string;
  title: string;
  content: any;
  createdAt: string;
  excerpt: string;
  meta: {
    datePublished: string;
    dateModified: string;
  };
  heroImage: string;
  thumbnail: string;
  metaDescription: string;
  tags: { name: string; slug: string }[];
}

export type PostViewMode = 'preview' | 'default';

async function getPostBySlug(slug: string, viewMode: PostViewMode = 'default') {
  if (!previewClient && viewMode === 'preview') {
    previewClient = createClient({
      space,
      accessToken: previewAccessToken,
      environment,
      host: 'preview.contentful.com'
    });
  }

  try {
    const internalClient =
      viewMode === 'preview' && previewClient ? previewClient : client;

    const contents = await internalClient.getEntries<Post>({
      content_type: CONTENT_TYPE_BLOGPOST,
      'fields.slug': slug
    });

    const [entry] = contents.items;

    let heroImage = entry.fields?.heroImage?.fields?.file?.url || '';
    if (heroImage) {
      heroImage = `https:${heroImage}`;
    }

    return {
      id: entry.sys.id,
      slug: entry.fields.slug,
      title: entry.fields.title,
      content: entry.fields.content,
      excerpt: entry.fields.excerpt,
      meta: {
        datePublished: entry.sys.createdAt,
        dateModified: entry.sys.updatedAt
      },
      heroImage,
      tags: (entry.fields?.tags || []).map(({ fields: { name, slug } }) => ({
        name,
        slug
      }))
    } as PostDetailResponse;
  } catch (error) {
    return Promise.reject(error);
  }
}

export default {
  getPostBySlug,
  getBlogPostEntries
};
