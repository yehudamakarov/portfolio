import * as React from "react"
import { useEffect, useState } from "react"
import CssBaseline from "@mui/material/CssBaseline"
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles"
import { useDarkMode } from "../../src/utils/useDarkMode"
import { graphql, useStaticQuery } from "gatsby"
import { SiteInfoQuery } from "../../gatsby-graphql"

export interface DarkModeContextType {
  darkModeEnabled: boolean
  setDarkModeEnabled: ((value: (((val: boolean) => boolean) | boolean)) => void)
}

export const DarkModeContext = React.createContext<DarkModeContextType>({
  darkModeEnabled: true, setDarkModeEnabled: () => {

  }
})

export default function TopLayout({ children }) {
  const siteInfoQuery = useStaticQuery<SiteInfoQuery>(
    graphql`
        query SiteInfo {
            site {
                siteMetadata {
                    author
                    description
                    title
                    shortTitle
                }
            }
        }
    `
  )

  const [darkModeEnabled, setDarkModeEnabled] = useDarkMode()
  const [isClient, setIsClient] = useState(false)
  useEffect(() => setIsClient(true), [setIsClient, darkModeEnabled])

  const getOptions = (darkModeEnabled: boolean): ThemeOptions => {
    return ({
      palette: {
        ...(darkModeEnabled
          ? {
            mode: "dark",
            primary: {
              main: 'rgba(2,119,189,0.91)',
              contrastText: '#fdf9f1',
            },
            secondary: {
              main: '#7CB46A',
              contrastText: '#FDF9F1',
            },
            error: {
              main: '#e24813',
              contrastText: '#FDF9F1',
            },
            background: {
              default: '#141929',
              paper: '#1B2237',
            },
            text: {
              primary: '#FDF9F1',
            },
          }
          : {
            mode: "light",
            primary: {
              main: "#1B2237",
              contrastText: "#fdf9f1"
            },
            secondary: {
              main: "#4c7a3d",
              contrastText: "#FDF9F1"
            },
            error: {
              main: "#ba3912",
              contrastText: "#FDF9F1"
            },
            background: {
              paper: "#F9F9F6",
              default: "#F8F8F7"
            },
            text: {
              primary: "#10140D",
              disabled: "rgba(16,20,13,0.38)",
              secondary: "#002f48"
            }
          })
      },
      typography: {
        h1: {
          fontSize: "2.2rem",
          fontWeight: 900,
          lineHeight: 0.99
        },
        h2: {
          fontSize: "2rem",
          fontWeight: 700
        },
        h3: {
          fontSize: "1.9rem",
          fontWeight: 700
        },
        h4: {
          fontSize: "1.4rem",
          fontWeight: 700
        },
        h5: {
          fontSize: "1.3rem"
        },
        fontFamily: "Lato",
        fontSize: 13,
        fontWeightRegular: 500,
        fontWeightMedium: 700,
        fontWeightBold: 900,
        subtitle1: {
          fontWeight: 700,
          fontFamily: "Lato"
        },
        body1: {
          fontSize: "0.93rem"
        },
        subtitle2: {
          fontWeight: 700,
          fontSize: "0.83rem"
        },
        overline: {
          fontWeight: 500
        }
      }
    })
  }
  const theme = React.useMemo(() => createTheme(getOptions(darkModeEnabled)), [darkModeEnabled, setDarkModeEnabled])

  return (
    <React.Fragment key={String(isClient)}>
      {/*<MyTopHelmet />*/}
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <DarkModeContext.Provider value={{ darkModeEnabled, setDarkModeEnabled }}>
          {children}
        </DarkModeContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  )
}
