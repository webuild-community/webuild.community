// External
import React from 'react'

// Internal
import Logo from '@/components/svg/Logo'

const Header = () => (
  <header className="border-b border-grey-lighter relative z-10">
    <div className="container">
      <div className="flex items-center justify-between py-4">
        <a href="/">
          <Logo className="logo" />
        </a>
        <a
          href="/chat"
          className="text-white bg-black px-8 py-2 font-medium leading-normal"
        >
          Join Us
        </a>
      </div>
    </div>
  </header>
)

export default Header
