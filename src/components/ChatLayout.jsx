import React from 'react';
import Logo from 'assets/svg/logo.svg';
import { Link } from 'gatsby';

const ChatLayout = ({ children }) => (
  <div className="font-sans font-normal leading-normal min-h-screen bg-gray-100 ">
    <header className="flex justify-center border-b border-gray-200 py-6 bg-white">
      <Link to="/">
        <Logo />
      </Link>
    </header>
    <main className="main">{children}</main>
  </div>
);

export default ChatLayout;
