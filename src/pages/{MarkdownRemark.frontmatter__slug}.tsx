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
        <Box sx={{ my: 3, p: 2 }} dangerouslySetInnerHTML={{ __html: html }} />
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
