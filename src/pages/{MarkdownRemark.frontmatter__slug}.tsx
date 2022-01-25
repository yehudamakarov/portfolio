import * as React from "react"
import { graphql, PageProps } from "gatsby"
import { Layout } from "../components/layout/Layout"
import { MarkdownPageQuery } from "../../gatsby-graphql"
import { Box, Container, Theme, useMediaQuery } from "@mui/material"
import rehypeReact from "rehype-react"
import { customMarkdownComponents, moreMarkdownStyling } from "../utils/markdownPageTemplateUtils"

export default (props: PageProps<MarkdownPageQuery>) => {
  const adjustLinkLogoForSmallerScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"))
  const { htmlAst } = props.data.markdownRemark

  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: customMarkdownComponents
  }).Compiler

  return (
    <Layout pageProps={props}>
      <Container maxWidth={"md"}>
        <Box
          // styling here is to override anchor links for headers
          // other styles should be added to custom elements config in rehype
          sx={moreMarkdownStyling(adjustLinkLogoForSmallerScreen)}
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
