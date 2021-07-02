import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Hero } from "../components/hero"

const IndexPage = () => {
  const pageName = "Home"
  return (
    <Layout currentPage={pageName}>
      <Seo title={pageName} />
      <Hero />
    </Layout>
  )
}
export default IndexPage
