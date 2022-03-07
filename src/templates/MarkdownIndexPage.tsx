import * as React from "react"
import { navigate, PageProps } from "gatsby"
import { Layout } from "../components/layout/Layout"
import { Box, Chip, Container, Typography } from "@mui/material"
import { MarkdownIndexContext } from "./MarkdownIndexPageTemplate"
import { IndexDirList } from "./IndexDirList"
import { FoldersImmediatelyUnderQuery } from "../../gatsby-graphql"
import { IndexCardList } from "./IndexCardList"
import * as qs from "query-string"
import { MarkdownPageContext } from "../../config/util/createArticlePages"
import { WindowLocation } from "@reach/router"

function getPathname(location: WindowLocation<unknown>, value: string) {
  let lastPositionToRemove = location.search.indexOf(value) + value.length
  const adjustedForParamName = location.search.indexOf(value) - 4
  const thereAreMoreTagsAfterThisOne = location.search.length > lastPositionToRemove
  if (thereAreMoreTagsAfterThisOne) {
    // subtract an extra &
    lastPositionToRemove++
  }
  const toRemove = location.search.substring(adjustedForParamName, lastPositionToRemove)
  const updated = location.search.replace(toRemove, "")
  if (updated === "?") {
    return location.pathname
  } else {
    return location.pathname + updated
  }
}

export default function MarkdownIndexPage(props: { pageProps: PageProps<FoldersImmediatelyUnderQuery, MarkdownIndexContext> }) {
  let cards = props.pageProps.data.contentPages.nodes
  let tags = []

  const params = qs.parse(props.pageProps.location.search)

  if (params.tag) {
    tags = typeof params.tag === "string" ? [params.tag] : params.tag
    cards = cards
      .filter(card => (card.pageContext as MarkdownPageContext).frontmatter.tags
        .map(tag => tag.replace("#", ""))
        .some(
          cardsTag => tags.some(
            queryTag => cardsTag === queryTag
          )
        )
      )
  }

  return (
    <Layout pageProps={props.pageProps}>
      <Container>
        <Box sx={{ mt: 4 }}>
          <IndexDirList location={props.pageProps.location} subFolders={props.pageProps.data.indexes.nodes} />
        </Box>
        {tags.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant={"caption"}> Filtered by: </Typography>
            {tags.map((value, index) => {
              return (
                <Chip sx={{ mr: 1 }}
                      key={value + String(index)}
                      size="small"
                      label={value}
                      onDelete={async () => {
                        await navigate(getPathname(props.pageProps.location, value))
                      }}
                />
              )
            })}
          </Box>
        )}
        <Box sx={{ mt: 4 }}>
          <IndexCardList location={props.pageProps.location} cards={cards} />
        </Box>
      </Container>
    </Layout>
  )
}
