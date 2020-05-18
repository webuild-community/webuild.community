import React from 'react';
import Container from 'components/Container';

const NotFound = () => (
  <Container className="flex">
    <div className="border-t-2 border-primary mt-20 mx-auto">
      <div
        className="border px-5 pt-6 border-gray-200 bg-white text-center"
        style={{ maxWidth: 600 }}
      >
        <h1 className="text-xl font-bold leading-normal mb-2">
          {"The page you were looking for doesn't exist."}
        </h1>
        <p className="font-medium text-gray-700">
          You may have mistyped the address or the page may have moved.
        </p>
        <div className="border-t border-gray-200 -mx-5 px-5 py-2 mt-6 bg-gray-100 font-medium text-gray-700">
          If you are the application owner check the logs for more information.
        </div>
      </div>
    </div>
  </Container>
);

export default NotFound;
