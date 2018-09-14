// External
import React from 'react'

// Internal

const Supporters = () => (
  <section id="supporters" className="pb-10">
    <div className="container sm:text-left text-center">
      <div className="row mb-12">
        <div className="col">
          <h4 className="uppercase">Supporter</h4>
        </div>
      </div>
      <div className="row flex flex-wrap">
        <div className="col sm:w-1/4 w-1/2 mb-20">
          <a href="#" target="_blank">
            <img
              className="bw-hover"
              width="116px"
              src="/images/tiki.png"
              srcSet="/images/tiki@2x.png 2x"
            />
          </a>
        </div>
        <div className="col sm:w-1/4 w-1/2 mb-20">
          <a href="#" target="_blank">
            <img
              className="bw-hover"
              width="149px"
              src="/images/chotot.png"
              srcSet="/images/chotot@2x.png 2x"
            />
          </a>
        </div>
        <div className="col sm:w-1/4 w-1/2 mb-20 text-center">
          <a href="#" target="_blank">
            <img
              className="bw-hover"
              width="199"
              src="/images/dwarves.png"
              srcSet="/images/dwarves@2x.png 2x"
            />
          </a>
        </div>
        <div className="col sm:w-1/4 w-1/2 mb-20 sm:text-right text-center">
          <a href="#" target="_blank">
            <img
              className="bw-hover"
              width="173"
              src="/images/envato.png"
              srcSet="/images/envato@2x.png 2x"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Supporters
