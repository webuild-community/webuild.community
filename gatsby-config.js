const tailwindConfig = require('./tailwind.config.js');
const path = require('path');

const siteRoot = (() => {
  // handles conditional `siteRoot` on Netlify environment
  function getSiteRoot(context = '') {
    // get Netlify deploy urls
    switch (context) {
      default:
        return process.env.URL;
      case 'production':
        return process.env.URL;
      case 'branch-deploy':
      case 'deploy-preview':
        return process.env.DEPLOY_PRIME_URL;
    }
  }
  return getSiteRoot(process.env.CONTEXT) || process.env.SITE_ROOT || '';
})();

module.exports = {
  siteMetadata: {
    title: 'WeBuild',
    description: 'WeBuild Website',
    siteName: 'WeBuild',
    siteRoot,
    keywords: [],
    meta: []
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/sources`,
        name: 'sources'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: []
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Webuild Vietnam`,
        short_name: `webuild`,
        start_url: `/`,
        background_color: '#ffffff',
        theme_color: '#34785C',
        display: `minimal-ui`,
        icon: `src/assets/favicons/favicon-v2.png`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg\/.*\.svg/
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production` ? [require(`cssnano`)] : [])
        ]
      }
    },
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        sources: path.join(__dirname, 'sources/'),
        root: path.join(__dirname, 'src/'),
        containers: path.join(__dirname, 'src/containers'),
        components: path.join(__dirname, 'src/components'),
        utils: path.join(__dirname, 'src/utils'),
        assets: path.join(__dirname, 'src/assets'),
        css: path.join(__dirname, 'src/css')
      }
    }
  ]
};
