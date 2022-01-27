import * as React from "react"
import { PageProps } from "gatsby"
import { Layout } from "../components/layout/Layout"
import { ComingSoon } from "../components/ComingSoon"

export default function Articles(props: PageProps) {
  return (
    <Layout pageProps={props}>
      <ComingSoon />
    </Layout>
  )
}
