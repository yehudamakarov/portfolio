import * as React from "react"
import { Container, Typography } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(3),
      textAlign: "center",
    },
  })
)

export const ComingSoon = () => {
  const classes = useStyles()
  return (
    <section className={classes.root}>
      <Container>
        <Typography variant={"overline"}>More coming soon...</Typography>
      </Container>
    </section>
  )
}
