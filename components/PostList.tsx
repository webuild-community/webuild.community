import React from 'react';
import { BlogPostResponse } from '../apis/contentful';
import Link from 'next/link';
import { formatDatetime } from 'utils/formatDatetime';

interface BlogListProps extends BlogPostResponse {}

const PostList = ({ entries }: BlogListProps) => {
  return (
    <div className="divide-y divide-gray-200">
      {entries.map(({ slug, title, createdAt, tags }) => (
        <div className="py-3" key={slug}>
          <Link href={`/blog/${slug}`}>
            <a className="text-lg font-bold mb-1 hover:text-primary underline transition-all duration-200">
              {title}
            </a>
          </Link>
          <div className="flex items-center space-x-2 text-gray-700">
            <span className="mt-1 text-sm font-normal">
              {formatDatetime(createdAt, 'dddd DD, YYYY')}
            </span>
            <span>-</span>
            <div>
              {tags.map(({ name, slug }, index) => (
                <>
                  <Link
                    href="/blog/tag/:tagSlug"
                    key={name}
                    as={`/blog/tags/${slug}`}
                  >
                    <a className="text-primary uppercase text-xs font-semibold">
                      {name}
                    </a>
                  </Link>
                  {index < tags.length - 1 ? ', ' : ''}
                </>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
