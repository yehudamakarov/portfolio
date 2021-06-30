import * as React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr", // stretch to the full frame
    gridTemplateRows: "350px", // 350 pixels tall
    gridColumnGap: "0px",
    gridRowGap: "0px",
    alignContent: "center",
    justifyContent: "center"
  },
  imgDiv: {
    gridArea: "1 / 1 / 2 / 2"
  },
  img: {
    display: "grid",
    minWidth: "350px", // Do not resize to smaller than this.
    width: "100%",
    height: "100%",
    objectFit: "cover" // Using this so the image can be any size and still look halfway decent.
  },
  overlayDiv: {
    display: "grid",
    gridArea: "1 / 1 / 2 / 2",
    maxWidth: "100%",
    // background: "black",
    background: "black linear-gradient(60deg,rgba(0, 0, 0, 0.7777485994397759) 30%,rgba(255, 255, 255, 0) 100%)" // start at black at the bottom left'ish and goes at a 60% angle. This will make the white easy to read with nearly any image.
  },
  bannerTextDiv: {
    display: "grid",
    gridArea: "1 / 1 / 2 / 2",
    alignItems: "center",
    marginLeft: "15px",
    marginRight: "15px"
  }
})

export const Hero = () => {
  const classes = useStyles()
  return (
    <section className={classes.root}>
      <StaticImage className={classes.imgDiv} imgClassName={classes.img} src="../images/quarry.jpeg" alt="quarry" />
      <div className={classes.overlayDiv} />
      <div className={classes.bannerTextDiv}>
        <Typography variant={"h2"}>Hey</Typography>
      </div>
    </section>
  )
}