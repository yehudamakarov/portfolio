import * as React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles({
  root: {
    height: "60vh",
    backgroundColor: "#171b29",
    position: "relative"
  },
  overlay: {
    position: "absolute",
    left: "50%",
    top: "30%",
    transform: "translate(-50%, -50%)",
    color: "#a1a4aa"
  }
})

export const Hero = () => {
  const classes = useStyles()
  return (
    <section>
      <div className={classes.root} />
      <div className={classes.overlay}>
        <Typography variant={"caption"}>welcome to my site. I'm a software craftsman. feel free to browse around, or reach out.</Typography>
      </div>
    </section>
  )
}