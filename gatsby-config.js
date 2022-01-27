require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    shortTitle: "ym",
    title: `yehudamakarov`,
    description: `My home base on the web. For what it is worth.`,
    author: `Yehuda Makarov`,
    repository: "https://github.com/yehudamakarov/portfolio"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "yehudamakarov",
        short_name: "ym",
        start_url: "/",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/iconmonstr-code-fork-2.svg", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`
      }
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        footnotes: true,
        // blocks: ["h2"], Blocks option value can be provided here as an array.
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 820
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              dashes: `oldschool`
            }
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`
        ]
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GITHUB_API_TOKEN,
        variables: {},
        graphQLQuery: `
        query {
          user(login: "yehudamakarov") {
            id
            pinnedItems(first: 10) {
              nodes {
                ... on Repository {
                  id
                  name
                  databaseId
                  createdAt
                  url
                }
              }
            }
          }
        }
        `
      }
    }
  ]
}
