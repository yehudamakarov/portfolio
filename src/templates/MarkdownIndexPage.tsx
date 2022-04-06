import * as React from "react"
import { navigate, PageProps } from "gatsby"
import { Layout } from "../components/layout/Layout"
import { Box, Chip, Container, Grid, Typography, useTheme } from "@mui/material"
import { MarkdownIndexContext } from "./MarkdownIndexPageTemplate"
import { FoldersImmediatelyUnderQuery } from "../../gatsby-graphql"
import * as qs from "query-string"
import { MarkdownPageContext } from "../../config/util/createArticlePages"
import { WindowLocation } from "@reach/router"
import useMeasure from "react-use-measure"
import { IndexDirListHeader } from "./IndexDirListHeader"
import { IndexDirListEl } from "./IndexDirListEl"
import Xarrow from "react-xarrows"
import { ArticleIndexCard } from "./ArticleIndexCard"
import { animated, config, useTrail } from "react-spring"

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
  const theme = useTheme()
  const [ref, bounds] = useMeasure({ debounce: 200 })

  let cards = props.pageProps.data.contentPages.nodes
  console.log("initial cards", cards)
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
    console.log("filtered: ", cards)
  }
  const filteringByTag = tags.length > 0
  console.log("filteringByTag: ", filteringByTag)

  const subFolders = props.pageProps.data.indexes.nodes
  const listItems = [{ id: "listHeader", path: "" }].concat(subFolders)

  // =============================================================================== //

  console.log("length of cards: ", cards.length)
  const cardTrail = useTrail(cards.length, {
    from: { opacity: 0, transform: "translate(0, 50vh)" },
    to: { opacity: 1, transform: "translate(0, 0)" },
    config: config.stiff,
    reset: filteringByTag
  })

  // =============================================================================== //

  return (
    <Layout pageProps={props.pageProps}>
      <Container>
        <Box sx={{ mt: 4 }}>
          {listItems.map(item => item.id === "listHeader"
            ? (
              <Box key={"listHeader"} ref={ref} id={"listHeader"}>
                <IndexDirListHeader dirName={props.pageProps.location.pathname} />
              </Box>
            )
            : (
              <Box key={item.id} sx={{ pl: 5 }}>
                <IndexDirListEl arrowId={item.id} dirName={item.path} />
              </Box>
            ))}
          {subFolders.map(item => (
            <Xarrow
              start={"listHeader"}
              end={item.id}
              lineColor={theme.palette.primary.main}
              strokeWidth={2}
              showHead={false}
              startAnchor={{
                position: "bottom",
                offset: { x: -((bounds.width / 2) - parseInt(theme.spacing(2).slice(0, 2))) }
              }}
              endAnchor={"left"}
              curveness={1}
              key={item.id}
            />
          ))}
        </Box>
        {filteringByTag && (
          <Box sx={{ mt: 4 }}>
            <Typography variant={"caption"}> Filtered by: </Typography>
            {tags.map((value, index) => {
              return (
                <Chip
                  color={"primary"}
                  sx={{ mr: 1 }}
                  key={value + String(index)}
                  size="small"
                  label={"#" + value}
                  onDelete={async () => {
                    await navigate(getPathname(props.pageProps.location, value))
                  }}
                />
              )
            })}
          </Box>
        )}
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={4}>
            {cardTrail.map((style, i) => (
              <Grid key={cards[i].id} item xs={12} sm={4}>
                <animated.div style={style}>
                  <ArticleIndexCard
                    location={props.pageProps.location}
                    path={cards[i].path}
                    displayContent={cards[i].pageContext as MarkdownPageContext}
                  />
                </animated.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Layout>
  )
}
