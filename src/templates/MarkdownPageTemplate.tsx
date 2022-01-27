import * as React from "react"
import { graphql, PageProps } from "gatsby"
import MarkdownPage from "../components/MarkdownPage"
import { MarkdownPageQuery } from "../../gatsby-graphql"


type MarkdownPageContext = { id: string; editInGithubLink: string }
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
                slug
            }
        }
    }
`

