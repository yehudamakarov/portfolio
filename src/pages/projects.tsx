import * as  React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Projects = () => {
  const pageName = "Projects"
  return (
    <Layout currentPage={pageName}>
      <Seo title={pageName} />
    </Layout>
  )
}

export default Projects