import * as React from "react"
import {
  Box,
  Container,
  Grid,
  IconButton,
  Theme,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import "./Hero.css"
import Link from "../Link"
import { Assignment } from "@mui/icons-material"

interface HeroProps {
}

export const Hero: React.FC<HeroProps> = (props) => {
  const theme = useTheme()
  const isLessThanXs = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"))
  const isLessThanLg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"))
  return (
    <Box sx={{ position: "relative", color: theme.palette.primary.contrastText }}>
      <StaticImage
        className={"image-container" + " " + (isLessThanLg ? "image-container-ltlg" : "image-container-lg")}
        imgClassName={"image" + " " + (isLessThanLg ? "image-ltlg" : "image-lg")}
        src="../../images/quarry.jpeg"
        alt={"quarry"}
      />
      <Box sx={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        [theme.breakpoints.down(420)]: {
          height: "100.5%"
        },
        width: "100%",
        background: "rgba(0,0,0,0.58)"
      }}>
        <Container maxWidth={"lg"} sx={{ height: "100%", display: "flex", flexDirection: "column", paddingBottom: 1 }}>
          <Box sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "left",
            [theme.breakpoints.down("xs")]: {
              left: "42%",
              top: "40%",
              transform: "translate(-42%, -40%)",
              textAlign: "left"
            }
          }}>
            <Typography sx={{ color: "common.white" }} variant={"body2"}>
              welcome to my site. I'm a software craftsman. feel free to browse
              around, or reach out.
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={isLessThanXs ? 2 : 3}>
                  {["/about", "/projects", "/blog"].map(link => (
                    <Grid key={link} item>
                      <Link to={link}>
                        <Typography sx={{ color: "common.white" }} variant={"button"}>
                          {link.substring(1)}
                        </Typography>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Tooltip placement={"top"} title={"Resume"}>
                <IconButton sx={{ color: "common.white" }} edge={"start"}>
                  <Assignment />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
