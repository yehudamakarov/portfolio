import * as React from "react"
import { Box, Container, Divider, Grid, Toolbar, Typography } from "@mui/material"
import { EditInGithubButton } from "./EditInGithubButton"
import { SocialIcon } from "./SocialIcon"
import { BackHomeButton } from "./BackHomeButton"
import { ContactButton } from "../../hero/ContactButton"

export const MyFooter = ({ editInGithubLink, renderBackHome }) => (
  <Box sx={{ py: 6 }}>
    <Container maxWidth={"lg"} sx={{ paddingBottom: 1 }}>
      <Divider />
      <Toolbar disableGutters sx={{ pt: 2, pb: 6 }}>
        <Grid spacing={1} alignItems={"baseline"} container>
          <Grid item><SocialIcon type={"github"} /></Grid>
          <Grid item><SocialIcon type={"linkedin"} /></Grid>
          <Grid item><SocialIcon type={"youtube"} /></Grid>
        </Grid>
        {renderBackHome && <Box sx={{ ml: 1 }}><BackHomeButton /></Box>}
        {editInGithubLink && <Box sx={{ ml: 1 }}><EditInGithubButton href={editInGithubLink} /></Box>}
      </Toolbar>
      <Grid alignItems={"center"} spacing={2} container direction={"column"}>
        <Grid item><ContactButton sxColor={"text.secondary"} /></Grid>
        <Grid item>
          <Typography variant="button" color="text.secondary">
            {"living, learning, helping, "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
)
