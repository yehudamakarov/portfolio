import * as React from "react"
import { Box, Container, Fab, Grid, Typography, Link as MuiLink } from "@mui/material"
import { Link } from "./Link"
import { ArrowBack } from "@mui/icons-material"

interface ComingSoonProps {
}

export const ComingSoon: React.FC<ComingSoonProps> = () => {
  return (
    <Container sx={{ py: 3, textAlign: "center" }}>
      <Box sx={{ my: 18 }}>
        <Typography variant={"subtitle1"}>
          Coming soon...
        </Typography>
      </Box>
      <Grid container sx={{ display: "flex" }}>
        <Grid item sx={{ flexGrow: 1 }} />
        <Grid item>
          <Link to={"/"} underline={"none"}>
            <Fab size={"small"} color={"primary"} variant={"extended"}>
              <ArrowBack sx={{ mr: 1 }} />
              Back
            </Fab>
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}
