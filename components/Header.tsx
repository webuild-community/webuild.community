import Link from 'next/link';
import React, { useEffect } from 'react';
import { ReactComponent as Logo } from '../assets/svg/logo.svg';
import { ReactComponent as LogoWhite } from '../assets/svg/logo-white.svg';
import Button from './Button';
import Container from './Container';
import smoothscroll from 'smoothscroll-polyfill';
import classnames from 'classnames';
import { useRouter } from 'next/router';

const Header = ({ variant = 'default' }) => {
  const isPrimaryVariant = variant === 'primary';
  const { pathname } = useRouter();

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
        <Link href="/">
          <a>{isPrimaryVariant ? <LogoWhite /> : <Logo />}</a>
        </Link>

        <div className="items-center flex">
          <ul className="pr-6 sm:flex hidden">
            <li className="px-6">
              <Link href="/#jobs">
                <a
                  className={classnames({
                    'text-subprimary': isPrimaryVariant,
                    'text-gray-800': !isPrimaryVariant,
                    'font-bold': pathname === '/'
                  })}
                >
                  Jobs
                </a>
              </Link>
            </li>
            <li className="px-6">
              <Link href="/#upcoming-events">
                <a
                  className={classnames({
                    'text-subprimary': isPrimaryVariant,
                    'text-gray-700': !isPrimaryVariant
                  })}
                >
                  Events
                </a>
              </Link>
            </li>
            <li className="px-6">
              <Link href="/news">
                <a
                  className={classnames({
                    'text-subprimary': isPrimaryVariant,
                    'text-gray-700': !isPrimaryVariant,
                    'font-bold': pathname.startsWith('/news')
                  })}
                >
                  News
                </a>
              </Link>
            </li>
            <li className="px-6">
              <Link href="/code-for-vietnam">
                <a
                  className={classnames({
                    'text-subprimary': isPrimaryVariant,
                    'text-gray-700': !isPrimaryVariant,
                    'font-bold': pathname.startsWith('/code-for-vietnam')
                  })}
                >
                  Code for Vietnam
                </a>
              </Link>
            </li>
          </ul>

          <a href="https://we-build-vn.slack.com/join/shared_invite/zt-gh7pb9o1-eUEruSdfycMEkKfk5Bkdww#/">
            <Button
              bgClassName={classnames({
                'bg-white': isPrimaryVariant,
                'bg-primary': !isPrimaryVariant
              })}
              textColorClassName={classnames({
                'text-primary': isPrimaryVariant,
                'text-white': !isPrimaryVariant
              })}
            >
              Join Slack
            </Button>
          </a>
        </div>
      </Container>

      <Container
        className={classnames('sm:hidden block border-b mt-2', {
          'border-subprimary': isPrimaryVariant,
          'border-gray-200': !isPrimaryVariant
        })}
      >
        <ul className="flex whitespace-nowrap py-3">
          <li className="pr-8">
            <Link href="/#jobs">
              <a
                className={classnames({
                  'text-subprimary': isPrimaryVariant,
                  'font-bold text-gray-800': !isPrimaryVariant
                })}
              >
                Jobs
              </a>
            </Link>
          </li>
          <li className="pr-8">
            <Link href="/#upcoming-events">
              <a
                className={classnames({
                  'text-subprimary': isPrimaryVariant,
                  'text-gray-700': !isPrimaryVariant
                })}
              >
                Events
              </a>
            </Link>
          </li>
          <li className="pr-8">
            <Link href="/news">
              <a
                className={classnames({
                  'text-subprimary': isPrimaryVariant,
                  'text-gray-700': !isPrimaryVariant,
                  'font-bold': pathname.startsWith('/news')
                })}
              >
                News
              </a>
            </Link>
          </li>
          <li>
            <Link href="/news">
              <a
                className={classnames({
                  'text-subprimary': isPrimaryVariant,
                  'text-gray-700': !isPrimaryVariant,
                  'font-bold': pathname.startsWith('/code-for-vietnam')
                })}
              >
                Code for Vietnam
              </a>
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
