/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import TopLayout from "../../gatsby-theme-material-ui-top-layout/components/top-layout"
import { SiteTitleQueryQuery } from "../../types/generated"
import { Header } from "../header"
import { createTheme } from "@material-ui/core/styles"
import Seo from "../seo"
import { useMediaQuery } from "@material-ui/core"
import { Footer } from "../footer"
import { useLocalStorage } from "./useLocalStorage"

const Layout: React.FC<{ currentPage: string }> = ({
  children,
  currentPage,
}) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)", {
    noSsr: true,
  })
  const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage(
    "dark-mode-enabled",
    prefersDarkMode
  )
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: darkModeEnabled ? "dark" : "light",
          primary: {
            main: "#171b29",
          },
          secondary: {
            main: "#474E38",
          },
        },
        typography: {
          fontSize: 18,
        },
        overrides: {
          MuiIconButton: {
            root: {
              // color: darkModeEnabled ? undefined : "rgba(0,0,0,0.87)",
            },
          },
        },
      }),
    [darkModeEnabled, prefersDarkMode, setDarkModeEnabled]
  )
  console.log(theme)
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
      <Header
        setDarkModeEnabled={setDarkModeEnabled}
        darkModeEnabled={darkModeEnabled}
        shortTitle={data.site.siteMetadata.shortTitle}
        title={data.site.siteMetadata.title}
        currentPage={currentPage}
      />
      <main>{children}</main>
      <Footer />
    </TopLayout>
  )
}

export default Layout
