import { MarkdownPageContext } from "../../config/util/createArticlePages"
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography
} from "@mui/material"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import { MyLink } from "../components/MyLink"
import { navigate, PageProps } from "gatsby"
import { MarkdownIndexContext } from "./MarkdownIndexPageTemplate"
import { FoldersImmediatelyUnderQuery } from "../../gatsby-graphql"
import { WindowLocation } from "@reach/router"
import LibraryBooksSharpIcon from "@mui/icons-material/LibraryBooksSharp"

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
          <CardContent sx={{ p: 2 }}>
            <Typography gutterBottom variant="h4" component="div">
              {title ? title : "title needed"}
            </Typography>
            {headline && (
              <Typography variant={"caption"}>
                {headline}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </MyLink>
      <CardActions sx={{ px: 3, pb: 2 }}>
        <Grid container>
          <Grid sx={{ flexGrow: 1 }}>
            {tags &&
              tags.map((value, index) => (
                <Chip
                  color={"primary"}
                  sx={{ mr: 1 }}
                  key={value + String(index)}
                  size="small"
                  label={value}
                  onClick={async () => {
                    await navigate(getPathname(props.location, value))
                  }}
                />
              ))}
          </Grid>
          <Grid>
            <Button startIcon={<LibraryBooksSharpIcon />} size="small">Read</Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}
