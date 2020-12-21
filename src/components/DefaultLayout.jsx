import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import 'typeface-barlow';

const DefaultLayout = ({ children, headerVariant }) => (
  <div className="font-sans leading-medium font-medium">
    <Header variant={headerVariant} />
    <main className="main">{children}</main>
    <Footer />
  </div>
);

export default DefaultLayout;
