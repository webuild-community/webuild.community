import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import Logo from 'assets/svg/logo.svg';
import Button from './Button';
import Container from './Container';
import smoothscroll from 'smoothscroll-polyfill';

const Header = () => {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <header className="relative z-10 sm:py-6 py-4">
      <Container className="flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>

        <div className="items-center flex">
          <ul className="pr-6 sm:flex hidden">
            <li className="px-6">
              <Link className="font-bold text-gray-800" to="#jobs-section">
                Jobs
              </Link>
            </li>
            <li className="px-6">
              <Link className="text-gray-700" to="#upcoming-events">
                Events
              </Link>
            </li>
          </ul>

          <Link to="/chat">
            <Button>Join us</Button>
          </Link>
        </div>
      </Container>

      <Container className="sm:hidden block border-b border-gray-200 mt-2">
        <ul className="flex whitespace-no-wrap py-3">
          <li className="pr-8">
            <Link className="font-bold text-gray-800" to="#jobs-section">
              Jobs
            </Link>
          </li>
          <li className="pr-8">
            <Link className="text-gray-700" to="#upcoming-events">
              Events
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
