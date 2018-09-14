// External
import React from 'react'
import { Link } from 'react-static'

// Internal
import Logo from '@/components/svg/Logo'

const Header = () => (
  <header className="border-b border-grey-lighter">
    <div className="container">
      <div className="flex items-center justify-between py-4">
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <Link
          to="/chat"
          className="text-white bg-black px-8 py-2 font-medium leading-normal"
        >
          Join Us
        </Link>
      </div>
    </div>
  </header>
)

export default Header
