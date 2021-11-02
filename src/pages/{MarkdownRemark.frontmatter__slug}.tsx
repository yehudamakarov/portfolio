import * as React from "react"
import { graphql, PageProps } from "gatsby"
import { Layout } from "../components/layout/Layout"
import { MarkdownPageQuery } from "../../gatsby-graphql"
import { Box, Container, Typography } from "@mui/material"
import rehypeReact from "rehype-react"
import Link from "../components/Link"


export default function Template(props: PageProps<MarkdownPageQuery>) {
  const { frontmatter, htmlAst, html } = props.data.markdownRemark

  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      a: (p) => {
        console.log(p)
        return <Link to={p.href}>{p.title}</Link>
      }
      // h3: (p) => {
      //   console.log(p)
      //   return <Typography variant={"h3"}>{p.}</Typography>
      // }
    },
  }).Compiler

  const ast = renderAst(htmlAst)

  return (
    <Layout pageProps={props}>
      <Container maxWidth={"md"}>
        <Box
          sx={{
            my: 3,
            p: 2,
            "& h1, & h2, & h3, & h4": {
              "& .anchor": {
                // To prevent the link to get the focus.
                display: "none"
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
            }
          }}
          // dangerouslySetInnerHTML={{__html: html}}
        >
          {ast}
        </Box>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
    query MarkdownPage($id: String!) {
        markdownRemark(id: {eq: $id}) {
            id
            htmlAst
            html
            frontmatter {
                date
                title
                slug
            }
        }
    }
`
