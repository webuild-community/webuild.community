import Link from 'next/link';
import React, { useEffect } from 'react';
import { ReactComponent as Logo } from '../assets/svg/logo.svg';
import { ReactComponent as LogoWhite } from '../assets/svg/logo-white.svg';
import Button from './Button';
import Container from './Container';
import smoothscroll from 'smoothscroll-polyfill';
import classnames from 'classnames';
import { useRouter } from 'next/router';

const menuItems = [
  {
    href: '/#jobs',
    name: 'Jobs'
  },
  {
    href: '/#upcoming-events',
    name: 'Events'
  },
  {
    href: '/news',
    name: 'News'
  },
  {
    href: '/code-for-vietnam',
    name: 'Code for Vietnam'
  }
];

const Header = ({ variant = 'default' }) => {
  const isPrimaryVariant = variant === 'primary';
  const { pathname } = useRouter();

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  const linkRender = ({
    item,
    isPrimaryVariant
  }: {
    item: { href: string; name: string };
    isPrimaryVariant: boolean;
  }) => {
    return (
      <Link href={item.href}>
        <a
          className={classnames({
            'text-subprimary': isPrimaryVariant,
            'text-gray-800': !isPrimaryVariant,
            'font-bold':
              pathname === item.href ||
              (pathname === '/' && item.href === '/#jobs')
          })}
        >
          {item.name}
        </a>
      </Link>
    );
  };

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
            {menuItems.map(item => (
              <li className="px-6" key={item.name}>
                {linkRender(item, isPrimaryVariant)}
              </li>
            ))}
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
          {menuItems.map((item, idx) => (
            <li
              className={idx === menuItems.length - 1 ? '' : 'pr-8'}
              key={item.name}
            >
              {linkRender(item, isPrimaryVariant)}
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
};

export default Header;
