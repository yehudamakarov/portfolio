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

const useStyles = makeStyles((theme) => createStyles({
    footer: {
      textAlign: "center",
      marginTop: theme.spacing(2)
    }
  }
))

const Layout = ({ children }) => {
  const classes = useStyles()
  const data = useStaticQuery<SiteTitleQueryQuery>(graphql`
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
      <Header title={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer className={classes.footer}>
        © {new Date().getFullYear()}, living.
      </footer>
    </TopLayout>
  )
}

export default Layout
