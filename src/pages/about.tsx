import * as React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import { ComingSoon } from "../components/comingSoon"

const About: React.FC<PageProps> = () => {
  const pageName = "About"
  return (
    <Layout currentPage={pageName}>
      <Seo title={pageName} />
      <ComingSoon />
    </Layout>
  )
}

export default About
