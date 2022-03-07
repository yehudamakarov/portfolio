import { MarkdownPageContext } from "../../config/util/createArticlePages"
import { Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from "@mui/material"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import { MyLink } from "../components/MyLink"
import { navigate, PageProps } from "gatsby"
import { MarkdownIndexContext } from "./MarkdownIndexPageTemplate"
import { FoldersImmediatelyUnderQuery } from "../../gatsby-graphql"
import { WindowLocation } from "@reach/router"

function getPathname(location: WindowLocation<unknown>, tag: string) {
  if (tag[0] === "#") {
    tag = tag.slice(1)
  }

  if (location.search.includes(tag)) {
    return location.pathname + location.search
  }

  if (location.search) {
    return location.pathname + location.search + "&tag=" + tag
  } else {
    return location.pathname + "?tag=" + tag
  }
}

export function ArticleIndexCard(props: {
  displayContent: MarkdownPageContext,
  path: FoldersImmediatelyUnderQuery["contentPages"]["nodes"][number]["path"],
  location: PageProps<FoldersImmediatelyUnderQuery, MarkdownIndexContext>["location"],
}) {
  const { editInGithubLink, excerpt, frontmatter: { title, tags, featuredImage, headline } } = props.displayContent
  return (
    <Card>
      <MyLink sx={{ color: "text.primary" }} to={props.path} underline={"none"}>
        <CardActionArea>
          {featuredImage && (
            <CardMedia>
              <GatsbyImage alt={featuredImage.name} image={featuredImage?.childImageSharp?.gatsbyImageData} />
            </CardMedia>
          )}
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {title ? title : "title needed"}
            </Typography>
            {headline && (
              <Typography variant={"caption"} color="text.secondary">
                {headline}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </MyLink>
      <CardContent>
        {tags &&
          tags.map((value, index) => (
            <Chip sx={{ mr: 1 }}
                  key={value + String(index)}
                  size="small"
                  label={value}
                  onClick={async () => {
                    await navigate(getPathname(props.location, value))
                  }}
            />
          ))}
      </CardContent>
      {/*<CardActions>*/}
      {/*  <EditInGithubButton href={editInGithubLink} />*/}
      {/*  /!*  <Button size="small">Learn More</Button>*!/*/}
      {/*</CardActions>*/}
    </Card>
  )
}
