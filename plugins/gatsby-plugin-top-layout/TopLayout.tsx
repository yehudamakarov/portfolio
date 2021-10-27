import * as React from 'react';
import {Helmet} from 'react-helmet';
import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useDarkMode} from "../../src/utils/useDarkMode";

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
    const theme = React.useMemo(() => createTheme({
            palette: {
                mode: darkModeEnabled ? "dark" : "light",
                primary: {
                    main: "#171b29",
                },
                secondary: {
                    main: "#474E38",
                },
            },
        }), [darkModeEnabled, setDarkModeEnabled]
    )

    return (
        <React.Fragment>
            <Helmet>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                <DarkModeContext.Provider value={{darkModeEnabled, setDarkModeEnabled}}>
                    {props.children}
                </DarkModeContext.Provider>
            </ThemeProvider>
        </React.Fragment>
    );
}
