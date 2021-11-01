import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { PinnedRepositoriesList } from "./PinnedRepositoriesList"
import { PinnedRepositoriesQuery } from "../../../gatsby-graphql"

type Props = {};

export const PinnedRepositories = (props: Props) => {
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
    <PinnedRepositoriesList
      pinnedRepos={pinnedRepos?.githubData?.data?.user?.pinnedItems?.nodes}
    />
  )

}
