import { Link } from 'gatsby';
import React from 'react';
import Logo from 'assets/svg/logo.svg';
import Button from './Button';
import Container from './Container';

const Header = () => (
  <header className="relative z-10 py-6">
    <Container className="flex items-center justify-between">
      <Link to="/">
        <Logo />
      </Link>

      <div className="flex items-center">
        <ul className="flex pr-6">
          <li className="px-6">
            <Link className="font-bold text-gray-800" href="/">
              Jobs
            </Link>
          </li>
          <li className="px-6">
            <Link className="text-gray-700" href="/">
              Events
            </Link>
          </li>
          <li className="px-6">
            <Link className="text-gray-700" href="/">
              Build @ Weekend
            </Link>
          </li>
        </ul>

        <Link to="/chat">
          <Button>Join us</Button>
        </Link>
      </div>
    </Container>
  </header>
);

export default Header;
