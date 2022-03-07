import { getPreviousRoute } from "../../config/util/createArticlePages"
import { Box, Button, Grid } from "@mui/material"
import { MyBreadcrumbs } from "./MyBreadcrumbs"
import { MyLink } from "../components/MyLink"
import { ArrowBack } from "@mui/icons-material"
import * as React from "react"

export function IndexDirListHeader(props: { dirName: string }) {
  const previousRoute = getPreviousRoute(props.dirName)
  return (
    <Grid sx={{ mb: 0.5 }} spacing={2} container>
      <Grid item sx={{ flexGrow: 1 }}>
        <Box sx={{
          borderRadius: 3,
          borderWidth: 3,
          borderStyle: "solid",
          borderColor: "divider",
          display: "block",
          px: 1.5
        }}>
          <MyBreadcrumbs dirName={props.dirName} />
        </Box>
      </Grid>
      {previousRoute !== "" &&
        <Grid item>
          <MyLink to={previousRoute} underline={"none"}>
            <Button
              size={"small"}
              sx={{ color: "text.primary" }}
              startIcon={<ArrowBack />}
            >
              Back
            </Button>
          </MyLink>
        </Grid>}
    </Grid>
  )
}
