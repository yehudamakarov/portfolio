import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import { ComingSoon } from "../components/comingSoon"

const Projects = () => {
  const pageName = "Projects"
  return (
    <Layout currentPage={pageName}>
      <Seo title={pageName} />
      <ComingSoon />
    </Layout>
  )
}

export default Projects
