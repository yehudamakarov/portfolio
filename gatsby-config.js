require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

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
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`
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
  ],
  siteMetadata: {
    shortTitle: "ym",
    title: `yehudamakarov`,
    description: `My home base on the web. For what it is worth.`,
    author: `Yehuda Moshe Makarov`
  }
}
