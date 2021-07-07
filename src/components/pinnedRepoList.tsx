import { GithubDataDataUserPinnedItemsNodes } from "../types/generated"
import * as React from "react"
import {
  Container,
  Grid,
  Icon,
  Paper,
  Typography,
  useMediaQuery,
} from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import BookIcon from "@material-ui/icons/Book"
import { Link } from "gatsby-theme-material-ui"

interface PinnedRepoListProps {
  pinnedRepos: GithubDataDataUserPinnedItemsNodes[]
}

const useStyles = makeStyles(theme =>
  createStyles({
    nudgeUp: {
      marginTop: theme.spacing(22) * -1,
      zIndex: theme.zIndex.drawer + 1,
      position: "relative",
      padding: theme.spacing(5),
    },
    nudgedTitle: {
      marginBottom: theme.spacing(3),
    },
    nudgeDown: {
      paddingTop: theme.spacing(5),
    },
    itemTitle: {
      display: "inline",
    },
    itemIcon: {
      paddingTop: theme.spacing(0.5),
    },
    floatOnTop: {
      marginTop: theme.spacing(-1),
      zIndex: theme.zIndex.drawer + 1,
      position: "relative",
    },
  })
)

export const PinnedRepoList: React.FC<PinnedRepoListProps> = ({
  pinnedRepos,
}) => {
  const classes = useStyles()

  const medium = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"))

  const items = pinnedRepos.map(pr => (
    <div key={pr.id}>
      <Link color={"textPrimary"} to={pr.url}>
        <Grid alignItems={"flex-start"} container>
          <Grid className={classes.itemIcon} item>
            <Icon>
              <BookIcon />
            </Icon>
          </Grid>
          <Grid item>
            <Typography className={classes.itemTitle} variant={"h6"}>
              {pr.name}
            </Typography>
          </Grid>
        </Grid>
      </Link>
    </div>
  ))

  const header = (
    <Typography className={classes.nudgedTitle} variant={"h4"}>
      My Pinned Repositories
    </Typography>
  )

  if (medium) {
    return (
      <Container>
        <Grid
          container
          direction="row"
          // justifyContent="center"
          alignItems="flex-start"
        >
          <Grid md={5} lg={4} item />
          <Grid xs={6} lg={7} item>
            <Paper elevation={4} className={classes.nudgeUp}>
              {header}
              {items}
            </Paper>
          </Grid>
          <Grid item lg={1} xl={2} />
        </Grid>
      </Container>
    )
  }
  return (
    <Paper className={classes.floatOnTop}>
      <Container className={classes.nudgeDown}>
        {header}
        {items}
      </Container>
    </Paper>
  )
}
