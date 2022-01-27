import * as React from "react"
import { Box, Button, Container, Typography } from "@mui/material"
import { ArrowBack } from "@mui/icons-material"

interface ComingSoonProps {
}

export const BackButton = () => (
  <Button startIcon={<ArrowBack />} size={"small"} sx={{ color: "text.primary" }}>
    Back
  </Button>
)

export const ComingSoon: React.FC<ComingSoonProps> = () => {
  return (
    <Container sx={{ py: 3, textAlign: "center" }}>
      <Box sx={{ my: 18 }}>
        <Typography variant={"subtitle1"}>
          Coming soon...
        </Typography>
      </Box>
    </Container>
  )
}
