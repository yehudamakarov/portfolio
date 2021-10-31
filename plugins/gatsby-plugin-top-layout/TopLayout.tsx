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

  const getOptions = (darkModeEnabled: boolean): ThemeOptions => (darkModeEnabled ? {
    palette: {
      mode: "dark"
      // primary: {
      //   main: "#171b29"
      // },
      // secondary: {
      //   main: "#474E38"
      // },
    }
  } : {
    palette: {
      mode: "light"
      // primary: {
      //   main: "#474E38"
      // }
    }
  })

  const theme = React.useMemo(() => createTheme(getOptions(darkModeEnabled)), [darkModeEnabled, setDarkModeEnabled]
  )

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
