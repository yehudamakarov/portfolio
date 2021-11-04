import * as React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles"
import { useDarkMode } from "../../src/utils/useDarkMode"
import MyTopHelmet from "./helmet/MyTopHelmet"

export interface DarkModeContextType {
  darkModeEnabled: boolean
  setDarkModeEnabled: ((value: (((val: boolean) => boolean) | boolean)) => void)
}

export const DarkModeContext = React.createContext<DarkModeContextType>({
  darkModeEnabled: true, setDarkModeEnabled: () => {

  }
})

export default function TopLayout(props) {
  const [darkModeEnabled, setDarkModeEnabled] = useDarkMode()

  const getOptions = (darkModeEnabled: boolean): ThemeOptions => {
    console.log("darkModeEnabled: ", darkModeEnabled )
    return ({
      palette: {
        ...(darkModeEnabled ? { mode: "dark" } : { mode: "light" })
      },
      typography: {
        h1: {
          fontSize: "2.5rem",
          fontWeight: 600
        },
        h2: {
          fontSize: "2.1rem",
          fontWeight: 600
        },
        h3: {
          fontSize: "1.9rem",
          fontWeight: 600
        },
        h4: {
          fontSize: "1.7rem",
          fontWeight: 600
        },
        h5: {
          fontSize: "1.5rem",
          fontWeight: 600
        },
        h6: {
          fontWeight: 600
        },
        subtitle2: {
          fontWeight: 600
        },
        subtitle1: {
          fontWeight: 600
        }
      }
    })
  }
  const theme = React.useMemo(() => createTheme(getOptions(darkModeEnabled)), [darkModeEnabled, setDarkModeEnabled])

  return (
    <React.Fragment>
      <MyTopHelmet />
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <DarkModeContext.Provider value={{ darkModeEnabled, setDarkModeEnabled }}>
          {props.children}
        </DarkModeContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  )
}
