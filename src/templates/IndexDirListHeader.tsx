import { getPreviousRoute } from "../../config/util/createArticlePages"
import { Box, Button, Grid, useTheme } from "@mui/material"
import { MyBreadcrumbs } from "./MyBreadcrumbs"
import { MyLink } from "../components/MyLink"
import { ArrowBack } from "@mui/icons-material"
import * as React from "react"
import { animated, config, useSpring } from "react-spring"

export function IndexDirListHeader(props: { dirName: string }) {
  const theme = useTheme()
  // const animation = useSpring({
  //   to: { backgroundColor: theme.palette.action.hover },
  //   from: { backgroundColor: "none" },
  //   loop: { reverse: true },
  //   delay: 200,
  //   config: config.molasses
  // })

  const AnimatedBox = animated(Box)
  const previousRoute = getPreviousRoute(props.dirName)
  return (
    <Grid sx={{ mb: 1 }} spacing={2} container>
      <Grid item sx={{ flexGrow: 1 }}>
        <AnimatedBox
          // style={animation}
          sx={{
            borderColor: "primary.main",
            borderWidth: 4,
            borderRadius: 3,
            borderStyle: "solid",
            display: "block",
            px: 1.5
          }}>
          <MyBreadcrumbs dirName={props.dirName} />
        </AnimatedBox>

      </Grid>
      {previousRoute !== "" &&
        <Grid item>
          <MyLink to={previousRoute} underline={"none"}>
            <Button
              size={"small"}
              sx={{ color: "primary.main" }}
              startIcon={<ArrowBack />}
            >
              Back
            </Button>
          </MyLink>
        </Grid>}
    </Grid>
  )
}
