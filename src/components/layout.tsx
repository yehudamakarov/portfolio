/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import TopLayout from "../gatsby-theme-material-ui-top-layout/components/top-layout"
import theme from "../gatsby-theme-material-ui-top-layout/theme"
import { SiteTitleQueryQuery } from "../types/generated"
import { Header } from "./header"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import Seo from "./seo"

const useStyles = makeStyles((theme) => createStyles({
    footer: {
      textAlign: "center",
      marginTop: theme.spacing(2)
    }
  }
))

const Layout: React.FC<{currentPage: string}> = ({ children, currentPage }) => {
  const classes = useStyles()
  const data = useStaticQuery<SiteTitleQueryQuery>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          shortTitle
        }
      }
    }
    `)

  return (
    <TopLayout theme={theme}>
      <Seo title={currentPage} />
      <Header shortTitle={data.site.siteMetadata.shortTitle} title={data.site.siteMetadata.title} currentPage={currentPage} />
      <main>{children}</main>
      <footer className={classes.footer}>
        © {new Date().getFullYear()}, living.
      </footer>
    </TopLayout>
  )
}

export default Layout
