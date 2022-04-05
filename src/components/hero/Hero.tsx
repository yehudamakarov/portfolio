import * as React from "react"
import { Box, Container, Grid, Theme, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import { MyLink } from "../MyLink"
import { ClassNames } from "@emotion/react"
import { getAfterLastSlash } from "../../utils/getCurrentPageFromLocationPathname"
import { ContactButton } from "./ContactButton"

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
            <Typography sx={{ color: "primary.contrastText" }} variant={"body2"}>
              Welcome to my site. I'm a software craftsman. Feel free to reach out, or browse around.
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={isLessThanSm ? 1 : 2}>
                  {["/articles/about-me", "/projects", "/articles"].map(link => (
                    <Grid key={link} item>
                      {/*todo replicate this but for the breadcrumbs and tighter*/}
                      <MyLink to={link} sx={{ color: "primary.contrastText" }}>
                        <Typography variant={"button"}>
                          {getAfterLastSlash(link)}
                        </Typography>
                      </MyLink>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <ContactButton sxColor={"primary.contrastText"} />
            </Toolbar>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
