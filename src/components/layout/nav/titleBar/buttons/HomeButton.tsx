import * as React from "react"
import { Grid, Theme, Typography, useMediaQuery } from "@mui/material"
import { SxProps } from "@mui/system"
import { MyLink } from "../../../../MyLink"
import { PageNameContext } from "../../../Layout"
import { graphql, useStaticQuery } from "gatsby"
import { TitleQuery } from "../../../../../../gatsby-graphql"


interface HomeButtonProps {
  sxProps: SxProps<Theme>
}

export const HomeButton: React.FC<HomeButtonProps> = ({ sxProps }) => {
  const titleQuery = useStaticQuery<TitleQuery>(
    graphql`
        query Title {
            site {
                siteMetadata {
                    title
                    shortTitle
                }
            }
        }
    `
  )
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"))
  return (
    <PageNameContext.Consumer>
      {(pageName => {
        const { title, shortTitle } = titleQuery.site.siteMetadata
        return (
          <Grid
            container
            alignItems="center"
            spacing={1}
            sx={sxProps}
          >
            <Grid item>
              <Typography sx={{ display: "inline-block" }} variant="h6">
                <MyLink to={"/"} sx={{ color: "common.white" }}>{isSmall ? shortTitle : title}</MyLink>
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
                {pageName}
              </Typography>
            </Grid>
          </Grid>)
      })}
    </PageNameContext.Consumer>
  )
}
