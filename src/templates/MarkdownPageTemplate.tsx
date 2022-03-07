import * as React from "react"
import { graphql, PageProps } from "gatsby"
import MarkdownPage from "./MarkdownPage"
import { MarkdownPageQuery } from "../../gatsby-graphql"
import { MarkdownPageContext } from "../../config/util/createArticlePages"


export default (props: PageProps<MarkdownPageQuery, MarkdownPageContext>) => (
  <MarkdownPage editInGithubLink={props.pageContext.editInGithubLink} pageProps={props} />
)

export const pageQuery = graphql`
    query MarkdownPage($id: String!) {
        markdownRemark(id: {eq: $id}) {
            id
            htmlAst
            frontmatter {
                date
                title
            }
            headings {
                id
                depth
                value
            }
        }
    }
`

