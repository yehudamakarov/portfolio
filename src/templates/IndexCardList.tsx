import { FoldersImmediatelyUnderQuery } from "../../gatsby-graphql"
import { Grid } from "@mui/material"
import { ArticleIndexCard } from "./ArticleIndexCard"
import { MarkdownPageContext } from "../../config/util/createArticlePages"
import * as React from "react"
import { PageProps } from "gatsby"
import { MarkdownIndexContext } from "./MarkdownIndexPageTemplate"
import * as qs from "query-string"



export function IndexCardList(props: {
  location: PageProps<FoldersImmediatelyUnderQuery, MarkdownIndexContext>["location"],
  cards: FoldersImmediatelyUnderQuery["contentPages"]["nodes"]
}) {
  return (
    <Grid container spacing={3}>
      {props.cards.map(value => (
        <Grid key={value.id} item xs={12} sm={6}>
          <ArticleIndexCard
            location={props.location}
            path={value.path}
            displayContent={value.pageContext as MarkdownPageContext} />
        </Grid>
      ))}
    </Grid>
  )
}
