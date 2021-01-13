import React from 'react';
import { BlogPostResponse } from '../apis/contentful';
import Link from 'next/link';

interface PaginationProps extends Omit<BlogPostResponse, 'limit'> {}

const Pagination = ({ entries, total, skip }: PaginationProps) => {
  return (
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
  );
};

export default Pagination;
