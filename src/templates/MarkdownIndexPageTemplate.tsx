import * as React from "react"
import { graphql, PageProps } from "gatsby"
import MarkdownIndexPage from "./MarkdownIndexPage"
import { FoldersImmediatelyUnderQuery } from "../../gatsby-graphql"


export type MarkdownIndexContext = {
  regexForWhichFolders: string,
  regexForOnlyIndexPages: string,
  regexForWhichContentPages: string,
  regexForOnlyContentPages: string,
}


export default function MarkdownIndexPageTemplate(props: PageProps<FoldersImmediatelyUnderQuery, MarkdownIndexContext>) {
  return <MarkdownIndexPage pageProps={props} />
}

export const pageQuery = graphql`
    query FoldersImmediatelyUnder($regexForWhichFolders: String!, $regexForOnlyIndexPages: String!, $regexForWhichContentPages: String!, $regexForOnlyContentPages: String! ) {
        indexes: allSitePage(filter: {path: {regex: $regexForWhichFolders}, component: {regex: $regexForOnlyIndexPages}}) {
            nodes {
                path
                id
            }
        }
        contentPages: allSitePage(filter: {path: {regex: $regexForWhichContentPages}, component: {regex: $regexForOnlyContentPages}}) {
            nodes {
                path
                id
                pageContext
            }
        }
    }
`
