import * as React from "react"
import { MyHeader } from "./nav/MyHeader"
import { MyFooter } from "./nav/MyFooter"
import { graphql, PageProps, useStaticQuery } from "gatsby"
import { SiteInfoQuery } from "../../../gatsby-graphql"
import { SeoHelmetConcern } from "../seo/SeoHelmetConcern"

interface LayoutProps {
  pageProps: PageProps
}

interface SiteInfoContextType {
  layoutProps?: LayoutProps
  siteInfoQuery?: SiteInfoQuery
}

export const SiteInfoContext = React.createContext<SiteInfoContextType>({})

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

  return (
    <SiteInfoContext.Provider value={{ siteInfoQuery, layoutProps: props }}>
      <SeoHelmetConcern siteInfoQuery={siteInfoQuery}/>
      <MyHeader />
      <main>
        {props.children}
      </main>
      <MyFooter />
    </SiteInfoContext.Provider>
  )
}
