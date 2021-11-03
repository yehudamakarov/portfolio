import * as React from "react"
import { Layout } from "../components/layout/Layout"
import { PageProps } from "gatsby"
import { Hero } from "../components/hero/Hero"
import { PinnedRepositories } from "../components/pinned-repositories/PinnedRepositories"

export default (props: PageProps) => (
  <Layout pageProps={props}>
    <Hero/>
    <PinnedRepositories />
  </Layout>
)
