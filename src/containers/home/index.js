// External
import React from 'react'

// Internal
import DefaultLayout from '@/components/DefaultLayout'
import PageHead from '@/components/PageHead'
import HeroBanner from './HeroBanner'
import WhatWeDo from './WhatWeDo'
import Jobs from './Jobs'
import Community from './Community'
import Supporters from './Supporters'

const Home = () => (
  <DefaultLayout>
    <PageHead />
    <HeroBanner />
    <WhatWeDo />
    <Jobs />
    <Community />
    <Supporters />
  </DefaultLayout>
)

export default Home
