import * as React from "react"
import { Box, Button, Container, Grid, Theme, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "../Link"
import { Assignment } from "@mui/icons-material"
import { ClassNames } from "@emotion/react"

interface HeroProps {
}

export const Hero: React.FC<HeroProps> = () => {
  const theme = useTheme()
  const isLessThanSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"))
  return (
    <Box sx={{ position: "relative", color: theme.palette.primary.contrastText }}>
      <ClassNames>{({ css }) =>
        <StaticImage
          className={css`
            width: 100vw;
            height: 65vh;

            ${theme.breakpoints.down("xl")} {
              height: 55vh;
            }
          `}
          imgClassName={css`
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 37% 30%;

            ${theme.breakpoints.down("lg")} {
              object-position: 10% 30%;
            }
          `}
          src="../../images/quarry.jpeg"
          alt={"quarry"}
        />}
      </ClassNames>
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
                <Grid container spacing={isLessThanSm ? 1 : 2}>
                  {["/about", "/projects", "/blog"].map(link => (
                    <Grid key={link} item>
                      <Link to={link} sx={{ color: "common.white" }}>
                        <Typography variant={"button"}>
                          {link.substring(1)}
                        </Typography>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Button size={"small"} sx={{ color: "common.white" }} endIcon={<Assignment />}>Resume</Button>
            </Toolbar>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
