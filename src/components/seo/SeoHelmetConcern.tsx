import * as React from "react"
import { Helmet, HelmetProps } from "react-helmet"
import { SiteInfoQuery } from "../../../gatsby-graphql"

interface SeoProps {
  pageDescription?: string
  lang?: "en"
  meta?: HelmetProps["meta"]
  siteInfoQuery: SiteInfoQuery
  pageName: string
}

export const SeoHelmetConcern: React.FC<SeoProps> = ({
                                                       pageDescription,
                                                       lang,
                                                       meta = [],
                                                       siteInfoQuery = {},
                                                       pageName
                                                     }) => {
  const metaDescription =
    pageDescription || siteInfoQuery.site.siteMetadata.description
  const defaultTitle = siteInfoQuery.site.siteMetadata?.title
  const titleTemplate = defaultTitle && pageName ? `%s | ${pageName}` : null
  const mergedMeta = meta.concat([
    {
      name: `description`,
      content: metaDescription
    },
    {
      property: `og:title`,
      content: defaultTitle
    },
    {
      property: `og:description`,
      content: metaDescription
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      name: `twitter:card`,
      content: `summary`
    },
    {
      name: `twitter:creator`,
      content: siteInfoQuery.site.siteMetadata?.author || ``
    },
    {
      name: `twitter:title`,
      content: defaultTitle
    },
    {
      name: `twitter:description`,
      content: metaDescription
    }
  ])

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={defaultTitle}
      titleTemplate={titleTemplate}
      meta={mergedMeta}
    />
  )
}
