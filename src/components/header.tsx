import * as React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import { Container, Grid, useMediaQuery } from "@material-ui/core"
import { Link } from "gatsby-theme-material-ui"
import { GitHub } from "@material-ui/icons"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pushToRight: {
      flexGrow: 1,
    },
    endIcon: { marginLeft: theme.spacing(2) },
    inline: {
      display: "inline-block",
    },
    centerInside: {
      position: "relative",
    },
  })
)

interface HeaderProps {
  title: string
  shortTitle: string
  currentPage: string
}

export const Header: React.FC<HeaderProps> = ({
  title,
  currentPage,
  shortTitle,
}) => {
  const classes = useStyles()
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"))
  return (
    <div>
      <AppBar
        elevation={0}
        variant={"elevation"}
        color={"primary"}
        position="sticky"
      >
        <Container maxWidth={"lg"}>
          <Toolbar disableGutters>
            <Grid
              container
              alignItems="baseline"
              spacing={isSmall ? 1 : 2}
              className={classes.pushToRight}
            >
              <Grid item>
                <Link color={"secondary"} to={"/"}>
                  <Typography className={classes.inline} variant="h6">
                    {isSmall ? shortTitle : title}
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Typography
                  className={classes.inline}
                  color={"secondary"}
                  variant={"h6"}
                >
                  |
                </Typography>
              </Grid>
              <Grid className={classes.centerInside} item>
                <Typography
                  className={classes.inline}
                  color={"secondary"}
                  variant={"subtitle2"}
                >
                  {currentPage}
                </Typography>
              </Grid>
            </Grid>
            <IconButton
              href={"https://github.com/yehudamakarov"}
              color={"secondary"}
              edge={"end"}
              className={classes.endIcon}
            >
              <GitHub />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}
