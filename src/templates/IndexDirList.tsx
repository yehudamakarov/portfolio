// todo give full path and current level
import * as React from "react"
import { Fragment, useEffect, useRef, useState } from "react"
import { WindowLocation } from "@reach/router"
import { FoldersImmediatelyUnderQuery } from "../../gatsby-graphql"
import { animated, config, useTrail } from "react-spring"
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
  const trail = useTrail(1 + props.subFolders.length, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.stiff,
    delay: 200
  })

  const ref = useRef(null)

  useEffect(() => {
    setWidth(ref.current.offsetWidth)
  })

  return (
    <>
      {trail.map((value, index) => (
        index !== 0 ? (
          <Fragment key={index}>
            <Box sx={{ pl: 5 }}>
              <animated.div style={value}>
                <IndexDirListEl arrowId={"listEl" + String(index)} dirName={props.subFolders[index - 1].path} />
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
                />
              </animated.div>
            </Box>
          </Fragment>
        ) : (
          <animated.div ref={ref} id={"listHeader"} key={index} style={value}>
            <IndexDirListHeader dirName={props.location.pathname} />
          </animated.div>
        )))
      }
    </>
  )
}
