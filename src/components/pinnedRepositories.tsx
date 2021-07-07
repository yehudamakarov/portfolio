import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { PinnedRepositoriesQuery } from "../types/generated"
import { PinnedRepoList } from "./pinnedRepoList"
import { createStyles } from "@material-ui/core/styles"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme =>
  createStyles({
    pushDownBottom: {
      marginBottom: theme.spacing(5),
    },
  })
)

const PinnedRepositories = () => {
  const classes = useStyles()
  const pinnedRepos = useStaticQuery<PinnedRepositoriesQuery>(graphql`
    query PinnedRepositories {
      githubData {
        data {
          user {
            id
            pinnedItems {
              nodes {
                url
                name
                id
                databaseId
                createdAt
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className={classes.pushDownBottom}>
      <PinnedRepoList
        pinnedRepos={pinnedRepos.githubData?.data?.user?.pinnedItems?.nodes}
      />
    </div>
  )
}

export { PinnedRepositories }
