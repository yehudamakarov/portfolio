import * as React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About: React.FC<PageProps> = () => {
  const pageName = "About"
  return (
    <Layout currentPage={pageName}>
      <Seo title={pageName} />
    </Layout>
  )
}

export default About
