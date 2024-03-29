import React from 'react';
import { ReactComponent as Logo } from 'assets/svg/logo.svg';
import Link from 'next/link';
import 'typeface-barlow';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const ChatLayout = ({ children }: Props) => (
  <div className="font-sans leading-medium min-h-screen font-medium">
    <header className="flex justify-center border-b border-gray-200 sm:py-6 py-4 bg-white">
      <Link href="/">
        <Logo />
      </Link>
    </header>
    <main className="main">{children}</main>
  </div>
);

export default ChatLayout;
