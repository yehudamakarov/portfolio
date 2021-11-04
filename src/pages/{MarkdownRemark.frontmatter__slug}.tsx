import * as React from "react"
import { graphql, PageProps } from "gatsby"
import { Layout } from "../components/layout/Layout"
import { MarkdownPageQuery } from "../../gatsby-graphql"
import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material"
import rehypeReact from "rehype-react"
import { Link } from "../components/Link"

const typographySelectionForBody = "body1" as const

export default function Template(props: PageProps<MarkdownPageQuery>) {
  const { frontmatter, htmlAst, html } = props.data.markdownRemark

  function shouldMakeMuiLinkComponent(p) {
    const { className } = p
    return !(className === "anchor before" || className === "gatsby-resp-image-link")
  }

  function getTypography(p, header: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") {
    const { id, ...rest } = p
    rest.children.unshift(<span key={id} className={"anchor-offset"} id={id} />)
    return <Typography sx={{ mt: header === "h1" ? 0 : 2, color: "text.secondary" }} variant={header} {...rest} />
  }

  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      a: (p) => {
        const { href, ...rest } = p
        const isExternal = href.startsWith("/static") || (href[0] !== "/" && href[0] !== "#")
        return shouldMakeMuiLinkComponent(p) ?
          <Link external={isExternal} to={href} {...rest} /> : <a {...p} />
      },
      p: (p) => <Typography sx={{ my: 2 }} variant={typographySelectionForBody} {...p} />,
      table: (p) => <TableContainer component={Paper} sx={{ my: 2 }}><Table {...p} /></TableContainer>,
      thead: (p) => <TableHead {...p} />,
      th: (p) => <TableCell {...p} sx={(theme) => ({
        ...(theme.typography.subtitle1),
        bgcolor: theme.palette.mode === "light" ? "grey.300" : "grey.800"
      })} />,
      tbody: (p) => <TableBody {...p} />,
      tr: (p) => <TableRow {...p} />,
      td: (p) => <TableCell {...p} />,
      h1: (p) => getTypography(p, "h1"),
      h2: (p) => getTypography(p, "h2"),
      h3: (p) => getTypography(p, "h3"),
      h4: (p) => getTypography(p, "h4"),
      h5: (p) => getTypography(p, "h5"),
      h6: (p) => getTypography(p, "h6")
    }
  }).Compiler

  return (
    <Layout pageProps={props}>
      <Container maxWidth={"md"}>
        <Box
          // styling here is to override anchor links for headers
          // other styles should be added to custom elements config in rehype
          sx={{
            my: 3,
            p: 2,
            "& .anchor-offset": {
              top: -80, // Offset for the anchor.
              position: "absolute"
            },
            "& h1, & h2, & h3, & h4, & h5, & h6": {
              "& .anchor": {
                // To prevent the link to get the focus.
                display: "none"
                // display: "block",
                // position: "relative",
                // top: "-250px",
                // visibility: "hidden"
              },
              "& a:not(.anchor):hover": {
                color: "currentColor",
                borderBottom: "1px solid currentColor",
                textDecoration: "none"
              },
              "&:hover .anchor": {
                display: "inline-block",
                padding: "0 8px",
                color: "text.secondary",
                "&:hover": {
                  color: "text.primary"
                },
                "& svg": {
                  width: "0.7em",
                  height: "0.7em",
                  fill: "currentColor"
                }
              }
            },
            "& blockquote": {
              bgcolor: (theme) => theme.palette.mode === "light" ? "grey.300" : "grey.800",
              borderLeft: 8,
              borderColor: (theme) => theme.palette.mode === "light" ? "grey.800" : "grey.900",
              pr: 3,
              pl: 2,
              ml: 4,
              py: 1,
              marginInline: 2
            },
            "& ol, & li": (theme) => ({
              ...(theme.typography[typographySelectionForBody])
            }),
            ".footnotes": (theme) => ({
              ...(theme.typography[typographySelectionForBody])
            })
          }}
          // dangerouslySetInnerHTML={{__html: html}}
        >
          {renderAst(htmlAst)}
        </Box>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
    query MarkdownPage($id: String!) {
        markdownRemark(id: {eq: $id}) {
            id
            html
            htmlAst
            frontmatter {
                date
                title
                slug
            }
        }
    }
`
