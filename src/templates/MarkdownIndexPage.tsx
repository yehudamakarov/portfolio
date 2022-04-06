import * as React from "react"
import { useEffect, useMemo, useState } from "react"
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
import { animated, config, useChain, useSpring, useSpringRef, useTrail, useTransition } from "react-spring"

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

  const initialCards = props.pageProps.data.contentPages.nodes
  const [cards, setCards] = useState(initialCards)

  const subFolders = props.pageProps.data.indexes.nodes
  const [listItems, setListItems] = useState([{ id: "listHeader", path: "" }].concat(subFolders))

  const search = props.pageProps.location.search
  const path = props.pageProps.location.pathname

  const [selectedTags, setSelectedTags] = useState([])

  useEffect(() => {
    const params = qs.parse(search)
    if (params.tag) {
      const toSet = typeof params.tag === "string" ? [params.tag] : params.tag
      setSelectedTags(toSet)
      setCards(cards.filter(card => (card.pageContext as MarkdownPageContext).frontmatter.tags
        .map(tag => tag.replace("#", ""))
        .some(cardsTag => toSet.some(queryTag => cardsTag === queryTag))))
    } else {
      setSelectedTags([])
      setCards(initialCards)
    }
  }, [search, path])

  // =============================================================================== //

  const filteringByTag = selectedTags.length > 0
  // const selectedTagsSpringRef = useSpringRef()
  const selectedTagsSpring = useSpring({
    // ref: selectedTagsSpringRef,
    from: { opacity: 0 },
    to: filteringByTag
      ? { opacity: 1 }
      : { opacity: 0 },
    config: config.stiff,
    delay: 200
  })

  // =============================================================================== //

  const cardTrailRef = useSpringRef()
  const cardTrail = useTransition(cards, {
    ref: cardTrailRef,
    from: { opacity: 0, transform: "translate(0, 20vh)" },
    enter: { opacity: 1, transform: "translate(0, 0)" },
    leave: { opacity: 0, transform: "translate(0, 20vh)" },
    config: { ...config.stiff },
    reset: filteringByTag,
    trail: 100
  })

  // =============================================================================== //

  const lineTrail = useTrail(subFolders.length, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.stiff,
    delay: 800
  })

  // =============================================================================== //

  const dirListRef = useSpringRef()
  const dirListTransition = useTransition(listItems, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.stiff,
    trail: 100,
    ref: dirListRef
  })

  // =============================================================================== //

  useChain([cardTrailRef, dirListRef], [0, 0.3])

  return (
    <Layout pageProps={props.pageProps}>
      <Container>
        <Box sx={{ mt: 4 }}>
          {dirListTransition((style, item) => item.id === "listHeader"
            ? (
              <Box key={"listHeader"} ref={ref} id={"listHeader"}>
                <animated.div style={style}><IndexDirListHeader dirName={props.pageProps.location.pathname} />
                </animated.div>
              </Box>
            )
            : (
              <Box key={item.id} sx={{ pl: 5 }}>
                <animated.div style={style}><IndexDirListEl arrowId={item.id} dirName={item.path} /></animated.div>
              </Box>
            ))}
          {lineTrail.map((style, i) => (
            <animated.div style={style}>
              <Xarrow
                start={"listHeader"}
                end={subFolders[i].id}
                lineColor={theme.palette.primary.main}
                strokeWidth={2}
                showHead={false}
                startAnchor={{
                  position: "bottom",
                  offset: { x: -((bounds.width / 2) - parseInt(theme.spacing(2).slice(0, 2))) }
                }}
                endAnchor={"left"}
                curveness={1.1}
                key={subFolders[i].id}
              />
            </animated.div>
          ))}
        </Box>
        {filteringByTag && <animated.div style={selectedTagsSpring}>
          <Box sx={{ mt: 4 }}>
            <Typography variant={"caption"}> Filtered by: </Typography>
            {selectedTags.map((value, index) => {
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
        </animated.div>}
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={4}>
            {cardTrail((style, item) => (
              <Grid key={item.id} item xs={12} sm={4}>
                <animated.div style={style}>
                  <ArticleIndexCard
                    location={props.pageProps.location}
                    path={item.path}
                    displayContent={item.pageContext as MarkdownPageContext}
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
