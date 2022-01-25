import * as React from "react"
import { Box, Container, Fab, Grid, Typography} from "@mui/material"
import { MyLink } from "./MyLink"
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
          <MyLink to={"/"} underline={"none"}>
            <Fab color={"primary"} variant={"extended"}>
              <ArrowBack sx={{ mr: 1 }} />
              Back
            </Fab>
          </MyLink>
        </Grid>
      </Grid>
    </Container>
  )
}
