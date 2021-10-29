module.exports = {
  plugins: [
    "gatsby-plugin-top-layout",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mui-emotion",
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./gatsby-graphql.ts`,
        documentPaths: [
          "./src/**/*.{ts,tsx}"
        ]
      }
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-sharp`,
  ],
  siteMetadata: {
    shortTitle: "ym",
    title: `yehudamakarov`,
    description: `My home base on the web. For what it is worth.`,
    author: `Yehuda Moshe Makarov`
  }
}
