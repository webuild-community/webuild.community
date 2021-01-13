import React from 'react';
import Link from 'next/link';

interface PaginationProps {
  total: number;
  current: number;
  pageSize: number;
}

const Pagination = ({ total, current, pageSize }: PaginationProps) => {
  const numberOfPage = Math.round(total / pageSize);

  return (
    <nav>
      <ul className="list-reset flex justify-center">
        {current > 0 && (
          <li key="first" className="inline-block flex-none mx-1">
            <Link href="?page=1">
              <a className="no-underline text-primary hover:text-black">
                « First
              </a>
            </Link>
          </li>
        )}
        {current > 0 && (
          <li key="prev" className="inline-block flex-none mx-1">
            <Link href={`?page=${current - 1}`}>
              <a className="no-underline text-primary hover:text-black">
                ‹ Prev
              </a>
            </Link>
          </li>
        )}
        {[...Array(numberOfPage)].map((_, i) => (
          <li key={i} className="inline-block flex-none mx-1">
            {i + 1 !== current ? (
              <Link href={`?page=${current}`}>
                <a className="no-underline text-primary hover:text-black">
                  {i + 1}
                </a>
              </Link>
            ) : (
              i + 1
            )}
          </li>
        ))}
        {current < numberOfPage && (
          <li key="next" className="inline-block flex-none mx-1">
            <Link href={`?page=${current + 1}`}>
              <a className="no-underline text-primary hover:text-black">
                Next ›
              </a>
            </Link>
          </li>
        )}
        {current < numberOfPage && (
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
