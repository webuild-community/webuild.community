import React from 'react';
import Logo from 'assets/svg/logo.svg';
import Button from './Button';

const Header = () => (
  <header className="relative z-10">
    <div className="flex items-center justify-between">
      <a href="/">
        <Logo />
      </a>
      <a href="/chat">
        <Button>Join Us</Button>
      </a>
    </div>
  </header>
);

export default Header;
