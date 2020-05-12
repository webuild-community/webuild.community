// External
import React from 'react';

// Internal

const CommunitySection = () => (
  <section id="community" className="pt-12 pb-8">
    <div className="container">
      <div className="row">
        <div className="col sm:text-left text-center">
          <h4 className="uppercase mb-2">Community</h4>
          <p className="text-grey-darker text-xl">
            We started as many different meetup groups
          </p>
        </div>
      </div>
      <div className="row flex flex-wrap mt-12">
        <div className="col sm:w-1/5 w-1/2 mb-20 sm:text-left text-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/vietnam.ruby/"
          >
            <img
              alt="Ruby Vietnam"
              className="bw-hover"
              width="73"
              src="/images/ruby.png"
              srcSet="/images/ruby@2x.png 2x"
            />
          </a>
        </div>
        <div className="col sm:w-1/5 w-1/2 lg:text-center sm:text-left text-center mb-20">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/golang.org.vn/"
          >
            <img
              alt="GoLang Vietnam"
              className="bw-hover lg:mr-5"
              width="80"
              src="/images/go.png"
              srcSet="/images/go@2x.png 2x"
            />
          </a>
        </div>
        <div className="col sm:w-1/5 w-1/2 lg:text-center sm:text-left text-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/androidcafein/"
          >
            <img
              alt="Android Cafein"
              className="bw-hover sm:ml-5"
              width="73"
              src="/images/android.png"
              srcSet="/images/android@2x.png 2x"
            />
          </a>
        </div>
        <div className="col sm:w-1/5 w-1/2 text lg:text-right text-center mb-20">
          <a
            href="https://www.facebook.com/elixirvn.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Elixir Vietnam"
              className="bw-hover"
              width="80"
              src="/images/elixir.png"
              srcSet="/images/elixir@2x.png 2x"
            />
          </a>
        </div>
        <div className="col sm:w-1/5 w-1/2 lg:text-right text-center mb-20">
          <a
            href="https://www.facebook.com/geekyweekend/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Geeky Weekend"
              className="bw-hover"
              width="60"
              src="/images/geeky.png"
              srcSet="/images/geeky@2x.png 2x"
            />
          </a>
        </div>
        <div className="col sm:w-1/5 w-1/2 mb-20 sm:text-left text-center">
          <a
            href="https://www.facebook.com/vietnamjs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="bw-hover"
              width="84"
              alt="JavaScript Vietnam"
              src="/images/javascript.png"
              srcSet="/images/javascript@2x.png 2x"
            />
          </a>
        </div>
        <div className="col sm:w-4/5 w-full mb-20 sm:text-left text-center">
          <a
            href="https://www.facebook.com/gdgviet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Google Developer Group Vietnam"
              width="273"
              className="mt-5 bw-hover"
              src="/images/GDG.png"
              srcSet="/images/GDG@2x.png 2x"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CommunitySection;
