import React from 'react';
import GithubIcon from 'assets/svg/github.svg';
import EmailIcon from 'assets/svg/mail.svg';
import Container from './Container';

const Footer = () => (
  <footer className="bg-gray-900 sm:pt-14 pt-10">
    <Container>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full sm:w-1/2 lg:w-1/3 px-3">
          <h6 className="text-base font-bold text-white mb-2">About us</h6>
          <p className="text-gray-500">
            WeBuild Community is a platform for developers in Vietnam to connect
            and share their knowledge via a wide range of offline and online
            activities.
          </p>
        </div>
        <div className="lg:block hidden sm:w-1/3 px-3"></div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-3 sm:mt-0 mt-10">
          <div className="flex items-center lg:justify-start sm:justify-end justify-start">
            <a href="https://github.com/webuild-community" className="mr-5">
              <GithubIcon fill="currentColor" />
            </a>

            <a
              href="mailto:hello@webuild.community"
              className="flex items-center text-gray-500 text-base font-bold whitespace-nowrap"
            >
              <EmailIcon fill="currentColor" />
              <span className="ml-2">hello@webuild.community</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 sm:py-6 pt-6 sm:mt-20 mt-5 pb-14">
        <p className="text-gray-500 text-sm sm:text-center">
          WeBuild Community © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </Container>
  </footer>
);

export default Footer;
