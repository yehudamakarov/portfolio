import * as React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import ProTip from "../components/ProTip"
import Link from "../components/Link"
import Copyright from "../components/Copyright"
import { Layout } from "../components/layout/Layout"
import { PageProps } from "gatsby"

export default (props: PageProps) => (
  <Layout pageProps={props}>
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gatsby v5 example
        </Typography>
        <Link to="/about">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  </Layout>
)
