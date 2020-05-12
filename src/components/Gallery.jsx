import React from 'react';

const Gallery = ({ items }) => (
  <div className="flex flex-wrap">
    {items.map(({ href, imgUrl, title }) => (
      <a href={href} key={imgUrl} target="_blank" rel="noopener noreferrer">
        <img src={imgUrl} alt={title} />
      </a>
    ))}
  </div>
);

export default Gallery;
