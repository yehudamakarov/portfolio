/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Helmet, HelmetProps } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { Unnamed_1_Query } from "../types/generated"

interface SeoProps {
  pageDescription?: string
  lang?: "en"
  meta?: HelmetProps["meta"]
  title: HelmetProps["title"]
}

const Seo: React.FC<SeoProps> = ({
  pageDescription,
  lang,
  meta = [],
  title,
}) => {
  const siteInfoQuery = useStaticQuery<Unnamed_1_Query>(
    graphql`
      {
        site(siteMetadata: { author: {}, description: {}, title: {} }) {
          siteMetadata {
            author
            description
            title
          }
        }
      }
    `
  )

  const metaDescription =
    pageDescription || siteInfoQuery.site.siteMetadata.description
  const defaultTitle = siteInfoQuery.site.siteMetadata?.pushToRight
  const titleTemplate = defaultTitle ? `%s | ${defaultTitle}` : null
  const mergedMeta = meta.concat([
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: siteInfoQuery.site.siteMetadata?.author || ``,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ])
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={titleTemplate}
      meta={mergedMeta}
    />
  )
}

export default Seo
