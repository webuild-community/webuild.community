// const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require('./tailwind.config.js')

// const fullConfig = resolveConfig(tailwindConfig)

const siteRoot = (() => {
  // handles conditional `siteRoot` on Netlify environment
  function getSiteRoot(context = '') {
    // get Netlify deploy urls
    switch (context) {
      default:
        return process.env.URL
      case 'production':
        return process.env.URL
      case 'branch-deploy':
      case 'deploy-preview':
        return process.env.DEPLOY_PRIME_URL
    }
  }
  return getSiteRoot(process.env.CONTEXT) || process.env.SITE_ROOT || ''
})()

module.exports = {
  siteMetadata: {
    title: 'WeBuild',
    description: 'WeBuild Website',
    siteName: 'WeBuild',
    siteRoot,
    keywords: [],
    meta: [],
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // name: `gatsby-starter-tailwind`,
        // short_name: `starter`,
        // start_url: `/`,
        // background_color: fullConfig.theme.colors.white,
        // theme_color: fullConfig.theme.colors.teal['400'],
        // display: `minimal-ui`,
        icon: `src/assets/favicons/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg\/.*\.svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          '~': `./src`,
          $sources: `./sources`,
        },
      },
    },
  ],
}
