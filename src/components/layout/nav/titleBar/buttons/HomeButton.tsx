import * as React from "react"
import { Grid, Theme, Typography, useMediaQuery } from "@mui/material"
import { SxProps } from "@mui/system"
import { Link } from "../../../../Link"
import { SiteInfoContext } from "../../../Layout"
import { getCurrentPageFromLocationCapitalized } from "../../../../../utils/getCurrentPageFromLocationCapitalized"

interface HomeButtonProps {
  sxProps: SxProps<Theme>
}

export const HomeButton: React.FC<HomeButtonProps> = ({ sxProps }) => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"))
  return (
    <SiteInfoContext.Consumer>{(value => {
      const { title, shortTitle } = value.siteInfoQuery.site.siteMetadata
      const currentPage = getCurrentPageFromLocationCapitalized(value.layoutProps.pageProps.location)
      return (
        <Grid
          container
          alignItems="center"
          spacing={1}
          sx={sxProps}
        >
          <Grid item>

            <Typography sx={{ display: "inline-block" }} variant="h6">
              <Link to={"/"} sx={{ color: "common.white" }}>{isSmall ? shortTitle : title}</Link>
            </Typography>

          </Grid>
          <Grid item>
            <Typography
              sx={{ display: "inline-block", color: "common.white" }}
              variant={"h6"}
            >
              |
            </Typography>
          </Grid>
          <Grid sx={{ position: "relative" }} item>
            <Typography
              sx={{ display: "inline-block", color: "common.white" }}
              variant={"subtitle2"}
            >
              {currentPage}
            </Typography>
          </Grid>
        </Grid>)
    })}</SiteInfoContext.Consumer>)
}
