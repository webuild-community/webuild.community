import React from 'react';
import { BlogPostResponse } from '../apis/contentful';
import Link from 'next/link';
import { formatDatetime } from 'utils/formatDatetime';
import Pagination from 'components/Pagination';

interface BlogListProps extends BlogPostResponse {}

const PostList = ({ entries, total, skip }: BlogListProps) => {
  return (
    <>
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
                    <Link href={`/blog/tags/${slug}`} key={name}>
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
      {total > 0 ? (
        <Pagination entries={entries} total={total} skip={skip} />
      ) : null}
    </>
  );
};

export default PostList;
