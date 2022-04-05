// todo give full path and current level
import * as React from "react"
import { useState } from "react"
import { WindowLocation } from "@reach/router"
import { FoldersImmediatelyUnderQuery } from "../../gatsby-graphql"
import { IndexDirListEl } from "./IndexDirListEl"
import { IndexDirListHeader } from "./IndexDirListHeader"
import Xarrow from "react-xarrows"
import { Box, useTheme } from "@mui/material"
import useMeasure from "react-use-measure"

export function IndexDirList(props: {
  location: WindowLocation<WindowLocation["state"]>,
  subFolders: FoldersImmediatelyUnderQuery["indexes"]["nodes"]
}) {
  const theme = useTheme()
  const [ref, bounds] = useMeasure({ debounce: 200 })

  return (
    <>
      <Box ref={ref} id={"listHeader"}>
        <IndexDirListHeader dirName={props.location.pathname} />
      </Box>
      {props.subFolders.map((value, index) => (
        <Box key={index} sx={{ pl: 5 }}>
          <IndexDirListEl arrowId={"listEl" + String(index)} dirName={props.subFolders[index].path} />
          <Xarrow
            start={"listHeader"}
            end={"listEl" + String(index)}
            lineColor={theme.palette.primary.main}
            strokeWidth={2}
            showHead={false}
            startAnchor={{
              position: "bottom",
              offset: { x: -((bounds.width / 2) - parseInt(theme.spacing(2).slice(0, 2))) }
            }}
            endAnchor={"left"}
            curveness={1}
          />
        </Box>
      ))}
    </>
  )
}
