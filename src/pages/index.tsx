import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Hero } from "../components/hero"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero/>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
