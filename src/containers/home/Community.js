// External
import React from 'react'

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
          <img
            className="bw-hover"
            width="73"
            src="/images/ruby.png"
            srcSet="/images/ruby@2x.png 2x"
          />
        </div>
        <div className="col sm:w-1/5 w-1/2 lg:text-center sm:text-left text-center mb-20">
          <img
            className="bw-hover"
            width="135"
            src="/images/go.png"
            srcSet="/images/go@2x.png 2x"
          />
        </div>
        <div className="col sm:w-1/5 w-1/2 lg:text-center sm:text-left text-center">
          <img
            className="bw-hover"
            width="73"
            src="/images/android.png"
            srcSet="/images/android@2x.png 2x"
          />
        </div>
        <div className="col sm:w-1/5 w-1/2 lg:text-right mb-20">
          <img
            className="bw-hover"
            width="136"
            src="/images/elixir.png"
            srcSet="/images/elixir@2x.png 2x"
          />
        </div>
        <div className="col sm:w-1/5 w-1/2 lg:text-right text-center mb-20">
          <img
            className="bw-hover"
            width="60"
            src="/images/geeky.png"
            srcSet="/images/geeky@2x.png 2x"
          />
        </div>
        <div className="col sm:w-1/5 w-1/2 mb-20">
          <img
            className="bw-hover"
            width="84"
            src="/images/java.png"
            srcSet="/images/java@2x.png 2x"
          />
        </div>
        <div className="col sm:w-4/5 w-full mb-20 sm:text-left text-center">
          <img
            width="273"
            className="mt-5 bw-hover"
            src="/images/GDG.png"
            srcSet="/images/GDG@2x.png 2x"
          />
        </div>
      </div>
    </div>
  </section>
)

export default CommunitySection
