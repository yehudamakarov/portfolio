import * as React from "react"
import { GitHub } from "@mui/icons-material"
import { IconButton, Theme } from "@mui/material"
import { SxProps } from "@mui/system"
import { graphql, useStaticQuery } from "gatsby"
import { RepositoryQuery } from "../../../../../../gatsby-graphql"

interface GithubHomeButtonProps {
  sxProps: SxProps<Theme>
}

export const GithubHomeButton: React.FC<GithubHomeButtonProps> = ({ sxProps }) => {
  const repositoryQuery = useStaticQuery<RepositoryQuery>(
    graphql`
        query Repository {
            site {
                siteMetadata {
                    repository
                }
            }
        }
    `
  )
  return (
    <IconButton
      href={repositoryQuery.site.siteMetadata.repository}
      edge={"start"}
      sx={sxProps}
    >
      <GitHub />
    </IconButton>
  )
}
