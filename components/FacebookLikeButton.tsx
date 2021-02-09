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

const fbAppId = process.env.FACEBOOK_APP_ID || '';

function FacebookLikeButton({
  href,
  size = 'small',
  layout = 'button_count',
  share = false,
  appId = fbAppId,
  className
}: Props) {
  return (
    <>
      <div
        className={classnames('fb-like', className)}
        data-href={href}
        data-width=""
        data-size={size}
        data-layout={layout}
        data-action="like"
        data-share={share.toString()}
      />

      <>
        <div id="fb-root" />
        <script
          async
          defer
          crossOrigin="anonymous"
          src={`https://connect.facebook.net/en_US/sdk.js#xfbml=1&autoLogAppEvents=1&version=v7.0&appId=${appId}`}
        />
      </>
    </>
  );
}

export default FacebookLikeButton;
