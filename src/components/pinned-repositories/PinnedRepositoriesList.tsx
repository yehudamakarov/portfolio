import * as React from "react"
import { Box, Container, Grid, Paper, Theme, Typography, useMediaQuery } from "@mui/material"
import { GithubDataDataUserPinnedItemsNodes, Maybe } from "../../../gatsby-graphql"
import { PinnedRepositoriesCard } from "./PinnedRepositoriesCard"

interface PinnedRepositoriesListProps {
  pinnedRepos?: Maybe<Array<Maybe<Pick<GithubDataDataUserPinnedItemsNodes, "url" | "name" | "id" | "databaseId" | "createdAt">>>>
}

export const PinnedRepositoriesList: React.FC<PinnedRepositoriesListProps> = ({ pinnedRepos }) => {
  const buttonOverlapsPaper = useMediaQuery((theme: Theme) => theme.breakpoints.down(1035))
  const header = <Typography sx={{ marginBottom: 3 }} variant={"h5"}>
    My Pinned Repositories
  </Typography>
  const items = pinnedRepos.map(pr => (<PinnedRepositoriesCard key={pr.id} pr={pr} />))
  return (
    <Box>
      {!buttonOverlapsPaper
        ? (
          <Container sx={{ minHeight: (theme) => theme.spacing(30) }}>
            <Grid
              container
              direction="row"
              // justifyContent="center"
              alignItems="flex-start"
            >
              <Grid md={4} item />
              <Grid lg={6} item>
                <Paper elevation={4} sx={(theme) => ({
                  marginTop: theme.spacing(-18),
                  zIndex: theme.zIndex.drawer + 1,
                  position: "relative",
                  padding: theme.spacing(5)
                })}>
                  {header}
                  {items}
                </Paper>
              </Grid>
              <Grid item lg={1} xl={2} />
            </Grid>
          </Container>
        ) : (
          <Paper
            sx={(theme) => ({
              marginTop: theme.spacing(-1),
              zIndex: theme.zIndex.drawer + 1,
              position: "relative"
            })}
          >

            <Container sx={(theme) => ({
              py: theme.spacing(3)
            })}>
              {header}
              {items}
            </Container>
          </Paper>
        )}
    </Box>
  )
}
