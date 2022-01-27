import * as React from "react"
import { Box, Container, Divider, Grid, Toolbar, Typography } from "@mui/material"
import { EditInGithubButton } from "./EditInGithubButton"
import { SocialIcon } from "./SocialIcon"
import { BackHomeButton } from "./BackHomeButton"

export const MyFooter = ({ editInGithubLink, renderBackHome }) => (
  <Box sx={{ py: 6 }}>
    <Container maxWidth={"lg"} sx={{ paddingBottom: 1 }}>
      <Divider />
      <Toolbar disableGutters sx={{ py: 2 }}>
        <Grid spacing={1} alignItems={"baseline"} container>
          <Grid item><SocialIcon type={"youtube"} /></Grid>
          <Grid item><SocialIcon type={"github"} /></Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              {"living, "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Grid>
        </Grid>
        {renderBackHome && <Box sx={{ ml: 1 }}><BackHomeButton /></Box>}
        {editInGithubLink && <Box sx={{ ml: 1 }}><EditInGithubButton href={editInGithubLink} /></Box>}
      </Toolbar>
    </Container>
  </Box>
)
