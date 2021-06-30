/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import "./layout.css"
import TopLayout from "../gatsby-theme-material-ui-top-layout/components/top-layout"
import theme from "../gatsby-theme-material-ui-top-layout/theme"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <TopLayout theme={theme}>
      {/*<Header siteTitle={data.site.siteMetadata?.title || `Title`} />*/}
      <main>{children}</main>
      <footer
        style={{
          marginTop: `2rem`
        }}
      >
        © {new Date().getFullYear()}, living.
      </footer>
    </TopLayout>
  )
}

export default Layout
