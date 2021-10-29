import * as React from "react"
import { Layout } from "../components/layout/Layout"
import { PageProps } from "gatsby"


export const NotFoundPage: React.FC<PageProps> = (props) => {
  return (
    <Layout pageProps={props}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}
