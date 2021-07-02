module.exports = {
  siteMetadata: {
    shortTitle: "ym",
    title: `yehudamakarov`,
    description: `My home base on the web. For what it is worth.`,
    author: `Yehuda Moshe Makarov`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/../src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `yehudamakarov`,
        short_name: `yehudamakarov`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/iconmonstr-code-fork-2.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-config-plugin-offline`,
    `gatsby-theme-material-ui`,
  ],
}
