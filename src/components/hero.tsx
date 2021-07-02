import * as React from "react"
import { Container, makeStyles, Typography } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"
import { createStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => createStyles({
  root: {
    position: "relative"
  },
  div: {
    height: "70vh",
    [theme.breakpoints.down("lg")]: {
      height: "60vh"
    },
    width: "100vw",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "37% 30%",
    [theme.breakpoints.down("lg")]: {
      objectPosition: "10% 30%"
    }
  },
  imgOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.47)"
  },
  overlay: {}
}))

export const Hero = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <StaticImage className={classes.div} imgClassName={classes.img} src="../images/quarry.jpeg" alt={""} />
      <div className={classes.imgOverlay}>
        <Container maxWidth={"lg"}>
          <Typography variant={"h2"}>hey</Typography>
        </Container>
      </div>
    </div>
  )
}