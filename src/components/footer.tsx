import * as React from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    footer: {
      textAlign: "center",
      marginTop: theme.spacing(2),
    },
  })
)

export const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      © {new Date().getFullYear()}, living.
    </footer>
  )
}
