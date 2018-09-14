// External
import React from 'react'

// Internal
import GithubIcon from '@/components/svg/Github'
import EmailIcon from '@/components/svg/Email'

const Footer = () => (
  <footer className="bg-grey-lighter">
    <div className="container">
      <div className="row flex flex-wrap pt-13 items-end">
        <div className="col sm:w-2/3 w-full mb-10">
          <h4 className="uppercase mb-4">About Us</h4>
          <p className="lg:w-2/3 text-grey-darker">
            WeBuild Community is a platform for developers in Vietnam to connect
            and share their knowledge via a wide range of offline and online
            activities.
          </p>
        </div>
        <div className="col sm:w-1/3 w-full mb-10 sm:text-right">
          <a
            href="mailto:hello@webuild.community"
            className="font-bold flex items-center sm:justify-end text-grey-dark hover:text-black"
          >
            <EmailIcon className="text-xl" width="1em" fill="currentColor" />
            <span className="ml-3">hello@webuild.community</span>
          </a>

          <div className="mt-5">
            <a
              target="_blank"
              href="#"
              className="text-grey-dark hover:text-black"
            >
              <GithubIcon
                className="text-2xl"
                width="1em"
                fill="currentColor"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="border-t" />
        </div>
      </div>
      <div className="row py-5">
        <div className="col">
          <p className="text-grey-dark text-sm text-center">
            {'WeBuild Community © 2018 All rights reserved.'}
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
