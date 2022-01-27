import * as React from "react"
import { Layout } from "../components/layout/Layout"
import { PageProps } from "gatsby"
import { Container } from "@mui/material"


export default (props: PageProps) => {
  return (
    <Layout pageProps={props}>
      <Container sx={{ py: 3, textAlign: "center" }}>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </Layout>
  )
}
