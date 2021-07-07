import * as React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import { Hero } from "../components/hero"
import { PinnedRepositories } from "../components/pinnedRepositories"

const IndexPage = () => {
  const pageName = "Home"
  return (
    <Layout currentPage={pageName}>
      <Seo title={pageName} />
      <Hero />
      <PinnedRepositories />
    </Layout>
  )
}
export default IndexPage
