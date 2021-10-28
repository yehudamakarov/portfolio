import * as React from "react"
import { AppBar, Container, Toolbar, useTheme } from "@mui/material"
import { HomeButton } from "./titleBar/buttons/HomeButton"
import DarkModeButton from "./titleBar/buttons/DarkModeButton"
import { GithubHomeButton } from "./titleBar/buttons/GithubHomeButton"

export const MyHeader: React.FC<{}> = () => {
  const theme = useTheme()
  return (
    <div>
      <AppBar
        color={theme.palette.mode === "light" ? "transparent" : "primary"}
        elevation={1}
        variant={"elevation"}
        position="sticky"
      >
        <Container maxWidth={"lg"}>
          <Toolbar disableGutters>
            <HomeButton sxProps={{ flexGrow: 1 }} />
            <DarkModeButton />
            <GithubHomeButton sxProps={{ marginLeft: 1 }} />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}
