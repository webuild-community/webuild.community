import React from 'react';
import classnames from 'classnames';

const Gallery = ({ items, center, clasName }) => (
  <div
    className={classnames('flex flex-wrap', clasName, {
      'justify-center': center
    })}
  >
    {items.map(({ href, imgUrl, title }) => (
      <a
        href={href}
        key={imgUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-1/5 -mt-px -mr-px border border-gray-200"
      >
        <img src={imgUrl} alt={title} className="w-full block" />
      </a>
    ))}
  </div>
);

export default Gallery;
