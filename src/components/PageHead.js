// External
import React from 'react'
import { Head } from 'react-static'

// Internal
import { siteRoot } from '@/config'

const PageHead = ({
  title = 'WeBuild ',
  desc = 'WeBuild Community is a platform that connects developers in Vietnam, where they can share their knowledge and experience, while working, learning, and building cool stuffs together.',
  path = '',
  ogImagePath = 'webuild-og.png',
  keywords = ['WeBuild', 'commutity', 'connect', 'developer', 'Vietnam'],
  fbAppId = '',
  fbPages = '',
}) => (
  <Head>
    <title>{`${title}`}</title>
    <meta name="description" content={desc} />
    <meta name="keywords" content={keywords} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={siteRoot + `${path}`} />

    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:site_name" content="Tengui.ai" />

    <meta property="og:image" content={`${siteRoot}/images/${ogImagePath}`} />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="680" />
    <meta property="og:image:alt" content={title} />

    <meta property="fb:app_id" content={fbAppId} />
    <meta property="fb:pages" content={fbPages} />
    <meta property="ia:markup_url" content={siteRoot} />
  </Head>
)

export default PageHead
