import React from 'react';
import { formatDatetime } from 'utils/formatDatetime';
import { PostDetailResponse } from '../apis/contentful';
import Link from 'next/link';

const PostInfo = ({
  createdAt,
  tags
}: {
  createdAt: string;
  tags: PostDetailResponse['tags'];
}) => {
  return (
    <div className="flex items-center space-x-2 text-gray-700">
      <span className="mt-1 text-sm font-medium">
        {formatDatetime(createdAt, 'MMMM DD, YYYY')}
      </span>
      <span>-</span>
      <div>
        {tags.map(({ name, slug }, index) => (
          <React.Fragment key={name}>
            <Link href={`/news/tags/${slug}`}>
              <a className="text-primary uppercase text-xs font-semibold">
                {name}
              </a>
            </Link>
            {index < tags.length - 1 ? ', ' : ''}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PostInfo;
