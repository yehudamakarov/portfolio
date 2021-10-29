import * as React from "react"
import { Layout } from "../components/layout/Layout"
import { PageProps } from "gatsby"
import { Hero } from "../components/hero/Hero"

export default (props: PageProps) => (
  <Layout pageProps={props}>
    <Hero/>
  </Layout>
)
