import * as React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import ProTip from "../components/ProTip"
import Link from "../components/Link"
import Copyright from "../components/Copyright"
import DarkModeButton from "../components/layout/nav/titleBar/buttons/DarkModeButton"
import { Layout } from "../components/layout/Layout"
import { PageProps } from "gatsby"
import { HomeButton } from "../components/layout/nav/titleBar/buttons/HomeButton"

export default (props: PageProps) => (
  <Layout pageProps={props}>
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gatsby v5 example
        </Typography>
        <DarkModeButton />
        <Link to="/">Go to the main page</Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  </Layout>
)
