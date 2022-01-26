import * as React from "react"
import { MyHeader } from "./nav/MyHeader"
import { MyFooter } from "./nav/MyFooter"
import { graphql, PageProps, useStaticQuery } from "gatsby"
import { SiteInfoQuery } from "../../../gatsby-graphql"
import { SeoHelmetConcern } from "../seo/SeoHelmetConcern"
import { getCurrentPageFromLocationCapitalized } from "../../utils/getCurrentPageFromLocationCapitalized"

interface LayoutProps {
  pageProps: PageProps
  pageDescription?: string
}

export const PageNameContext = React.createContext<string>("")

export const Layout: React.FC<LayoutProps> = (props) => {
  const siteInfoQuery = useStaticQuery<SiteInfoQuery>(
    graphql`
        query SiteInfo {
            site {
                siteMetadata {
                    author
                    description
                    title
                    shortTitle
                }
            }
        }
    `
  )

  const pageName = getCurrentPageFromLocationCapitalized(props.pageProps.location)
  const { pageDescription } = props

  return (
    <PageNameContext.Provider value={pageName}>
      <SeoHelmetConcern
        pageDescription={pageDescription ? pageDescription : siteInfoQuery.site.siteMetadata.description}
        pageName={pageName}
        defaultTitle={siteInfoQuery.site.siteMetadata.title}
        author={siteInfoQuery.site.siteMetadata.author}
      />
      <MyHeader />
      <main>
        {props.children}
      </main>
      <MyFooter />
    </PageNameContext.Provider>
  )
}
