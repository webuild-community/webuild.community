// External
import React from 'react'

// Internal
import LeftArrow from '~/components/svg/LeftArrow'
import RightArrow from '~/components/svg/RightArrow'

const HeroBannerSection = () => (
  <section
    id="hero"
    className="bg-grey-lightest lg:py-40 sm:py-24 pt-20 pb-24 border-b border-grey-lighter"
  >
    <div className="container">
      <div className="row flex items-center flex-wrap">
        <div className="col sm:w-1/2 w-full">
          <div className="flex items-center overflow-hidden sm:justify-start justify-center">
            <LeftArrow className="sm:w-auto w-12" />
            <h2 className="uppercase lg:mx-10 mx-5 text-center lg:text-3xl text-2xl">
              <span className="whitespace-no-wrap">Join WeBuild</span>
              <br /> Community
            </h2>
            <RightArrow className="sm:w-auto w-12" />
          </div>
        </div>
        <div className="col sm:w-1/2 flex justify-end sm:text-left text-center sm:mt-0 mt-12">
          <div className="lg:w-4/5">
            <p className="font-semibold mb-7 text-grey-darker">
              {
                'WeBuild Community is a platform that connects developers in Vietnam, where they can share their knowledge and experience, while working, learning, and building cool stuffs together.'
              }
            </p>
            <h5 className="text-sm uppercase mb-4">Join us</h5>
            <p>
              {
                'We welcome all developers regardless of their stacks, experiences, and backgrounds to join our many activities.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HeroBannerSection
