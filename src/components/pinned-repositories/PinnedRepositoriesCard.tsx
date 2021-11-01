import * as React from "react"
import { Box, Grid, Icon, Link, Typography } from "@mui/material"
import { GithubDataDataUserPinnedItemsNodes } from "../../../gatsby-graphql"
import { Book } from "@mui/icons-material"

interface PinnedRepositoriesCardProps {
  pr: GithubDataDataUserPinnedItemsNodes
}

export const PinnedRepositoriesCard: React.FC<PinnedRepositoriesCardProps> = ({ pr }) => {
  return (
    <Box>
      <Link href={pr.url} sx={{color: 'text.primary'}} underline={"hover"}>
        <Grid alignItems={"flex-start"} container spacing={1}>
          <Grid sx={(theme) => ({ paddingTop: `${theme.spacing(1)}px !important` })} item>
            <Icon>
              <Book />
            </Icon>
          </Grid>
          <Grid item>
            <Typography
              gutterBottom
              sx={{ display: "inline" }}
              variant={"h6"}
            >
              {pr.name}
            </Typography>
          </Grid>
        </Grid>
      </Link>
    </Box>
  )
}
