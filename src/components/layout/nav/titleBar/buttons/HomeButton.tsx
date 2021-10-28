import * as React from "react"
import { Grid, Theme, Typography, useMediaQuery } from "@mui/material"
import { SxProps } from "@mui/system"
import Link from "../../../../Link"
import { SiteInfoContext } from "../../../Layout"
import { WindowLocation } from "@reach/router"

interface HomeButtonProps {
  sxProps: SxProps<Theme>
}

function getCurrentPageFromLocation(location: WindowLocation<WindowLocation["state"]>) {
  return location.pathname === "/" ? "home" : location.pathname.slice(1)
}

export const HomeButton: React.FC<HomeButtonProps> = ({ sxProps }) => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("xs"))

  return (
    <SiteInfoContext.Consumer>{(value => {
      const { title, shortTitle } = value.siteInfoQuery.site.siteMetadata
      const currentPage = getCurrentPageFromLocation(value.layoutProps.pageProps.location)
      return (
        <Grid
          container
          alignItems="baseline"
          spacing={isSmall ? 1 : 2}
          sx={sxProps}
        >
          <Grid item>
            <Link to={"/"}>
              <Typography sx={{ display: "inline-block" }} variant="h6">
                {isSmall ? shortTitle : title}
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Typography
              sx={{ display: "inline-block" }}
              variant={"h6"}
            >
              |
            </Typography>
          </Grid>
          <Grid sx={{ position: "relative" }} item>
            <Typography
              sx={{ display: "inline-block" }}
              variant={"subtitle2"}
            >
              {currentPage}
            </Typography>
          </Grid>
        </Grid>)
    })}</SiteInfoContext.Consumer>)
}
