import * as React from "react"
import { Box, Container, Theme, Typography, useMediaQuery } from "@mui/material"
import { customMarkdownComponents, moreMarkdownStyling } from "../utils/markdownPageTemplateUtils"
import { Layout, PageNameContext } from "../components/layout/Layout"
import { PageProps } from "gatsby"
import { MarkdownPageQuery } from "../../gatsby-graphql"
import rehypeReact from "rehype-react"


export default (props: { pageProps: PageProps<MarkdownPageQuery>; editInGithubLink: string }) => {
  const adjustLinkLogoForSmallerScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"))
  const { htmlAst } = props.pageProps.data.markdownRemark

  // const rehypeReact = import("rehype-react")

  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: customMarkdownComponents
  }).Compiler

  return (
    <Layout editInGithubLink={props.editInGithubLink} pageProps={props.pageProps}>
      <Container maxWidth={"md"} sx={{ p: 2 }}>
        <PageNameContext.Consumer>
          {(pageName => (
            <Typography variant={"h1"}>
              {pageName}
            </Typography>
          ))}
        </PageNameContext.Consumer>
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
