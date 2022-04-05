import { FoldersImmediatelyUnderQuery } from "../../gatsby-graphql"
import { Grid } from "@mui/material"
import { ArticleIndexCard } from "./ArticleIndexCard"
import { MarkdownPageContext } from "../../config/util/createArticlePages"
import * as React from "react"
import { PageProps } from "gatsby"
import { MarkdownIndexContext } from "./MarkdownIndexPageTemplate"
import { animated, TransitionFn } from "react-spring"


export function IndexCardList(props: {
  transition: TransitionFn<any, { opacity: number, transform: string }>,
  location: PageProps<FoldersImmediatelyUnderQuery, MarkdownIndexContext>["location"],
  cards: FoldersImmediatelyUnderQuery["contentPages"]["nodes"]
}) {
  return (
    <Grid container spacing={4}>
      {props.transition((style, value) => (
        <Grid key={value.id} item xs={12} sm={4}>
          <animated.div style={style}>
            <ArticleIndexCard
              location={props.location}
              path={value.path}
              displayContent={value.pageContext as MarkdownPageContext} />
          </animated.div>
        </Grid>
      ))}
    </Grid>
  )
}
