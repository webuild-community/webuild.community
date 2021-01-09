import React from 'react';
import { NextPageContext } from 'next';
import NotFoundPage from 'components/NotFoundPage';

function Error(props: { statusCode: number }) {
  const { statusCode } = props;
  if (statusCode === 404) {
    return <NotFoundPage />;
  }

  const isServerError = statusCode;

  if (!isServerError) {
    console.error(props);
  }

  // TODO: maybe send out a better view??
  return <NotFoundPage />;
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
