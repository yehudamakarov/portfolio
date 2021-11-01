import * as React from "react"
import { Layout } from "../components/layout/Layout"
import { PageProps } from "gatsby"
import { ComingSoon } from "../components/ComingSoon"

export default (props: PageProps) => (
  <Layout pageProps={props}>
    <ComingSoon />
  </Layout>
)
