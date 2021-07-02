import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  const pageName = "404: Not found"
  return (
    <Layout currentPage={pageName}>
      <Seo title={pageName} pageDescription="Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
