import * as React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import { Container } from "@material-ui/core"
import { Link } from "gatsby-theme-material-ui"
import { GitHub } from "@material-ui/icons"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1
    },
    endIcon: { marginLeft: theme.spacing(2) }
  })
)

export const Header: React.FC<{ title: string }> = ({ title }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar elevation={0} variant={"elevation"} color={"primary"} position="sticky">
        <Container maxWidth={"lg"}>
          <Toolbar>
            <Link to={"/"} className={classes.title}>
              <Typography color={"secondary"} variant="h6">{title}</Typography>
            </Link>
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
