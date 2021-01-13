import React from 'react';
import classnames from 'classnames';

interface Item {
  href: string;
  imgUrl: string;
  title: string;
}

interface Props {
  items: Item[];
  center?: boolean;
  className?: string;
  aClassName?: string;
}

const Gallery = ({ items, center, className, aClassName }: Props) => (
  <div
    className={classnames('flex flex-wrap', className, {
      'justify-center': center
    })}
  >
    {items.map(({ href, imgUrl, title }) => (
      <a
        href={href}
        key={imgUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={classnames(
          'w-1/2 sm:w-1/3 lg:w-1/5 -mt-px -mr-px border border-gray-200',
          aClassName
        )}
      >
        <img src={imgUrl} alt={title} className="w-full block" />
      </a>
    ))}
  </div>
);

export default Gallery;
