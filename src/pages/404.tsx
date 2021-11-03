import * as React from "react"
import { Layout } from "../components/layout/Layout"
import { PageProps } from "gatsby"


export default (props: PageProps) => {
  return (
    <Layout pageProps={props}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}
