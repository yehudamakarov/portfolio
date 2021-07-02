import * as React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog: React.FC<PageProps> = () => {
  const pageName = "Blog"
  return (
    <Layout currentPage={pageName}>
      <Seo title={pageName} />
    </Layout>
  )
}

export default Blog
