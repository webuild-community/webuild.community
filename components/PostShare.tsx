import React from 'react';
import { ReactComponent as TwitterIcon } from '../assets/svg/twitter.svg';
import { ReactComponent as FacebookIcon } from '../assets/svg/facebook.svg';
import { ReactComponent as LinkIcon } from '../assets/svg/link.svg';
import classnames from 'classnames';

interface Props {
  title: string;
  href: string;
  hashtags?: string[];
  className?: string;
}

const PostShare = ({ title, href, hashtags = [], className }: Props) => {
  return (
    <div
      className={classnames(
        'flex items-center justify-center space-x-3 text-xl leading-none mx-2',
        className
      )}
    >
      <a
        className="text-gray-500 hover:text-gray-700 transition-all duration-150"
        href={`http://twitter.com/share?text=${encodeURIComponent(
          title
        )}&url=${encodeURIComponent(href)}&hashtags=${encodeURIComponent(
          hashtags.join(',')
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
      >
        <TwitterIcon />
      </a>
      <a
        className="text-gray-500 hover:text-gray-700 transition-all duration-150"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          href
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
      >
        <FacebookIcon />
      </a>
      <button
        type="button"
        className="text-gray-500 hover:text-gray-700 transition-all duration-150"
        aria-label="Copy link to post"
        onClick={() => navigator.clipboard.writeText(window.location.href)}
      >
        <LinkIcon size={18} />
      </button>
    </div>
  );
};

export default PostShare;
