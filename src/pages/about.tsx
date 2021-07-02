import * as React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Seo title={"About"} />

    </Layout>
  )
}

export default About