import * as React from "react"
import {
  Container,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"
import { createStyles, Theme } from "@material-ui/core/styles"
import AssignmentIcon from "@material-ui/icons/Assignment"
import { Link } from "gatsby-theme-material-ui"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      position: "relative",
    },
    div: {
      height: "70vh",
      [theme.breakpoints.down("lg")]: {
        height: "60vh",
      },
      width: "100vw",
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "37% 30%",
      [theme.breakpoints.down("lg")]: {
        objectPosition: "10% 30%",
      },
    },
    imgOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.58)",
    },
    center: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      color: theme.palette.secondary.main,
      textAlign: "left",
    },
    flexColumn: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      paddingBottom: theme.spacing(1),
    },
    pushToBottom: {
      flexGrow: 1,
    },
    pushToRight: {
      flexGrow: 1,
    },
  })
)

export const Hero = () => {
  const classes = useStyles()
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"))
  return (
    <div className={classes.root}>
      <StaticImage
        className={classes.div}
        imgClassName={classes.img}
        src="../images/quarry.jpeg"
        alt={"quarry"}
      />
      <div className={classes.imgOverlay}>
        <Container className={classes.flexColumn} maxWidth={"lg"}>
          <div className={classes.center}>
            <Typography variant={"body2"}>
              welcome to my site. I'm a software craftsman. feel free to browse
              around, or reach out.
            </Typography>
          </div>
          <div className={classes.pushToBottom} />
          <div>
            <Toolbar disableGutters>
              <div className={classes.pushToRight}>
                <Grid container spacing={isSmall ? 1 : 3}>
                  <Grid item>
                    <Link to={"/about"} color={"secondary"}>
                      <Typography variant={"button"}>About</Typography>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to={"/projects"} color={"secondary"}>
                      <Typography variant={"button"}>Projects</Typography>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to={"/blog"} color={"secondary"}>
                      <Typography variant={"button"}>Blog</Typography>
                    </Link>
                  </Grid>
                </Grid>
              </div>
              <Tooltip placement={"left"} title={"Resume"}>
                <IconButton edge={"end"} color={"secondary"}>
                  <AssignmentIcon />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </div>
        </Container>
      </div>
    </div>
  )
}
