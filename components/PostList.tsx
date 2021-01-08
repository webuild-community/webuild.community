import React from 'react';
import { BlogPostResponse } from '../apis/contentful';
import Link from 'next/link';
import { formatDatetime } from 'utils/formatDatetime';

interface BlogListProps extends BlogPostResponse {}

const PostList = ({ entries }: BlogListProps) => {
  return (
    <div className="divide-y divide-gray-200">
      {entries.map(post => (
        <div className="py-3" key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            <a className="text-lg font-bold mb-1 hover:text-primary hover:underline">
              {post.title}
            </a>
          </Link>
          <p className="mt-1 text-sm font-normal">
            {formatDatetime(post.createdAt, 'dddd DD, YYYY')}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
