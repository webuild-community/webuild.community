// Use babel config of this project to apply for outside packages
require('dotenv').config();

module.exports = {
  webpack(config) {
    if (process.env.NODE_ENV === 'production') {
      config.resolve.alias['react'] = 'preact/compat';
      config.resolve.alias['react-dom'] = 'preact/compat';
      config.resolve.alias['react-ssr-prepass'] = 'preact-ssr-prepass';
    }

    return config;
  },
  env: {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    CONTENTFUL_TOKEN: process.env.CONTENTFUL_TOKEN,
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE
  },
  // Target must be serverless for netlify deployment
  // https://github.com/netlify/next-on-netlify#1-set-nextjs-target-to-serverless
  target: 'serverless'
};
