import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import 'typeface-barlow';

interface DefaultLayoutProps {
  headerVariant?: 'default' | 'primary';
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  headerVariant = 'default'
}) => (
  <div className="font-sans leading-medium font-medium">
    <Header variant={headerVariant} />
    <main className="main">{children}</main>
    <Footer />
  </div>
);

export default DefaultLayout;
