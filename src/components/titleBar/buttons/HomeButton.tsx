import { Grid, Theme, Typography, useMediaQuery, useTheme } from "@mui/material"
import Link from "../../Link"
import { SiteInfoContext } from "../../layout/Layout"

export const HomeButton = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("xs"))
  return (
    <SiteInfoContext.Consumer>{(value => {
      const { title, shortTitle } = value.siteInfoQuery.site.siteMetadata
      return (
        <Grid
          container
          alignItems="baseline"
          spacing={isSmall ? 1 : 2}
          sx={{ flexGrow: 1 }}
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
        </Grid>)
    })}</SiteInfoContext.Consumer>)
}
