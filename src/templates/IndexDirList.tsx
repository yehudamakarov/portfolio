// todo give full path and current level
import * as React from "react"
import { useEffect, useRef, useState } from "react"
import { WindowLocation } from "@reach/router"
import { FoldersImmediatelyUnderQuery } from "../../gatsby-graphql"
import { IndexDirListEl } from "./IndexDirListEl"
import { IndexDirListHeader } from "./IndexDirListHeader"
import Xarrow from "react-xarrows"
import { Box, useTheme } from "@mui/material"

export function IndexDirList(props: {
  location: WindowLocation<WindowLocation["state"]>,
  subFolders: FoldersImmediatelyUnderQuery["indexes"]["nodes"]
}) {
  const theme = useTheme()
  const [width, setWidth] = useState(800)

  const ref = useRef(null)

  useEffect(() => {
    setWidth(ref.current.offsetWidth)
  })

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
              offset: { x: -((width / 2) - parseInt(theme.spacing(2).slice(0, 2))) }
            }}
            endAnchor={"left"}
            curveness={1}
          />
        </Box>
      ))}
    </>
  )
}
