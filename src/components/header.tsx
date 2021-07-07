import * as React from "react"
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import { Container, Grid, useMediaQuery } from "@material-ui/core"
import { Link } from "gatsby-theme-material-ui"
import { GitHub } from "@material-ui/icons"
import Brightness4Icon from "@material-ui/icons/Brightness4"

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
    iconColor: {
      color: theme.palette.text.primary,
    },
  })
)

interface HeaderProps {
  title: string
  shortTitle: string
  currentPage: string
  setDarkModeEnabled: React.Dispatch<React.SetStateAction<boolean>>
  darkModeEnabled: boolean
}

export const Header: React.FC<HeaderProps> = ({
  title,
  currentPage,
  shortTitle,
  setDarkModeEnabled,
  darkModeEnabled,
}) => {
  const classes = useStyles()
  const theme = useTheme()
  console.assert(theme.palette.type === "light")

  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"))
  return (
    <div>
      <AppBar
        color={theme.palette.type === "light" ? "transparent" : "primary"}
        elevation={0}
        variant={"elevation"}
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
                <Link color={"textPrimary"} to={"/"}>
                  <Typography className={classes.inline} variant="h6">
                    {isSmall ? shortTitle : title}
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Typography
                  className={classes.inline}
                  color={"textPrimary"}
                  variant={"h6"}
                >
                  |
                </Typography>
              </Grid>
              <Grid className={classes.centerInside} item>
                <Typography
                  className={classes.inline}
                  color={"textPrimary"}
                  variant={"subtitle2"}
                >
                  {currentPage}
                </Typography>
              </Grid>
            </Grid>
            <IconButton
              className={classes.iconColor}
              onClick={() => setDarkModeEnabled(!darkModeEnabled)}
            >
              <Brightness4Icon />
            </IconButton>
            <IconButton
              href={"https://github.com/yehudamakarov"}
              edge={"end"}
              className={classes.endIcon + " " + classes.iconColor}
            >
              <GitHub />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}
