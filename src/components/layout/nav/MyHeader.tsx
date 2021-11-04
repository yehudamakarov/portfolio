import * as React from "react"
import { AppBar, Box, Container, Toolbar, useTheme } from "@mui/material"
import { HomeButton } from "./titleBar/buttons/HomeButton"
import DarkModeButton from "./titleBar/buttons/DarkModeButton"
import { GithubHomeButton } from "./titleBar/buttons/GithubHomeButton"

export const MyHeader = () => {
  const theme = useTheme()
  return (
    <Box sx={{ ...theme.mixins.toolbar }}>
      <AppBar
        color={"secondary"}
        enableColorOnDark={true}
        elevation={1}
        variant={"elevation"}
        position="fixed"
      >
        <Container maxWidth={"lg"}>
          <Toolbar disableGutters>
            <HomeButton sxProps={{ flexGrow: 1 }} />
            <DarkModeButton />
            <GithubHomeButton sxProps={{ marginLeft: 1, color: "common.white" }} />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
