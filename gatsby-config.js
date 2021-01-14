module.exports = {
  siteMetadata: {},
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-head`,
    {
      resolve: `gatsby-plugin-cookiehub-banner`,
      options: {
        cookieHubId: '4ab9b9d7',
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
      resolve: `gatsby-plugin-google-analytics-gdpr`,
      options: {
        // The property ID; the tracking code won't be generated without it.
        trackingId: 'UA-20362245-9',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `World Cup of Train Operators`,
        short_name: `TOC Cup`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
