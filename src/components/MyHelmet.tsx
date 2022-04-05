import * as React from "react"
import { Helmet, HelmetProps } from "react-helmet"

interface SeoProps {
  pageDescription?: string
  defaultTitle?: string
  lang?: "en"
  meta?: HelmetProps["meta"]
  pageName: string,
  author?: string
}

export const MyHelmet: React.FC<SeoProps> = ({
                                               pageDescription,
                                               defaultTitle,
                                               lang = "",
                                               meta = [],
                                               pageName,
                                               author = ""
                                             }) => {
  const titleTemplate = defaultTitle && pageName ? `%s | ${pageName}` : null
  const mergedMeta = meta.concat([
    {
      name: `description`,
      content: pageDescription
    },
    {
      property: `og:title`,
      content: defaultTitle
    },
    {
      property: `og:description`,
      content: pageDescription
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
      content: author
    },
    {
      name: `twitter:title`,
      content: defaultTitle
    },
    {
      name: `twitter:description`,
      content: pageDescription
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
    >
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet"/>
    </Helmet>
  )
}
