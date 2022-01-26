import * as React from "react"
import { graphql, PageProps } from "gatsby"
import MarkdownPage from "../components/MarkdownPage"
import { MarkdownPageQuery } from "../../gatsby-graphql"


export default (props: PageProps<MarkdownPageQuery>) => <MarkdownPage pageProps={props} />

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

