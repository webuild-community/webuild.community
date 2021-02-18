import React from 'react';
import classnames from 'classnames';

interface Props {
  className?: string;
  href: string;
  size?: string;
  layout?: 'standard' | 'button_count';
  share?: boolean;
  appId?: string;
}

function FacebookLikeButton({
  href,
  size = 'small',
  layout = 'button_count',
  share = false,
  className
}: Props) {
  return (
    <div
      className={classnames('fb-like', className)}
      data-href={href}
      data-width=""
      data-size={size}
      data-layout={layout}
      data-action="like"
      data-share={share.toString()}
    />
  );
}

export default FacebookLikeButton;
