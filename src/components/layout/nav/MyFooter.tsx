import * as React from "react"
import Copyright from "../../Copyright"
import { Paper } from "@mui/material"

export const MyFooter = () => {
  return (
    <Paper elevation={6} sx={{ py: 4 }}>
      <Copyright />
    </Paper>
  )
}
