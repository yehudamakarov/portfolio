import * as React from "react"
import { Box, Container, Theme, useMediaQuery } from "@mui/material"
import rehypeReact from "rehype-react"
import { customMarkdownComponents, moreMarkdownStyling } from "../utils/markdownPageTemplateUtils"
import { Layout } from "./layout/Layout"
import { PageProps } from "gatsby"
import { MarkdownPageQuery } from "../../gatsby-graphql"

export default (props: { pageProps: PageProps<MarkdownPageQuery> }) => {
  const adjustLinkLogoForSmallerScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"))
  const { htmlAst } = props.pageProps.data.markdownRemark

  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: customMarkdownComponents
  }).Compiler

  return (
    <Layout pageProps={props.pageProps}>
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
