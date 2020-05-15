import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import 'typeface-barlow';

const DefaultLayout = ({ children }) => (
  <div className="font-sans font-normal leading-medium font-medium">
    <Header />
    <main className="main">{children}</main>
    <Footer />
  </div>
);

export default DefaultLayout;
