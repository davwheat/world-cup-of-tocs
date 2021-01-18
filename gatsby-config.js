/* eslint-disable */

const __IS_DEV__ = process.env.NODE_ENV !== 'production'

// These plugins will only be used in production builds
const prodPlugins = !__IS_DEV__
  ? [
      {
        resolve: `gatsby-plugin-cookiehub-banner`,
        options: {
          cookieHubId: '39632385',
          cookieHubV2Api: true,
          categories: [
            {
              categoryName: 'analytics', // Unique id of the category which is set by Cookiehub.
              cookieName: 'gatsby-plugin-google-analytics-gdpr_cookies-enabled', // Your custom cookie name
            },
          ],
        },
      },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          // The property ID; the tracking code won't be generated without it.
          trackingId: 'UA-20362245-9',
        },
      },
      {
        resolve: 'gatsby-plugin-remove-console',
        options: {
          exclude: ['error', 'warn'],
        },
      },
    ]
  : []

module.exports = {
  siteMetadata: {},
  plugins: [
    ...prodPlugins,
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-head`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `World Cup of Train Operators`,
        short_name: `Train Cup`,
        start_url: `/`,
        background_color: `#E04303`,
        theme_color: `#E04303`,
        display: `minimal-ui`,
        icon: `icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-less`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-webpack-size`,
    `gatsby-plugin-material-ui`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
