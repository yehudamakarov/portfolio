import * as React from "react"
import { AppBar, Container, Toolbar, useTheme } from "@mui/material"
import { HomeButton } from "./titleBar/buttons/HomeButton"
import DarkModeButton from "./titleBar/buttons/DarkModeButton"
import { GithubHomeButton } from "./titleBar/buttons/GithubHomeButton"
import { DarkModeContext } from "../../../../plugins/gatsby-plugin-top-layout/TopLayout"

export const MyHeader = () => {
  return (
    <DarkModeContext.Consumer>
      {(value => (
        <AppBar
          elevation={1}
          variant={"elevation"}
          position="sticky"
        >
          <Container maxWidth={"lg"}>
            <Toolbar disableGutters>
              <HomeButton sxProps={{ flexGrow: 1 }} />
              <DarkModeButton />
              <GithubHomeButton sxProps={{ marginLeft: 0.5, color: "primary.contrastText" }} />
            </Toolbar>
          </Container>
        </AppBar>))}
    </DarkModeContext.Consumer>
  )
}
