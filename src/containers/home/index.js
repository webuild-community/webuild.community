// External
import React from 'react'

// Internal
import DefaultLayout from '@/components/DefaultLayout'
import PageHead from '@/components/PageHead'
import HeroBanner from './HeroBanner'
import WhatWeDo from './WhatWeDo'
import Community from './Community'
import Supporters from './Supporters'

const Home = () => (
  <DefaultLayout>
    <PageHead />
    <HeroBanner />
    <WhatWeDo />
    <Community />
    <Supporters />
  </DefaultLayout>
)

export default Home
