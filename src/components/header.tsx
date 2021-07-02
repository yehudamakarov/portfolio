import * as React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import { Container, Grid } from "@material-ui/core"
import { Link } from "gatsby-theme-material-ui"
import { GitHub } from "@material-ui/icons"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1
      // display: "inline-block"
    },
    endIcon: { marginLeft: theme.spacing(2) },
    inline: {
      display: "inline-block"
    },
    centerInside: {
      position: "relative"
    },
    center: {
      position: "absolute",
      top: "50%",
      marginTop: "-15px"
    }
  })
)

export const Header: React.FC<{ title: string, currentPage: string }> = ({ title, currentPage }) => {
  const classes = useStyles()

  return (
    <div>
      <AppBar elevation={0} variant={"elevation"} color={"primary"} position="sticky">
        <Container maxWidth={"lg"}>
          <Toolbar>
            <Grid container spacing={3} className={classes.title}>
              <Grid item>
                <Link to={"/"}>
                  <Typography className={classes.inline} color={"secondary"} variant="h6">{title}</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Typography
                  className={classes.inline}
                  color={"secondary"}
                  variant={"h6"}>|</Typography>
              </Grid>
              <Grid className={classes.centerInside} item>
                <Typography className={classes.inline + " " + classes.center} color={"secondary"}
                            variant={"subtitle2"}>{currentPage}</Typography>
              </Grid>
            </Grid>
            <IconButton href={"https://github.com/yehudamakarov"} color={"secondary"} edge={"end"}
                        className={classes.endIcon}>
              <GitHub />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}
