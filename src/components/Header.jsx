import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import Logo from 'assets/svg/logo.svg';
import LogoWhite from 'assets/svg/logo-white.svg';
import Button from './Button';
import Container from './Container';
import smoothscroll from 'smoothscroll-polyfill';
import classnames from 'classnames';

const Header = ({ variant = 'default' }) => {
  const isPrimaryVariant = variant === 'primary';
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <header
      className={classnames('relative z-10 sm:py-6 py-4', {
        'bg-primary': isPrimaryVariant
      })}
    >
      <Container className="flex items-center justify-between">
        <Link to="/">{isPrimaryVariant ? <LogoWhite /> : <Logo />}</Link>

        <div className="items-center flex">
          <ul className="pr-6 sm:flex hidden">
            <li className="px-6">
              <Link
                className={classnames({
                  'text-subprimary': isPrimaryVariant,
                  'text-gray-800 font-bold': !isPrimaryVariant
                })}
                to="#jobs"
              >
                Jobs
              </Link>
            </li>
            <li className="px-6">
              <Link
                className={classnames({
                  'text-subprimary': isPrimaryVariant,
                  'text-gray-700': !isPrimaryVariant
                })}
                to="#upcoming-events"
              >
                Events
              </Link>
            </li>
            <li className="px-6">
              <Link
                className={classnames({
                  'text-white font-bold': isPrimaryVariant,
                  'text-gray-700': !isPrimaryVariant
                })}
                to="/webuild-day"
              >
                Webuild Day
              </Link>
            </li>
          </ul>

          <a href="https://we-build-vn.slack.com/join/shared_invite/zt-gh7pb9o1-eUEruSdfycMEkKfk5Bkdww#/">
            <Button bgClassName="bg-white" textColorClassName="text-primary">
              Join us
            </Button>
          </a>
        </div>
      </Container>

      <Container className="sm:hidden block border-b border-gray-200 mt-2">
        <ul className="flex whitespace-no-wrap py-3">
          <li className="pr-8">
            <Link
              className={classnames({
                'text-subprimary': isPrimaryVariant,
                'font-bold text-gray-800': !isPrimaryVariant
              })}
              to="#jobs"
            >
              Jobs
            </Link>
          </li>
          <li className="pr-8">
            <Link
              className={classnames({
                'text-subprimary': isPrimaryVariant,
                'text-gray-700': !isPrimaryVariant
              })}
              to="#upcoming-events"
            >
              Events
            </Link>
          </li>
          <li className="pr-8">
            <Link
              className={classnames({
                'text-white font-bold': isPrimaryVariant,
                'text-gray-700': !isPrimaryVariant
              })}
              to="/webuild-day"
            >
              WeBuild Day
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
