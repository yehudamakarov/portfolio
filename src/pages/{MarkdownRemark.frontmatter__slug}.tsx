import * as React from "react"
import { graphql, PageProps } from "gatsby"
import { Layout } from "../components/layout/Layout"
import { MarkdownPageQuery } from "../../gatsby-graphql"
import { Box, Container } from "@mui/material"


export default function Template(props: PageProps<MarkdownPageQuery>) {
  const { frontmatter, html } = props.data.markdownRemark

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
                color: 'text.secondary',
                "&:hover": {
                  color: 'text.primary'
                },
                "& svg": {
                  width: "0.7em",
                  height: "0.7em",
                  fill: "currentColor"
                }
              }
            }
          }}
          dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
    query MarkdownPage($id: String!) {
        markdownRemark(id: {eq: $id}) {
            id
            html
            frontmatter {
                date
                title
                slug
            }
        }
    }
`
